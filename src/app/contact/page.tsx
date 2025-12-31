import { Metadata } from "next";

export const metadata: Metadata = {
  title: "컨택 - 새로지윤집",
  description: "새로지윤집 연락처",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">컨택</h1>
        <p className="text-gray-600 mb-12">
          궁금한 사항이 있으시면 언제든 연락주세요.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 연락처 정보 */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">이메일</h3>
              <p className="text-gray-600">info@newzihaus.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">전화</h3>
              <p className="text-gray-600">02-1234-5678</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">주소</h3>
              <p className="text-gray-600">
                서울특별시<br />
                (우) 12345
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">운영 시간</h3>
              <p className="text-gray-600">
                평일 09:00 - 18:00<br />
                주말 및 공휴일 휴무
              </p>
            </div>
          </div>

          {/* 문의 폼 */}
          <div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="이름을 입력하세요"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="이메일을 입력하세요"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  메시지
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="메시지를 입력하세요"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                문의하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
