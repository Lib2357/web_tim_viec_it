import DashboardSidebar from '../components/DashboardSidebar.jsx'

const statCards = [
  {
    title: 'Tổng hợp đồng',
    value: '0',
    trend: '+12% từ tháng trước',
    icon: 'description',
    tone: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Đang thực hiện',
    value: '0',
    trend: '+8% từ tuần trước',
    icon: 'trending_up',
    tone: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Hoàn thành',
    value: '0',
    trend: '+15% từ tháng trước',
    icon: 'check_circle',
    tone: 'bg-emerald-100 text-emerald-600',
  },
  {
    title: 'Tổng giá trị',
    value: '0 đ',
    trend: '+22% từ quý trước',
    icon: 'payments',
    tone: 'bg-purple-100 text-purple-600',
  },
]

export default function Contracts() {
  return (
    <div className="bg-[#f7f9fc] text-on-surface">
      <DashboardSidebar activeKey="contracts" />

      <main className="ml-64 min-h-screen">
        <header className="sticky top-0 z-40 flex items-center justify-between border-b border-slate-200 bg-white/90 px-5 py-2.5 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500 text-white shadow-sm">
              <span className="material-symbols-outlined text-[18px]">description</span>
            </div>
            <div>
              <h1 className="text-[22px] font-extrabold leading-none tracking-tight text-slate-900">Hợp đồng dự án</h1>
              <p className="mt-1 text-xs font-medium text-slate-500">Quản lý hợp đồng và theo dõi tiến độ dự án</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="pressable rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-50">
              <span className="material-symbols-outlined mr-1.5 text-[16px]">refresh</span>Làm mới
            </button>
            <button className="pressable rounded-lg bg-blue-500 px-3.5 py-2 text-xs font-bold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-600">
              <span className="material-symbols-outlined mr-1.5 text-[16px]">download</span>Xuất báo cáo
            </button>
          </div>
        </header>

        <div className="p-5">
          <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {statCards.map((card, idx) => (
              <article key={card.title} className="card-enter rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm" style={{ animationDelay: `${80 + idx * 80}ms` }}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[15px] font-semibold text-slate-700">{card.title}</p>
                    <p className="mt-1.5 text-[30px] font-extrabold leading-none text-slate-900">{card.value}</p>
                    <p className="mt-1.5 text-[13px] text-slate-500">{card.trend}</p>
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
                <div className="p-4.5 p-5">
                  <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                    <span className="material-symbols-outlined text-[22px]">description</span>
                    Danh sách hợp đồng
                  </h2>
                  <div className="mt-5 grid grid-cols-1 gap-3 lg:grid-cols-12">
                    <div className="relative lg:col-span-9">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[17px] text-slate-400">search</span>
                      <input
                        className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                        placeholder="Tìm kiếm hợp đồng..."
                        type="text"
                      />
                    </div>
                    <select className="h-9 rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 lg:col-span-3">
                      <option>Tất cả trạng thái</option>
                      <option>Đang thực hiện</option>
                      <option>Chờ ký</option>
                      <option>Hoàn thành</option>
                    </select>
                  </div>
                </div>

                <div className="border-t border-slate-100 p-5">
                  <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                      <span className="material-symbols-outlined text-[30px]">description</span>
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900">Chưa có hợp đồng nào</h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-500">
                      Bắt đầu bằng cách tạo hợp đồng đầu tiên của bạn để quản lý các dự án freelance
                    </p>
                    <button className="pressable mt-5 rounded-lg bg-blue-600 px-4.5 py-2 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700">
                      <span className="material-symbols-outlined mr-1.5 text-[18px]">add</span>Tạo hợp đồng mới
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <aside className="space-y-6 xl:col-span-4">
              <section className="card-enter rounded-xl border border-slate-200 bg-white p-4 shadow-sm" style={{ animationDelay: '240ms' }}>
                <h3 className="mb-3.5 flex items-center gap-2 text-lg font-bold text-slate-900">
                  <span className="material-symbols-outlined text-[24px] text-blue-500">trending_up</span>
                  Tổng quan hiện tại
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Dự án đang làm</span>
                    <span className="font-bold text-blue-600">0</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Deadline tuần này</span>
                    <span className="font-bold text-orange-500">0</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Tỷ lệ hoàn thành</span>
                    <span className="font-bold text-emerald-600">0%</span>
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
                      <span className="material-symbols-outlined text-[20px]">local_offer</span>
                      Hợp đồng chờ ký
                    </div>
                    <span className="rounded-full bg-rose-100 px-2.5 py-0.5 text-sm font-bold text-rose-500">0</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2.5">
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                      <span className="material-symbols-outlined text-[20px]">code</span>
                      Dự án đang làm
                    </div>
                    <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-sm font-bold text-blue-500">0</span>
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
