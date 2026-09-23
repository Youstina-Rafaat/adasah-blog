import ArticleCard from "../../Components/ArticleCard/ArticleCard";
import Category from "../../Components/Category/Category";
import Hero from "../../Components/Hero/Hero";
import HomePost from "../../Components/HomePost/HomePost";
import LatestArticles from "../../Components/LatestArticles/LatestArticles";
import Newsletter from "../../Components/Newsletter/Newsletter";
import PostGrid from "./../../Components/PostGrid/PostGrid";

export default function Home({ posts }) {
    function formatDate(dateString){
    return( new Date(dateString).toLocaleDateString("ar-EG",{
    year:"numeric",
    month:"long",
    day:"numeric"
  }))
  }

  return (
    <>
      <Hero />
      <div className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-500/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ArticleCard />
          <div className="space-y-8">
            {posts.slice(0, 3).map(function (post) {
              return <HomePost post={post} key={post.id} formatDate={formatDate}/>;
            })}
          </div>
        </div>
      </div>
      <div className="py-24 bg-[#111111] relative border-y border-[#262626]">
        <Category />
      </div>
      <div className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-orange-500/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LatestArticles />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(3, 6).map(function (post) {
              return <PostGrid post={post} key={post.id} formatDate={formatDate}/>;
            })}
          </div>
        </div>
      </div>
      <div className="py-24 relative overflow-hidden bg-[#0a0a0a]">
        <Newsletter/>
      </div>
    </>
  );
}
