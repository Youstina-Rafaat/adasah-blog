import { useParams } from "react-router-dom";
import ArticleDetails from "../../Components/ArticleDetails/ArticleDetails";
import ArticleHero from "../../Components/ArticleHero/ArticleHero";
import RelatedArticles from "../../Components/RelatedArticles/RelatedArticles";

export default function BlogDetails({ posts }) {
  const { slug } = useParams();
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <p className="text-white text-center py-20 bg-[#0a0a0a] min-h-screen">
        جاري التحميل...
      </p>
    );
  }
  function formatDate(dateString){
    return( new Date(dateString).toLocaleDateString("ar-EG",{
    year:"numeric",
    month:"long",
    day:"numeric"
  }))
  }
  return (
    <div className="flex-grow">
      <article className="bg-[#0a0a0a] min-h-screen">
        <ArticleHero post={post} formatDate={formatDate}/>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <ArticleDetails post={post} formatDate={formatDate}/>
          <RelatedArticles posts={posts} currentPostId={post.id} category={post.category} />
        </div>
      </article>
    </div>
  );
}


