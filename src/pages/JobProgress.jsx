import { useMemo, useState } from 'react'
import DashboardSidebar from '../components/DashboardSidebar.jsx'

const jobs = [
  {
    id: 'JOB-2401',
    project: 'Website E-commerce',
    client: 'Mekong Retail',
    task: 'Hoàn thiện module checkout và tích hợp VNPay',
    status: 'Đang thực hiện',
    progress: 72,
    startDate: '2026-04-01',
    deadline: '2026-04-20',
    assignee: 'Bạn',
    priority: 'Cao',
    updatedAt: '2026-04-15 10:30',
  },
  {
    id: 'JOB-2402',
    project: 'CRM Dashboard',
    client: 'Nexteam',
    task: 'Thiết kế analytics chart và export report',
    status: 'Xem xét',
    progress: 40,
    startDate: '2026-04-05',
    deadline: '2026-04-22',
    assignee: 'Bạn',
    priority: 'Trung bình',
    updatedAt: '2026-04-14 16:20',
  },
  {
    id: 'JOB-2403',
    project: 'App Booking',
    client: 'GoTravel',
    task: 'Sửa lỗi đồng bộ lịch và tối ưu hiệu năng',
    status: 'Hoàn thành',
    progress: 100,
    startDate: '2026-03-18',
    deadline: '2026-04-10',
    assignee: 'Bạn',
    priority: 'Cao',
    updatedAt: '2026-04-10 18:05',
  },
  {
    id: 'JOB-2404',
    project: 'Milestone Payment API',
    client: 'Finverse',
    task: 'Refactor service và bổ sung test coverage',
    status: 'Quá hạn',
    progress: 58,
    startDate: '2026-03-25',
    deadline: '2026-04-12',
    assignee: 'Bạn',
    priority: 'Cao',
    updatedAt: '2026-04-13 09:10',
  },
]

const statusOptions = ['Tất cả', 'Đang thực hiện', 'Xem xét', 'Hoàn thành', 'Quá hạn']

const timeline = [
  { title: 'Checkout module đạt 72%', time: '2 giờ trước', tone: 'text-blue-600' },
  { title: 'Khách hàng Nexteam phản hồi vòng review #2', time: 'Hôm qua', tone: 'text-amber-600' },
  { title: 'Bàn giao App Booking thành công', time: '6 ngày trước', tone: 'text-emerald-600' },
]

function daysLeft(deadline) {
  const now = new Date('2026-04-16T00:00:00')
  const end = new Date(`${deadline}T00:00:00`)
  return Math.ceil((end - now) / (1000 * 60 * 60 * 24))
}

function progressTone(value) {
  if (value >= 100) return 'bg-emerald-500'
  if (value >= 70) return 'bg-blue-500'
  if (value >= 40) return 'bg-amber-500'
  return 'bg-rose-500'
}

function statusTone(status) {
  if (status === 'Hoàn thành') return 'bg-emerald-50 text-emerald-700'
  if (status === 'Đang thực hiện') return 'bg-blue-50 text-blue-700'
  if (status === 'Xem xét') return 'bg-amber-50 text-amber-700'
  return 'bg-rose-50 text-rose-700'
}

export default function JobProgress() {
  const [status, setStatus] = useState('Tất cả')
  const [search, setSearch] = useState('')

  const filteredJobs = useMemo(() => {
    const q = search.trim().toLowerCase()
    return jobs.filter((item) => {
      const statusOk = status === 'Tất cả' || item.status === status
      if (!q) return statusOk
      const hit = `${item.project} ${item.task} ${item.client} ${item.id}`.toLowerCase().includes(q)
      return statusOk && hit
    })
  }, [status, search])

  const stats = useMemo(() => {
    const total = jobs.length
    const done = jobs.filter((j) => j.status === 'Hoàn thành').length
    const inProgress = jobs.filter((j) => j.status === 'Đang thực hiện').length
    const overdue = jobs.filter((j) => j.status === 'Quá hạn').length
    const avg = total ? Math.round(jobs.reduce((sum, j) => sum + j.progress, 0) / total) : 0
    return { total, done, inProgress, overdue, avg }
  }, [])

  return (
    <div className="bg-[#f7f9fc] text-on-surface">
      <DashboardSidebar activeKey="job-progress" />

      <main className="ml-64 min-h-screen">
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 px-5 py-3 backdrop-blur-md">
          <h1 className="text-[22px] font-semibold text-slate-900">Tiến độ công việc</h1>
          <p className="mt-1 text-[14px] text-slate-500">Theo dõi trạng thái, deadline và mức độ hoàn thành theo từng job</p>
        </header>

        <div className="space-y-4 p-5">
          <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
            {[
              ['Tổng công việc', stats.total, 'work', 'bg-blue-50 text-blue-600'],
              ['Đang thực hiện', stats.inProgress, 'schedule', 'bg-indigo-50 text-indigo-600'],
              ['Hoàn thành', stats.done, 'check_circle', 'bg-emerald-50 text-emerald-600'],
              ['Quá hạn', stats.overdue, 'warning', 'bg-rose-50 text-rose-600'],
              ['Trung bình', `${stats.avg}%`, 'query_stats', 'bg-amber-50 text-amber-600'],
            ].map(([label, value, icon, tone], idx) => (
              <article key={label} className="panel-enter soft-hover rounded-xl border border-slate-200 bg-white p-4 shadow-sm" style={{ animationDelay: `${40 + idx * 60}ms` }}>
                <div className="flex items-start gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${tone}`}>
                    <span className="material-symbols-outlined text-[20px]">{icon}</span>
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-slate-500">{label}</p>
                    <p className="mt-1 text-[27px] font-bold leading-none text-slate-900">{value}</p>
                  </div>
                </div>
              </article>
            ))}
          </section>

          <section className="panel-enter rounded-xl border border-slate-200 bg-white p-4 shadow-sm" style={{ animationDelay: '220ms' }}>
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-12">
              <div className="relative lg:col-span-7">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                <input
                  className="h-11 w-full rounded-lg border border-slate-300 bg-slate-50 pl-10 pr-3 text-[14px] text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  placeholder="Tìm theo mã job, dự án, khách hàng..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className="relative lg:col-span-3">
                <select
                  className="h-11 w-full appearance-none rounded-lg border border-slate-300 bg-white px-3.5 text-[14px] text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  {statusOptions.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">expand_more</span>
              </div>
              <button
                className="soft-hover h-11 rounded-lg border border-slate-300 bg-white px-3 text-[14px] font-medium text-slate-600 transition hover:bg-slate-50 lg:col-span-2"
                onClick={() => {
                  setStatus('Tất cả')
                  setSearch('')
                }}
              >
                Đặt lại bộ lọc
              </button>
            </div>
          </section>

          <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
            <section className="panel-enter xl:col-span-8" style={{ animationDelay: '300ms' }}>
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-100 px-5 py-3.5">
                  <h2 className="text-[18px] font-semibold text-slate-900">Danh sách theo dõi</h2>
                </div>
                <div className="divide-y divide-slate-100">
                  {filteredJobs.map((job) => {
                    const left = daysLeft(job.deadline)
                    return (
                      <article key={job.id} className="soft-hover px-5 py-4">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="text-[15px] font-semibold text-slate-900">{job.project}</h3>
                              <span className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-500">{job.id}</span>
                              <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${statusTone(job.status)}`}>{job.status}</span>
                            </div>
                            <p className="mt-1 text-[13px] text-slate-600">{job.task}</p>
                            <p className="mt-1 text-[12px] text-slate-500">Khách hàng: {job.client} • Cập nhật: {job.updatedAt}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-[12px] text-slate-500">Deadline</p>
                            <p className={`text-[13px] font-semibold ${left < 0 ? 'text-rose-600' : left <= 3 ? 'text-amber-600' : 'text-slate-700'}`}>
                              {left < 0 ? `Trễ ${Math.abs(left)} ngày` : `Còn ${left} ngày`}
                            </p>
                          </div>
                        </div>

                        <div className="mt-3">
                          <div className="mb-1.5 flex items-center justify-between text-[12px]">
                            <span className="text-slate-500">Tiến độ</span>
                            <span className="font-semibold text-slate-700">{job.progress}%</span>
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                            <div className={`h-full rounded-full ${progressTone(job.progress)}`} style={{ width: `${job.progress}%` }} />
                          </div>
                        </div>
                      </article>
                    )
                  })}
                  {filteredJobs.length === 0 && (
                    <div className="py-12 text-center text-[14px] text-slate-500">Không có công việc phù hợp bộ lọc hiện tại.</div>
                  )}
                </div>
              </div>
            </section>

            <aside className="space-y-4 xl:col-span-4">
              <section className="panel-enter rounded-xl border border-slate-200 bg-white p-4 shadow-sm" style={{ animationDelay: '360ms' }}>
                <h3 className="mb-3 text-[17px] font-semibold text-slate-900">Nhật ký tiến độ</h3>
                <div className="space-y-2">
                  {timeline.map((item) => (
                    <article key={item.title} className="soft-hover rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5">
                      <p className="text-[13px] font-medium text-slate-700">{item.title}</p>
                      <p className={`mt-1 text-[12px] ${item.tone}`}>{item.time}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="panel-enter rounded-xl border border-amber-100 bg-amber-50/70 p-4 shadow-sm" style={{ animationDelay: '420ms' }}>
                <h3 className="mb-2 text-[17px] font-semibold text-amber-900">Cảnh báo deadline</h3>
                <ul className="list-disc space-y-1.5 pl-5 text-[13px] text-amber-800">
                  <li>Ưu tiên xử lý các job còn dưới 3 ngày.</li>
                  <li>Cập nhật tiến độ mỗi cuối ngày để tránh trễ hạn.</li>
                  <li>Chốt phạm vi task trước khi chuyển trạng thái hoàn thành.</li>
                </ul>
              </section>
            </aside>
          </div>
        </div>
      </main>
    </div>
  )
}
