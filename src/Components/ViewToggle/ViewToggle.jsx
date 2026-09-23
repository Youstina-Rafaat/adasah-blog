export default function ViewToggle({count,category,reset,display ,view}) {
  return (
    <>
      <div className="mb-8 flex items-center justify-between">
    <p className="text-neutral-400">
      عرض <span className="font-bold text-white">{count}</span> مقالات  <span class="font-bold text-orange-500 capitalize">{category}</span>
    </p>
    <div className="flex items-center gap-2">
      <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
        <button
                    className={`p-2 rounded-lg transition-all duration-300 ${
            view=== "grid"||view===""
        ? "bg-orange-500 text-white"
        : "text-neutral-400 hover:text-white "
    }`}
          onClick={()=>display("grid")}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
        </button>
        <button
                    className={`p-2 rounded-lg transition-all duration-300 ${
            view=== "list"
        ? "bg-orange-500 text-white"
        : "text-neutral-400 hover:text-white "
    }`}
          onClick={()=>display("list")}
        >
          
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          
        </button>
      </div>
  {category!==" جميع المقالات" && category !==""?<button onClick={()=>reset()} className="text-sm text-neutral-500 hover:text-orange-500 flex items-center gap-1 transition-colors"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>مسح الفلاتر</button>:""}
    </div>
    </div>
    </>
  )
}
