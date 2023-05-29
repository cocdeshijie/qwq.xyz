import { format, parseISO } from "date-fns";
import { allArticles } from "contentlayer/generated";
import { MDXContent } from "@/components/mdx/mdx-content";
import {notFound} from "next/navigation";

export const generateStaticParams = async () => allArticles.map((article) => ({ slug: article.slug }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
    const article = allArticles.find((article) => article.slug === params.slug)
    if (!article) throw new Error(`Post not found for slug: ${params.slug}`)
    return { title: article.title }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
    // Find the post for the current page.
    const article = allArticles.find((article) => article.slug === params.slug)

    // 404 if the post does not exist.
    if (!article) notFound()


    return (
        <div className={"min-h-screen bg-white/60 backdrop-blur-md"}>
            <div className={"flex min-h-[200px] md:min-h-[300px] rounded-b-2xl overflow-hidden"}
                 style={{backgroundImage: 'url("https://api.maho.cc/random-img/mobile.php?sas=sas")',
                     backgroundSize: 'cover'}}>
                <div className={"flex w-full backdrop-blur-sm"}>
                    <div className={"self-end w-full pb-8 mx-4 lg:mx-auto lg:px-4 max-w-3xl"}>
                        <h1 className={"text-lg md:text-3xl font-bold"}>
                            {article.title}
                        </h1>
                        <hr className={"h-1 mt-1 md:mb-2 border-0 rounded bg-gray-700"}/>
                        <span className={"text-xs md:text-base font-light"}>
                            {format(parseISO(article.date), 'LLLL d, yyyy')}
                        </span>
                    </div>
                </div>
            </div>

            <div className={"pb-8 mx-4 lg:mx-auto lg:px-4 max-w-4xl"}>
                <section className={"mt-6 text-justify max-w-none prose hyphens-auto"}>
                    <MDXContent code={article.body.code} />
                </section>
            </div>
        </div>
    )
}

export default PostLayout