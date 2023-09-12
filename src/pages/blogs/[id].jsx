import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { posts } from "@/components/constants";
import { useRouter } from "next/router"
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm';
import matter from 'gray-matter';

export default function Blog() {
  const router = useRouter()
  const { id } = router.query;
  const [markdownContent, setMarkdownContent] = useState('');
  const [currentItems, setCurrentItems] = useState(posts);

  
  useEffect(() => {
    const { id } = router.query;

    if (typeof id === 'string') {
      const filteredItems = posts.filter(item => item.id === parseInt(id));
      setCurrentItems(filteredItems);
    }
  }, [router.query]);
  useEffect(() => {
    const fetchFile = async () => {
      const response = await fetch(`/blog-content/${router.query.id}.md`);
      const resText = await response.text();
      const content = matter(resText).content;
      setMarkdownContent(content);
    };

    if (router.query.id) fetchFile();
  }, [router.query.id]);
  return (
    <div>
        <Header />
        <main className="relative isolate  bg-black text-gray-400 text-normal">
      {/* Background */}
      {/* <div
        className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-purple-800 to-indigo-700 opacity-50"
          style={{
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
        />
      </div> */}
      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 rounded-xl">
          {currentItems && <>
            <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
              {currentItems[0].title}
            </h2>
            <div className="flex items-center gap-4 mt-6 mb-10">
                <img
                  src={currentItems[0].author?.imageUrl}
                  alt="altImage"
                  sizes="100vh"
                  height="0"
                  width="0"
                  className="w-16 h-16 rounded-full"
                />

                <div className="flex flex-col text-tablet">
                  <div
                    className={`text-[#F1F1F1]`}
                  >
                    {currentItems[0].author?.name}
                  </div>
                  <div className=" text-[#989898]">
                    {currentItems[0].author?.profile}
                  </div>
                </div>
              </div>

              <img
                src={currentItems[0].imageUrl}
                alt="altImage"
                sizes="100vh"
                height="500"
                width="500"
                className="w-full h-[500px] object-cover mb-10"
              />
            </>}
        <ReactMarkdown
                components={{
                  h3: ({ node, ...props }) => (
                    <h3
                      className="text-f1 text-[30px] text-gray-200 text-sm  sm:text-md font-satoshiMedium pt-4"
                      {...props}
                    />
                  ),
                  h4: ({ node, ...props }) => (
                    <h4 className="text-f1 text-[20px] text-gray-300 pt-4" {...props} />
                  ),
                  // Map `h1` (`# heading`) to use `h2`s.
                  // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
                  p: ({ node, ...props }) => (
                    <p
                      className="text-f2 text-sm sm:text-normal  py-4"
                      {...props}
                    />
                  ),
                  strong: ({ node, ...props }) => (
                    <span
                      className="text-f1 xxs:text-sm4 xs:text-sm6 font-satoshiMedium"
                      {...props}
                    />
                  ),
                  ul: ({ node, ordered = 'false', ...props }) => (
                    <ul
                      className="list-disc ml-6 p xxs:text-sm4 xs:text-sm6 text-[20px] my-1 text-f2"
                      {...props}
                    />
                  ),
                  ol: ({ node, ordered = 'false', ...props }) => (
                    <ol
                      className="list-decimal ml-6 xxs:text-sm4 xs:text-sm6 text-[20px] my-1 text-f2"
                      {...props}
                    />
                  ),

                  a: ({ node, ...props }) => (
                    <a
                      className="text-[#ffffff] xxs:text-sm4 xs:text-sm6 pb-10 underline"
                      {...props}
                    />
                  ),
                }}
                linkTarget="_blank"
                remarkPlugins={[gfm]}
              >
                {markdownContent}
              </ReactMarkdown>
     
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
         
          </div>
        </div>
      </div>
    </main>
    <Footer />
    </div>
  )
}
