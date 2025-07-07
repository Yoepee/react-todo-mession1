# 📝 React Todo App

할 일 목록을 간단하고 직관적으로 관리할 수 있는 Todo 애플리케이션입니다.  
**TypeScript + Zustand + Tailwind CSS**를 기반으로 구성되었으며,  
**Intro → Todo** 라우팅 구조, **localStorage를 통한 데이터 영속성**,  
**모듈화된 컴포넌트 & 커스텀 Hook** 설계가 특징입니다.

---

## ✨ 주요 기능

-   ✅ 할 일 추가, 수정, 삭제
-   🗂️ 할 일 완료 여부 체크
-   🔄 새로고침에도 유지되는 `localStorage` 기반 데이터 저장
-   ⚡ 전역 상태 관리를 위한 `Zustand` 도입
-   🛡️ 타입 안정성을 위한 `TypeScript` 사용
-   🔀 `Intro 페이지 → Todo 페이지`로 라우팅
-   🧩 컴포넌트/로직 분리 및 커스텀 Hook 구조화
-   🎨 Tailwind CSS를 통한 반응형 UI

---

## 📸 페이지 미리보기

### 🖼️ Intro

![Intro](https://github.com/user-attachments/assets/87094e96-934b-4d43-84d1-7edab9fffcf7)

### ✅ Todo List

![TodoPage](https://github.com/user-attachments/assets/ef456bb2-6d2a-435a-b231-8aaba4c7f345)

---

## ⚙️ 기술 스택

| 기술         | 설명                                       |
| ------------ | ------------------------------------------ |
| React        | UI 라이브러리                              |
| TypeScript   | 정적 타입 언어                             |
| Zustand      | 가벼운 전역 상태 관리 라이브러리           |
| React Router | 페이지 라우팅 처리                         |
| Tailwind CSS | 유틸리티 기반 CSS 프레임워크               |
| localStorage | 브라우저 저장소 (데이터 영속성 확보)       |
| Vite         | 빠른 개발 서버 및 번들러 (프론트엔드 환경) |

---

## 📁 프로젝트 구조 (예시)

```
src/
├── components/         # 재사용 가능한 UI 컴포넌트
│   └── TodoList
│       └── TodoItem.tsx
│       └── TodoList.tsx
│   └── TodoSubmitForm
│       └── TodoSubmitForm.tsx
├── hooks/              # 커스텀 훅
│ └── useTodos.ts
│ └── useBoolean.ts
│ └── useLocalStorage.ts
├── store/              # Zustand 기반 상태관리
│ └── useTodoStore.ts
├── interfaces/ # 타입
│ └── todo.ts
├── contexts/           # Context API 관련 로직
│ └── TodoContext.ts
│ └── TodoProvider.ts
├── consts/             # 공통 상수 값
│ └── index.ts
├── pages/              # 페이지 컴포넌트
│ └── Intro.ts
│ └── TodoPage.ts
├── .prettierrc         # Prettier 설정
├── tailwind.config.js  # Tailwind 설정
├── App.tsx             # 라우팅 구성
└── main.tsx            # 엔트리포인트
```

---

## 🚀 실행 방법

```bash
# 패키지 설치
npm install

# 로컬 실행
npm run dev
```
