import { Metadata } from "next";

export const metadata: Metadata = {
  title: "소개 - 새로지윤집",
  description: "새로지윤집 소개 페이지",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">소개</h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">회사 소개</h2>
            <p className="text-gray-600 leading-relaxed">
              새로지윤집은 혁신적인 솔루션으로 더 나은 미래를 만들어가는 기업입니다.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">우리의 비전</h2>
            <p className="text-gray-600 leading-relaxed">
              고객의 성공을 위한 최고의 파트너가 되겠습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">핵심 가치</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="font-semibold mr-2">혁신:</span>
                <span>끊임없는 도전과 변화를 추구합니다.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">신뢰:</span>
                <span>고객과의 약속을 최우선으로 합니다.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">전문성:</span>
                <span>최고의 전문가 팀이 함께합니다.</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
