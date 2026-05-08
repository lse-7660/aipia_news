# 🚀 AIPIA NEWS (Hacker News Client)

## 🛠 Tech Stack

### Next.js (App Router)

### Redux Toolkit & RTK Query

    - RTK Query: API 호출 구조(ID 리스트 조회 후 개별 아이템 상세 조회)를 효율적으로 관리하고, 자동 캐싱 기능을 통해 불필요한 네트워크 요청을 줄이기 위해 도입했습니다.
    - 전역 상태 관리: 상세 페이지에서 '뒤로가기'를 했을 때, 사용자가 이전에 선택한 탭과 스크롤 위치(불러온 데이터 개수)를 그대로 유지하는 UX 일관성을 위해 Redux를 활용했습니다.

### Tailwind CSS v4

---

## Key Features

- Tab-Persistent State: 상세 페이지 방문 후 뒤로가기 시에도 선택했던 카테고리와 로딩된 리스트 상태가 전역 상태 관리를 통해 보존됩니다.
- Infinite Scrolling: 사용자가 리스트 끝에 도달하면 `Intersection Observer`가 감지하여 자동으로 다음 20개의 아이템을 렌더링합니다.
- Responsive Layout: Tailwind v4를 활용하여 모바일, 태블릿, 데스크탑 환경에서 최적화된 화면을 제공합니다.
