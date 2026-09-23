import { useState } from "react";
import { useSearchParams, useParams, useNavigate } from "react-router-dom";
import CategoryFilter from "../../Components/CategoryFilter/CategoryFilter";
import BlogHeader from "../../Components/BlogHeader/BlogHeader";
import SearchBar from "../../Components/SearchBar/SearchBar";
import ViewToggle from "../../Components/ViewToggle/ViewToggle";
import PostList from "../../Components/PostList/PostList";
import PostGrid from "../../Components/PostGrid/PostGrid";

const POSTS_PER_PAGE = 6;

export default function Blog({ posts }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const categorySelected = searchParams.get("category") || "";

  const { pageNumber } = useParams();
  const navigate = useNavigate();
  const currentPage = Number(pageNumber) || 1;

  const [searchTerm, setSearchTerm] = useState("");
  const [view, setView] = useState("");

function selectCategory(category) {
  const isAll = category === "" || category === "جميع المقالات";

  if (isAll) {
    setSearchParams({});
  } else {
    setSearchParams({ category });
  }
}

  function reset() {
    setSearchParams({});
    navigate(`/blog/page/1`);
  }

  function display(list) {
    setView(list);
  }

  let filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.includes(searchTerm) ||
      post.excerpt.includes(searchTerm);

    const matchesCategory =
      categorySelected === "" || post.category === categorySelected;

    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  function goToPage(num) {
    if (num < 1 || num > totalPages) return;
    const query = categorySelected ? `?category=${categorySelected}` : "";
    navigate(`/blog/page/${num}${query}`);
  }
  function formatDate(dateString){
    return( new Date(dateString).toLocaleDateString("ar-EG",{
    year:"numeric",
    month:"long",
    day:"numeric"
  }))
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <BlogHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <SearchBar value={searchTerm} change={(e) => setSearchTerm(e.target.value)} />
          <CategoryFilter selectCategory={selectCategory} categorySelected={categorySelected} />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-[146px]">
        <ViewToggle posts={posts} category={categorySelected} reset={reset} display={display} view={view} count={filteredPosts.length} />
        {view === "grid" || view === "" ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post) => (
              <PostGrid post={post} key={post.id} formatDate={formatDate} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {currentPosts.map((post) => (
              <PostList post={post} key={post.id} formatDate={formatDate}/>
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-xl bg-[#161616] border border-[#262626] text-white disabled:opacity-40 flex items-center justify-center"
            >
              &lt;
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => goToPage(num)}
                className={`w-10 h-10 rounded-xl border flex items-center justify-center font-semibold ${
                  num === currentPage
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-[#161616] border-[#262626] text-neutral-400"
                }`}
              >
                {num}
              </button>
            ))}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-xl bg-[#161616] border border-[#262626] text-white disabled:opacity-40 flex items-center justify-center"
            >
              &gt;
            </button>
          </div>
        )}
      </div>
    </div>
  );
}