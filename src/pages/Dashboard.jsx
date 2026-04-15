import { Link } from 'react-router-dom'
import DashboardSidebar from '../components/DashboardSidebar.jsx'

const overviewCards = [
  {
    key: 'active',
    badge: 'Đang làm',
    value: '3',
    label: 'Dự án đang thực hiện',
    icon: 'work',
    shell: 'from-[#3b82f6] to-[#4f46e5]',
  },
  {
    key: 'done',
    badge: 'Hoàn thành',
    value: '15',
    label: 'Dự án đã hoàn thành',
    icon: 'check_circle',
    shell: 'from-[#22c55e] to-[#0ea56b]',
  },
  {
    key: 'income',
    badge: 'Thu nhập',
    value: '45.000.000 VNĐ',
    label: 'Tổng thu nhập',
    icon: 'payments',
    shell: 'from-[#f59e0b] to-[#f97316]',
  },
]

const quickActions = [
  { label: 'Tìm việc', icon: 'search', tone: 'bg-blue-500 hover:bg-blue-600' },
  { label: 'Hồ sơ', icon: 'person', tone: 'bg-lime-500 hover:bg-lime-600' },
  { label: 'Ví', icon: 'account_balance_wallet', tone: 'bg-amber-500 hover:bg-amber-600' },
  { label: 'Tin nhắn', icon: 'chat_bubble_outline', tone: 'bg-slate-500 hover:bg-slate-600' },
]

const activities = [
  { title: 'Hoàn thành dự án E-commerce Website', time: '2h trước', tone: 'text-emerald-600' },
  { title: 'Nhận hợp đồng mới từ khách hàng TechGlobal', time: '5h trước', tone: 'text-blue-600' },
  { title: 'Cập nhật hồ sơ kỹ năng thành công', time: 'Hôm qua', tone: 'text-violet-600' },
]

export default function Dashboard() {
  return (
    <div className="bg-[#f6f8fb] text-on-surface">
      <DashboardSidebar activeKey="dashboard" />

      <main className="ml-64 min-h-screen">
        <header className="sticky top-0 z-40 flex items-center border-b border-slate-200 bg-white/95 px-5 py-3 backdrop-blur-md">
          <Link to="/" className="rounded-md p-1.5 text-slate-600 transition hover:bg-slate-100" aria-label="Quay lại trang chủ">
            <span className="material-symbols-outlined !text-[20px]">arrow_back</span>
          </Link>
          <h1 className="ml-2 text-[31px] font-semibold text-slate-900">Trang chủ</h1>
        </header>

        <div className="space-y-4 p-5">
          <section className="panel-enter rounded-xl border border-amber-200 bg-amber-50/60 px-4 py-3 text-[15px] text-amber-700" style={{ animationDelay: '40ms' }}>
            <span className="mr-2 font-semibold">Lưu ý:</span>
            Vui lòng cập nhật đầy đủ thông tin trong phần
            <a href="#" className="mx-1 font-semibold underline">Cài đặt hệ thống</a>
            để nhận thông báo, cập nhật trạng thái công việc và đảm bảo trải nghiệm tốt nhất.
          </section>

          <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
            <div className="space-y-4 xl:col-span-8">
              <section className="panel-enter rounded-xl border border-slate-200 bg-white p-4 shadow-sm" style={{ animationDelay: '100ms' }}>
                <h2 className="mb-4 flex items-center gap-2 text-[18px] font-semibold text-slate-900">
                  <span className="material-symbols-outlined text-blue-500 !text-[22px]">trending_up</span>
                  Tổng quan hoạt động
                </h2>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                  {overviewCards.map((card, idx) => (
                    <article
                      key={card.key}
                      className={`panel-enter relative overflow-hidden rounded-lg bg-gradient-to-br ${card.shell} p-4 text-white`}
                      style={{ animationDelay: `${150 + idx * 80}ms` }}
                    >
                      <div className="mb-3 flex items-center justify-between">
                        <span className="material-symbols-outlined !text-[24px]">{card.icon}</span>
                        <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-semibold">{card.badge}</span>
                      </div>
                      <p className="text-[30px] font-extrabold leading-none">{card.value}</p>
                      <p className="mt-1 text-[14px] font-medium text-white/95">{card.label}</p>
                      <div className="pointer-events-none absolute -right-4 -top-4 h-16 w-16 rounded-full bg-white/15" />
                    </article>
                  ))}
                </div>
              </section>

              <section className="panel-enter rounded-xl border border-slate-200 bg-white p-4 shadow-sm" style={{ animationDelay: '240ms' }}>
                <h2 className="mb-4 flex items-center gap-2 text-[18px] font-semibold text-slate-900">
                  <span className="material-symbols-outlined text-amber-500 !text-[22px]">bolt</span>
                  Thao tác nhanh
                </h2>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                  {quickActions.map((item, idx) => (
                    <button
                      key={item.label}
                      className={`panel-enter rounded-md px-3 py-2.5 text-[15px] font-semibold text-white transition ${item.tone}`}
                      style={{ animationDelay: `${280 + idx * 60}ms` }}
                    >
                      <span className="material-symbols-outlined mr-1 !text-[18px]">{item.icon}</span>
                      {item.label}
                    </button>
                  ))}
                </div>
              </section>

              <section className="panel-enter rounded-xl border border-slate-200 bg-white p-4 shadow-sm" style={{ animationDelay: '320ms' }}>
                <div className="mb-3 flex items-center justify-between">
                  <h2 className="flex items-center gap-2 text-[18px] font-semibold text-slate-900">
                    <span className="material-symbols-outlined text-violet-500 !text-[22px]">monitor_heart</span>
                    Hoạt động gần đây
                  </h2>
                  <a href="#" className="text-[14px] font-medium text-blue-500 hover:text-blue-600">Xem tất cả</a>
                </div>
                <div className="space-y-2">
                  {activities.map((item) => (
                    <article key={item.title} className="soft-hover flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-3">
                      <p className="text-[14px] font-medium text-slate-700">{item.title}</p>
                      <span className={`text-[12px] font-semibold ${item.tone}`}>{item.time}</span>
                    </article>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-4 xl:col-span-4">
              <section className="panel-enter rounded-xl border border-slate-200 bg-white p-4 shadow-sm" style={{ animationDelay: '180ms' }}>
                <h3 className="mb-4 flex items-center gap-2 text-[18px] font-semibold text-slate-900">
                  <span className="material-symbols-outlined text-indigo-500 !text-[22px]">bar_chart</span>
                  Hiệu suất
                </h3>
                <div className="space-y-4 text-[15px]">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Đánh giá trung bình</span>
                    <span className="font-semibold text-slate-900">⭐ 4.8/5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Tỷ lệ hoàn thành</span>
                    <span className="font-semibold text-emerald-600">95%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Giao đúng hạn</span>
                    <span className="font-semibold text-blue-600">98%</span>
                  </div>
                </div>
              </section>

              <section className="panel-enter rounded-xl border border-indigo-100 bg-indigo-50/70 p-4 shadow-sm" style={{ animationDelay: '260ms' }}>
                <h3 className="mb-3 flex items-center gap-2 text-[18px] font-semibold text-indigo-900">
                  <span className="material-symbols-outlined text-indigo-600 !text-[22px]">bookmark</span>
                  Liên kết hữu ích
                </h3>
                <ul className="list-disc space-y-1.5 pl-6 text-[15px] text-indigo-700">
                  <li><a href="#" className="hover:underline">Việc đã ứng tuyển</a></li>
                  <li><a href="#" className="hover:underline">Hợp đồng</a></li>
                  <li><a href="#" className="hover:underline">Lịch sử giao dịch</a></li>
                  <li><a href="#" className="hover:underline">Cài đặt</a></li>
                </ul>
              </section>

              <section className="panel-enter rounded-xl border border-emerald-100 bg-emerald-50/70 p-4 shadow-sm" style={{ animationDelay: '320ms' }}>
                <h3 className="mb-3 flex items-center gap-2 text-[18px] font-semibold text-emerald-900">
                  <span className="material-symbols-outlined text-emerald-600 !text-[22px]">tips_and_updates</span>
                  Mẹo thành công
                </h3>
                <ul className="list-disc space-y-1.5 pl-6 text-[15px] text-emerald-800">
                  <li>Cập nhật hồ sơ thường xuyên</li>
                  <li>Phản hồi tin nhắn nhanh chóng</li>
                  <li>Giao việc đúng thời hạn</li>
                </ul>
              </section>
            </aside>
          </div>
        </div>
      </main>
    </div>
  )
}
