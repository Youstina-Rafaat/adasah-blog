import { Link } from "react-router-dom";

export default function ArticleDetails({ post ,formatDate }) {
  const parts = post.content.split(/^##\s+/m);

  const intro = parts[0].trim();

  const sections = parts
    .slice(1)
    .filter((s) => s.trim() !== "")
    .map((section, index) => {
      const lines = section.trim().split("\n");
      const title = lines[0].trim();
      const paragraphs = lines
        .slice(1)
        .join("\n")
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter(Boolean);
      return { id: `section-${index}`, title, paragraphs };
    });

  const introParagraphs = intro
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className="gap-12 grid lg:grid-cols-[1fr_300px]">
      <div className="lg:order-1 order-2">
        {post.excerpt && (
          <div className="border border-orange-500/20 mb-10 p-6 bg-gradient-to-r from-orange-500/10 to-yellow-500/5 rounded-2xl">
            <p className="italic text-lg text-neutral-200 leading-relaxed">
              "{post.excerpt}"
            </p>
          </div>
        )}

        <div className="prose-custom">
          {introParagraphs.map((p, i) => (
            <p
              key={i}
              className="mb-6 text-neutral-300 leading-relaxed text-lg"
            >
              {p}
            </p>
          ))}

          {sections.map((section) => (
            <div key={section.id}>
              <h2
                id={section.id}
                className="scroll-mt-24 text-2xl md:text-3xl font-bold text-white mt-14 mb-6 flex items-center gap-4"
              >
                <span className="border border-orange-500/30 flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl">
                  <i className="fa-solid fa-camera text-orange-500" />
                </span>
                {section.title}
              </h2>
              {section.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="mb-6 text-neutral-300 leading-relaxed text-lg"
                >
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="border border-[#262626] mt-14 p-6 bg-[#111111] rounded-2xl">
          <div className="mb-4 flex items-center gap-3">
            <div className="border border-orange-500/30 w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center">
              <i className="fa-solid fa-tags text-orange-500" />
            </div>
            <h3 className="font-bold text-white">الوسوم</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags?.map((tag, index) => (
              <span
                key={index}
                className="hover:text-orange-500 px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626] hover:border-orange-500/50 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="border border-[#262626] mt-6 p-6 bg-[#111111] rounded-2xl">
          <div className="gap-4 flex items-center justify-between flex-wrap">
            <div className="gap-3 flex items-center">
              <div className="border border-orange-500/30 w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center">
                <i className="fa-solid fa-share-nodes text-orange-500" />
              </div>
              <h3 className="font-bold text-white">شارك المقال</h3>
            </div>
            <div className="flex gap-2">
              <button className="hover:border-transparent w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#1da1f2] hover:text-white transition-all duration-300">
                <i className="fa-brands fa-x-twitter" />
              </button>
              <button className="hover:border-transparent w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#0077b5] hover:text-white transition-all duration-300">
                <i className="fa-brands fa-linkedin-in" />
              </button>
              <button className="hover:border-transparent w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#25d366] hover:text-white transition-all duration-300">
                <i className="fa-brands fa-whatsapp" />
              </button>
              <button className="hover:border-transparent w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-orange-500 hover:text-white transition-all duration-300">
                <i className="fa-solid fa-link" />
              </button>
            </div>
          </div>
        </div>

      
        <div className="border border-[#262626] mt-6 p-8 bg-gradient-to-br from-[#161616] to-[#111111] rounded-2xl">
          <div className="gap-6 flex flex-col sm:flex-row items-center sm:items-start">
            <img
              alt={post.author.name}
              className="ring-4 ring-orange-500/20 w-24 h-24 rounded-2xl object-cover"
              src={post.author.avatar}
            />
            <div className="flex-1 text-center sm:text-right">
              <span className="uppercase tracking-wider text-xs text-orange-500 font-semibold">
                كاتب المقال
              </span>
              <h3 className="mt-1 text-xl font-bold text-white">
                {post.author.name}
              </h3>
              <p className="mb-3 text-neutral-500 text-sm">
                {post.author.role}
              </p>
              <p className="leading-relaxed text-neutral-400 text-sm">
                مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير
                الفوتوغرافي.
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="lg:order-2 order-1">
        <div className="space-y-6 lg:sticky lg:top-24">
          <div className="border border-[#262626] p-6 bg-[#111111] rounded-2xl">
            <div className="mb-5 flex items-center gap-3">
              <div className="border border-orange-500/30 w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center">
                <i className="fa-solid fa-list text-orange-500" />
              </div>
              <h3 className="font-bold text-white">محتويات المقال</h3>
            </div>
            <nav className="space-y-2">
              {sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="group flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300"
                >
                  <span className="group-hover:text-orange-500 flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 transition-colors">
                    {index + 1}
                  </span>
                  <span className="text-sm">{section.title}</span>
                </a>
              ))}
            </nav>
          </div>

          
          <div className="border border-[#262626] p-6 bg-[#111111] rounded-2xl">
            <div className="gap-4 grid grid-cols-2">
              <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                <i className="mb-2 fa-regular fa-clock text-orange-500 text-xl" />
                <p className="font-bold text-white">{post.readTime}</p>
                <p className="text-xs text-neutral-500">وقت القراءة</p>
              </div>
              <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                <i className="mb-2 fa-regular fa-calendar text-orange-500 text-xl" />
                <p className="font-bold text-sm text-white">{formatDate(post.date)}</p>
                <p className="text-xs text-neutral-500">تاريخ النشر</p>
              </div>
            </div>
          </div>

          
          <div className="border border-orange-500/20 p-6 bg-gradient-to-br from-orange-500/10 to-yellow-500/5 rounded-2xl">
            <div className="text-center">
              <div className="mx-auto mb-4 w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center">
                <i className="fa-solid fa-envelope text-orange-500 text-xl" />
              </div>
              <h3 className="mb-2 font-bold text-white">لا تفوّت جديدنا</h3>
              <p className="mb-4 text-neutral-400 text-sm">
                اشترك للحصول على أحدث المقالات
              </p>
              <Link
                className="text-center block w-full py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors"
                to="/blog"
              >
                تصفح المزيد
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}