import { allArticles } from "contentlayer/generated";
import MDXContent from "@/components/mdx/MDXContent";
import { notFound } from "next/navigation";
import GiscusComments from "@/components/GiscusComments";
import ArticlePageHeading from "@/components/ArticlePageHeading";
import MDXTableOfContents from "@/components/mdx/MDXTableOfContents";

export const generateStaticParams = async () => allArticles.map((article) => ({ slug: article.slug }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
    const article = allArticles.find((article) => article.slug === params.slug) || {
        title: "Article not found"
    }
    return { title: article.title }
}

const ArticleLayout = ({ params }: { params: { slug: string } }) => {
    const article = allArticles.find((article) => article.slug === params.slug)

    if (!article) notFound()

    return (
        <>
            <MDXTableOfContents raw={article.body.raw} />

            <div className={"min-h-screen bg-slate-200/70 dark:bg-gray-900/75 backdrop-blur-md"}>
                <div className={"flex min-h-[200px] md:min-h-[300px] rounded-b-2xl overflow-hidden"}
                     style={{backgroundImage: 'url(' + article.image +')', backgroundSize: 'cover'}}>
                    <ArticlePageHeading title={article.title} date={article.date}/>
                </div>
                <div className={"pb-8 mx-4 lg:mx-auto lg:px-4 max-w-4xl flex"}>
                    <div className={"flex-grow"}>
                        <MDXContent code={article.body.code} />
                        <GiscusComments />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArticleLayout