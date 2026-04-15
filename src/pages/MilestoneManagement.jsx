import { useMemo, useState } from 'react'
import DashboardSidebar from '../components/DashboardSidebar.jsx'

const projectOptions = ['Chọn dự án...', 'Website E-commerce', 'Mobile Banking App', 'Dashboard CRM']

const milestones = []

const statCards = [
  { key: 'total', title: 'Tổng Milestone', icon: 'target', tone: 'bg-blue-50 text-blue-600' },
  { key: 'done', title: 'Hoàn thành', icon: 'check_circle', tone: 'bg-emerald-50 text-emerald-600' },
  { key: 'inProgress', title: 'Đang thực hiện', icon: 'schedule', tone: 'bg-amber-50 text-amber-600' },
  { key: 'overdue', title: 'Quá hạn', icon: 'warning', tone: 'bg-rose-50 text-rose-600' },
]

export default function MilestoneManagement() {
  const [project, setProject] = useState(projectOptions[0])

  const stats = useMemo(() => {
    const total = milestones.length
    const done = milestones.filter((m) => m.status === 'done').length
    const inProgress = milestones.filter((m) => m.status === 'inProgress').length
    const overdue = milestones.filter((m) => m.status === 'overdue').length
    return { total, done, inProgress, overdue }
  }, [])

  return (
    <div className="bg-[#f7f9fc] text-on-surface">
      <DashboardSidebar activeKey="milestone" />

      <main className="ml-64 min-h-screen">
        <header className="sticky top-0 z-40 flex items-center justify-between border-b border-slate-200/90 bg-white/95 px-5 py-3 backdrop-blur-md">
          <div>
            <h1 className="text-[24px] font-semibold tracking-tight text-slate-900">Quản lý Milestone</h1>
            <p className="mt-1 text-[15px] text-slate-500">Theo dõi và quản lý tiến độ dự án</p>
          </div>
          <button className="soft-hover rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
            <span className="material-symbols-outlined mr-1.5 !text-[18px]">add</span>
            Tạo milestone mới
          </button>
        </header>

        <div className="space-y-4 p-5">
          <section className="panel-enter rounded-xl border border-slate-200 bg-white p-4 shadow-sm" style={{ animationDelay: '50ms' }}>
            <div className="max-w-md">
              <div className="relative">
                <select
                  className="h-11 w-full appearance-none rounded-lg border border-slate-300 bg-slate-50 px-3.5 text-[14px] font-medium text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                >
                  {projectOptions.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">expand_more</span>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {statCards.map((card, idx) => (
              <article
                key={card.key}
                className="panel-enter soft-hover rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                style={{ animationDelay: `${100 + idx * 70}ms` }}
              >
                <div className="flex items-start gap-3.5">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${card.tone}`}>
                    <span className="material-symbols-outlined text-[21px]">{card.icon}</span>
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-slate-500">{card.title}</p>
                    <p className="mt-1 text-[28px] font-bold leading-none text-slate-900 md:text-[30px]">{stats[card.key]}</p>
                  </div>
                </div>
              </article>
            ))}
          </section>

          <section className="panel-enter rounded-xl border border-slate-200 bg-white shadow-sm" style={{ animationDelay: '340ms' }}>
            <div className="border-b border-slate-100 px-5 py-4">
              <h2 className="text-[21px] font-semibold text-slate-900">Timeline Milestone</h2>
            </div>

            <div className="flex min-h-[420px] flex-col items-center justify-center px-5 py-10 text-center">
              <div className="icon-float mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 text-slate-300">
                <span className="material-symbols-outlined !text-[46px]">target</span>
              </div>
              <p className="text-[30px] font-semibold text-slate-800">Chưa có milestone nào</p>
              <p className="mt-2 text-[15px] text-slate-500">Tạo milestone đầu tiên để theo dõi tiến độ dự án</p>
              <button className="soft-hover mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
                <span className="material-symbols-outlined mr-1.5 !text-[18px]">add</span>
                Tạo milestone
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
