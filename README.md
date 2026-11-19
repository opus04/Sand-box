# 노을진 시티 · 오윤석 개인 허브

개인용 웹 허브입니다. `index.html` 한 파일로 동작하며 GitHub Pages로 제공됩니다.

## 섹션
01 MEDIA · 02 GAMING · 03 CAMPUS & SCHEDULE(달력·시간표) · 04 D-DAY & TASKS · 05 AI & TOOLS(ChatGPT · Claude)

## 배경 음악
- `bgm.mp3` — M83 "Midnight City" (128kbps MP3, 4:02, 루프 재생)
- 상단 우측 BGM 배지에서 켜기/끄기와 볼륨 조절 (볼륨·상태는 localStorage에 저장)

## 함께 배포된 하위 허브
- `/cafe/` — 비 오는 밤의 창가 (카페 창가 콘셉트 허브): https://opus04.github.io/Sand-box/cafe/
- `/space/` — 우주 정거장 집중·스터디 룸: https://opus04.github.io/Sand-box/space/

## 성능
- 배경은 정적 그라데이션 + 그룹 애니메이션만 사용합니다(별 4그룹, 창문 불빛 3그룹).
- 무거운 `backdrop-filter`, 대면적 `filter: blur`, 필터 키프레임 애니메이션을 제거했습니다.
- 우측 상단 **⚡ 경량** 토글: 배경 블러·미세 애니메이션·패럴랙스를 끄는 저사양 모드.
  설정은 `localStorage(yshub.v1.lite.on)`에 저장되어 다음 방문에도 유지됩니다.
