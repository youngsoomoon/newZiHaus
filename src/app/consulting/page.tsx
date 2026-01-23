import { Metadata } from "next";

export const metadata: Metadata = {
  title: "컨설팅 - 새로지윤집",
  description: "새로지윤집 인테리어 컨설팅",
};

export default function ConsultingPage() {
  const services = [
    {
      title: "전체 리모델링",
      description: "공간 전체를 새롭게 바꾸는 토탈 인테리어 서비스",
      items: ["평면 재배치", "전체 마감재 교체", "조명 설계", "가구 배치"],
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
    },
    {
      title: "부분 인테리어",
      description: "필요한 공간만 선택적으로 시공하는 맞춤 서비스",
      items: ["주방 리모델링", "욕실 리모델링", "거실/침실 인테리어", "베란다 확장"],
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80",
    },
    {
      title: "홈스타일링",
      description: "기존 공간에 새로운 감각을 더하는 스타일링 서비스",
      items: ["가구 코디네이션", "소품 스타일링", "조명 연출", "컬러 컨설팅"],
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80",
    },
  ];

  const process = [
    { step: "01", title: "상담 신청", description: "온라인/전화 상담 예약" },
    { step: "02", title: "현장 방문", description: "실측 및 요구사항 파악" },
    { step: "03", title: "디자인 제안", description: "3D 시뮬레이션 및 견적" },
    { step: "04", title: "계약 체결", description: "상세 일정 및 금액 확정" },
    { step: "05", title: "시공 진행", description: "전문 기술진 투입" },
    { step: "06", title: "완공 검수", description: "품질 확인 및 인수" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">컨설팅</h1>
            <p className="text-gray-600 text-lg">
              고객님의 라이프스타일에 맞는 최적의 공간을 제안합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-16 items-center`}
              >
                <div className="flex-1 w-full">
                  <div
                    className="aspect-[4/3] rounded-lg bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <svg
                          className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">진행 프로세스</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gray-200 mb-3">{item.step}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">무료 상담 받아보세요</h2>
          <p className="text-gray-600 mb-8">전문 상담사가 친절하게 안내해드립니다.</p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            상담 신청
          </a>
        </div>
      </section>
    </div>
  );
}
