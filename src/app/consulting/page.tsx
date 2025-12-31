import { Metadata } from "next";

export const metadata: Metadata = {
  title: "컨설팅 - 새로지윤집",
  description: "새로지윤집 컨설팅 서비스",
};

export default function ConsultingPage() {
  const services = [
    {
      title: "전략 컨설팅",
      description: "비즈니스 전략 수립 및 실행 지원",
      features: ["시장 분석", "경쟁사 분석", "전략 수립"],
    },
    {
      title: "디지털 전환",
      description: "디지털 혁신을 위한 컨설팅",
      features: ["프로세스 혁신", "시스템 구축", "변화 관리"],
    },
    {
      title: "운영 최적화",
      description: "업무 프로세스 개선 및 효율화",
      features: ["프로세스 분석", "업무 자동화", "성과 관리"],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">컨설팅</h1>
        <p className="text-gray-600 mb-12">
          전문적인 컨설팅 서비스로 귀사의 성장을 돕겠습니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 border rounded-lg hover:border-blue-500 transition-colors"
            >
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-blue-500 mr-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
