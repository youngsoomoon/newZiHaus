import { Metadata } from "next";

export const metadata: Metadata = {
  title: "포트폴리오 - 새로지윤집",
  description: "새로지윤집 시공 사례",
};

const projects = [
  {
    id: 1,
    title: "모던 미니멀 아파트",
    location: "서울시 강남구",
    size: "32평",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    category: "아파트",
  },
  {
    id: 2,
    title: "내추럴 우드 인테리어",
    location: "경기도 분당구",
    size: "45평",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    category: "아파트",
  },
  {
    id: 3,
    title: "화이트톤 신혼집",
    location: "서울시 마포구",
    size: "24평",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    category: "아파트",
  },
  {
    id: 4,
    title: "럭셔리 펜트하우스",
    location: "서울시 용산구",
    size: "65평",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    category: "펜트하우스",
  },
  {
    id: 5,
    title: "복층 빌라 리모델링",
    location: "서울시 성북구",
    size: "38평",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
    category: "빌라",
  },
  {
    id: 6,
    title: "오피스텔 원룸 인테리어",
    location: "서울시 영등포구",
    size: "12평",
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&q=80",
    category: "오피스텔",
  },
];

export default function PortfolioPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">포트폴리오</h1>
            <p className="text-gray-600 text-lg">
              새로지윤집이 완성한 공간들을 만나보세요.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium bg-white/90 backdrop-blur-sm rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-1 group-hover:text-gray-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {project.location} · {project.size}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            나만의 공간을 만들고 싶으신가요?
          </h2>
          <p className="text-gray-400 mb-8">
            무료 상담을 통해 견적을 받아보세요.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            상담 신청하기
          </a>
        </div>
      </section>
    </div>
  );
}
