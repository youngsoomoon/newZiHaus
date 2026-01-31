import HeroSlider from "@/components/HeroSlider";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "은평구 응암동 32평 리모델링",
    area: "32평",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
  },
  {
    id: 2,
    title: "성남시 분당구 45평 부분공사",
    area: "45평",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    id: 3,
    title: "강남구 대치동 28평 전체공사",
    area: "28평",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  },
  {
    id: 4,
    title: "마포구 연남동 24평 리노베이션",
    area: "24평", 
    year: "2023",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
];

export default function Home() {
  return (
    <div>
      {/* 기존 HeroSlider 유지 */}
      <HeroSlider />
      
      {/* We are 섹션 - ilhada.com 스타일 */}
      <section className="px-6 py-16 md:px-12 lg:px-24 xl:px-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 text-gray-900 leading-tight">
                We are <span className="font-medium">새로지윤집</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                주거 공간을 삶을 변화시키는 무대로 생각합니다. 
                고객의 라이프스타일과 공간의 특성을 깊이 이해하여 
                최적의 솔루션을 제안합니다.
              </p>
              <Link
                href="/about"
                className="inline-block text-sm tracking-wider text-gray-900 border-b border-gray-300 hover:border-gray-900 transition-colors pb-1"
              >
                more
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80"
                alt="Interior Design"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Selected Projects 섹션 */}
      <section className="px-6 py-16 md:px-12 lg:px-24 xl:px-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-light mb-12 text-gray-900">
            Selected Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                href="/portfolio"
                className="group block"
              >
                <div className="relative overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {project.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>{project.area}</span>
                  <span>{project.year}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process 섹션 */}
      <section className="px-6 py-16 md:px-12 lg:px-24 xl:px-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80"
                alt="Work Process"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-light mb-8 text-gray-900">
                Our Process
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                체계적인 프로세스를 통해 고객의 요구사항을 정확히 파악하고, 
                최상의 결과물을 만들어냅니다. 상담부터 시공완료까지 
                투명하고 신뢰할 수 있는 서비스를 제공합니다.
              </p>
              <Link
                href="/consulting"
                className="inline-block text-sm tracking-wider text-gray-900 border-b border-gray-300 hover:border-gray-900 transition-colors pb-1"
              >
                more
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
