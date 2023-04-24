import Post from './Post'

const Posts = ({ posts }) => {
  console.log({ posts })
  return (
    <section className="container mx-auto mt-6 px-6 md:mt-8 xl:mt-10 xl:px-0">
      <div className="flex flex-wrap items-center gap-10 md:gap-12 xl:gap-14">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
      <div className="mt-14 mb-20 flex justify-center text-xs md:text-sm xl:text-base">
        <button className="rounded-lg bg-primary py-2 px-4 font-medium text-white shadow-2xl shadow-primary/60 md:px-5 md:py-2.5 xl:py-3 xl:px-6">
          Load More
        </button>
      </div>
    </section>
  )
}

export default Posts
