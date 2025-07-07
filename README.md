# 📝 React Todo App

간단하고 직관적인 Todo List 애플리케이션입니다.  
할 일 추가, 수정, 삭제 기능을 제공하며, 새로고침 시에도 유지되도록 `localStorage`를 활용했습니다.

---

## ✨ 주요 기능

-   ✅ 할 일 추가, 수정, 삭제
-   🗂️ 할 일 완료 여부 체크
-   🔄 새로고침에도 유지되는 `localStorage` 기반 데이터 저장
-   ⚡ 전역 상태 관리를 위한 `Zustand` 도입
-   🛡️ 타입 안정성을 위한 `TypeScript` 사용

---

## ⚙️ 기술 스택

| 기술         | 설명                                            |
| ------------ | ----------------------------------------------- |
| React        | UI 라이브러리                                   |
| TypeScript   | 정적 타입 언어                                  |
| Zustand      | 간단하고 가벼운 전역 상태 관리 도구             |
| localStorage | 데이터 영속성 확보 (브라우저 저장소)            |
| Vite         | 빠른 개발 서버 및 빌드 도구 (프론트엔드 번들러) |

---

## 📁 프로젝트 구조 (예시)

```
src/
├── components/ # 컴포넌트
│   └── TodoList
│       └── TodoItem.tsx
│       └── TodoList.tsx
│   └── TodoSubmitForm
│       └── TodoSubmitForm.tsx
├── hooks/ # 커스텀 Hook
│ └── useTodos.ts
│ └── useBoolean.ts
│ └── useLocalStorage.ts
├── store/ # 전역 상태관리
│ └── useTodoStore.ts
├── interfaces/ # 타입
│ └── todo.ts
├── contexts/ # Context API
│ └── TodoContext.ts
│ └── TodoProvider.ts
├── consts/ # 상수 값
│ └── index.ts
├── .prettierrc # prettier 옵션
├── tailwind.config.js # tailwind 설정
├── App.tsx
└── main.tsx
```

---

## 🚀 실행 방법

```bash
# 패키지 설치
npm install

# 로컬 실행
npm run dev
```
