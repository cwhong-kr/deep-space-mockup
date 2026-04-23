import { useState } from "react";

const GRAY = {
  bg: "#F5F5F0",
  phone: "#FFFFFF",
  border: "#D1D1C7",
  text: "#2D2D2D",
  sub: "#888880",
  light: "#E8E8E2",
  accent: "#4A6FA5",
  placeholder: "#C8C8C0",
  bar: "#EDEDEA",
};

const allScreens = {
  "A-01": { group: "A", title: "스플래시", next: "A-02" },
  "A-02": { group: "A", title: "로그인", next: "A-03" },
  "A-03": { group: "A", title: "본인인증", next: "A-04" },
  "A-04": { group: "A", title: "차량 등록", next: "A-05" },
  "A-05": { group: "A", title: "가입 완료", next: "B-01" },
  "B-01": { group: "B", title: "홈 (예약 없음)", next: "C-01" },
  "B-02": { group: "B", title: "알림함", next: null },
  "C-01": { group: "C", title: "지점 검색 (지도)", next: "C-02" },
  "C-02": { group: "C", title: "지점 상세", next: "D-01" },
  "D-01": { group: "D", title: "날짜/시간 선택", next: "D-02" },
  "D-02": { group: "D", title: "공간/충전기 선택", next: "D-03" },
  "D-03": { group: "D", title: "결제", next: "D-04" },
  "D-04": { group: "D", title: "예약 완료", next: "E-01" },
  "E-01": { group: "E", title: "길 안내", next: "F-01" },
  "F-01": { group: "F", title: "체크인", next: "F-02" },
  "F-02": { group: "F", title: "체크인 완료", next: "F-03" },
  "F-03": { group: "F", title: "이용 현황", next: "G-01" },
  "G-01": { group: "G", title: "이용 종료 확인", next: "G-02" },
  "G-02": { group: "G", title: "정산 완료", next: "B-01" },
};

const groupNames = {
  A: "인증", B: "홈", C: "검색", D: "예약", E: "길안내", F: "체크인/이용", G: "퇴실/정산"
};
const groupColors = {
  A: "#7C6F64", B: "#4A6FA5", C: "#5A8F6A", D: "#B8860B", E: "#8B6DAE", F: "#C06040", G: "#6B8E9B"
};

/* ── Wireframe placeholder helpers ── */
const Box = ({ children, style, dashed }) => (
  <div style={{
    border: `1.5px ${dashed ? "dashed" : "solid"} ${GRAY.border}`,
    borderRadius: 6, padding: "6px 8px", background: dashed ? "transparent" : GRAY.bar,
    fontSize: 10, color: GRAY.text, ...style
  }}>{children}</div>
);
const Placeholder = ({ h = 20, label, style }) => (
  <div style={{
    height: h, background: GRAY.light, borderRadius: 4,
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: 8, color: GRAY.sub, border: `1px dashed ${GRAY.border}`, ...style
  }}>{label}</div>
);
const Btn = ({ children, primary, style }) => (
  <div style={{
    padding: "7px 0", borderRadius: 6, textAlign: "center", fontSize: 10, fontWeight: 600,
    background: primary ? GRAY.text : "transparent",
    color: primary ? "#fff" : GRAY.text,
    border: primary ? "none" : `1.5px solid ${GRAY.border}`, ...style
  }}>{children}</div>
);
const Input = ({ label }) => (
  <div style={{
    border: `1.5px solid ${GRAY.border}`, borderRadius: 6, padding: "6px 8px",
    fontSize: 9, color: GRAY.placeholder, background: "#fff"
  }}>{label}</div>
);
const Label = ({ children }) => (
  <div style={{ fontSize: 8, color: GRAY.sub, marginBottom: 3, fontWeight: 600 }}>{children}</div>
);
const Title = ({ children }) => (
  <div style={{ fontSize: 13, fontWeight: 800, color: GRAY.text, marginBottom: 6 }}>{children}</div>
);
const StatusBar = () => (
  <div style={{ display: "flex", justifyContent: "space-between", padding: "0 4px", fontSize: 8, color: GRAY.sub, marginBottom: 4 }}>
    <span>9:41</span><span>●●● WiFi 🔋</span>
  </div>
);
const TabBar = ({ active = 0 }) => (
  <div style={{
    display: "flex", borderTop: `1.5px solid ${GRAY.border}`, padding: "5px 0 2px",
    position: "absolute", bottom: 10, left: 10, right: 10, background: "#fff"
  }}>
    {["🏠 홈", "⚡ 이용", "📅 예약", "👤 마이"].map((t, i) => (
      <div key={i} style={{
        flex: 1, textAlign: "center", fontSize: 8,
        color: i === active ? GRAY.text : GRAY.placeholder,
        fontWeight: i === active ? 700 : 400
      }}>{t}</div>
    ))}
  </div>
);
const Nav = ({ title, back }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8, paddingBottom: 6, borderBottom: `1px solid ${GRAY.light}` }}>
    {back && <span style={{ fontSize: 12, color: GRAY.sub }}>←</span>}
    <span style={{ fontSize: 11, fontWeight: 700, color: GRAY.text }}>{title}</span>
  </div>
);
const Chip = ({ children }) => (
  <span style={{
    fontSize: 7.5, padding: "2px 6px", borderRadius: 10,
    border: `1px solid ${GRAY.border}`, color: GRAY.sub, background: GRAY.bar
  }}>{children}</span>
);

/* ── Screen Components ── */
function ScreenA01() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: 8 }}>
      <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: 4, color: GRAY.text }}>DEEP</div>
      <div style={{ fontSize: 8, color: GRAY.sub, letterSpacing: 2 }}>TIME, DESIGNED.</div>
      <div style={{ width: 20, height: 20, border: `2px solid ${GRAY.border}`, borderTop: `2px solid ${GRAY.text}`, borderRadius: "50%", marginTop: 16 }} />
      <div style={{ fontSize: 7, color: GRAY.placeholder, marginTop: 4 }}>로딩 중...</div>
    </div>
  );
}

function ScreenA02() {
  return (
    <div style={{ padding: "12px 14px" }}>
      <StatusBar />
      <div style={{ textAlign: "center", margin: "20px 0 12px" }}>
        <div style={{ fontSize: 18, fontWeight: 900, letterSpacing: 3 }}>DEEP</div>
        <div style={{ fontSize: 7, color: GRAY.sub, letterSpacing: 1.5, marginTop: 2 }}>TIME, DESIGNED.</div>
      </div>
      <div style={{ textAlign: "center", fontSize: 10, color: GRAY.sub, marginBottom: 16 }}>시간을 디자인하는 첫 걸음</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <Btn primary style={{ background: "#F5E14B", color: "#000" }}>💬 카카오로 계속하기</Btn>
        <Btn>G  Google로 계속하기</Btn>
        <Btn primary style={{ background: "#222" }}> Apple로 계속하기</Btn>
      </div>
      <div style={{ textAlign: "center", fontSize: 8, color: GRAY.placeholder, marginTop: 16 }}>
        이메일/휴대폰으로 로그인 | 회원가입
      </div>
    </div>
  );
}

function ScreenA03() {
  return (
    <div style={{ padding: "12px 14px" }}>
      <StatusBar />
      <Nav title="본인인증" back />
      <div style={{ display: "flex", gap: 4, marginBottom: 12 }}>
        {[1,2,3].map(n => <div key={n} style={{ flex: 1, height: 3, borderRadius: 2, background: n === 1 ? GRAY.text : GRAY.light }} />)}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div><Label>이름</Label><Input label="홍길동 (자동입력)" /></div>
        <div><Label>휴대폰번호</Label>
          <div style={{ display: "flex", gap: 4 }}>
            <div style={{ flex: 1 }}><Input label="010-0000-0000" /></div>
            <Btn style={{ padding: "6px 8px", fontSize: 8 }}>인증번호 발송</Btn>
          </div>
        </div>
        <div><Label>인증번호</Label><Input label="______  (3:00)" /></div>
      </div>
      <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 4 }}>
        {["[필수] 서비스 이용약관 동의", "[필수] 개인정보 처리방침 동의", "[선택] 마케팅 정보 수신 동의"].map((t, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 8, color: GRAY.sub }}>
            <div style={{ width: 12, height: 12, border: `1.5px solid ${GRAY.border}`, borderRadius: 3 }} />{t}
          </div>
        ))}
      </div>
      <Btn primary style={{ marginTop: 14 }}>다음</Btn>
    </div>
  );
}

function ScreenA04() {
  return (
    <div style={{ padding: "12px 14px" }}>
      <StatusBar />
      <Nav title="차량 등록" back />
      <div style={{ display: "flex", gap: 4, marginBottom: 12 }}>
        {[1,2,3].map(n => <div key={n} style={{ flex: 1, height: 3, borderRadius: 2, background: n <= 2 ? GRAY.text : GRAY.light }} />)}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div><Label>차량번호</Label><Input label="12가 3456" /></div>
        <div><Label>제조사</Label><Input label="현대 ▾" /></div>
        <div><Label>차종</Label><Input label="아이오닉 5 ▾" /></div>
        <div><Label>연식</Label><Input label="2025 ▾" /></div>
        <Box style={{ fontSize: 8, color: GRAY.sub, background: GRAY.light }}>
          🔋 배터리 용량: 72.6kWh (자동 입력)
        </Box>
      </div>
      <Btn primary style={{ marginTop: 14 }}>다음</Btn>
      <div style={{ textAlign: "center", fontSize: 8, color: GRAY.placeholder, marginTop: 8 }}>나중에 등록하기</div>
    </div>
  );
}

function ScreenA05() {
  return (
    <div style={{ padding: "12px 14px" }}>
      <StatusBar />
      <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
        {[1,2,3].map(n => <div key={n} style={{ flex: 1, height: 3, borderRadius: 2, background: GRAY.text }} />)}
      </div>
      <div style={{ textAlign: "center", margin: "24px 0 8px" }}>
        <div style={{ fontSize: 28, marginBottom: 8 }}>✓</div>
        <Title>환영합니다!</Title>
        <div style={{ fontSize: 9, color: GRAY.sub, lineHeight: 1.5 }}>충전하면서 일하는 시간이<br />지금 시작됩니다</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 20 }}>
        <Box dashed style={{ fontSize: 8, textAlign: "center" }}>🔔 알림 권한 허용 (권장)</Box>
        <Box dashed style={{ fontSize: 8, textAlign: "center" }}>📍 위치 서비스 허용 (권장)</Box>
      </div>
      <Btn primary style={{ marginTop: 20 }}>시작하기</Btn>
    </div>
  );
}

function ScreenB01() {
  return (
    <div style={{ padding: "10px 12px", position: "relative", height: "100%" }}>
      <StatusBar />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
        <span style={{ fontSize: 7 }}>☰</span>
        <span style={{ fontSize: 14, fontWeight: 900, letterSpacing: 3 }}>DEEP</span>
        <span style={{ fontSize: 10 }}>🔔</span>
      </div>
      <Box style={{ marginBottom: 8, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 8, color: GRAY.sub }}>내 차량</div>
          <div style={{ fontSize: 10, fontWeight: 700 }}>12가 3456</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 8, color: GRAY.sub }}>배터리</div>
          <div style={{ fontSize: 14, fontWeight: 800 }}>42%</div>
        </div>
      </Box>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5, marginBottom: 8 }}>
        {["⚡ 충전", "🛋 라운지", "🗺 길안내", "📅 예약하기"].map((t, i) => (
          <Box key={i} style={{ textAlign: "center", padding: "10px 4px", fontSize: 9, fontWeight: 600 }}>{t}</Box>
        ))}
      </div>
      <Label>근처 지점</Label>
      {["세종로 DS · 0.3km · 잔여 4석", "강남 DS · 1.2km · 잔여 1석"].map((t, i) => (
        <Box key={i} style={{ marginBottom: 4, fontSize: 8.5, display: "flex", justifyContent: "space-between" }}>
          <span>{t}</span><span style={{ color: GRAY.placeholder }}>→</span>
        </Box>
      ))}
      <TabBar active={0} />
    </div>
  );
}

function ScreenB02() {
  return (
    <div style={{ padding: "10px 12px" }}>
      <StatusBar />
      <Nav title="알림" back />
      {[
        { icon: "📅", t: "예약이 확정되었습니다", s: "4/22(수) 11:00–13:00 · 세종로 DS", time: "2분 전", unread: true },
        { icon: "⚡", t: "충전이 완료되었습니다", s: "배터리 85% · 세종로 DS", time: "어제", unread: false },
        { icon: "📢", t: "Deep Space 오픈 안내", s: "강남 DS가 새로 오픈했습니다", time: "3일 전", unread: false },
      ].map((n, i) => (
        <Box key={i} style={{ marginBottom: 5, background: n.unread ? "#F0F4FF" : GRAY.bar, display: "flex", gap: 6, alignItems: "flex-start" }}>
          <span style={{ fontSize: 14 }}>{n.icon}</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 9, fontWeight: 600 }}>{n.t}</div>
            <div style={{ fontSize: 7.5, color: GRAY.sub }}>{n.s}</div>
            <div style={{ fontSize: 7, color: GRAY.placeholder, marginTop: 2 }}>{n.time}</div>
          </div>
        </Box>
      ))}
    </div>
  );
}

function ScreenC01() {
  return (
    <div style={{ padding: "10px 12px", position: "relative", height: "100%" }}>
      <StatusBar />
      <Input label="🔍 지점 또는 목적지를 검색하세요" />
      <Placeholder h={130} label="🗺 지도 영역" style={{ marginTop: 6, position: "relative" }}>
        <div style={{ position: "absolute", top: "20%", left: "25%", background: "#5A8F6A", color: "#fff", fontSize: 7, padding: "2px 5px", borderRadius: 8 }}>강남 · 1석</div>
        <div style={{ position: "absolute", top: "45%", left: "50%", background: GRAY.text, color: "#fff", fontSize: 7, padding: "2px 5px", borderRadius: 8 }}>세종로 · 4석</div>
        <div style={{ position: "absolute", top: "65%", left: "20%", background: "#C06040", color: "#fff", fontSize: 7, padding: "2px 5px", borderRadius: 8 }}>여의도 · 0석</div>
      </Placeholder>
      <div style={{ display: "flex", gap: 4, margin: "6px 0" }}>
        <Chip>거리순</Chip><Chip>잔여좌석순</Chip><Chip>충전기순</Chip>
      </div>
      {["세종로 DS · 0.3km · 좌석4 · 충전3", "강남 DS · 1.2km · 좌석1 · 충전1"].map((t, i) => (
        <Box key={i} style={{ marginBottom: 4, fontSize: 8.5 }}>{t} <span style={{ float: "right", color: GRAY.placeholder }}>→</span></Box>
      ))}
      <TabBar active={0} />
    </div>
  );
}

function ScreenC02() {
  return (
    <div style={{ padding: "10px 12px", position: "relative", height: "100%" }}>
      <StatusBar />
      <Nav title="세종로 Deep Space" back />
      <Placeholder h={60} label="📸 지점 이미지 캐러셀" style={{ marginBottom: 6 }} />
      <div style={{ fontSize: 8, color: GRAY.sub, marginBottom: 6 }}>서울 종로구 세종로공영주차장 B4 C423 · 0.3km</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 4, marginBottom: 6 }}>
        <Box style={{ textAlign: "center", fontSize: 8 }}><div style={{ fontSize: 14, fontWeight: 700 }}>4</div>잔여 좌석</Box>
        <Box style={{ textAlign: "center", fontSize: 8 }}><div style={{ fontSize: 14, fontWeight: 700 }}>3</div>충전기</Box>
        <Box style={{ textAlign: "center", fontSize: 8 }}><div style={{ fontSize: 14, fontWeight: 700 }}>1</div>회의실</Box>
      </div>
      <Label>운영시간</Label>
      <div style={{ fontSize: 8, color: GRAY.sub, marginBottom: 6 }}>평일 07:00–22:00 · 주말 09:00–18:00</div>
      <Label>편의시설</Label>
      <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
        {["📶Wi-Fi", "🖨프린터", "☕음료", "🔒사물함"].map((t, i) => <Chip key={i}>{t}</Chip>)}
      </div>
      <Label>주차장 내 위치</Label>
      <Placeholder h={45} label="📍 약도 (B4층 C423)" style={{ marginBottom: 8 }} />
      <div style={{ display: "flex", gap: 6 }}>
        <Btn primary style={{ flex: 1 }}>예약하기</Btn>
        <Btn style={{ flex: 1 }}>길 안내</Btn>
      </div>
    </div>
  );
}

function ScreenD01() {
  return (
    <div style={{ padding: "10px 12px" }}>
      <StatusBar />
      <Nav title="예약 — 날짜/시간" back />
      <Box style={{ fontSize: 8, marginBottom: 8 }}>📍 세종로 Deep Space</Box>
      <Label>날짜 선택</Label>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 2, marginBottom: 8, textAlign: "center", fontSize: 7 }}>
        {["일","월","화","수","목","금","토"].map(d => <div key={d} style={{ color: GRAY.placeholder, fontWeight: 600 }}>{d}</div>)}
        {Array.from({ length: 30 }, (_, i) => i + 1).map(d => (
          <div key={d} style={{
            padding: "3px 0", borderRadius: 4, fontSize: 7,
            background: d === 22 ? GRAY.text : "transparent",
            color: d === 22 ? "#fff" : d < 22 ? GRAY.placeholder : GRAY.text
          }}>{d}</div>
        ))}
      </div>
      <Label>시작 시간</Label>
      <div style={{ display: "flex", gap: 3, marginBottom: 6, flexWrap: "wrap" }}>
        {["09:00","09:30","10:00","10:30","11:00","11:30"].map((t, i) => (
          <div key={i} style={{
            padding: "4px 6px", borderRadius: 4, fontSize: 7.5,
            background: t === "11:00" ? GRAY.text : GRAY.light,
            color: t === "11:00" ? "#fff" : GRAY.sub,
            border: `1px solid ${GRAY.border}`
          }}>{t}</div>
        ))}
      </div>
      <Label>종료 시간</Label>
      <div style={{ display: "flex", gap: 3, marginBottom: 8, flexWrap: "wrap" }}>
        {["12:00","12:30","13:00","13:30","14:00"].map((t, i) => (
          <div key={i} style={{
            padding: "4px 6px", borderRadius: 4, fontSize: 7.5,
            background: t === "13:00" ? GRAY.text : GRAY.light,
            color: t === "13:00" ? "#fff" : GRAY.sub,
            border: `1px solid ${GRAY.border}`
          }}>{t}</div>
        ))}
      </div>
      <Box style={{ fontSize: 8, marginBottom: 8 }}>잔여: 좌석 4석 · 충전기 3기</Box>
      <Btn primary>다음</Btn>
    </div>
  );
}

function ScreenD02() {
  return (
    <div style={{ padding: "10px 12px" }}>
      <StatusBar />
      <Nav title="예약 — 공간 선택" back />
      <Box style={{ fontSize: 8, marginBottom: 8 }}>📅 4/22(수) 11:00–13:00 · 세종로 DS</Box>
      <Label>라운지 좌석</Label>
      <Placeholder h={70} label="좌석 배치도 (선택 가능 ● / 사용중 ○)" style={{ marginBottom: 4 }} />
      <div style={{ fontSize: 7.5, color: GRAY.accent, marginBottom: 8 }}>✓ A-7 선택됨</div>
      <Label>회의실 (선택사항)</Label>
      <div style={{ display: "flex", gap: 4, marginBottom: 8 }}>
        <Box dashed style={{ flex: 1, textAlign: "center", fontSize: 8 }}>4인실<br /><span style={{ color: GRAY.sub }}>5,000원/h</span></Box>
        <Box dashed style={{ flex: 1, textAlign: "center", fontSize: 8, opacity: 0.4 }}>8인실<br /><span style={{ color: GRAY.sub }}>사용중</span></Box>
      </div>
      <Label>충전기</Label>
      <div style={{ display: "flex", gap: 4, marginBottom: 10 }}>
        {["C-01","C-02","C-03"].map((c, i) => (
          <Box key={i} style={{
            flex: 1, textAlign: "center", fontSize: 8,
            background: c === "C-03" ? GRAY.text : i === 0 ? GRAY.light : GRAY.bar,
            color: c === "C-03" ? "#fff" : i === 0 ? GRAY.placeholder : GRAY.text,
            opacity: i === 0 ? 0.4 : 1
          }}>{c}<br /><span style={{ fontSize: 7 }}>{i === 0 ? "사용중" : "7kW"}</span></Box>
        ))}
      </div>
      <Box style={{ fontSize: 8, marginBottom: 8 }}>선택: 좌석 A-7 · 충전기 C-03</Box>
      <Btn primary>다음</Btn>
    </div>
  );
}

function ScreenD03() {
  return (
    <div style={{ padding: "10px 12px" }}>
      <StatusBar />
      <Nav title="결제" back />
      <Label>예약 요약</Label>
      <Box style={{ marginBottom: 8, fontSize: 8, lineHeight: 1.8 }}>
        📍 세종로 DS<br />📅 4/22(수) 11:00–13:00<br />🛋 좌석 A-7<br />⚡ 충전기 C-03 (7kW)
      </Box>
      <Label>결제 내역</Label>
      <Box style={{ marginBottom: 8, fontSize: 8 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}><span>라운지 (2시간)</span><span>4,000원</span></div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3, color: GRAY.sub }}><span>충전 (실비)</span><span>이용 후 정산</span></div>
        <div style={{ borderTop: `1px solid ${GRAY.border}`, paddingTop: 4, marginTop: 4, display: "flex", justifyContent: "space-between", fontWeight: 700 }}><span>합계</span><span>4,000원~</span></div>
      </Box>
      <Label>결제 수단</Label>
      <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 6 }}>
        {["💳 신용/체크카드", "카카오페이", "네이버페이"].map((t, i) => (
          <Box key={i} style={{ fontSize: 8.5, display: "flex", alignItems: "center", gap: 4, background: i === 1 ? "#F0F4FF" : GRAY.bar }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", border: `1.5px solid ${GRAY.border}`, background: i === 1 ? GRAY.text : "transparent" }} />{t}
          </Box>
        ))}
      </div>
      <Label>할인/쿠폰</Label>
      <Input label="쿠폰 코드 입력 (2차 오픈)" />
      <Btn primary style={{ marginTop: 10 }}>결제하기</Btn>
    </div>
  );
}

function ScreenD04() {
  return (
    <div style={{ padding: "12px 14px" }}>
      <StatusBar />
      <div style={{ textAlign: "center", marginTop: 16 }}>
        <div style={{ fontSize: 32, marginBottom: 6 }}>✓</div>
        <Title>예약이 완료되었습니다</Title>
        <div style={{ fontSize: 9, color: GRAY.sub, marginBottom: 12 }}>충전하는 동안 시간을 디자인하세요</div>
      </div>
      <Box style={{ fontSize: 8, lineHeight: 1.8, marginBottom: 8 }}>
        <div style={{ fontWeight: 700, marginBottom: 3 }}>예약번호 DS-20260422-0031</div>
        📍 세종로 DS<br />📅 4/22(수) 11:00–13:00<br />🛋 좌석 A-7 · ⚡ 충전기 C-03
      </Box>
      <Box style={{ fontSize: 8, background: "#F0F4FF", marginBottom: 10 }}>
        🔋 현재 42% → 퇴실 시 약 85% 예상
      </Box>
      <div style={{ fontSize: 7.5, color: GRAY.sub, textAlign: "center", marginBottom: 10 }}>
        이용 시작 30분 전까지 무료 취소 가능
      </div>
      <div style={{ display: "flex", gap: 6 }}>
        <Btn primary style={{ flex: 1 }}>길 안내</Btn>
        <Btn style={{ flex: 1 }}>홈으로</Btn>
      </div>
      <div style={{ textAlign: "center", fontSize: 8, color: GRAY.accent, marginTop: 8 }}>📆 캘린더에 추가</div>
    </div>
  );
}

function ScreenE01() {
  return (
    <div style={{ padding: "10px 12px" }}>
      <StatusBar />
      <Nav title="길 안내" back />
      <Placeholder h={110} label="🗺 현위치 → 목적지 경로 지도" style={{ marginBottom: 8, position: "relative" }}>
        <div style={{ position: "absolute", bottom: 4, left: 4, background: "#fff", padding: "2px 5px", borderRadius: 4, fontSize: 7 }}>
          약 12분 · 3.2km
        </div>
      </Placeholder>
      <Box style={{ marginBottom: 6, fontSize: 8 }}>
        📍 세종로공영주차장 B4 C423
      </Box>
      <Box style={{ marginBottom: 6, fontSize: 8, background: "#F0F4FF" }}>
        🔋 도착 예상 배터리: <b>38%</b><br />
        <span style={{ fontSize: 7, color: GRAY.sub }}>현재 42% · 예상 소모 4%</span>
      </Box>
      <Box style={{ marginBottom: 10, fontSize: 8 }}>
        💡 도착 후 바로 충전 시 퇴실 시 약 85%
      </Box>
      <Btn primary>내비로 안내 시작</Btn>
      <div style={{ fontSize: 7, color: GRAY.sub, textAlign: "center", marginTop: 6 }}>
        티맵 · 카카오내비 · 네이버지도 · 차량 내비
      </div>
    </div>
  );
}

function ScreenF01() {
  return (
    <div style={{ padding: "10px 12px" }}>
      <StatusBar />
      <Nav title="체크인" back />
      <div style={{ display: "flex", marginBottom: 10 }}>
        {["QR 코드", "출입번호"].map((t, i) => (
          <div key={i} style={{
            flex: 1, textAlign: "center", padding: "6px 0", fontSize: 9, fontWeight: i === 0 ? 700 : 400,
            borderBottom: `2px solid ${i === 0 ? GRAY.text : GRAY.light}`,
            color: i === 0 ? GRAY.text : GRAY.sub
          }}>{t}</div>
        ))}
      </div>
      <div style={{ textAlign: "center", marginBottom: 8 }}>
        <div style={{
          width: 100, height: 100, margin: "0 auto", background: GRAY.light,
          border: `2px solid ${GRAY.border}`, borderRadius: 8,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 8, color: GRAY.sub
        }}>QR Code<br />Image</div>
      </div>
      <div style={{ textAlign: "center", fontSize: 9, fontWeight: 600, marginBottom: 4 }}>DS 출입문에 스캔해주세요</div>
      <div style={{ textAlign: "center", fontSize: 7.5, color: GRAY.sub, marginBottom: 12 }}>유효시간 4:32</div>
      <Box style={{ fontSize: 8, lineHeight: 1.7 }}>
        📅 4/22(수) 11:00–13:00<br />🛋 좌석 A-7 · ⚡ 충전기 C-03
      </Box>
    </div>
  );
}

function ScreenF02() {
  return (
    <div style={{ padding: "12px 14px" }}>
      <StatusBar />
      <div style={{ textAlign: "center", marginTop: 12 }}>
        <div style={{ fontSize: 28, marginBottom: 6 }}>🎉</div>
        <Title>환영합니다!</Title>
        <div style={{ fontSize: 9, color: GRAY.sub, marginBottom: 12 }}>시간을 디자인하세요</div>
      </div>
      <Box style={{ marginBottom: 6, fontSize: 8 }}>
        ⏰ 체크인 11:02 · 종료 13:00
      </Box>
      <Box style={{ marginBottom: 6, fontSize: 8 }}>
        🛋 라운지 A-7 · ⚡ 충전기 C-03 (충전 시작됨)
      </Box>
      <Box style={{ marginBottom: 8, fontSize: 8, background: "#F0F4FF" }}>
        📶 Wi-Fi<br />
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 3 }}>
          <span>SSID: <b>DS_SEJONGRO_5G</b></span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>
          <span>PW: <b>deep2026!</b></span>
          <span style={{ color: GRAY.accent }}>📋복사</span>
        </div>
      </Box>
      <Btn primary style={{ marginTop: 8 }}>이용 현황 보기</Btn>
    </div>
  );
}

function ScreenF03() {
  return (
    <div style={{ padding: "10px 12px", position: "relative", height: "100%" }}>
      <StatusBar />
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <span style={{ fontSize: 11, fontWeight: 700 }}>이용 현황</span>
        <span style={{ fontSize: 8, color: GRAY.sub }}>세종로 DS</span>
      </div>
      <Box style={{ marginBottom: 6 }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 8, marginBottom: 4 }}>
          <span>⚡ 충전 진행</span><span style={{ fontWeight: 700 }}>42% → 67%</span>
        </div>
        <div style={{ background: GRAY.light, borderRadius: 4, height: 8, overflow: "hidden" }}>
          <div style={{ width: "67%", height: "100%", background: GRAY.text, borderRadius: 4 }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 7, color: GRAY.sub, marginTop: 3 }}>
          <span>⏱ 잔여 41분</span><span>완료 12:48 예상</span>
        </div>
      </Box>
      <Box style={{ marginBottom: 6, display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 8 }}>
        <div>🛋 라운지 A-7<br /><span style={{ fontSize: 7, color: GRAY.sub }}>11:00~13:00 (잔여 1h18m)</span></div>
        <div style={{ fontSize: 7.5, color: GRAY.accent, border: `1px solid ${GRAY.accent}`, padding: "2px 6px", borderRadius: 4 }}>+연장</div>
      </Box>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 4, marginBottom: 6 }}>
        <Box dashed style={{ textAlign: "center", fontSize: 7.5 }}>⏱<br />시간 연장</Box>
        <Box dashed style={{ textAlign: "center", fontSize: 7.5, opacity: 0.4 }}>☕<br />음료 주문<br /><span style={{ fontSize: 6 }}>(2차)</span></Box>
        <Box dashed style={{ textAlign: "center", fontSize: 7.5 }}>📶<br />Wi-Fi</Box>
      </div>
      <Btn style={{ fontSize: 9 }}>이용 종료</Btn>
      <TabBar active={1} />
    </div>
  );
}

function ScreenG01() {
  return (
    <div style={{ padding: "12px 14px" }}>
      <StatusBar />
      <Nav title="이용 종료" back />
      <div style={{ textAlign: "center", margin: "16px 0" }}>
        <div style={{ fontSize: 11, fontWeight: 700, marginBottom: 8 }}>이용을 종료하시겠습니까?</div>
        <Box style={{ fontSize: 8, marginBottom: 8, background: "#FFF8E1" }}>
          🔋 현재 83% — 8분 더 충전하면 85%
        </Box>
        <Box style={{ fontSize: 8, marginBottom: 12 }}>
          ⏱ 아직 18분 남았습니다
        </Box>
      </div>
      <Btn primary style={{ marginBottom: 6 }}>종료하기</Btn>
      <Btn>계속 이용하기</Btn>
    </div>
  );
}

function ScreenG02() {
  return (
    <div style={{ padding: "10px 12px" }}>
      <StatusBar />
      <div style={{ textAlign: "center", marginTop: 10 }}>
        <div style={{ fontSize: 24, marginBottom: 4 }}>✨</div>
        <Title>오늘도 시간을 디자인했어요</Title>
        <div style={{ fontSize: 8, color: GRAY.sub }}>총 2시간 · 충전 42%→85% · 절약 42분</div>
      </div>
      <Box style={{ marginTop: 10, marginBottom: 8, fontSize: 8 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}><span>라운지 (2h)</span><span>4,000원</span></div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}><span>충전 (32.4kWh)</span><span>3,240원</span></div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}><span>아메리카노</span><span>4,500원</span></div>
        <div style={{ borderTop: `1px solid ${GRAY.border}`, paddingTop: 4, marginTop: 4, display: "flex", justifyContent: "space-between", fontWeight: 700 }}>
          <span>합계</span><span>11,740원</span>
        </div>
        <div style={{ fontSize: 7, color: GRAY.sub, marginTop: 4 }}>카카오페이 · 4/22 13:02</div>
      </Box>
      <Btn style={{ marginBottom: 5, fontSize: 9 }}>🧾 영수증 보기</Btn>
      <Btn primary style={{ fontSize: 9 }}>📅 다음에도 이 지점 이용하기</Btn>
      <div style={{ textAlign: "center", marginTop: 8 }}>
        <div style={{ fontSize: 8, color: GRAY.sub, marginBottom: 4 }}>이용은 어떠셨나요?</div>
        <div style={{ fontSize: 16, letterSpacing: 4 }}>☆☆☆☆☆</div>
      </div>
    </div>
  );
}

const screenComponents = {
  "A-01": ScreenA01, "A-02": ScreenA02, "A-03": ScreenA03, "A-04": ScreenA04, "A-05": ScreenA05,
  "B-01": ScreenB01, "B-02": ScreenB02,
  "C-01": ScreenC01, "C-02": ScreenC02,
  "D-01": ScreenD01, "D-02": ScreenD02, "D-03": ScreenD03, "D-04": ScreenD04,
  "E-01": ScreenE01,
  "F-01": ScreenF01, "F-02": ScreenF02, "F-03": ScreenF03,
  "G-01": ScreenG01, "G-02": ScreenG02,
};

const mainFlow = ["A-02","B-01","C-01","C-02","D-01","D-02","D-03","D-04","E-01","F-01","F-02","F-03","G-01","G-02"];

export default function App() {
  const [current, setCurrent] = useState("A-02");
  const Screen = screenComponents[current];
  const info = allScreens[current];
  const flowIdx = mainFlow.indexOf(current);

  return (
    <div style={{
      minHeight: "100vh", background: GRAY.bg,
      fontFamily: "'Pretendard','Apple SD Gothic Neo',system-ui,sans-serif",
      color: GRAY.text, padding: "20px 12px",
    }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 16 }}>
        <div style={{ fontSize: 10, letterSpacing: 5, color: GRAY.sub, fontWeight: 700 }}>DEEP SPACE</div>
        <div style={{ fontSize: 20, fontWeight: 900, marginTop: 2 }}>와이어프레임</div>
        <div style={{ fontSize: 11, color: GRAY.sub, marginTop: 4 }}>
          총 {Object.keys(allScreens).length}개 화면 · 메인 플로우 {mainFlow.length}개 화면
        </div>
      </div>

      {/* Screen group tabs */}
      <div style={{ display: "flex", gap: 4, overflowX: "auto", marginBottom: 12, justifyContent: "center", flexWrap: "wrap" }}>
        {Object.entries(groupNames).map(([k, v]) => {
          const isActive = info.group === k;
          return (
            <div key={k} style={{
              padding: "4px 10px", borderRadius: 14, fontSize: 10, fontWeight: isActive ? 700 : 400,
              background: isActive ? groupColors[k] : "transparent",
              color: isActive ? "#fff" : GRAY.sub,
              border: `1.5px solid ${isActive ? groupColors[k] : GRAY.border}`,
              cursor: "pointer",
            }}
              onClick={() => {
                const first = Object.entries(allScreens).find(([_, s]) => s.group === k);
                if (first) setCurrent(first[0]);
              }}
            >{k}. {v}</div>
          );
        })}
      </div>

      {/* Screen selector within group */}
      <div style={{ display: "flex", gap: 4, overflowX: "auto", marginBottom: 16, justifyContent: "center", flexWrap: "wrap" }}>
        {Object.entries(allScreens).filter(([_, s]) => s.group === info.group).map(([id, s]) => (
          <button key={id} onClick={() => setCurrent(id)} style={{
            padding: "4px 10px", borderRadius: 6, fontSize: 9, fontWeight: current === id ? 700 : 400,
            background: current === id ? GRAY.text : "#fff",
            color: current === id ? "#fff" : GRAY.text,
            border: `1px solid ${GRAY.border}`, cursor: "pointer",
          }}>{id} {s.title}</button>
        ))}
      </div>

      {/* Phone + annotations */}
      <div style={{ display: "flex", gap: 20, justifyContent: "center", alignItems: "flex-start", flexWrap: "wrap" }}>
        {/* Phone */}
        <div style={{
          width: 220, minHeight: 440, background: "#fff",
          borderRadius: 28, border: `2px solid ${GRAY.border}`,
          boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
          overflow: "hidden", position: "relative", flexShrink: 0,
        }}>
          {/* Notch */}
          <div style={{
            position: "absolute", top: 8, left: "50%", transform: "translateX(-50%)",
            width: 56, height: 7, background: GRAY.bar, borderRadius: 4, zIndex: 10
          }} />
          <div style={{ paddingTop: 18, minHeight: 420, overflow: "auto" }}>
            <Screen />
          </div>
          {/* Home indicator */}
          <div style={{
            position: "absolute", bottom: 6, left: "50%", transform: "translateX(-50%)",
            width: 50, height: 4, background: GRAY.border, borderRadius: 2
          }} />
        </div>

        {/* Annotation panel */}
        <div style={{ maxWidth: 280, flex: 1, minWidth: 200 }}>
          <div style={{
            display: "inline-block", padding: "3px 10px", borderRadius: 4,
            background: groupColors[info.group], color: "#fff",
            fontSize: 10, fontWeight: 700, marginBottom: 6, letterSpacing: 1
          }}>{info.group}. {groupNames[info.group]}</div>
          <div style={{ fontSize: 22, fontWeight: 900, marginBottom: 4 }}>
            <span style={{ color: GRAY.sub, fontSize: 14, marginRight: 6 }}>{current}</span>
            {info.title}
          </div>

          {/* Flow position */}
          {flowIdx >= 0 && (
            <div style={{ fontSize: 10, color: GRAY.sub, marginBottom: 10 }}>
              메인 플로우 {flowIdx + 1} / {mainFlow.length}
            </div>
          )}

          {/* Navigation info */}
          <div style={{
            background: "#fff", border: `1.5px solid ${GRAY.border}`,
            borderRadius: 8, padding: "10px 12px", marginBottom: 10
          }}>
            <div style={{ fontSize: 9, fontWeight: 700, marginBottom: 6, color: GRAY.sub, letterSpacing: 1 }}>화면 이동</div>
            {info.next && (
              <div style={{ fontSize: 10, marginBottom: 4 }}>
                → <span style={{ fontWeight: 700 }}>{info.next}</span>{" "}
                <span style={{ color: GRAY.sub }}>{allScreens[info.next]?.title}</span>
              </div>
            )}
            {flowIdx > 0 && (
              <div style={{ fontSize: 10, color: GRAY.sub }}>
                ← {mainFlow[flowIdx - 1]} {allScreens[mainFlow[flowIdx - 1]]?.title}
              </div>
            )}
          </div>

          {/* Nav buttons */}
          <div style={{ display: "flex", gap: 8 }}>
            <button
              disabled={flowIdx <= 0}
              onClick={() => flowIdx > 0 && setCurrent(mainFlow[flowIdx - 1])}
              style={{
                flex: 1, padding: "8px 0", borderRadius: 6, fontSize: 11, fontWeight: 600,
                background: flowIdx <= 0 ? GRAY.light : "#fff",
                color: flowIdx <= 0 ? GRAY.placeholder : GRAY.text,
                border: `1.5px solid ${GRAY.border}`, cursor: flowIdx <= 0 ? "not-allowed" : "pointer",
              }}
            >← 이전</button>
            <button
              disabled={flowIdx < 0 || flowIdx >= mainFlow.length - 1}
              onClick={() => flowIdx < mainFlow.length - 1 && setCurrent(mainFlow[flowIdx + 1])}
              style={{
                flex: 1, padding: "8px 0", borderRadius: 6, fontSize: 11, fontWeight: 600,
                background: (flowIdx < 0 || flowIdx >= mainFlow.length - 1) ? GRAY.light : GRAY.text,
                color: (flowIdx < 0 || flowIdx >= mainFlow.length - 1) ? GRAY.placeholder : "#fff",
                border: "none", cursor: (flowIdx < 0 || flowIdx >= mainFlow.length - 1) ? "not-allowed" : "pointer",
              }}
            >다음 →</button>
          </div>
        </div>
      </div>

      {/* Flow strip */}
      <div style={{
        marginTop: 20, background: "#fff", border: `1.5px solid ${GRAY.border}`,
        borderRadius: 12, padding: "12px 14px", maxWidth: 700, margin: "20px auto 0"
      }}>
        <div style={{ fontSize: 9, color: GRAY.sub, letterSpacing: 2, marginBottom: 8, fontWeight: 700 }}>MAIN FLOW</div>
        <div style={{ display: "flex", alignItems: "center", overflowX: "auto", gap: 0, paddingBottom: 4 }}>
          {mainFlow.map((id, i) => {
            const s = allScreens[id];
            const isActive = current === id;
            const gc = groupColors[s.group];
            return (
              <div key={id} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
                <button onClick={() => setCurrent(id)} style={{
                  display: "flex", flexDirection: "column", alignItems: "center", gap: 3,
                  padding: "4px 5px", background: "transparent", border: "none", cursor: "pointer",
                }}>
                  <div style={{
                    width: isActive ? 30 : 22, height: isActive ? 30 : 22, borderRadius: "50%",
                    background: isActive ? gc : GRAY.light,
                    border: `2px solid ${isActive ? gc : GRAY.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 7, fontWeight: 700, color: isActive ? "#fff" : GRAY.sub,
                    transition: "all 0.2s",
                  }}>{id.split("-")[1]}</div>
                  <div style={{
                    fontSize: 6.5, color: isActive ? gc : GRAY.placeholder,
                    fontWeight: isActive ? 700 : 400, whiteSpace: "nowrap", maxWidth: 48,
                    overflow: "hidden", textOverflow: "ellipsis"
                  }}>{s.title}</div>
                </button>
                {i < mainFlow.length - 1 && (
                  <div style={{ width: 12, height: 1.5, background: GRAY.border, flexShrink: 0, marginBottom: 14 }} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
