import { Link, useParams } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'

const companyFacts = [
  { icon: 'apartment', label: 'Quy mô', value: '120 - 200 nhân sự' },
  { icon: 'category', label: 'Lĩnh vực', value: 'Công nghệ sản phẩm' },
  { icon: 'schedule', label: 'Thời gian', value: 'Toàn thời gian' },
  { icon: 'school', label: 'Học vấn', value: 'Cao đẳng / Đại học' },
]

export default function JobDetail() {
  const { id } = useParams()
  const [jobs, setJobs] = useState([])
  const [jobDetails, setJobDetails] = useState([])

  useEffect(() => {
    const loadJobs = async () => {
      const res = await fetch('/api/jobs.json')
      const data = await res.json()
      setJobs(data.jobs || [])
      setJobDetails(data.jobDetails || [])
    }
    loadJobs()
  }, [])

  const job = useMemo(() => {
    if (!jobDetails.length) return null
    return jobDetails.find((item) => item.id === id) || jobDetails[0]
  }, [jobDetails, id])

  const otherJobs = useMemo(() => {
    if (!job) return []
    return jobDetails.filter((item) => item.id !== job.id)
  }, [jobDetails, job])

  if (!job) {
    return <div className="min-h-screen bg-[#f3f7fb] p-10 text-center text-slate-600">Đang tải dữ liệu công việc...</div>
  }

  return (
    <div className="min-h-screen bg-[#f3f7fb] text-slate-900">
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-2.5">
          <div className="flex items-center gap-5">
            <Link to="/" className="flex items-center text-xl font-bold tracking-tight text-[#2b59ff]">
              <span className="material-symbols-outlined mr-1 text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                code
              </span>
              CHOCODE
            </Link>
            <div className="hidden items-center gap-4 text-sm font-medium text-slate-600 lg:flex">
              <a className="nav-link-animate" href="#">
                Việc làm IT
              </a>
              <a className="nav-link-animate" href="#">
                Tìm Developer
              </a>
              <a className="nav-link-animate" href="#">
                AI Analysis
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/jobs" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
              Job đã ứng tuyển
            </Link>
            <Link to="/dashboard" className="rounded-full bg-[#007bff] px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
              Dashboard
            </Link>
          </div>
        </div>
      </nav>

      <div className="border-b border-blue-500/20 bg-gradient-to-r from-[#20c3d0] via-[#2489d2] to-[#1e58b1]">
        <div className="mx-auto grid max-w-[1240px] gap-3 px-6 py-4 lg:grid-cols-[1fr_1fr_auto]">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input className="h-12 w-full rounded-xl border border-white/30 bg-white px-12 text-sm outline-none transition focus:ring-4 focus:ring-white/20" placeholder="Tìm vị trí tuyển dụng" type="text" />
          </div>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">location_on</span>
            <input className="h-12 w-full rounded-xl border border-white/30 bg-white px-12 text-sm outline-none transition focus:ring-4 focus:ring-white/20" placeholder="Địa điểm làm việc" type="text" />
          </div>
          <button className="h-12 rounded-xl bg-[#007bff] px-7 text-sm font-bold text-white transition hover:bg-blue-700">Tìm kiếm</button>
        </div>
      </div>

      <main className="mx-auto max-w-[1240px] px-6 py-5">
        <div className="mb-5 text-sm font-medium text-slate-500">
          <Link to="/" className="text-[#2489d2] hover:underline">
            Trang chủ
          </Link>{' '}
          /{' '}
          <Link to="/jobs" className="text-[#2489d2] hover:underline">
            Job đã ứng tuyển
          </Link>{' '}
          / <span className="text-slate-700">{job.title}</span>
        </div>

        <div className="grid items-start gap-4 xl:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-5">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_24px_60px_-45px_rgba(15,23,42,0.4)]">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-blue-700">{job.status}</span>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">{job.workMode}</span>
                  </div>
                  <h1 className="max-w-4xl text-[25px] font-black leading-tight tracking-tight text-slate-950">{job.title}</h1>
                  <p className="mt-1.5 text-[16px] font-bold text-slate-800">{job.company}</p>
                  <p className="mt-3 max-w-3xl text-[14px] leading-6 text-slate-600">{job.summary}</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[13px] font-medium text-slate-600">
                  Hạn nộp hồ sơ
                  <p className="mt-1 text-[18px] font-black text-slate-900">{job.deadline}</p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-3">
                {[
                  { icon: 'payments', label: 'Thu nhập', value: job.salary },
                  { icon: 'location_on', label: 'Địa điểm', value: job.location },
                  { icon: 'work_history', label: 'Kinh nghiệm', value: job.experience },
                ].map((item) => (
                  <article key={item.label} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-4">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#1e58b1] text-white shadow-sm">
                      <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                    </div>
                    <p className="text-[13px] text-slate-500">{item.label}</p>
                    <p className="mt-1 text-[15px] font-bold text-slate-900">{item.value}</p>
                  </article>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button className="flex-1 rounded-xl bg-[#007bff] px-5 py-3 text-base font-bold text-white transition hover:bg-blue-700">Ứng tuyển ngay</button>
                <button className="rounded-xl border border-[#007bff] bg-white px-5 py-3 text-base font-bold text-[#007bff] transition hover:bg-blue-50">Lưu tin</button>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_24px_60px_-45px_rgba(15,23,42,0.4)]">
              <div className="mb-6 flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div className="flex items-center gap-8">
                  <button className="border-b-2 border-[#007bff] pb-3 text-[15px] font-bold text-[#007bff]">Chi tiết tin tuyển dụng</button>
                  <button className="pb-3 text-[15px] font-bold text-slate-400">Việc làm liên quan</button>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="mb-4 flex items-center gap-3 text-[17px] font-black text-slate-950">
                  <span className="h-7 w-1.5 rounded-full bg-[#007bff]" />
                  Thẻ công việc
                </h2>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-100 px-3 py-1.5 text-[13px] font-semibold text-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <section>
                  <h3 className="mb-3 text-[17px] font-black text-slate-950">Mô tả công việc</h3>
                  <ul className="space-y-2 text-[14px] leading-7 text-slate-700">
                    {job.responsibilities.map((item) => (
                      <li key={item} className="ml-5 list-disc">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="mb-3 text-[17px] font-black text-slate-950">Yêu cầu ứng viên</h3>
                  <ul className="space-y-2 text-[14px] leading-7 text-slate-700">
                    {job.requirements.map((item) => (
                      <li key={item} className="ml-5 list-disc">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="mb-3 text-[17px] font-black text-slate-950">Quyền lợi</h3>
                  <ul className="space-y-2 text-[14px] leading-7 text-slate-700">
                    {job.benefits.map((item) => (
                      <li key={item} className="ml-5 list-disc">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_24px_60px_-45px_rgba(15,23,42,0.4)]">
              <h3 className="mb-4 text-[19px] font-black text-slate-950">Chi tiết các công việc khác</h3>
              <div className="grid gap-3 md:grid-cols-2">
                {otherJobs.map((item) => (
                  <article key={item.id} className="rounded-xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50/40">
                    <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                    <p className="mt-1 text-sm text-slate-500">{item.company}</p>
                    <p className="mt-1 text-sm font-semibold text-emerald-600">{item.salary}</p>
                    <Link className="mt-3 inline-flex text-sm font-bold text-[#007bff] hover:underline" to={`/job-detail/${item.id}`}>
                      Xem chi tiết
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-4 xl:sticky xl:top-24">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_24px_60px_-45px_rgba(15,23,42,0.4)]">
              <h2 className="text-[24px] font-black leading-tight text-slate-950">{job.company}</h2>
              <p className="mt-2 text-[13px] leading-6 text-slate-500">Môi trường làm việc hiện đại, tập trung hiệu suất và chất lượng sản phẩm công nghệ.</p>

              <div className="mt-6 space-y-4">
                {companyFacts.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#007bff]">
                      <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                    </div>
                    <div>
                      <p className="text-[13px] text-slate-500">{item.label}</p>
                      <p className="mt-1 text-[15px] font-bold text-slate-900">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_24px_60px_-45px_rgba(15,23,42,0.4)]">
              <h3 className="mb-4 text-[19px] font-black text-slate-950">Thông tin chung</h3>
              <div className="space-y-3 text-[13px]">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Cấp bậc</span>
                  <span className="font-bold text-slate-800">{job.level}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Số lượng tuyển</span>
                  <span className="font-bold text-slate-800">{job.openings}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Hình thức</span>
                  <span className="font-bold text-slate-800">{job.workMode}</span>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_24px_60px_-45px_rgba(15,23,42,0.4)]">
              <h3 className="mb-4 text-[19px] font-black text-slate-950">Công việc trong danh sách</h3>
              <div className="space-y-2.5">
                {jobs.map((item) => (
                  <Link
                    key={item.id}
                    className={`block rounded-lg border px-3 py-2 text-sm font-semibold transition ${
                      item.id === job.id ? 'border-blue-300 bg-blue-50 text-blue-700' : 'border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-blue-50'
                    }`}
                    to={`/job-detail/${item.id}`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </main>
    </div>
  )
}
