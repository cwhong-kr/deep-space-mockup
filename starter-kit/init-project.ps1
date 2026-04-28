[CmdletBinding()]
param(
  [Parameter(Mandatory = $true)]
  [string]$ProjectName,

  [string]$DestinationRoot = (Get-Location).Path
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

function ConvertTo-Slug {
  param([string]$Value)

  $slug = $Value.ToLowerInvariant()
  $slug = $slug -replace "[^a-z0-9]+", "-"
  $slug = $slug.Trim("-")

  if ([string]::IsNullOrWhiteSpace($slug)) {
    throw "ProjectName must include at least one English letter or number."
  }

  return $slug
}

function Replace-TextInFile {
  param(
    [string]$Path,
    [hashtable]$Replacements
  )

  $content = Get-Content -LiteralPath $Path -Raw -Encoding utf8
  foreach ($key in $Replacements.Keys) {
    $content = $content.Replace($key, $Replacements[$key])
  }
  Set-Content -LiteralPath $Path -Value $content -Encoding utf8
}

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$templateDir = Join-Path $scriptDir "new-project-template"

if (-not (Test-Path -LiteralPath $templateDir -PathType Container)) {
  throw "Template directory not found: $templateDir"
}

$destinationRootResolved = (Resolve-Path -LiteralPath $DestinationRoot).Path
$slug = ConvertTo-Slug -Value $ProjectName
$targetDir = Join-Path $destinationRootResolved $slug

if (Test-Path -LiteralPath $targetDir) {
  throw "Target directory already exists: $targetDir"
}

Copy-Item -LiteralPath $templateDir -Destination $targetDir -Recurse

$brandName = ($ProjectName -replace "\s+", " ").Trim().ToUpperInvariant()
$today = Get-Date -Format "yyyy-MM-dd"

$replaceTargets = Get-ChildItem -LiteralPath $targetDir -Recurse -File | Where-Object {
  $_.Extension -in @(".md", ".json", ".html", ".css", ".js", ".txt")
}

$replacements = @{
  "New Project" = $ProjectName
  "BRAND" = $brandName
  "2026-04-24" = $today
}

foreach ($file in $replaceTargets) {
  Replace-TextInFile -Path $file.FullName -Replacements $replacements
}

$configExamplePath = Join-Path $targetDir "project.config.example.json"
if (Test-Path -LiteralPath $configExamplePath) {
  $config = Get-Content -LiteralPath $configExamplePath -Raw -Encoding utf8 | ConvertFrom-Json
  $config.projectName = $ProjectName
  $config.brandName = $brandName
  $config.startDate = $today
  $configPath = Join-Path $targetDir "project.config.json"
  $config | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath $configPath -Encoding utf8
}

Write-Host "Created project template at: $targetDir"
Write-Host "Next step: open $targetDir and start from docs/00_프로젝트정의.md"
