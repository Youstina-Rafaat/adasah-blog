import { NavLink } from "react-router-dom"

export default function NotFound() {
  return (
    <>
<main className="flex-grow">
    <div className="relative overflow-hidden min-h-screen flex items-center justify-center bg-[#0a0a0a]">
        <div className="bg-[size:60px_60px] absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)]" />
        <div className="opacity-40 absolute inset-0">
            <div className="animate-[float_6s_ease-in-out_infinite] absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px]" />
            <div className="animate-[float_8s_ease-in-out_infinite_1s] absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-500/10 rounded-full blur-[100px]" /></div>
            <div className="text-center relative px-4 max-w-lg mx-auto">
                <div className="mb-6 relative">
                    <h1 className="leading-none select-none text-[140px] md:text-[180px] font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500">404</h1>
                    <div className="pointer-events-none leading-none select-none absolute inset-0 text-[140px] md:text-[180px] font-black text-orange-500/20 blur-2xl">404</div>
                </div>
                <div className="mx-auto mb-8 relative w-28 h-28">
                    <div className="border border-orange-500/30 absolute inset-0 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full" />
                    <div className="flex items-center justify-center absolute inset-0">
                        <svg className="text-orange-500 w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <div className="rotate-12 animate-bounce absolute -top-2 -right-2 w-5 h-5 bg-orange-500 rounded-lg" />
                        <div className="animate-pulse absolute -bottom-1 -left-3 w-4 h-4 bg-yellow-500 rounded-full" /></div>
                        <h2 className="font-bold text-white mb-4 text-2xl md:text-3xl">عفواً! الصفحة غير موجودة</h2>
                        <p className="text-lg text-neutral-400 mb-8">الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار الصحيح.</p>
                        <div className="mb-12 flex flex-col sm:flex-row justify-center gap-4"><NavLink className="gap-2 cursor-pointer font-semibold text-white transition-all duration-300 justify-center items-center inline-flex px-8 py-4 bg-linear-135 from-[#f97316] to-[#ea580c] rounded-full" to="/" data-discover="true">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        الذهاب للرئيسية</NavLink>
                        <NavLink className="gap-2 cursor-pointer px-8 py-4 font-semibold text-white transition-all duration-300 bg-[#0000] border border-[#333] rounded-full inline-flex items-center justify-center" to="/blog" data-discover="true"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>تصفح المقالات</NavLink>
                        </div>
                        <div className="border-t border-[#262626] pt-8">
                            <p className="text-sm text-neutral-500 mb-4">قد تجد هذه مفيدة:</p>
                            <div className="text-sm flex flex-wrap justify-center gap-4">
                                <NavLink className="font-medium text-orange-500 hover:text-orange-400 hover:underline" to="blog" data-discover="true">المدونة</NavLink>
                                <span className="text-neutral-600">•</span>
                                <NavLink className="font-medium text-orange-500 hover:text-orange-400 hover:underline" to="about" data-discover="true">من نحن</NavLink>
                                <span className="text-neutral-600">•</span>
                                <NavLink className="font-medium text-orange-500 hover:text-orange-400 hover:underline" to="privacy" data-discover="true">الخصوصية</NavLink>
                                </div>
                                </div>
                                </div>
                                </div>
                                </main>
    </>
  )
}