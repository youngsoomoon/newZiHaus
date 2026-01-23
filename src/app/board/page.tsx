import { Metadata } from "next";

export const metadata: Metadata = {
  title: "게시판 - 새로지윤집",
  description: "새로지윤집 공지사항 및 시공후기",
};

const posts = [
  {
    id: 1,
    category: "공지",
    title: "2026년 설 연휴 휴무 안내",
    date: "2026-01-20",
    thumbnail: null,
  },
  {
    id: 2,
    category: "시공후기",
    title: "강남구 32평 아파트 전체 리모델링 후기",
    date: "2026-01-18",
    thumbnail: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&q=80",
  },
  {
    id: 3,
    category: "시공후기",
    title: "분당 45평 주방·거실 인테리어 완료",
    date: "2026-01-15",
    thumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80",
  },
  {
    id: 4,
    category: "공지",
    title: "신규 파트너 자재 업체 안내",
    date: "2026-01-10",
    thumbnail: null,
  },
  {
    id: 5,
    category: "시공후기",
    title: "마포구 24평 신혼집 인테리어",
    date: "2026-01-08",
    thumbnail: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80",
  },
  {
    id: 6,
    category: "시공후기",
    title: "용산구 펜트하우스 럭셔리 인테리어",
    date: "2026-01-05",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80",
  },
];

export default function BoardPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">게시판</h1>
            <p className="text-gray-600 text-lg">
              공지사항과 시공 후기를 확인하세요.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex gap-8">
            <button className="py-4 text-sm font-medium border-b-2 border-gray-900">
              전체
            </button>
            <button className="py-4 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors">
              공지사항
            </button>
            <button className="py-4 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors">
              시공후기
            </button>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group cursor-pointer"
              >
                {/* Thumbnail */}
                <div className="aspect-[16/10] rounded-lg overflow-hidden mb-4 bg-gray-100">
                  {post.thumbnail ? (
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${post.thumbnail})` }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-gray-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded ${
                        post.category === "공지"
                          ? "bg-gray-900 text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-400">{post.date}</span>
                  </div>
                  <h3 className="font-medium group-hover:text-gray-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-16 flex justify-center">
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-900 text-white text-sm font-medium">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-sm">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-sm">
                3
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
