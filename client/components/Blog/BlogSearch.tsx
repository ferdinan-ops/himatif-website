import * as React from "react"
import { useRouter } from "next/router"
import Image from "next/image"

import { BiSearch } from "react-icons/bi"
import Container from "../AllPages/Container"

const BlogSearch = () => {
  const router = useRouter()
  const [keyword, setKeyword] = React.useState<string>('')
  const blogImage = "https://source.unsplash.com/random?technology"

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push({
      pathname: "/blogs",
      query: { ...router.query, search: keyword },
    });
  };

  return (
    <Container className="mt-24">
      <div className="relative flex h-36 rounded-xl md:h-40 xl:h-48">
        <h1 className="m-auto font-logo text-2xl font-bold text-white md:text-3xl xl:text-4xl">Blog</h1>
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-xl">
          <div className="relative h-full w-full">
            <Image src={blogImage} alt="blog-image" fill className="object-cover brightness-[0.4]" />
          </div>
        </div>
        <div className="absolute -bottom-[26px] left-1/2 w-[80%] -translate-x-1/2 overflow-hidden rounded-xl shadow-xl shadow-gray-200 md:w-[50%]">
          <form className="flex items-center gap-3 bg-white px-5 py-2.5 md:gap-5 md:px-6 md:py-3 xl:px-7 xl:py-3.5" onSubmit={handleSearch}>
            <BiSearch className="text-xl text-slate-400 md:text-2xl xl:text-3xl" />
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Search"
              className="h-full w-full font-logo text-sm outline-none placeholder:text-slate-400 md:text-base xl:text-lg"
            />
          </form>
        </div>
      </div>
    </Container>
  )
}

export default BlogSearch