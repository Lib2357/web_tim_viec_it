import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const forumPosts = [
  {
    id: 'post-1',
    author: 'Phạm Minh An',
    role: 'Frontend Developer • 3 năm',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop',
    content:
      'Mình đang cân nhắc giữa 2 offer React: một bên product startup, một bên agency outsource. Với mục tiêu lên Senior trong 1-2 năm thì mọi người nghiêng về hướng nào?',
    tags: ['Career', 'ReactJS'],
    time: '20 phút trước',
    likes: 42,
    comments: 18,
    shares: 3,
  },
  {
    id: 'post-2',
    author: 'Lê Thanh Hương',
    role: 'Backend Engineer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
    content:
      'Team mình đang tuyển Node.js (mid/senior), remote 3 ngày/tuần. Có ai quan tâm mình gửi JD chi tiết nhé. Ưu tiên ứng viên từng làm hệ thống nhiều traffic.',
    tags: ['Tuyển dụng', 'Node.js'],
    time: '1 giờ trước',
    likes: 31,
    comments: 12,
    shares: 5,
  },
  {
    id: 'post-3',
    author: 'Nguyễn Đức Phúc',
    role: 'Mobile Developer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop',
    content:
      'Mình tổng hợp checklist phỏng vấn React Native (state management, performance, deep linking). Anh em cần thì mình để link tài liệu dưới comment.',
    tags: ['React Native', 'Phỏng vấn'],
    time: 'Hôm qua',
    likes: 65,
    comments: 27,
    shares: 9,
  },
]

const filterOptions = ['Tất cả', 'Tuyển dụng', 'Career', 'ReactJS', 'Node.js', 'Phỏng vấn']

export default function Discussions() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('Tất cả')

  const filteredPosts = useMemo(() => {
    const q = query.trim().toLowerCase()
    return forumPosts.filter((post) => {
      const filterOk = filter === 'Tất cả' || post.tags.includes(filter)
      if (!q) return filterOk
      return filterOk && `${post.author} ${post.content} ${(post.tags || []).join(' ')}`.toLowerCase().includes(q)
    })
  }, [query, filter])

  return (
    <div className="min-h-screen bg-[#f0f2f5] text-slate-900">
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1160px] items-center justify-between px-6 py-2.5">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center text-xl font-bold tracking-tight text-[#2b59ff]">
              <span className="material-symbols-outlined mr-1 text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                code
              </span>
              CHOCODE
            </Link>
            <span className="text-sm font-semibold text-slate-700">Diễn đàn công việc</span>
          </div>
          <Link to="/dashboard" className="rounded-lg bg-[#007bff] px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
            Dashboard
          </Link>
        </div>
      </nav>

      <main className="mx-auto grid max-w-[1160px] gap-4 px-6 py-5 xl:grid-cols-12">
        <section className="space-y-4 xl:col-span-8">
          <article className="panel-enter rounded-xl border border-slate-200 bg-white p-4 shadow-sm" style={{ animationDelay: '40ms' }}>
            <div className="flex items-start gap-3">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop"
                alt="Bạn"
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <textarea
                  className="min-h-[86px] w-full resize-none rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 text-[14px] outline-none transition focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  placeholder="Bạn đang muốn trao đổi điều gì về công việc hôm nay?"
                />
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[13px] text-slate-500">
                    <button className="rounded-lg px-2.5 py-1.5 transition hover:bg-slate-100">Ảnh</button>
                    <button className="rounded-lg px-2.5 py-1.5 transition hover:bg-slate-100">Khảo sát</button>
                    <button className="rounded-lg px-2.5 py-1.5 transition hover:bg-slate-100">Tag kỹ năng</button>
                  </div>
                  <button className="soft-hover rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600">Đăng bài</button>
                </div>
              </div>
            </div>
          </article>

          <section className="panel-enter rounded-xl border border-slate-200 bg-white p-4 shadow-sm" style={{ animationDelay: '80ms' }}>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_220px]">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                <input
                  className="h-10 w-full rounded-lg border border-slate-300 bg-slate-50 pl-10 pr-3 text-[14px] outline-none transition focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  placeholder="Tìm bài viết trong diễn đàn..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <select
                className="h-10 rounded-lg border border-slate-300 bg-white px-3 text-[14px] outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                {filterOptions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </section>

          <section className="space-y-3">
            {filteredPosts.map((post, idx) => (
              <article key={post.id} className="panel-enter rounded-xl border border-slate-200 bg-white p-4 shadow-sm" style={{ animationDelay: `${110 + idx * 40}ms` }}>
                <div className="mb-3 flex items-start gap-3">
                  <img src={post.avatar} alt={post.author} className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <p className="text-[14px] font-semibold text-slate-900">{post.author}</p>
                    <p className="text-[12px] text-slate-500">{post.role} • {post.time}</p>
                  </div>
                </div>

                <p className="text-[14px] leading-6 text-slate-700">{post.content}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600">#{tag}</span>
                  ))}
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3 text-[12px] text-slate-500">
                  <span>{post.likes} lượt thích • {post.comments} bình luận</span>
                  <span>{post.shares} chia sẻ</span>
                </div>

                <div className="mt-2 grid grid-cols-3 gap-2 border-t border-slate-100 pt-2">
                  <button className="soft-hover rounded-lg px-3 py-2 text-[13px] font-medium text-slate-600 transition hover:bg-slate-50">Thích</button>
                  <button className="soft-hover rounded-lg px-3 py-2 text-[13px] font-medium text-slate-600 transition hover:bg-slate-50">Bình luận</button>
                  <button className="soft-hover rounded-lg px-3 py-2 text-[13px] font-medium text-slate-600 transition hover:bg-slate-50">Chia sẻ</button>
                </div>
              </article>
            ))}

            {filteredPosts.length === 0 && (
              <div className="rounded-xl border border-slate-200 bg-white py-12 text-center text-[14px] text-slate-500">Không có bài viết phù hợp bộ lọc hiện tại.</div>
            )}
          </section>
        </section>

        <aside className="space-y-4 xl:col-span-4">
          <section className="panel-enter rounded-xl border border-slate-200 bg-white p-4 shadow-sm" style={{ animationDelay: '100ms' }}>
            <h3 className="mb-3 text-[17px] font-semibold text-slate-900">Bài viết nổi bật</h3>
            <div className="space-y-2.5">
              {forumPosts.slice(0, 3).map((item) => (
                <article key={item.id} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5">
                  <p className="text-[13px] font-semibold text-slate-800 line-clamp-2">{item.content}</p>
                  <p className="mt-1 text-[12px] text-slate-500">{item.author} • {item.time}</p>
                </article>
              ))}
            </div>
          </section>
        </aside>
      </main>
    </div>
  )
}
