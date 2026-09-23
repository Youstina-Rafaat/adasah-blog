export default function CategoryFilter({selectCategory,categorySelected}) {
  return (
    <>
<div className="flex flex-wrap justify-center gap-2">
  <button
    onClick={() => selectCategory("جميع المقالات")}
    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
      (categorySelected === "جميع المقالات" || categorySelected === "")
        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
        : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
    }`}
  >
    جميع المقالات
  </button>
  
  <button
    onClick={() => selectCategory("إضاءة")}
    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
      categorySelected === "إضاءة"
        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
        : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
    }`}
  >
    إضاءة
  </button>
  <button
    onClick={() => selectCategory("بورتريه")}
    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
      categorySelected === "بورتريه"
        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
        : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
    }`}
  >
    بورتريه
  </button>
  <button
    onClick={() => selectCategory("مناظر طبيعية")}
    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
      categorySelected === "مناظر طبيعية"
        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
        : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
    }`}
  >
    مناظر طبيعية
  </button>
  <button
    onClick={() => selectCategory("تقنيات")}
    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
      categorySelected === "تقنيات"
        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
        : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
    }`}
  >
    تقنيات
  </button>
  <button
    onClick={() => selectCategory("معدات")}
    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
      categorySelected === "معدات"
        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
        : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
    }`}
  >
    معدات
  </button>
</div>
    </>
  );
}
