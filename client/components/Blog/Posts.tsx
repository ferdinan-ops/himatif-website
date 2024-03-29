import { IBlogData } from '../../types/blog.type'
import Container from '../AllPages/Container'
import Post from './Post'

interface PostsProps {
  posts: IBlogData[]
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <section className="mt-6 md:mt-8 xl:mt-10">
      <div className="mb-14 flex flex-wrap items-center gap-12 xl:gap-14">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}

export default Posts
