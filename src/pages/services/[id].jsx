import Footer  from "../../components/Footer"
import { Header } from "../../components/Header"
import { features, posts } from "../../components/constants";
import { useRouter } from "next/router"
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm';
import matter from 'gray-matter';

export default function Services() {
  const router = useRouter()
  const { id } = router.query;
  const [markdownContent, setMarkdownContent] = useState('');
  const [currentItems, setCurrentItems] = useState(features);

  
  useEffect(() => {
    const { id } = router.query;

    if(id) {
      const filteredItems = features.filter(item => item.url === id);
    setCurrentItems(filteredItems);
    }
    
  }, [router.query]);
  
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
               

                <div className="flex flex-col text-tablet">
                  <div
                    className={`text-[#F1F1F1]`}
                  >
                    {currentItems[0]?.description}
                  </div>
                  {/* <div className=" text-[#989898]">
                    {currentItems[0].author?.profile}
                  </div> */}
                </div>
              </div>

              <img
                src={currentItems[0].image}
                alt="altImage"
                sizes="100vh"
                height="500"
                width="500"
                className="w-full h-[500px] object-cover mb-10"
              />
            </>}
      
                  {currentItems[0].child}
          
        </div>
      </div>
    </main>
    <Footer />
    </div>
  )
}
