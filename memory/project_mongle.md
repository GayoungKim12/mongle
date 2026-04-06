---
name: mongle 프로젝트 개요
description: mongle — AI 감정 일기 앱의 핵심 기획, 기술 스택, 디자인 원칙
type: project
---

mongle은 사용자가 감정을 텍스트로 입력하면 AI가 공감 메시지·에세이·음악·영상을 생성해 돌려주는 모바일 퍼스트 웹앱이다.

**Why:** 감정 기록 → 이해 → 위로 → 회복의 전체 경험을 소프트한 워터컬러 UI로 제공하는 것이 목표.

**How to apply:** 기능 추가/수정 시 "회복 경험"을 해치지 않는지 항상 확인. 콘텐츠 추천 수(음악 2, 영상 2)는 절대 초과하지 않는다.

## 확정 기술 스택
- Next.js (App Router) + TypeScript
- Zustand (클라이언트 상태)
- TanStack Query v5 (서버 상태)
- Tailwind CSS + Framer Motion
- Claude API — AI Streaming UI
- Debounce 입력 / Optimistic UI 패턴

## 화면 구성
1. `/write` — 감정 작성 페이지 (텍스트 입력 → "☁️ 구름 만들기" CTA)
2. `/result` — 감정 결과 페이지 (공감 캐릭터 → 공감 텍스트 → 에세이 → 음악 → 영상)

## 공감 캐릭터
- 👶 어린이 / 👩 엄마 / 👨 아빠
- 선택에 따라 AI 응답 톤이 바뀜

## 디자인 키워드
soft, warm, floating, calm, emotional, watercolor, cloud-like, minimal, healing

## 색상 팔레트
- #FADADD (라이트 핑크)
- #E6D6FF (라이트 퍼플)
- #CBB8FF (소프트 퍼플)
- #DFF4FF (라이트 블루 액센트)
