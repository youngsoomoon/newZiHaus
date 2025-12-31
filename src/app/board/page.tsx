import { Metadata } from "next";

export const metadata: Metadata = {
  title: "게시판 - 새로지윤집",
  description: "새로지윤집 게시판",
};

export default function BoardPage() {
  const posts = [
    {
      id: 1,
      title: "첫 번째 게시글입니다",
      author: "관리자",
      date: "2025-01-01",
      views: 123,
    },
    {
      id: 2,
      title: "공지사항",
      author: "관리자",
      date: "2025-01-02",
      views: 456,
    },
    {
      id: 3,
      title: "자주 묻는 질문",
      author: "관리자",
      date: "2025-01-03",
      views: 789,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">게시판</h1>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            글쓰기
          </button>
        </div>

        <div className="bg-white border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 w-20">
                  번호
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  제목
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 w-32">
                  작성자
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 w-32">
                  작성일
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 w-24">
                  조회수
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50 cursor-pointer">
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {post.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {post.title}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {post.author}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {post.date}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {post.views}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 페이지네이션 */}
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2">
            <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
              이전
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              1
            </button>
            <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
              2
            </button>
            <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
              3
            </button>
            <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
              다음
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
