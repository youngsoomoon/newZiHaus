import { Metadata } from "next";

export const metadata: Metadata = {
  title: "포트폴리오 - 새로지윤집",
  description: "새로지윤집 포트폴리오",
};

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "프로젝트 1",
      description: "프로젝트 설명이 들어갑니다.",
      category: "웹 개발",
    },
    {
      id: 2,
      title: "프로젝트 2",
      description: "프로젝트 설명이 들어갑니다.",
      category: "앱 개발",
    },
    {
      id: 3,
      title: "프로젝트 3",
      description: "프로젝트 설명이 들어갑니다.",
      category: "컨설팅",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">포트폴리오</h1>
        <p className="text-gray-600 mb-12">
          우리가 진행한 프로젝트를 확인해보세요.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-gray-200"></div>
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
