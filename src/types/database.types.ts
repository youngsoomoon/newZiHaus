// Supabase에서 생성된 타입 정의
// npx supabase gen types typescript --local > src/types/database.types.ts 명령어로 생성 가능

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      // 여기에 테이블 타입을 추가하세요
    }
    Views: {
      // 여기에 뷰 타입을 추가하세요
    }
    Functions: {
      // 여기에 함수 타입을 추가하세요
    }
    Enums: {
      // 여기에 Enum 타입을 추가하세요
    }
  }
}
