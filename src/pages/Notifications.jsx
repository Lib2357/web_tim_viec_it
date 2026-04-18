import { useState } from 'react'
import DashboardSidebar from '../components/DashboardSidebar.jsx'

const tabs = [
  { key: 'all', label: 'Tất cả', icon: 'notifications_none', count: 0, tone: 'bg-slate-400' },
  { key: 'unread', label: 'Chưa đọc', icon: 'notifications_active', count: 0, tone: 'bg-blue-500' },
  { key: 'work', label: 'Công việc', icon: 'work_outline', count: 0, tone: 'bg-lime-500' },
  { key: 'milestone', label: 'Milestone', icon: 'bolt', count: 0, tone: 'bg-rose-500' },
  { key: 'system', label: 'Hệ thống', icon: 'settings', count: 0, tone: 'bg-amber-500' },
]

export default function Notifications() {
  const [activeTab, setActiveTab] = useState('all')

  return (
    <div className="bg-[#f7f9fc] text-on-surface">
      <DashboardSidebar activeKey="notifications" />

      <main className="ml-64 min-h-screen">
        <header className="sticky top-0 z-40 flex items-start justify-between border-b border-slate-200 bg-white/95 px-5 py-3 backdrop-blur-md">
          <div className="flex items-start gap-2.5">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-sm">
              <span className="material-symbols-outlined !text-[22px]">notifications</span>
            </div>
            <div>
              <h1 className="text-[21px] font-semibold leading-tight text-slate-900">Thông báo</h1>
              <p className="mt-1 text-[13px] text-slate-500">0 thông báo chưa đọc</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="rounded-lg border border-blue-200 bg-blue-50 px-3.5 py-2 text-[13px] font-semibold text-blue-300" disabled>
              <span className="material-symbols-outlined mr-1 !text-[16px]">done_all</span>
              Đánh dấu tất cả đã đọc
            </button>
            <button className="soft-hover rounded-lg border border-slate-300 bg-white px-3 py-2 text-[13px] font-medium text-slate-600 transition hover:bg-slate-50">
              <span className="material-symbols-outlined mr-1 !text-[16px]">filter_alt</span>
              Lọc
              <span className="material-symbols-outlined ml-0.5 !text-[16px]">expand_more</span>
            </button>
          </div>
        </header>

        <div className="space-y-2 p-5">
          <section className="panel-enter overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm" style={{ animationDelay: '60ms' }}>
            <div className="flex flex-wrap items-center">
              {tabs.map((tab) => {
                const active = activeTab === tab.key
                return (
                  <button
                    key={tab.key}
                    className={`relative flex items-center gap-1.5 border-b-2 px-3.5 py-2.5 text-[14px] font-medium transition ${
                      active ? 'border-blue-500 text-blue-600' : 'border-transparent text-slate-700 hover:bg-slate-50'
                    }`}
                    onClick={() => setActiveTab(tab.key)}
                  >
                    <span className="material-symbols-outlined !text-[17px]">{tab.icon}</span>
                    {tab.label}
                    <span className={`rounded-full px-1.5 py-0.5 text-[11px] font-semibold text-white ${tab.tone}`}>{tab.count}</span>
                  </button>
                )
              })}
            </div>
          </section>

          <section className="panel-enter rounded-xl border border-slate-200 bg-white" style={{ animationDelay: '150ms' }}>
            <div className="flex min-h-[560px] flex-col items-center justify-center px-5 py-12 text-center">
              <div className="icon-float mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-slate-100 text-slate-300">
                <span className="material-symbols-outlined !text-[54px]">notifications_off</span>
              </div>
              <p className="text-[15px] font-medium text-slate-500">Không có thông báo nào</p>
              <p className="mt-1.5 text-[20px] font-semibold text-slate-700">Chưa có thông báo nào</p>
              <button className="soft-hover mt-5 rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600">
                <span className="material-symbols-outlined mr-1.5 !text-[18px]">refresh</span>
                Làm mới
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
