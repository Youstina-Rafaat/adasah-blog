import { Link } from "react-router-dom";

export default function ArticleCard() {
  return (
    <>
        
          <div className="justify-between items-start gap-4 flex flex-col md:flex-row md:items-end mb-12">
            <div>
             <div className="border border-orange-500/30 text-sm font-medium rounded-full inline-flex items-center gap-2 mb-8 animate-fade-in text-orange-500 px-4 py-2 bg-orange-500/10"> 
              <span className="relative flex h-2 w-2 ml-2">
                  <span className="inline-flex h-full w-full rounded-full bg-orange-500 opacity-75 animate-ping absolute"></span>
                  <span className="rounded-full relative h-2 w-2 bg-orange-500 inline-flex" ></span>
                </span>
                <span className="font-medium text-sm text-neutral-300">
                مميز
                </span>
              </div>
              <h2 className="font-bold text-6xl leading-tight text-white">مقالات مختارة</h2>
              <p className="max-w-lg leading-relaxed text-lg text-neutral-400">
                محتوى منتقى لبدء رحلة تعلمك
              </p>
            </div>
            <Link
              className="hover:-translate-y-0.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium group inline-flex items-center gap-2 px-5 py-2.5 transition-all duration-300"
              to="/blog"
              data-discover="true"
            >
              عرض الكل
              <svg
                className="group-hover:-translate-x-1 w-4 h-4 transition-transform rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
          
    </>
  );
}