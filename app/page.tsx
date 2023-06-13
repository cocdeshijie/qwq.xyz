import { compareDesc } from "date-fns";
import { allArticles } from "contentlayer/generated";
import ArticleLoader from "@/components/ArticleLoader";
import HeroSection from "@/components/hero/HeroSection";

export default function Home() {
    const articles = allArticles.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
      <>
          <HeroSection />
          <main className={"flex justify-center bg-slate-200/70 dark:bg-gray-900/75 backdrop-blur-md overflow-hidden"}>
              <div className={"mx-4 lg:mx-auto lg:w-full max-w-4xl"}>
                  <h1 className={"font-heading text-xl md:text-2 xl my-6"}>Articles</h1>
                  <ArticleLoader articles={articles} articlesPerLoad={3} />
              </div>
          </main>
      </>
  )
}
