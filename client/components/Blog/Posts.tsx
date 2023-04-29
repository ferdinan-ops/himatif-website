import { IBlogData } from '../../types/blog.type'
import Post from './Post'

interface PostsProps {
  posts: IBlogData[]
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <section className="container mx-auto mt-6 px-6 md:mt-8 xl:mt-10 xl:px-0">
      <div className="flex flex-wrap items-center gap-10 md:gap-12 xl:gap-14">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}

export default Posts
