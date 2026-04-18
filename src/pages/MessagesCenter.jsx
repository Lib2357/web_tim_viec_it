import { useMemo, useState } from 'react'
import DashboardSidebar from '../components/DashboardSidebar.jsx'

const threads = [
  {
    id: 't1',
    name: 'Mekong Retail',
    role: 'Website E-commerce',
    unread: 2,
    lastTime: '10:24',
    lastMessage: 'Bạn có thể gửi bản demo checkout trong hôm nay không?',
    type: 'application',
  },
  {
    id: 't2',
    name: 'Nexteam',
    role: 'CRM Dashboard',
    unread: 1,
    lastTime: 'Hôm qua',
    lastMessage: 'Team đã review, cần update thêm 2 biểu đồ.',
    type: 'application',
  },
  {
    id: 't3',
    name: 'Hệ thống ChoCode',
    role: 'Thông báo hệ thống',
    unread: 0,
    lastTime: '2 ngày',
    lastMessage: 'Tài khoản của bạn vừa được nâng hạng uy tín.',
    type: 'system',
  },
]

const messagesByThread = {
  t1: [
    { from: 'client', text: 'Chào bạn, tiến độ checkout đến đâu rồi?', time: '09:58' },
    { from: 'me', text: 'Mình đã xong 72%, đang test callback thanh toán.', time: '10:05' },
    { from: 'client', text: 'Bạn có thể gửi bản demo checkout trong hôm nay không?', time: '10:24' },
  ],
  t2: [
    { from: 'client', text: 'Dashboard đã ổn, nhưng cần thêm report theo tuần.', time: 'Hôm qua' },
    { from: 'me', text: 'Đã rõ, mình sẽ cập nhật trong chiều nay.', time: 'Hôm qua' },
    { from: 'client', text: 'Team đã review, cần update thêm 2 biểu đồ.', time: 'Hôm qua' },
  ],
  t3: [{ from: 'client', text: 'Tài khoản của bạn vừa được nâng hạng uy tín.', time: '2 ngày' }],
}

const websiteNotifications = [
  { title: 'Có job mới phù hợp kỹ năng React', time: '30 phút trước', tone: 'text-blue-600' },
  { title: 'Milestone #2 sắp đến hạn trong 2 ngày', time: '3 giờ trước', tone: 'text-amber-600' },
  { title: 'Hợp đồng JOB-2403 đã được khách xác nhận', time: 'Hôm qua', tone: 'text-emerald-600' },
]

export default function MessagesCenter() {
  const [query, setQuery] = useState('')
  const [activeThreadId, setActiveThreadId] = useState('t1')

  const filteredThreads = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return threads
    return threads.filter((t) => `${t.name} ${t.role} ${t.lastMessage}`.toLowerCase().includes(q))
  }, [query])

  const activeThread = filteredThreads.find((t) => t.id === activeThreadId) || filteredThreads[0] || threads[0]
  const conversation = messagesByThread[activeThread?.id] || []

  return (
    <div className="bg-[#f7f9fc] text-on-surface">
      <DashboardSidebar activeKey="messages" />

      <main className="ml-64 h-screen overflow-hidden">
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 px-5 py-3 backdrop-blur-md">
          <h1 className="text-[22px] font-semibold text-slate-900">Tin nhắn</h1>
          <p className="mt-1 text-[14px] text-slate-500">Trao đổi ứng tuyển và theo dõi thông báo website tại một nơi</p>
        </header>

        <div className="grid h-[calc(100vh-83px)] grid-cols-1 gap-4 overflow-hidden p-5 xl:grid-cols-12">
          <section className="panel-enter flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm xl:col-span-3" style={{ animationDelay: '40ms' }}>
            <div className="border-b border-slate-100 p-3.5">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                <input
                  className="h-10 w-full rounded-lg border border-slate-300 bg-slate-50 pl-10 pr-3 text-[14px] outline-none transition focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  placeholder="Tìm hội thoại..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-2">
              {filteredThreads.map((thread) => {
                const active = activeThread?.id === thread.id
                return (
                  <button
                    key={thread.id}
                    onClick={() => setActiveThreadId(thread.id)}
                    className={`mb-1.5 w-full rounded-lg border px-3 py-2.5 text-left transition ${
                      active ? 'border-blue-200 bg-blue-50' : 'border-transparent hover:border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-[14px] font-semibold text-slate-900">{thread.name}</p>
                      <span className="text-[11px] text-slate-500">{thread.lastTime}</span>
                    </div>
                    <p className="mt-0.5 text-[12px] text-slate-500">{thread.role}</p>
                    <div className="mt-1 flex items-center justify-between gap-2">
                      <p className="line-clamp-1 text-[12px] text-slate-600">{thread.lastMessage}</p>
                      {thread.unread > 0 && <span className="rounded-full bg-blue-500 px-1.5 py-0.5 text-[10px] font-semibold text-white">{thread.unread}</span>}
                    </div>
                  </button>
                )
              })}
            </div>
          </section>

          <section
            className="panel-enter flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm xl:col-span-6"
            style={{ animationDelay: '120ms' }}
          >
            <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
              <div>
                <h2 className="text-[16px] font-semibold text-slate-900">{activeThread.name}</h2>
                <p className="text-[12px] text-slate-500">{activeThread.role}</p>
              </div>
              <button className="soft-hover rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-[12px] font-medium text-slate-600 transition hover:bg-slate-50">
                Đánh dấu đã đọc
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto bg-slate-50/60 px-4 py-4">
              {conversation.map((msg, idx) => (
                <div key={`${msg.time}-${idx}`} className={`flex ${msg.from === 'me' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-xl px-3.5 py-2.5 text-[13px] ${msg.from === 'me' ? 'bg-blue-500 text-white' : 'bg-white text-slate-700 border border-slate-200'}`}>
                    <p>{msg.text}</p>
                    <p className={`mt-1 text-[11px] ${msg.from === 'me' ? 'text-blue-100' : 'text-slate-400'}`}>{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-100 bg-white p-3.5">
              <div className="flex gap-2">
                <input className="h-10 flex-1 rounded-lg border border-slate-300 px-3 text-[14px] outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" placeholder="Nhập nội dung phản hồi..." />
                <button className="soft-hover rounded-lg bg-blue-500 px-4 text-sm font-semibold text-white transition hover:bg-blue-600">Gửi</button>
              </div>
            </div>
          </section>

          <aside className="h-full space-y-4 overflow-y-auto xl:col-span-3">
            <section className="panel-enter rounded-xl border border-slate-200 bg-white p-4 shadow-sm" style={{ animationDelay: '180ms' }}>
              <h3 className="mb-3 text-[16px] font-semibold text-slate-900">Thông báo website</h3>
              <div className="space-y-2">
                {websiteNotifications.map((item) => (
                  <article key={item.title} className="soft-hover rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5">
                    <p className="text-[13px] font-medium text-slate-700">{item.title}</p>
                    <p className={`mt-1 text-[11px] ${item.tone}`}>{item.time}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="panel-enter rounded-xl border border-emerald-100 bg-emerald-50/70 p-4 shadow-sm" style={{ animationDelay: '240ms' }}>
              <h3 className="mb-2 text-[16px] font-semibold text-emerald-900">Trạng thái ứng tuyển</h3>
              <ul className="list-disc space-y-1.5 pl-5 text-[13px] text-emerald-800">
                <li>2 job đang chờ phản hồi khách hàng</li>
                <li>1 job cần gửi bản cập nhật hôm nay</li>
                <li>1 hợp đồng vừa được xác nhận</li>
              </ul>
            </section>
          </aside>
        </div>
      </main>
    </div>
  )
}
