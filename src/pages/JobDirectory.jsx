import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import DashboardSidebar from '../components/DashboardSidebar.jsx'

const statusOptions = ['Chọn trạng thái', 'Đang mở', 'Tạm dừng', 'Đã đóng']

const jobs = []

const statCards = [
  { key: 'total', title: 'Tổng đơn ứng tuyển', icon: 'description', tone: 'bg-blue-100 text-blue-600', suffix: '' },
  { key: 'pending', title: 'Chờ duyệt', icon: 'schedule', tone: 'bg-amber-100 text-amber-600', suffix: '' },
  { key: 'accepted', title: 'Được chấp nhận', icon: 'check_circle', tone: 'bg-emerald-100 text-emerald-600', suffix: '' },
  { key: 'successRate', title: 'Tỷ lệ thành công', icon: 'trending_up', tone: 'bg-purple-100 text-purple-600', suffix: '%' },
]

export default function JobDirectory() {
  const [status, setStatus] = useState(statusOptions[0])
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')
  const [keyword, setKeyword] = useState('')

  const stats = useMemo(() => {
    const total = jobs.length
    const pending = jobs.filter((job) => job.status === 'Chờ duyệt').length
    const accepted = jobs.filter((job) => job.status === 'Được chấp nhận').length
    const successRate = total ? Math.round((accepted / total) * 100) : 0
    return { total, pending, accepted, successRate }
  }, [])

  return (
    <div className="bg-[#f8fafc] text-on-surface">
      <DashboardSidebar activeKey="job-list" />

      <main className="ml-64 min-h-screen">
        <header className="sticky top-0 z-40 flex items-center border-b border-slate-200 bg-white/90 px-5 py-3.5 backdrop-blur-md">
          <Link to="/dashboard" className="rounded-md p-1.5 text-slate-600 transition hover:bg-slate-100" aria-label="Quay lại dashboard">
            <span className="material-symbols-outlined !text-[20px]">arrow_back</span>
          </Link>
          <h1 className="ml-2 text-[22px] font-bold tracking-tight text-slate-900">Danh sách Job</h1>
        </header>

        <div className="space-y-5 p-5">
          <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {statCards.map((card, index) => (
              <article
                key={card.key}
                className="panel-enter soft-hover rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                style={{ animationDelay: `${50 + index * 70}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${card.tone}`}>
                    <span className="material-symbols-outlined text-[21px]">{card.icon}</span>
                  </div>
                  <div>
                    <p className="text-[30px] font-extrabold leading-none text-slate-900 md:text-[32px]">
                      {stats[card.key]}
                      {card.suffix}
                    </p>
                    <p className="mt-1 text-[14px] font-medium leading-tight text-slate-600">{card.title}</p>
                  </div>
                </div>
              </article>
            ))}
          </section>

          <section className="panel-enter rounded-xl border border-slate-200 bg-white shadow-sm" style={{ animationDelay: '220ms' }}>
            <div className="border-b border-slate-200 bg-slate-50 px-5 py-3">
              <h2 className="flex items-center gap-2 text-[18px] font-semibold text-slate-900">
                <span className="material-symbols-outlined !text-[22px]">filter_alt</span>
                Bộ lọc
              </h2>
            </div>

            <div className="p-5">
              <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
                <div className="xl:col-span-4">
                  <label className="mb-2 block text-[14px] font-medium text-slate-700">Trạng thái</label>
                  <div className="relative">
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
                </div>

                <div className="xl:col-span-4">
                  <label className="mb-2 block text-[14px] font-medium text-slate-700">Thời gian</label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      className="h-11 rounded-lg border border-slate-300 px-3 text-[14px] text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                      type="date"
                      value={fromDate}
                      onChange={(e) => setFromDate(e.target.value)}
                    />
                    <input
                      className="h-11 rounded-lg border border-slate-300 px-3 text-[14px] text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                      type="date"
                      value={toDate}
                      onChange={(e) => setToDate(e.target.value)}
                    />
                  </div>
                </div>

                <div className="xl:col-span-4">
                  <label className="mb-2 block text-[14px] font-medium text-slate-700">Tìm kiếm</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                    <input
                      className="h-11 w-full rounded-lg border border-slate-300 bg-white pl-10 pr-3 text-[14px] text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                      placeholder="Tìm kiếm công việc..."
                      type="text"
                      value={keyword}
                      onChange={(e) => setKeyword(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex min-h-[390px] flex-col items-center justify-center border-t border-slate-100 px-5 py-10 text-center">
              <div className="icon-float mb-4 flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-100 text-slate-300">
                <span className="material-symbols-outlined !text-[46px]">description</span>
              </div>
              <p className="text-[17px] font-medium text-slate-400">Chưa có đơn ứng tuyển nào</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
