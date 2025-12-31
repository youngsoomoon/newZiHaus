import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 회사 정보 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">새로지윤집</h3>
            <p className="text-sm text-gray-600">
              혁신적인 솔루션으로<br />
              더 나은 미래를 만들어갑니다.
            </p>
          </div>

          {/* 빠른 링크 */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900">빠른 링크</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">
                  소개
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-600 hover:text-gray-900">
                  포트폴리오
                </Link>
              </li>
              <li>
                <Link href="/consulting" className="text-gray-600 hover:text-gray-900">
                  컨설팅
                </Link>
              </li>
            </ul>
          </div>

          {/* 고객 지원 */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900">고객 지원</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                  컨택
                </Link>
              </li>
              <li>
                <Link href="/board" className="text-gray-600 hover:text-gray-900">
                  게시판
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-gray-900">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* 연락처 정보 */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900">연락처</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>이메일: info@newzihaus.com</li>
              <li>전화: 02-1234-5678</li>
              <li>주소: 서울특별시</li>
            </ul>
          </div>
        </div>

        {/* 하단 정보 */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">
              © {currentYear} 새로지윤집. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
                개인정보처리방침
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-gray-900">
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
