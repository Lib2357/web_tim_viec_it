import { useMemo, useState } from 'react'

const jobs = [
  {
    employer: 'Huy Dev',
    time: '3 tháng trước',
    location: 'Remote',
    title: 'Thiết Kế Trang Web Kinh Doanh Mua Bán Laptop',
    salary: '8.000.000 đ - 20.000.000 đ',
    deadline: '5/2/2026',
    skills: ['MongoDB', 'JavaScript'],
    requirements: '2+ năm kinh nghiệm web, nắm chắc responsive.',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDyV249iaE59hDGJ6FX1KMIyGGkVRlsa5oym1KJZlvrfl_rNoeSUM0XlAL_W8lT18AVkcn3xr-Krvq7UDfNeZqmzwN3to2Fm5EBZFVKL8cv1L9d3Mjmb5HvlYCdLhM9dBJuy6C2Wk7WhYgB7FDJe7SJ9HuYBPPni3tfmLQgrRLHyM5sC8GcFkSfuku852YgUZp6UTzrPoi_pijzFbyURIpArIr91DFfMdjF3Ks1tV5ND8wfXe1H9X6H1vmsxsJr6SzwJf7B29f0wYY',
  },
  {
    employer: 'Sky Tech Solutions',
    time: '1 ngày trước',
    location: 'HCM City',
    title: 'Senior Mobile Developer (React Native)',
    salary: '35M - 50M đ',
    deadline: '',
    skills: ['React Native', 'TypeScript'],
    requirements: 'Thành thạo React Native, làm việc tốt với API.',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDsYnQTdZerwA16oYRcSLv0wk-mwbOheaWQ5Oa3ce6i04GpAtNMtB-LxkQkZS38fHtb06qoEgOUe9tICcSGLBJzLdCYG1NSrVmLCcf3r-UQwFA7sZy82bKoyn_82QvjobRPKUiDIE8ZAJbOXtKX8MG4I2NBl9mL8wvWg99NnL_rVd_eybXGXfVMXxqs5cwGw3oWD5qjTIFZEdW6mAqtD0tcn6D5KIEK-o0j9BxHfScCatJS7nFjx24jvjWMbV1oIl6R88C5xkPViGY',
  },
  {
    employer: 'Green Tech Hub',
    time: '2 ngày trước',
    location: 'Da Nang',
    title: 'Frontend Developer (Vue.js)',
    salary: '15.000.000 đ - 30.000.000 đ',
    deadline: '15/3/2026',
    skills: ['Vue.js', 'Tailwind CSS'],
    requirements: 'Kinh nghiệm Vue 3, component architecture rõ ràng.',
    avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=96&h=96&fit=crop',
  },
  {
    employer: 'Creative Minds Studio',
    time: '4 ngày trước',
    location: 'HCM City',
    title: 'Senior UX Designer',
    salary: '25.000.000 đ - 45.000.000 đ',
    deadline: '20/2/2026',
    skills: ['Figma', 'UX Research'],
    requirements: 'Giỏi user flow, prototype và handoff cho dev.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop',
  },
]

const navItems = ['Việc làm Freelance', 'Việc làm IT', 'Tìm Developer', 'Thảo luận', 'AI Agent', 'AI Analysis']

function App() {
  const [search, setSearch] = useState('')
  const [bannerOpen, setBannerOpen] = useState(true)
  const [favoriteSet, setFavoriteSet] = useState(() => new Set())

  const filteredJobs = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return jobs
    return jobs.filter((job) => {
      const inTitle = job.title.toLowerCase().includes(q)
      const inEmployer = job.employer.toLowerCase().includes(q)
      const inSkills = job.skills.some((s) => s.toLowerCase().includes(q))
      return inTitle || inEmployer || inSkills
    })
  }, [search])

  const toggleFavorite = (key) => {
    setFavoriteSet((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  return (
    <div className="bg-white text-on-surface">
      <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-2">
          <div className="flex items-center gap-5">
            <div className="flex items-center text-xl font-bold tracking-tight text-[#2b59ff]">
              <span className="material-symbols-outlined mr-1 text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                code
              </span>
              CHOCODE
            </div>
            <div className="hidden items-center gap-4 text-[13.5px] font-medium text-slate-600 lg:flex">
              {navItems.map((item) => (
                <a key={item} className="nav-link-animate flex items-center gap-1" href="#">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="soft-radius pressable bg-[#007bff] px-4 py-1.5 text-sm font-semibold text-white transition-all hover:bg-blue-600">
              Đăng bài
            </button>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 overflow-hidden rounded-full border border-slate-200 bg-slate-200 ring-2 ring-transparent transition hover:ring-blue-100">
                <img
                  alt="User"
                  className="h-full w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFzEksFo_gE6oDObWiY0m01YdvVQ-u-Bem-HfrSTCvG3bv5V8Fut0r2qoi1OisMIk8th4Mpw4fdoclIGewMYTrdqS2UnksIUwK2j-JNYnmX82XeUGbdPDkIramR5U_pIXgZ2uyafZXO0AbF9Hr7Czr6CStE7-V_pnms5gNJNPU-Pblbe11lUBbyIcyTWxM3NN8FYAEYiiSuq3KiPMfEPC44hzSH922zCU20y7oQ7dm67iyUF41LMP0fJH9k-dgnGGLdX506HTq05g"
                />
              </div>
              <span className="text-xs font-bold text-slate-500">32_Phạm ...</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-[1440px] px-6 py-4">
        <div
          className={`soft-radius mb-6 flex items-center justify-between border border-slate-100 bg-white p-2.5 shadow-sm transition-all duration-300 ${
            bannerOpen ? 'max-h-28 opacity-100' : 'pointer-events-none max-h-0 overflow-hidden opacity-0'
          }`}
        >
          <div className="flex items-center gap-3 text-sm">
            <span className="font-semibold text-orange-500">🔥 Tin hot:</span>
            <span className="text-slate-600">đã được đăng trên nền tảng chỉ sau 1 tuần ra mắt!</span>
            <span className="ml-4 rounded bg-red-500 px-1.5 py-0.5 text-[10px] font-bold text-white">[HOT]</span>
            <span className="font-medium text-slate-700">🎉 CHOCODE chính thức ra mắt - nền tảng freelance dành riêng cho dân IT</span>
          </div>
          <button className="text-slate-400 hover:text-slate-600" onClick={() => setBannerOpen(false)}>
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>

        <section className="mb-10 animate-fade-up">
          <div className="soft-radius relative flex h-[320px] items-center overflow-hidden bg-gradient-to-r from-[#20c3d0] via-[#2489d2] to-[#1e58b1] shadow-lg">
            <div className="z-10 w-full px-12 text-left text-white md:w-[72%] md:px-16">
              <h1 className="mb-2 text-[48px] font-black leading-tight tracking-tight md:text-[64px]">CHOCODE.COM.VN</h1>
              <p className="text-2xl font-medium opacity-95 md:text-3xl">"Dev giỏi khỏi lo - Job chất khỏi tìm!"</p>
              <div className="mt-8 h-1.5 w-24 rounded-full bg-white/40"></div>
            </div>
            <div className="absolute right-0 top-0 hidden h-full w-[35%] overflow-hidden md:block">
              <img
                alt="Tech professionals collaborating"
                className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                src="https://lh3.googleusercontent.com/aida/ADBb0uip9vPlp27Lh7jVZWbdeITCxLR_Cb7iOfX1QuPFVm5lrEKJS9tealO5CthzN9vDCU6VNHruhXnzeimSEBrkdrBV2WxmyGAZKcvbfZIv1jsVWQJfbHs0oD4DC3Q5JOX74FJQ9rt6dlfD3k6yChPhHftxq4lnSLU-SgnvUt11a6t_qaNH9IT-Q23DVM-u-aWmVqa-TyDuh6iyiyt0Pn7_jRYCtlm-seuVSObrTTr60qQhQWagP3y8IoJtlxgYLsjBVPaq8G1FtiXrLg"
              />
            </div>
            <div
              className="pointer-events-none absolute inset-0 opacity-10"
              style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}
            ></div>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-8 pb-12 lg:grid-cols-12">
          <aside className="space-y-4 lg:col-span-2 animate-fade-up" style={{ animationDelay: '70ms' }}>
            <div className="soft-radius border border-slate-100 bg-white p-4 shadow-sm">
              <div className="mb-6 flex flex-col items-center text-center">
                <div className="mb-3 h-16 w-16 overflow-hidden rounded-full border border-slate-100 bg-slate-100">
                  <img
                    alt="User"
                    className="h-full w-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZvQ-wb5g_VKWeIhJc-E7V4XDTPKrIpAGssq0oxfHf6rvDDlvLAfagwFm-YAiH4aYXurtw2ys5gnAczklq07Fo6w-6VBYLqUPX9b7g7HI57wyiMQiiCTfeRiH9QjR2nyODBuUIeujmNg7-c4KGemy6YAgYbr7WA2P3yladOKrbRCmxI4K2eeGSVGqKwg9kiO6siV-VNjHl9Ssjutvqa3R-nTwhsoO_yTnMomGsRNpttbfcxCLLfG1EW_0hn-jsgAPkXuoMlX5PuF4"
                  />
                </div>
                <p className="text-sm font-bold text-slate-800">32_Phạm ...</p>
                <p className="text-[11px] text-slate-400">@507879551</p>
              </div>
              <nav className="space-y-1">
                {['Việc làm', 'Tìm Developer', 'Việc đã ứng tuyển', 'Việc yêu thích', 'Quản lý việc'].map((item, i) => (
                  <a
                    key={item}
                    className={`soft-radius flex items-center gap-3 px-3 py-2 text-[13px] font-medium transition-colors ${
                      i === 0 ? 'bg-blue-50 font-semibold text-primary' : 'text-slate-600 hover:bg-slate-50'
                    }`}
                    href="#"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
            <div className="soft-radius border border-slate-100 bg-white p-4 shadow-sm">
              <h3 className="mb-4 text-[14px] font-bold text-slate-800">Danh mục phổ biến</h3>
              <div className="space-y-3 text-[13px]">
                {[
                  ['Lập trình web', '150+'],
                  ['Mobile App', '89+'],
                  ['UI/UX Design', '67+'],
                  ['Backend', '134+'],
                ].map(([name, count]) => (
                  <div key={name} className="flex items-center justify-between">
                    <span className="text-slate-600">{name}</span>
                    <span className="text-slate-400">{count}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <div className="space-y-5 lg:col-span-7 animate-fade-up" style={{ animationDelay: '120ms' }}>
            <div className="soft-radius border border-slate-100 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center gap-2 text-sm font-bold text-primary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  work
                </span>
                Tìm kiếm việc làm
              </div>
              <div className="relative mb-4">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                <input
                  className="soft-radius w-full border border-slate-200 py-2.5 pl-11 pr-4 text-[14px] outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Tìm kiếm công việc, kỹ năng, công ty..."
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className="mb-5 flex flex-wrap gap-2">
                {['#React', '#Vue.js', '#Node.js', '#Python'].map((tag) => (
                  <span
                    key={tag}
                    onClick={() => setSearch(tag.replace('#', ''))}
                    className="cursor-pointer rounded-md bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-blue-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <button className="soft-radius pressable flex-grow bg-[#007bff] py-2.5 text-sm font-bold text-white transition-all hover:bg-blue-600">
                  Tìm kiếm
                </button>
                <button className="soft-radius pressable flex w-12 items-center justify-center border border-slate-200 text-slate-500 transition hover:bg-slate-50">
                  <span className="material-symbols-outlined">tune</span>
                </button>
              </div>
            </div>

            <div className="soft-radius flex overflow-hidden border border-slate-100 bg-white p-1 shadow-sm">
              <button className="soft-radius pressable flex-1 bg-[#007bff] py-2.5 text-sm font-bold text-white">Tất cả</button>
              <button className="soft-radius flex-1 py-2.5 text-sm font-bold text-slate-600 transition hover:bg-slate-50">Mới nhất</button>
              <button className="soft-radius flex-1 py-2.5 text-sm font-bold text-slate-600 transition hover:bg-slate-50">Thu nhập cao</button>
            </div>

            <div className="space-y-4">
              {filteredJobs.map((job, index) => {
                const key = `${job.employer}-${job.title}`
                const fav = favoriteSet.has(key)
                return (
                  <article
                    key={key}
                    className="soft-radius group card-enter border border-slate-100 bg-white p-5 shadow-sm"
                    style={{ animationDelay: `${180 + index * 50}ms` }}
                  >
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 overflow-hidden rounded-full border border-slate-50 bg-slate-100">
                          <img alt="Employer" className="h-full w-full object-cover" src={job.avatar} />
                        </div>
                        <div>
                          <h4 className="text-[14px] font-bold text-slate-800">{job.employer}</h4>
                          <p className="text-[11px] text-slate-400">
                            {job.time} • <span className="material-symbols-outlined !text-[11px]">location_on</span> {job.location}
                          </p>
                        </div>
                      </div>
                      <button className={`${fav ? 'text-red-400' : 'text-slate-300'} transition`} onClick={() => toggleFavorite(key)}>
                        <span className="material-symbols-outlined">favorite</span>
                      </button>
                    </div>
                    <h3 className="mb-3 text-[17px] font-bold text-slate-900 transition-colors group-hover:text-primary">{job.title}</h3>
                    <div className="mb-2 flex items-center gap-1.5 text-[13px] font-bold text-[#28a745]">
                      <span className="material-symbols-outlined !text-[16px]">payments</span> {job.salary}
                    </div>
                    <p className="mb-3 text-[12px] leading-relaxed text-slate-600">
                      <span className="font-semibold text-slate-700">Yêu cầu:</span> {job.requirements}
                    </p>
                    {job.deadline && (
                      <div className="mb-4 flex items-center gap-1.5 text-[11px] text-slate-400">
                        <span className="material-symbols-outlined !text-[16px]">calendar_today</span> Hạn nộp: {job.deadline}
                      </div>
                    )}
                    <div className="flex gap-2">
                      {job.skills.map((skill) => (
                        <span key={skill} className="rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600 transition hover:bg-slate-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </article>
                )
              })}
            </div>
          </div>

          <aside className="space-y-5 lg:col-span-3 animate-fade-up" style={{ animationDelay: '170ms' }}>
            <div className="soft-radius border border-slate-100 bg-white p-5 shadow-sm lg:sticky lg:top-20">
              <h2 className="mb-5 flex items-center gap-2 text-[15px] font-bold text-slate-800">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  trending_up
                </span>
                Việc hot nhất
              </h2>
              <div className="space-y-4">
                {['#React', '#Vue.js', '#Node.js'].map((topic, i) => (
                  <div key={topic} className="soft-radius flex cursor-pointer items-center gap-3 p-1.5 transition-all hover:bg-slate-50">
                    <span className="text-base font-bold text-primary">{i + 1}.</span>
                    <p className="text-[13.5px] font-bold text-slate-700">{topic}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50 py-10 text-slate-600">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="mb-10 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4 lg:grid-cols-6">
            <div className="col-span-2">
              <div className="mb-4 flex items-center text-xl font-bold tracking-tight text-[#2b59ff]">
                <span className="material-symbols-outlined mr-1 text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  code
                </span>
                CHOCODE
              </div>
              <p className="mb-6 max-w-xs text-[13px] leading-relaxed text-slate-500">
                Nền tảng kết nối hàng đầu giữa khách hàng và các lập trình viên tài năng tại Việt Nam.
              </p>
            </div>
            {[
              ['Nền tảng', ['Giới thiệu', 'Quy trình', 'Phí dịch vụ', 'Blog công nghệ']],
              ['Freelancer', ['Việc làm React', 'Việc làm Python', 'Việc làm Mobile', 'Gói Member']],
              ['Khách hàng', ['Thuê React Dev', 'Thuê Designer', 'Đăng dự án', 'Hỗ trợ 24/7']],
              ['Pháp lý', ['Điều khoản', 'Bảo mật', 'Cookie']],
            ].map(([title, links]) => (
              <div key={title}>
                <h4 className="mb-4 text-[13px] font-bold uppercase tracking-wider text-slate-900">{title}</h4>
                <ul className="space-y-2.5 text-[13px]">
                  {links.map((link) => (
                    <li key={link}>
                      <a className="transition-colors hover:text-primary" href="#">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-[12px] md:flex-row">
            <p className="text-slate-400">
              © 2026 <span className="font-bold text-primary">ChoCode</span>. Crafted for Vietnamese Developers.
            </p>
            <div className="flex gap-5 font-semibold text-slate-500">
              <span className="cursor-pointer hover:text-primary">Tiếng Việt</span>
              <span className="cursor-pointer hover:text-primary">English</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
