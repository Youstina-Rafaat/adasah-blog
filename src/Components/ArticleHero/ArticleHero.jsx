import { Link } from "react-router-dom"



export default function ArticleHero({post,formatDate}) {
  return (
    <>
            <div className="overflow-hidden relative h-[60vh] min-h-[500px]">
            <img
              alt={post.title}
              className="object-cover absolute inset-0 w-full h-full"
              src={post.image}
            />
            <div className="bg-gradient-to-t absolute inset-0 from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
            <div className="bg-gradient-to-r absolute inset-0 from-[#0a0a0a]/30 to-transparent" />
            <div className="left-8 absolute top-8 right-8">
              <nav className="border border-white/10 inline-flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-md rounded-full text-sm">
                <Link
                  className="hover:text-white text-white/70 transition-colors"
                  to="/"
                  data-discover="true"
                >
                  <i className="fa-solid fa-home" />
                </Link>
                <i className="text-xs fa-solid fa-chevron-left text-white/30" />
                <Link
                  className="hover:text-white text-white/70 transition-colors"
                  to="/blog"
                  data-discover="true"
                >
                  المدونة
                </Link>
                <i className="text-xs fa-solid fa-chevron-left text-white/30" />
                <span className="truncate text-orange-400 font-medium max-w-[200px]">
                  {post.category}
                </span>
              </nav>
            </div>
            <div className="right-0 absolute bottom-0 left-0 p-8 md:p-12">
              <div className="mx-auto max-w-5xl">
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <Link
                    className="hover:bg-orange-600 px-4 py-2 bg-orange-500 text-white text-sm font-bold rounded-full transition-colors"
                    to="/blog?category=بورتريه"
                    data-discover="true"
                  >
                    {post.category}
                  </Link>
                  <div className="text-sm flex items-center gap-4 text-white/70">
                    <span className="gap-2 flex items-center">
                      <i className="fa-regular fa-calendar" />
                      {formatDate(post.date)}
                    </span>
                    <span className="gap-2 flex items-center">
                      <i className="fa-regular fa-clock" />{post.readTime}
                    </span>
                  </div>
                </div>
                <h1 className="max-w-4xl text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  {post.title}
                </h1>
                <div className="border border-white/10 flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md rounded-2xl w-fit">
                  <img
                    alt={post.author.name}
                    className="ring-2 ring-orange-500/50 w-14 h-14 rounded-full object-cover"
                    src={post.author.avatar}/>
                  <div>
                    <p className="font-bold text-white">{post.author.name}</p>
                    <p className="text-sm text-white/60">{post.author.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}