# 새로지윤집

Next.js와 Supabase 기반 웹 애플리케이션

## 기술 스택

- **프레임워크**: Next.js 16.1.1 (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS 4
- **데이터베이스/인증**: Supabase
- **패키지 매니저**: npm

## 프로젝트 구조

```
newzihaus/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── about/                    # 소개 페이지
│   │   │   └── page.tsx
│   │   ├── board/                    # 게시판 페이지
│   │   │   └── page.tsx
│   │   ├── consulting/               # 컨설팅 페이지
│   │   │   └── page.tsx
│   │   ├── contact/                  # 컨택 페이지
│   │   │   └── page.tsx
│   │   ├── portfolio/                # 포트폴리오 페이지
│   │   │   └── page.tsx
│   │   ├── layout.tsx                # 루트 레이아웃 (Header, Footer 포함)
│   │   └── page.tsx                  # 홈 페이지
│   │
│   ├── components/                   # 재사용 가능한 컴포넌트
│   │   ├── features/                 # 기능별 컴포넌트
│   │   │   ├── Footer.tsx            # 푸터 컴포넌트
│   │   │   └── Header.tsx            # 헤더 및 네비게이션 컴포넌트
│   │   └── ui/                       # 기본 UI 컴포넌트
│   │
│   ├── lib/                          # 유틸리티 및 라이브러리
│   │   ├── supabase/                 # Supabase 클라이언트 설정
│   │   │   ├── client.ts             # 클라이언트용 Supabase 클라이언트
│   │   │   ├── server.ts             # 서버용 Supabase 클라이언트
│   │   │   └── middleware.ts         # 미들웨어용 Supabase 설정
│   │   └── utils.ts                  # 공통 유틸리티 함수
│   │
│   ├── hooks/                        # 커스텀 React Hooks
│   │
│   ├── types/                        # TypeScript 타입 정의
│   │   └── database.types.ts         # Supabase 데이터베이스 타입
│   │
│   ├── styles/                       # 스타일 파일
│   │   └── globals.css               # 전역 스타일 (Tailwind CSS 포함)
│   │
│   └── middleware.ts                 # Next.js 미들웨어 (인증 처리)
│
├── public/                           # 정적 파일 (이미지, 폰트 등)
│
├── .env.local                        # 환경 변수 (Git에서 제외)
├── .env.example                      # 환경 변수 예시
├── .gitignore                        # Git 제외 파일 목록
├── eslint.config.json                # ESLint 설정
├── next.config.ts                    # Next.js 설정
├── package.json                      # 프로젝트 의존성
├── postcss.config.mjs                # PostCSS 설정 (Tailwind CSS)
├── tailwind.config.ts                # Tailwind CSS 설정
└── tsconfig.json                     # TypeScript 설정
```

## 주요 기능

### 페이지 구조

- **홈** (`/`) - 메인 랜딩 페이지
  - Hero 섹션
  - 서비스 소개
  - CTA(Call To Action) 섹션

- **소개** (`/about`) - 회사 소개 페이지
  - 회사 소개
  - 비전
  - 핵심 가치

- **포트폴리오** (`/portfolio`) - 프로젝트 포트폴리오
  - 프로젝트 목록 (그리드 레이아웃)

- **컨설팅** (`/consulting`) - 컨설팅 서비스 소개
  - 전략 컨설팅
  - 디지털 전환
  - 운영 최적화

- **컨택** (`/contact`) - 연락처 및 문의
  - 연락처 정보
  - 문의 폼

- **게시판** (`/board`) - 게시판
  - 게시글 목록 (테이블 형식)
  - 페이지네이션

### 레이아웃

- **Header**: 상단 고정 네비게이션
  - 로고 (좌측)
  - 메뉴: 소개, 포트폴리오, 컨설팅, 컨택, 게시판
  - 반응형 디자인 (모바일 메뉴 버튼)

- **Footer**: 4단 그리드 레이아웃
  - 회사 정보
  - 빠른 링크
  - 고객 지원
  - 연락처 정보
  - 저작권 및 약관 링크

### Supabase 통합

- **인증**: 미들웨어를 통한 세션 관리
- **데이터베이스**: PostgreSQL (Row Level Security)
- **클라이언트 구분**:
  - 클라이언트 컴포넌트: `src/lib/supabase/client.ts`
  - 서버 컴포넌트: `src/lib/supabase/server.ts`
  - 미들웨어: `src/lib/supabase/middleware.ts`

## 시작하기

### 필수 요구사항

- Node.js 18.17 이상
- npm 또는 yarn

### 설치

1. 의존성 설치:
```bash
npm install
```

2. 환경 변수 설정:
`.env.local` 파일에 Supabase 정보를 입력하세요:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Supabase 프로젝트가 없다면:
- https://supabase.com 에서 무료 프로젝트 생성
- Project Settings > API 에서 URL과 anon key 확인

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 열기

### 빌드

프로덕션 빌드:
```bash
npm run build
```

프로덕션 서버 실행:
```bash
npm start
```

### 린트

```bash
npm run lint
```

## 개발 가이드

### 새 페이지 추가

1. `src/app/` 디렉토리에 폴더 생성
2. `page.tsx` 파일 생성
3. 필요시 Header 컴포넌트의 네비게이션 메뉴에 추가

### 컴포넌트 작성

- **UI 컴포넌트**: `src/components/ui/`에 추가
- **기능별 컴포넌트**: `src/components/features/`에 추가

### Supabase 데이터베이스 타입 생성

```bash
npx supabase gen types typescript --local > src/types/database.types.ts
```

## 환경 변수

### 필수 환경 변수

- `NEXT_PUBLIC_SUPABASE_URL`: Supabase 프로젝트 URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Supabase anon/public key

### 선택 환경 변수

추가 환경 변수는 `.env.example` 파일 참조

## 배포

### Vercel (권장)

1. GitHub 저장소에 푸시
2. [Vercel](https://vercel.com)에서 프로젝트 임포트
3. 환경 변수 설정
4. 배포

### 기타 플랫폼

Next.js는 다양한 플랫폼에 배포 가능:
- Netlify
- AWS Amplify
- Docker

자세한 내용은 [Next.js 배포 문서](https://nextjs.org/docs/deployment) 참조

## 라이선스

ISC

## 문의

- 이메일: info@newzihaus.com
- 전화: 02-1234-5678
