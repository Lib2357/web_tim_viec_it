import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import DashboardSidebar from '../components/DashboardSidebar.jsx'

const appliedJobs = []

const statusOptions = ['Chọn trạng thái', 'Chờ duyệt', 'Đang xem xét', 'Chấp nhận', 'Từ chối']

const statCards = [
  { key: 'total', title: 'Tổng đơn ứng tuyển', icon: 'description', tone: 'bg-blue-100 text-blue-600' },
  { key: 'pending', title: 'Chờ duyệt', icon: 'schedule', tone: 'bg-amber-100 text-amber-600' },
  { key: 'accepted', title: 'Được chấp nhận', icon: 'check_circle', tone: 'bg-emerald-100 text-emerald-600' },
  { key: 'successRate', title: 'Tỷ lệ thành công', icon: 'trending_up', tone: 'bg-purple-100 text-purple-600' },
]

export default function JobList() {
  const [status, setStatus] = useState(statusOptions[0])
  const [keyword, setKeyword] = useState('')

  const stats = useMemo(() => {
    const total = appliedJobs.length
    const pending = appliedJobs.filter((job) => job.status === 'Chờ duyệt').length
    const accepted = appliedJobs.filter((job) => job.status === 'Chấp nhận').length
    const successRate = total ? `${Math.round((accepted / total) * 100)}%` : '0%'
    return { total, pending, accepted, successRate }
  }, [])

  const filteredJobs = useMemo(() => {
    const q = keyword.trim().toLowerCase()
    return appliedJobs.filter((job) => {
      const statusOk = status === 'Chọn trạng thái' || job.status === status
      if (!q) return statusOk
      return statusOk && `${job.title} ${job.company}`.toLowerCase().includes(q)
    })
  }, [status, keyword])

  return (
    <div className="bg-[#f7f9fc] text-on-surface">
      <DashboardSidebar activeKey="applied-jobs" />

      <main className="ml-64 min-h-screen">
        <header className="sticky top-0 z-40 flex items-center justify-between border-b border-slate-200 bg-white/90 px-5 py-2.5 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500 text-white shadow-sm">
              <span className="material-symbols-outlined text-[18px]">assignment_turned_in</span>
            </div>
            <div>
              <h1 className="text-[22px] font-extrabold leading-none tracking-tight text-slate-900">Job đã ứng tuyển</h1>
              <p className="mt-1 text-xs font-medium text-slate-500">Theo dõi trạng thái ứng tuyển và hiệu quả tìm việc của bạn</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="pressable rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-50"
              onClick={() => {
                setStatus(statusOptions[0])
                setKeyword('')
              }}
            >
              <span className="material-symbols-outlined mr-1.5 text-[16px]">refresh</span>Làm mới
            </button>
            <Link className="pressable rounded-lg bg-blue-500 px-3.5 py-2 text-xs font-bold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-600" to="/">
              <span className="material-symbols-outlined mr-1.5 text-[16px]">search</span>Tìm việc mới
            </Link>
          </div>
        </header>

        <div className="p-5">
          <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {statCards.map((card, idx) => (
              <article key={card.key} className="card-enter rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm" style={{ animationDelay: `${80 + idx * 80}ms` }}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[15px] font-semibold text-slate-700">{card.title}</p>
                    <p className="mt-1.5 text-[30px] font-extrabold leading-none text-slate-900">{stats[card.key]}</p>
                    <p className="mt-1.5 text-[13px] text-slate-500">Cập nhật theo dữ liệu hiện tại</p>
                  </div>
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${card.tone}`}>
                    <span className="material-symbols-outlined text-[22px]">{card.icon}</span>
                  </div>
                </div>
              </article>
            ))}
          </section>

          <section className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-12">
            <div className="xl:col-span-8">
              <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
                <div className="p-5">
                  <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                    <span className="material-symbols-outlined text-[22px]">work_history</span>
                    Danh sách ứng tuyển
                  </h2>
                  <div className="mt-5 grid grid-cols-1 gap-3 lg:grid-cols-12">
                    <div className="relative lg:col-span-7">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[17px] text-slate-400">search</span>
                      <input
                        className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                        placeholder="Tìm kiếm vị trí, công ty..."
                        type="text"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                      />
                    </div>
                    <select
                      className="h-9 rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 lg:col-span-3"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      {statusOptions.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <button
                      className="h-9 rounded-lg border border-slate-200 bg-slate-50 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 lg:col-span-2"
                      onClick={() => {
                        setStatus(statusOptions[0])
                        setKeyword('')
                      }}
                    >
                      Đặt lại
                    </button>
                  </div>
                </div>

                <div className="border-t border-slate-100 p-5">
                  {filteredJobs.length === 0 ? (
                    <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                        <span className="material-symbols-outlined text-[30px]">article</span>
                      </div>
                      <h3 className="text-xl font-extrabold text-slate-900">Chưa có đơn ứng tuyển nào</h3>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-500">
                        Có vẻ như bạn vẫn chưa ứng tuyển vào vị trí nào. Hãy bắt đầu khám phá các cơ hội nghề nghiệp phù hợp ngay hôm nay.
                      </p>
                      <Link className="pressable mt-5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700" to="/">
                        <span className="material-symbols-outlined mr-1.5 text-[18px]">search</span>Tìm kiếm công việc
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {filteredJobs.map((job) => (
                        <article key={`${job.company}-${job.title}`} className="rounded-lg border border-slate-200 bg-white p-4">
                          <h4 className="text-sm font-bold text-slate-900">{job.title}</h4>
                          <p className="mt-1 text-sm text-slate-500">{job.company}</p>
                        </article>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <aside className="space-y-6 xl:col-span-4">
              <section className="card-enter rounded-xl border border-slate-200 bg-white p-4 shadow-sm" style={{ animationDelay: '240ms' }}>
                <h3 className="mb-3.5 flex items-center gap-2 text-lg font-bold text-slate-900">
                  <span className="material-symbols-outlined text-[24px] text-blue-500">query_stats</span>
                  Tổng quan hiện tại
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Đơn đang xử lý</span>
                    <span className="font-bold text-blue-600">{stats.pending}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Đơn được chấp nhận</span>
                    <span className="font-bold text-emerald-600">{stats.accepted}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Tỷ lệ thành công</span>
                    <span className="font-bold text-purple-600">{stats.successRate}</span>
                  </div>
                </div>
              </section>

              <section className="card-enter rounded-xl border border-slate-200 bg-white p-4 shadow-sm" style={{ animationDelay: '320ms' }}>
                <h3 className="mb-3.5 flex items-center gap-2 text-lg font-bold text-slate-900">
                  <span className="material-symbols-outlined text-[24px] text-amber-500">bolt</span>
                  Thao tác nhanh
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2.5">
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                      <span className="material-symbols-outlined text-[20px]">schedule</span>
                      Chờ phản hồi
                    </div>
                    <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-600">{stats.pending}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2.5">
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                      <span className="material-symbols-outlined text-[20px]">verified</span>
                      Được nhận việc
                    </div>
                    <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-600">{stats.accepted}</span>
                  </div>
                </div>
              </section>
            </aside>
          </section>
        </div>
      </main>
    </div>
  )
}
