// 유틸리티 함수들을 여기에 추가하세요

/**
 * 클래스 이름을 조건부로 결합하는 유틸리티 함수
 * 사용 예: cn('base-class', condition && 'conditional-class')
 */
export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ')
}
