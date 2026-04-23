const GROUP_LABELS = {
  A: "인증 · 온보딩",
  B: "홈 · 대시보드",
  C: "지점 검색",
  D: "예약",
  E: "길 안내",
  F: "체크인 · 이용",
  G: "퇴실 · 정산",
  H: "마이페이지",
  M: "모달 · 시트"
};

const GROUP_ORDER = ["A", "B", "C", "D", "E", "F", "G", "H", "M"];

const SCREENS = {
  "a-01": {
    code: "A-01",
    group: "A",
    title: "스플래시",
    template: "tpl-a-01",
    purpose: "브랜드 인지와 자동 로그인 전이",
    description: "DEEP SPACE 브랜드 톤을 가장 먼저 보여주는 진입 화면입니다.",
    components: ["로고 애니메이션", "우주 배경", "브랜드 태그라인", "로딩 인디케이터"],
    next: ["a-02"]
  },
  "a-02": {
    code: "A-02",
    group: "A",
    title: "로그인",
    template: "tpl-a-02",
    purpose: "소셜 로그인 진입",
    description: "카카오, Apple, Google로 3초 안에 진입하는 첫 관문입니다.",
    components: ["브랜드 헤더", "소셜 로그인 버튼", "이메일/휴대폰 링크", "정책 동의 안내"],
    next: ["a-03", "b-01"]
  },
  "a-03": {
    code: "A-03",
    group: "A",
    title: "회원가입 · 본인인증",
    template: "tpl-a-03",
    purpose: "본인 확인과 필수 약관 동의",
    description: "실사용자 인증과 예약 보호를 위한 최소한의 가입 단계입니다.",
    components: ["진행 인디케이터", "휴대폰 인증", "인증 타이머", "약관 동의 리스트"],
    next: ["a-04"]
  },
  "a-04": {
    code: "A-04",
    group: "A",
    title: "회원가입 · 차량 등록",
    template: "tpl-a-04",
    purpose: "차량 등록과 배터리 모델링",
    description: "충전 예측과 LPR 체크인을 위해 차량 정보를 수집합니다.",
    components: ["차량번호 입력", "차종/연식 선택", "배터리 용량 카드"],
    next: ["a-05"]
  },
  "a-05": {
    code: "A-05",
    group: "A",
    title: "가입 완료",
    template: "tpl-a-05",
    purpose: "가입 완료와 권한 설정",
    description: "푸시와 위치 권한을 켜서 실제 방문 경험을 매끄럽게 만듭니다.",
    components: ["환영 메시지", "권한 카드", "시작하기 CTA"],
    next: ["b-01"]
  },
  "b-01": {
    code: "B-01",
    group: "B",
    title: "홈",
    template: "tpl-b-01",
    purpose: "현재 상태 요약과 빠른 진입",
    description: "차량 상태, 근처 지점, 퀵 액션을 한 화면에 모은 메인 허브입니다.",
    components: ["차량 상태 카드", "퀵 액션", "근처 지점 추천", "공지 배너", "탭바"],
    next: ["b-02", "c-01", "f-03"]
  },
  "b-02": {
    code: "B-02",
    group: "B",
    title: "알림함",
    template: "tpl-b-02",
    purpose: "예약/충전/정산 알림 확인",
    description: "방금 필요한 정보만 빠르게 처리하도록 설계한 인박스입니다.",
    components: ["알림 리스트", "읽지 않음 표시", "딥링크 연결"],
    next: ["d-04", "f-03", "g-02"]
  },
  "c-01": {
    code: "C-01",
    group: "C",
    title: "지점 검색 · 지도",
    template: "tpl-c-01",
    purpose: "현위치 기반 지점 탐색",
    description: "지도와 리스트를 동시에 활용해 가까운 DS 지점을 찾는 화면입니다.",
    components: ["검색바", "지도 핀", "하단 시트 리스트", "정렬 토글", "현위치 FAB"],
    next: ["c-02", "c-03"]
  },
  "c-02": {
    code: "C-02",
    group: "C",
    title: "지점 상세",
    template: "tpl-c-02",
    purpose: "선택 지점의 상세 확인",
    description: "공간, 충전기, 편의시설, 주차 동선을 실제 방문 직전 수준으로 안내합니다.",
    components: ["히어로 이미지", "실시간 현황 타일", "편의시설", "주차 약도", "고정 CTA"],
    next: ["d-01", "e-01", "m-01"]
  },
  "c-03": {
    code: "C-03",
    group: "C",
    title: "지점 검색 · 텍스트",
    template: "tpl-c-03",
    purpose: "키워드 기반 지점 탐색",
    description: "최근 검색과 검색 결과를 한 번에 보여주는 텍스트 검색 화면입니다.",
    components: ["검색 필드", "최근 검색", "검색 결과 리스트"],
    next: ["c-02"]
  },
  "d-01": {
    code: "D-01",
    group: "D",
    title: "예약 · 날짜/시간 선택",
    template: "tpl-d-01",
    purpose: "이용 날짜와 시간 선택",
    description: "캘린더와 시간 칩으로 30분 단위 예약을 구성하는 첫 단계입니다.",
    components: ["캘린더", "시간 선택", "잔여 현황 카드"],
    next: ["d-02"]
  },
  "d-02": {
    code: "D-02",
    group: "D",
    title: "예약 · 공간/충전기 선택",
    template: "tpl-d-02",
    purpose: "좌석, 회의실, 충전기 구성",
    description: "공간 타입과 충전기를 함께 고르는 실제 예약 단계입니다.",
    components: ["좌석 선택", "회의실 옵션", "충전기 선택", "선택 요약"],
    next: ["d-03", "m-01"]
  },
  "d-03": {
    code: "D-03",
    group: "D",
    title: "예약 · 결제",
    template: "tpl-d-03",
    purpose: "예약 확정 및 결제",
    description: "결제 수단과 예상 금액을 확인하고 예약을 확정하는 마지막 단계입니다.",
    components: ["예약 요약", "결제 수단 리스트", "예상 금액", "쿠폰 UI"],
    next: ["d-04"]
  },
  "d-04": {
    code: "D-04",
    group: "D",
    title: "예약 완료",
    template: "tpl-d-04",
    purpose: "예약 확정 안내",
    description: "티켓형 정보와 충전 예측을 함께 보여주는 완료 화면입니다.",
    components: ["체크 애니메이션", "예약 티켓", "충전 예상 바", "취소 정책"],
    next: ["e-01", "b-01"],
    push: {
      title: "예약이 확정되었습니다",
      body: "📅 4/22(수) 11:00–13:00<br>📍 세종로 DS · 라운지 A-7 · 충전기 C-03"
    }
  },
  "d-05": {
    code: "D-05",
    group: "D",
    title: "예약 상세 · 관리",
    template: "tpl-d-05",
    purpose: "기존 예약 조회/취소/체크인 진입",
    description: "길 안내, 체크인, 취소를 한 화면에서 처리하는 예약 관리 화면입니다.",
    components: ["예약 요약", "위치 약도", "취소 정책", "관리 CTA"],
    next: ["e-01", "f-01", "m-03"],
    push: {
      title: "곧 도착하시네요!",
      body: "📍 세종로공영주차장 B4 C423으로 진입하세요<br>🔋 지금 충전을 시작하면 퇴실 시 약 85%"
    }
  },
  "e-01": {
    code: "E-01",
    group: "E",
    title: "길 안내",
    template: "tpl-e-01",
    purpose: "내비 연동과 도착 배터리 예측",
    description: "주차장 입구와 도착 배터리까지 고려한 이동 준비 화면입니다.",
    components: ["경로 프리뷰", "운전 진행 상태", "거리/시간/배터리", "지오펜스 Push 시뮬레이션", "내비 선택 CTA"],
    next: ["d-05", "f-01", "m-04"]
  },
  "f-01": {
    code: "F-01",
    group: "F",
    title: "체크인",
    template: "tpl-f-01",
    purpose: "QR 또는 출입번호 체크인",
    description: "현장 리더기 앞에서 바로 쓸 수 있는 체크인 화면입니다.",
    components: ["QR 탭", "실시간 타이머", "예약 요약"],
    next: ["f-02"]
  },
  "f-02": {
    code: "F-02",
    group: "F",
    title: "체크인 완료",
    template: "tpl-f-02",
    purpose: "입실 확인과 이용 시작 안내",
    description: "좌석, 충전기, Wi-Fi 정보를 바로 노출해 현장 마찰을 줄입니다.",
    components: ["완료 메시지", "이용 정보 카드", "Wi-Fi 카드"],
    next: ["f-03"],
    push: {
      title: "체크인 완료! 충전이 시작되었습니다",
      body: "🛋 라운지 A-7 · ⚡ 충전기 C-03<br>📶 Wi-Fi: DS_SEJONGRO_5G"
    }
  },
  "f-03": {
    code: "F-03",
    group: "F",
    title: "이용 현황",
    template: "tpl-f-03",
    purpose: "실시간 충전/이용 상태 확인",
    description: "충전 진행, 좌석 잔여 시간, 빠른 액션을 한 화면에 묶은 운영 메인입니다.",
    components: ["충전 게이지", "좌석 카운트다운", "퀵 액션", "Wi-Fi 정보", "종료 CTA"],
    next: ["f-04", "g-01", "m-05"]
  },
  "f-04": {
    code: "F-04",
    group: "F",
    title: "충전 상세",
    template: "tpl-f-04",
    purpose: "충전 상세 진행 정보",
    description: "현재 배터리, 속도, kWh, 예상 비용을 한 번에 보여줍니다.",
    components: ["대형 원형 게이지", "충전 지표 타일", "충전 그래프", "긴급 중지 버튼"],
    next: ["f-03"]
  },
  "g-01": {
    code: "G-01",
    group: "G",
    title: "이용 종료 확인",
    template: "tpl-g-01",
    purpose: "종료 여부 최종 확인",
    description: "현재 충전 상태와 잔여 시간을 보여주고 종료를 결정하게 합니다.",
    components: ["종료 확인 카피", "현재 상태 요약", "종료/계속 CTA"],
    next: ["g-02", "f-03"]
  },
  "g-02": {
    code: "G-02",
    group: "G",
    title: "정산 완료",
    template: "tpl-g-02",
    purpose: "최종 정산과 이용 요약",
    description: "행성 모티프와 영수증 카드로 브랜드 경험을 마감하는 화면입니다.",
    components: ["정산 히어로", "영수증 카드", "평점 카드", "완료 CTA"],
    next: ["g-03", "b-01"],
    push: {
      title: "이용이 완료되었습니다",
      body: "🔋 85% 충전 완료 · 🕐 42분 절약<br>영수증은 앱에서 확인하세요"
    }
  },
  "g-03": {
    code: "G-03",
    group: "G",
    title: "영수증 상세",
    template: "tpl-g-03",
    purpose: "전자영수증 확인/저장",
    description: "사업자 정보와 승인 정보를 포함한 상세 영수증 화면입니다.",
    components: ["영수증 시트", "항목별 금액", "공유/PDF CTA"],
    next: ["g-02"]
  },
  "h-01": {
    code: "H-01",
    group: "H",
    title: "마이페이지",
    template: "tpl-h-01",
    purpose: "내 차량과 계정 정보 관리",
    description: "이용 통계, 차량 정보, 각종 관리 메뉴를 제공하는 프로필 허브입니다.",
    components: ["프로필", "통계 카드", "차량 정보", "메뉴 리스트", "탭바"],
    next: ["h-02", "h-03"]
  },
  "h-02": {
    code: "H-02",
    group: "H",
    title: "예약 내역",
    template: "tpl-h-02",
    purpose: "예정/완료/취소 예약 조회",
    description: "상태 필터와 예약 카드를 통해 전체 예약 흐름을 추적합니다.",
    components: ["필터 칩", "예약 히스토리 카드"],
    next: ["d-05", "g-02"]
  },
  "h-03": {
    code: "H-03",
    group: "H",
    title: "결제 내역",
    template: "tpl-h-03",
    purpose: "월별 결제 이력 확인",
    description: "이번 달 총액과 건별 결제 내역을 빠르게 보는 화면입니다.",
    components: ["월 합계 카드", "결제 이력 카드"],
    next: ["g-03"]
  },
  "m-01": {
    code: "M-01",
    group: "M",
    title: "좌석 배치도",
    template: "tpl-sheet-seatmap",
    type: "sheet",
    parent: "d-02",
    purpose: "좌석/충전기 배치 확인",
    description: "공간 선택 전에 좌석 위치를 직관적으로 확인하는 시트입니다.",
    components: ["좌석 그리드", "선택 좌석 강조"],
    next: ["d-02"]
  },
  "m-03": {
    code: "M-03",
    group: "M",
    title: "예약 취소 확인",
    template: "tpl-sheet-cancel",
    type: "sheet",
    parent: "d-05",
    purpose: "취소 전 환불 안내",
    description: "환불 예정 금액을 보여주고 취소 결정을 재확인합니다.",
    components: ["환불 금액", "취소/돌아가기 CTA"],
    next: ["d-05"]
  },
  "m-04": {
    code: "M-04",
    group: "M",
    title: "내비 앱 선택",
    template: "tpl-sheet-nav",
    type: "sheet",
    parent: "e-01",
    purpose: "외부 내비 앱 선택",
    description: "설치 여부와 차량 내비 연동까지 함께 보여주는 선택 시트입니다.",
    components: ["앱 리스트", "설치 상태", "차량 내비 옵션"],
    next: ["e-01"]
  },
  "m-05": {
    code: "M-05",
    group: "M",
    title: "시간 연장",
    template: "tpl-sheet-extend",
    type: "sheet",
    parent: "f-03",
    purpose: "이용 시간 연장 선택",
    description: "연장 가능 시간과 가격을 보여주고 즉시 결제하게 합니다.",
    components: ["연장 옵션", "가격", "불가 상태", "확정 CTA"],
    next: ["f-03"]
  },
  "m-07": {
    code: "M-07",
    group: "M",
    title: "공지사항 상세",
    template: "tpl-sheet-notice",
    type: "sheet",
    parent: "h-01",
    purpose: "운영 공지 상세 확인",
    description: "지점 운영 변경 사항을 요약된 본문으로 보여주는 공지 시트입니다.",
    components: ["제목", "날짜", "본문"],
    next: ["h-01"]
  },
  "m-08": {
    code: "M-08",
    group: "M",
    title: "문의하기",
    template: "tpl-sheet-inquiry",
    type: "sheet",
    parent: "h-01",
    purpose: "운영팀 문의 접수",
    description: "문의 유형을 고르고 내용을 남기는 간단한 지원 시트입니다.",
    components: ["문의 유형", "문의 내용", "등록 CTA"],
    next: ["h-01"]
  }
};

const MAIN_FLOW = [
  "a-01",
  "a-02",
  "a-03",
  "a-04",
  "a-05",
  "b-01",
  "c-01",
  "c-02",
  "d-01",
  "d-02",
  "d-03",
  "d-04",
  "e-01",
  "f-01",
  "f-02",
  "f-03",
  "g-01",
  "g-02"
];

const SHEET_ALIASES = {
  seatmap: "m-01",
  cancel: "m-03",
  nav: "m-04",
  extend: "m-05",
  notice: "m-07",
  inquiry: "m-08"
};

function createDefaultBooking() {
  return {
    duration: 180,
    startMinutes: 11 * 60,
    seat: "A-7",
    charger: "C-03",
    meeting: null,
    payment: "카카오페이"
  };
}

function createDefaultRoute() {
  return {
    driving: false,
    progress: 0,
    distanceKm: 3.8,
    etaMin: 14,
    arrivalBattery: 38,
    startBattery: 42,
    geofenceSent: false,
    arrived: false
  };
}

const state = {
  screenId: "a-01",
  sheetId: null,
  zoom: 1,
  railQuery: "",
  seatRemaining: 1 * 3600 + 18 * 60 + 42,
  qrRemaining: 58,
  toast: null,
  booking: createDefaultBooking(),
  route: createDefaultRoute(),
  checkinTab: "qr",
  demo: {
    running: false,
    timers: []
  },
  runtimeMobile: false,
  mobileRuntimeBooted: false,
  mobileDevOpen: false
};

const el = {
  railSearch: document.querySelector("#railSearch"),
  railNav: document.querySelector("#railNav"),
  screenCount: document.querySelector("#screenCount"),
  appScreen: document.querySelector("#appScreen"),
  toastLayer: document.querySelector("#toastLayer"),
  sheetLayer: document.querySelector("#sheetLayer"),
  crumbGroup: document.querySelector("#crumbGroup"),
  crumbScreen: document.querySelector("#crumbScreen"),
  metaId: document.querySelector("#metaId"),
  metaTitle: document.querySelector("#metaTitle"),
  metaDesc: document.querySelector("#metaDesc"),
  metaPurpose: document.querySelector("#metaPurpose"),
  compList: document.querySelector("#compList"),
  flowNexts: document.querySelector("#flowNexts"),
  flowChips: document.querySelector("#flowChips"),
  pushPreview: document.querySelector("#pushPreview"),
  pushTitle: document.querySelector("#pushTitle"),
  pushBody: document.querySelector("#pushBody"),
  device: document.querySelector("#device"),
  zoomVal: document.querySelector(".zoom-val"),
  demoToggle: document.querySelector("#demoToggle"),
  demoToggleLabel: document.querySelector("#demoToggleLabel"),
  mobileDev: document.querySelector("#mobileDev"),
  mobileDevToggle: document.querySelector("#mobileDevToggle"),
  mobileDemoLabel: document.querySelector("#mobileDemoLabel")
};

function shouldUseMobileRuntime() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("desktop") === "1") return false;
  if (params.get("mobile") === "1") return true;

  const standalone = window.matchMedia?.("(display-mode: standalone)")?.matches || window.navigator.standalone === true;
  if (standalone) return true;

  const touchLike = window.matchMedia?.("(pointer: coarse)")?.matches || window.navigator.maxTouchPoints > 0;
  return window.innerWidth <= 900 && touchLike;
}

function syncRuntimeMode() {
  const previousRuntime = state.runtimeMobile;
  const mobileRuntime = shouldUseMobileRuntime();
  const shouldBootMobile = mobileRuntime && !state.mobileRuntimeBooted;
  const modeChanged = previousRuntime !== mobileRuntime;

  state.runtimeMobile = mobileRuntime;
  document.documentElement.classList.toggle("runtime-mobile", mobileRuntime);
  document.body.classList.toggle("runtime-mobile", mobileRuntime);

  if (mobileRuntime) {
    state.zoom = 1;
    syncZoom();
  } else {
    state.mobileDevOpen = false;
  }

  if (shouldBootMobile) {
    state.mobileRuntimeBooted = true;
    state.screenId = "a-01";
    state.sheetId = null;
    state.toast = null;
  }

  syncMobileDevUI();

  if ((modeChanged || shouldBootMobile) && el.appScreen.childElementCount) {
    renderAll();
  }
}

function currentViewId() {
  return state.sheetId || state.screenId;
}

function getScreen(id) {
  return SCREENS[id];
}

function getTemplate(id) {
  return document.querySelector(`#${id}`);
}

function formatMinutes(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

function bookingAvailability(duration) {
  if (duration <= 120) return { lounge: 6, charger: 4, room: 1 };
  if (duration <= 150) return { lounge: 5, charger: 3, room: 1 };
  if (duration <= 180) return { lounge: 4, charger: 3, room: 1 };
  return { lounge: 2, charger: 1, room: 0 };
}

function resetRouteState() {
  state.route = createDefaultRoute();
}

function resetScenarioState() {
  state.sheetId = null;
  state.toast = null;
  state.booking = createDefaultBooking();
  resetRouteState();
  state.checkinTab = "qr";
  state.seatRemaining = 1 * 3600 + 18 * 60 + 42;
  state.qrRemaining = 58;
}

function clearDemoTimers() {
  state.demo.timers.forEach((timer) => window.clearTimeout(timer));
  state.demo.timers = [];
}

function queueDemo(delay, fn) {
  const timer = window.setTimeout(() => {
    if (!state.demo.running) return;
    fn();
  }, delay);
  state.demo.timers.push(timer);
}

function syncDemoButton() {
  if (el.demoToggle && el.demoToggleLabel) {
    el.demoToggle.classList.toggle("is-running", state.demo.running);
    el.demoToggleLabel.textContent = state.demo.running ? "Stop Demo" : "Auto Demo";
  }
  syncMobileDevUI();
}

function syncMobileDevUI() {
  if (!el.mobileDev) return;
  el.mobileDev.classList.toggle("is-open", state.runtimeMobile && state.mobileDevOpen);
  el.mobileDev.classList.toggle("is-running", state.demo.running);
  if (el.mobileDemoLabel) {
    el.mobileDemoLabel.textContent = state.demo.running ? "Stop Demo" : "Auto Demo";
  }
}

function runMobileTool(tool) {
  state.mobileDevOpen = false;

  switch (tool) {
    case "demo":
      toggleDemo();
      break;
    case "splash":
      navigate("a-01");
      break;
    case "home":
      navigate("b-01");
      break;
    case "route":
      navigate("e-01");
      break;
    case "use":
      navigate("f-03");
      break;
    default:
      break;
  }

  syncMobileDevUI();
}

function renderRail() {
  const query = state.railQuery.trim().toLowerCase();

  el.railNav.innerHTML = GROUP_ORDER.map((group) => {
    const items = Object.entries(SCREENS).filter(([, screen]) => {
      if (screen.group !== group) return false;
      if (!query) return true;
      return `${screen.code} ${screen.title} ${GROUP_LABELS[screen.group]}`
        .toLowerCase()
        .includes(query);
    });

    if (!items.length) return "";

    const buttons = items
      .map(
        ([id, screen]) => `
          <button class="nav-item${currentViewId() === id ? " is-active" : ""}" data-to="${id}">
            <span class="code">${screen.code}</span>
            <span class="label">${screen.title}</span>
          </button>
        `
      )
      .join("");

    return `
      <div class="nav-group" data-group="${group}">
        <div class="nav-group-head">
          <span class="gcode">${group}</span>
          <span class="gname">${GROUP_LABELS[group]}</span>
        </div>
        ${buttons}
      </div>
    `;
  }).join("");
}

function renderViewport() {
  const template = getTemplate(getScreen(state.screenId).template);
  if (!template) return;

  el.appScreen.replaceChildren(template.content.cloneNode(true));
  el.toastLayer.innerHTML = "";
  el.sheetLayer.innerHTML = "";
  el.sheetLayer.classList.remove("is-on");

  if (state.sheetId) {
    const sheet = getScreen(state.sheetId);
    const sheetTemplate = getTemplate(sheet.template);
    if (!sheetTemplate) return;

    const backdrop = document.createElement("button");
    backdrop.className = "sheet-backdrop";
    backdrop.type = "button";
    backdrop.setAttribute("aria-label", "닫기");
    backdrop.dataset.sheetClose = "";
    el.sheetLayer.append(backdrop, sheetTemplate.content.cloneNode(true));
    el.sheetLayer.classList.add("is-on");
  }

  syncZoom();
  updateStatusTime();
  updateDynamicCounters();
  syncInteractiveViews();
  renderToast();
}

function renderToast() {
  if (!state.toast) {
    el.toastLayer.classList.remove("is-on");
    el.toastLayer.innerHTML = "";
    return;
  }

  el.toastLayer.classList.add("is-on");
  el.toastLayer.innerHTML = `
    <button class="device-toast" data-toast-open>
      <div class="device-toast__head">
        <div class="device-toast__app">
          <span class="device-toast__orb"></span>
          <span>DEEP SPACE</span>
        </div>
        <span class="device-toast__time">지금</span>
      </div>
      <div class="device-toast__title">${state.toast.title}</div>
      <div class="device-toast__body">${state.toast.body}</div>
    </button>
  `;
}

function syncInteractiveViews() {
  syncBookingStep1();
  syncBookingStep2();
  syncPaymentSelection();
  syncRouteState();
  syncCheckinState();
}

function syncBookingStep1() {
  const durationLabel = document.querySelector("#bookingDurationLabel");
  if (!durationLabel) return;

  const end = state.booking.startMinutes + state.booking.duration;
  const availability = bookingAvailability(state.booking.duration);

  const startEl = document.querySelector("#bookingStart");
  const endEl = document.querySelector("#bookingEnd");
  const loungeEl = document.querySelector("#bookingAvailLounge");
  const chargerEl = document.querySelector("#bookingAvailCharger");
  const roomEl = document.querySelector("#bookingAvailRoom");

  if (startEl) startEl.textContent = formatMinutes(state.booking.startMinutes);
  if (endEl) endEl.textContent = formatMinutes(end);
  durationLabel.textContent = `${Math.floor(state.booking.duration / 60)}시간${state.booking.duration % 60 ? ` ${state.booking.duration % 60}분` : ""}`;
  if (loungeEl) loungeEl.textContent = availability.lounge;
  if (chargerEl) chargerEl.textContent = availability.charger;
  if (roomEl) roomEl.textContent = availability.room;

  document.querySelectorAll("[data-duration]").forEach((node) => {
    node.classList.toggle("tchip-on", Number(node.dataset.duration) === state.booking.duration);
  });
}

function syncBookingStep2() {
  const summary = document.querySelector("#bookingSelectionSummary");
  if (!summary) return;

  document.querySelectorAll("[data-seat-select]").forEach((node) => {
    node.classList.toggle("is-selected", node.dataset.seatSelect === state.booking.seat);
  });

  document.querySelectorAll("[data-meeting-select]").forEach((node) => {
    node.classList.toggle("is-selected", node.dataset.meetingSelect === state.booking.meeting);
  });

  document.querySelectorAll("[data-charger-select]").forEach((node) => {
    node.classList.toggle("is-on", node.dataset.chargerSelect === state.booking.charger);
  });

  const meetingText = state.booking.meeting ? ` · 회의실 ${state.booking.meeting}` : "";
  summary.textContent = `좌석 ${state.booking.seat} · 충전기 ${state.booking.charger}${meetingText}`;
}

function syncPaymentSelection() {
  const methods = document.querySelectorAll("[data-payment-select]");
  if (!methods.length) return;

  methods.forEach((node) => {
    node.classList.toggle("is-selected", node.dataset.paymentSelect === state.booking.payment);
  });
}

function syncCheckinState() {
  const qrPanel = document.querySelector("#checkinQrPanel");
  const pinPanel = document.querySelector("#checkinPinPanel");
  if (!qrPanel || !pinPanel) return;

  document.querySelectorAll("[data-checkin-tab]").forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.checkinTab === state.checkinTab);
  });
  qrPanel.classList.toggle("is-hidden", state.checkinTab !== "qr");
  pinPanel.classList.toggle("is-hidden", state.checkinTab !== "pin");
}

function syncRouteState() {
  const actionBtn = document.querySelector("#routeActionBtn");
  if (!actionBtn) return;

  const distanceEl = document.querySelector("#routeDistance");
  const etaEl = document.querySelector("#routeEta");
  const batteryEl = document.querySelector("#routeBattery");
  const startBatteryEl = document.querySelector("#routeStartBattery");
  const insightEl = document.querySelector("#routeInsight");
  const badgeEl = document.querySelector("#routeBadge");
  const titleEl = document.querySelector("#routeStatusTitle");
  const subEl = document.querySelector("#routeStatusSub");
  const fillEl = document.querySelector("#routeProgressFill");
  const mapEl = document.querySelector("#routeMap");
  const carEl = document.querySelector("#routeCar");
  const carOuterEl = document.querySelector("#routeCarOuter");

  if (carEl && carOuterEl) {
    const t = state.route.progress / 100;
    const x = 40 + 260 * t;
    const y = 180 - 110 * t - Math.sin(t * Math.PI) * 36;
    carEl.setAttribute("cx", x.toFixed(1));
    carEl.setAttribute("cy", y.toFixed(1));
    carOuterEl.setAttribute("cx", x.toFixed(1));
    carOuterEl.setAttribute("cy", y.toFixed(1));
  }

  if (distanceEl) distanceEl.textContent = `${state.route.distanceKm.toFixed(1)} km`;
  if (etaEl) etaEl.textContent = `${Math.max(1, state.route.etaMin)}분`;
  if (batteryEl) batteryEl.textContent = `${state.route.arrivalBattery}%`;
  if (startBatteryEl) startBatteryEl.textContent = `${state.route.startBattery}%`;
  if (insightEl) {
    insightEl.textContent = state.route.arrived
      ? "지오펜스 진입이 감지되었습니다. Push를 눌러 입차 안내와 체크인을 이어가세요."
      : state.route.driving
        ? "반경 500m에 진입하면 위치 기반 Push가 자동 발송됩니다."
        : "지금 출발하면 퇴실 시 약 85%까지 충전됩니다.";
  }
  if (fillEl) fillEl.style.width = `${state.route.progress}%`;
  if (mapEl) mapEl.classList.toggle("is-driving", state.route.driving);

  if (state.route.arrived) {
    if (badgeEl) badgeEl.textContent = "ARRIVED";
    if (titleEl) titleEl.textContent = "반경 500m 진입이 감지되었습니다";
    if (subEl) subEl.textContent = "푸시를 눌러 예약 상세 화면에서 입차 안내와 체크인 준비를 확인하세요.";
    actionBtn.textContent = "예약 정보 보기";
    return;
  }

  if (state.route.driving) {
    if (badgeEl) badgeEl.textContent = "DRIVING";
    if (titleEl) titleEl.textContent = "세종대로 방향으로 이동 중입니다";
    if (subEl) subEl.textContent = "반경 500m 이내 진입 시 Deep Space Push가 자동으로 도착합니다.";
    actionBtn.textContent = "운전 중";
    return;
  }

  if (badgeEl) badgeEl.textContent = state.route.geofenceSent ? "READY" : "READY";
  if (titleEl) titleEl.textContent = "아직 운전 시작 전입니다";
  if (subEl) subEl.textContent = "내비를 실행한 뒤 운전 시작을 누르면 반경 진입 Push가 자동 시뮬레이션됩니다.";
  actionBtn.textContent = "운전 시작";
}

function renderMeta() {
  const screen = getScreen(currentViewId());
  const groupLabel = GROUP_LABELS[screen.group];

  el.crumbGroup.textContent = `${screen.code.split("-")[0]} · ${groupLabel}`;
  el.crumbScreen.textContent = `${screen.code} ${screen.title}`;
  el.metaId.textContent = screen.code;
  el.metaTitle.textContent = `${groupLabel} / ${screen.title}`;
  el.metaDesc.textContent = screen.description;
  el.metaPurpose.textContent = screen.purpose;
  el.compList.innerHTML = screen.components.map((item) => `<li>${item}</li>`).join("");

  el.flowNexts.innerHTML = (screen.next || [])
    .map((id) => {
      const next = getScreen(id);
      return `
        <button class="flow-next" data-to="${id}">
          <span class="fn-code">${next.code}</span>
          <span>${next.title}</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      `;
    })
    .join("");

  if (screen.push) {
    el.pushPreview.hidden = false;
    el.pushTitle.textContent = screen.push.title;
    el.pushBody.innerHTML = screen.push.body;
  } else {
    el.pushPreview.hidden = true;
  }
}

function renderFlowChips() {
  const id = currentViewId();
  const flowIndex = MAIN_FLOW.indexOf(id);

  if (flowIndex >= 0) {
    const visible = MAIN_FLOW.slice(Math.max(0, flowIndex - 2), Math.min(MAIN_FLOW.length, flowIndex + 3));
    el.flowChips.innerHTML = visible
      .map((flowId) => {
        const screen = getScreen(flowId);
        return `<button class="flow-chip${flowId === id ? " is-active" : ""}" data-to="${flowId}">${screen.code}</button>`;
      })
      .join("");
    return;
  }

  const screen = getScreen(id);
  const chips = [state.screenId, ...(screen.next || [])]
    .filter((value, index, array) => array.indexOf(value) === index)
    .map((flowId) => {
      const item = getScreen(flowId);
      return `<button class="flow-chip${flowId === id ? " is-active" : ""}" data-to="${flowId}">${item.code}</button>`;
    });

  el.flowChips.innerHTML = chips.join("");
}

function renderAll() {
  renderRail();
  renderViewport();
  renderMeta();
  renderFlowChips();
  el.screenCount.textContent = Object.keys(SCREENS).length;
  syncMobileDevUI();
}

function navigate(id) {
  const screen = getScreen(id);
  if (!screen) return;

  if (state.toast?.to === id) {
    state.toast = null;
  }

  if (screen.type === "sheet") {
    state.screenId = screen.parent;
    state.sheetId = id;
  } else {
    state.screenId = id;
    state.sheetId = null;
  }

  renderAll();
}

function stopDemo() {
  clearDemoTimers();
  state.demo.running = false;
  state.route.driving = false;
  if (!["e-01", "d-05"].includes(state.screenId)) {
    resetRouteState();
    state.toast = null;
  }
  syncDemoButton();
  syncInteractiveViews();
  renderToast();
}

function startDemo() {
  clearDemoTimers();
  state.demo.running = true;
  resetScenarioState();
  syncDemoButton();
  navigate("a-01");

  queueDemo(1200, () => navigate("a-02"));
  queueDemo(2600, () => navigate("a-03"));
  queueDemo(4000, () => navigate("a-04"));
  queueDemo(5400, () => navigate("a-05"));
  queueDemo(7000, () => navigate("b-01"));
  queueDemo(8600, () => navigate("c-01"));
  queueDemo(10200, () => navigate("c-02"));
  queueDemo(11800, () => navigate("d-01"));
  queueDemo(13200, () => {
    state.booking.duration = 150;
    syncInteractiveViews();
  });
  queueDemo(14600, () => {
    state.booking.duration = 180;
    syncInteractiveViews();
  });
  queueDemo(16200, () => navigate("d-02"));
  queueDemo(17600, () => {
    state.booking.seat = "AUTO";
    syncInteractiveViews();
  });
  queueDemo(19000, () => {
    state.booking.seat = "A-7";
    state.booking.meeting = "4인";
    syncInteractiveViews();
  });
  queueDemo(20400, () => navigate("d-03"));
  queueDemo(21800, () => {
    state.booking.payment = "Apple Pay";
    syncInteractiveViews();
  });
  queueDemo(23200, () => {
    state.booking.payment = "카카오페이";
    syncInteractiveViews();
  });
  queueDemo(24800, () => navigate("d-04"));
  queueDemo(26800, () => navigate("e-01"));
  queueDemo(28200, () => {
    state.route.driving = true;
    syncInteractiveViews();
  });
  queueDemo(35200, () => {
    if (state.toast?.to === "d-05") navigate("d-05");
  });
  queueDemo(37400, () => navigate("f-01"));
  queueDemo(38800, () => {
    state.checkinTab = "pin";
    syncInteractiveViews();
  });
  queueDemo(40400, () => navigate("f-02"));
  queueDemo(42000, () => navigate("f-03"));
  queueDemo(43800, () => openSheet("extend"));
  queueDemo(45600, () => closeSheet());
  queueDemo(47200, () => navigate("g-01"));
  queueDemo(48800, () => navigate("g-02"));
  queueDemo(50600, () => navigate("g-03"));
  queueDemo(52400, () => navigate("b-01"));
  queueDemo(53800, () => stopDemo());
}

function toggleDemo() {
  if (state.demo.running) {
    stopDemo();
    return;
  }
  startDemo();
}

function openSheet(alias) {
  const id = SHEET_ALIASES[alias];
  if (!id) return;
  state.sheetId = id;
  renderAll();
}

function closeSheet() {
  if (!state.sheetId) return;
  state.sheetId = null;
  renderAll();
}

function updateStatusTime() {
  const timeEl = document.querySelector(".sb-time");
  if (!timeEl) return;
  timeEl.textContent = new Intl.DateTimeFormat("ko-KR", {
    hour: "numeric",
    minute: "2-digit"
  }).format(new Date());
}

function updateDynamicCounters() {
  const seatHH = document.querySelector("#seatHH");
  const seatMM = document.querySelector("#seatMM");
  const seatSS = document.querySelector("#seatSS");
  if (seatHH && seatMM && seatSS) {
    const hours = String(Math.floor(state.seatRemaining / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((state.seatRemaining % 3600) / 60)).padStart(2, "0");
    const seconds = String(state.seatRemaining % 60).padStart(2, "0");
    seatHH.textContent = hours;
    seatMM.textContent = minutes;
    seatSS.textContent = seconds;
  }

  const ciTimer = document.querySelector("#ciTimer");
  if (ciTimer) {
    const minutes = String(Math.floor(state.qrRemaining / 60)).padStart(2, "0");
    const seconds = String(state.qrRemaining % 60).padStart(2, "0");
    ciTimer.textContent = `${minutes}:${seconds}`;
  }
}

function tickCounters() {
  if (state.seatRemaining > 0) state.seatRemaining -= 1;
  if (state.qrRemaining > 0) {
    state.qrRemaining -= 1;
  } else {
    state.qrRemaining = 58;
  }

  if (state.route.driving) {
    const routeStep = state.demo.running ? 12 : 4;
    state.route.progress = Math.min(100, state.route.progress + routeStep);
    state.route.distanceKm = Math.max(0.4, Number((3.8 - state.route.progress * 0.043).toFixed(1)));
    state.route.etaMin = Math.max(1, Math.round(14 - state.route.progress * 0.14));
    state.route.arrivalBattery = Math.max(37, Math.round(42 - (3.8 - state.route.distanceKm)));

    if (state.route.progress >= 72 && !state.route.geofenceSent) {
      state.route.geofenceSent = true;
      state.route.driving = false;
      state.route.arrived = true;
      state.toast = {
        title: "곧 도착하시네요!",
        body: "📍 세종로공영주차장 B4 C423 구역으로 진입하세요<br>🔋 지금 충전을 시작하면 퇴실 시 약 85%",
        to: "d-05"
      };
    }
  }

  updateStatusTime();
  updateDynamicCounters();
  syncInteractiveViews();
  renderToast();
}

function syncZoom() {
  if (!el.device || !el.zoomVal) return;
  el.device.style.transform = `scale(${state.zoom})`;
  el.zoomVal.textContent = `${Math.round(state.zoom * 100)}%`;
}

function adjustZoom(delta) {
  state.zoom = Math.max(0.8, Math.min(1.15, Math.round((state.zoom + delta) * 100) / 100));
  syncZoom();
}

function handleDocumentClick(event) {
  const target = event.target;
  const mobileTool = target.closest("[data-mobile-tool]");
  const mobileDevToggle = target.closest("#mobileDevToggle");
  const manualControl = target.closest("[data-toast-open], [data-to], [data-sheet], [data-sheet-close], [data-duration], [data-seat-select], [data-meeting-select], [data-charger-select], [data-payment-select], [data-checkin-tab], [data-drive-toggle], [data-mobile-tool], #mobileDevToggle, .scr-splash, .ext-opt, .star");
  const demoControls = target.closest("#demoToggle, #mobileDevToggle, [data-mobile-tool='demo']");

  if (state.demo.running && manualControl && !demoControls) {
    stopDemo();
  }

  if (mobileDevToggle) {
    state.mobileDevOpen = !state.mobileDevOpen;
    syncMobileDevUI();
    return;
  }

  if (mobileTool) {
    runMobileTool(mobileTool.dataset.mobileTool);
    return;
  }

  if (state.mobileDevOpen && !target.closest("#mobileDev")) {
    state.mobileDevOpen = false;
    syncMobileDevUI();
  }

  if (state.screenId === "a-01" && target.closest(".scr-splash")) {
    navigate("a-02");
    return;
  }

  if (target.closest("[data-toast-open]")) {
    if (state.toast?.to) {
      navigate(state.toast.to);
    } else {
      state.toast = null;
      renderToast();
    }
    return;
  }

  const to = target.closest("[data-to]");
  if (to) {
    navigate(to.dataset.to);
    return;
  }

  const sheet = target.closest("[data-sheet]");
  if (sheet) {
    openSheet(sheet.dataset.sheet);
    return;
  }

  if (target.closest("[data-sheet-close]")) {
    closeSheet();
    return;
  }

  const duration = target.closest("[data-duration]");
  if (duration) {
    state.booking.duration = Number(duration.dataset.duration);
    syncBookingStep1();
    return;
  }

  const seat = target.closest("[data-seat-select]");
  if (seat) {
    state.booking.seat = seat.dataset.seatSelect;
    syncBookingStep2();
    return;
  }

  const charger = target.closest("[data-charger-select]");
  if (charger) {
    state.booking.charger = charger.dataset.chargerSelect;
    syncBookingStep2();
    return;
  }

  const meeting = target.closest("[data-meeting-select]");
  if (meeting) {
    state.booking.meeting = state.booking.meeting === meeting.dataset.meetingSelect ? null : meeting.dataset.meetingSelect;
    syncBookingStep2();
    return;
  }

  const payment = target.closest("[data-payment-select]");
  if (payment) {
    state.booking.payment = payment.dataset.paymentSelect;
    syncPaymentSelection();
    return;
  }

  const checkinTab = target.closest("[data-checkin-tab]");
  if (checkinTab) {
    state.checkinTab = checkinTab.dataset.checkinTab;
    syncCheckinState();
    return;
  }

  if (target.closest("[data-drive-toggle]")) {
    if (state.route.arrived) {
      navigate("d-05");
      return;
    }

    state.route.driving = !state.route.driving;
    syncRouteState();
    return;
  }

  const extOpt = target.closest(".ext-opt:not(.ext-disabled)");
  if (extOpt) {
    document.querySelectorAll(".ext-opt").forEach((node) => node.classList.remove("is-on"));
    extOpt.classList.add("is-on");
    return;
  }

  const star = target.closest(".star");
  if (star) {
    const stars = [...star.parentElement.querySelectorAll(".star")];
    const activeIndex = stars.indexOf(star);
    stars.forEach((node, index) => node.classList.toggle("is-on", index <= activeIndex));
  }
}

function bindEvents() {
  document.addEventListener("click", handleDocumentClick);

  el.railSearch?.addEventListener("input", (event) => {
    state.railQuery = event.target.value;
    renderRail();
  });

  document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      el.railSearch?.focus();
      el.railSearch?.select();
    }
  });

  document.querySelectorAll(".zoom-btn").forEach((button, index) => {
    button.addEventListener("click", () => adjustZoom(index === 0 ? -0.05 : 0.05));
  });

  el.demoToggle?.addEventListener("click", toggleDemo);
  window.addEventListener("resize", syncRuntimeMode);
  window.addEventListener("orientationchange", syncRuntimeMode);
  window.matchMedia?.("(display-mode: standalone)")?.addEventListener?.("change", syncRuntimeMode);
}

bindEvents();
syncRuntimeMode();
renderAll();
updateStatusTime();
syncDemoButton();
window.setInterval(tickCounters, 1000);
