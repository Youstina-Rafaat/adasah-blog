import { Link } from "react-router-dom";

export default function LatestArticles() {
  return (
    <>
      
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
            <div className="text-sm font-medium text-orange-500 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full inline-flex items-center gap-2 mb-8 animate-fade-in">
                <span className="relative flex h-2 w-2 ml-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                </span>
                الأحدث
              </div>
              <h2 className="text-6xl leading-tight font-bold text-white">أحدث المقالات</h2>
              <p className=" text-lg leading-relaxed text-neutral-400 max-w-lg">
                محتوى جديد طازج من المطبعة
              </p>
            </div>
            <Link
              className="group inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors"
              to="/blog"
              data-discover="true"
            >
              عرض جميع المقالات
              <svg
                className="w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>


    </>
  );
}
