import { IBlogData } from '../../types/blog.type'
import Container from '../AllPages/Container'
import Post from './Post'

interface PostsProps {
  posts: IBlogData[]
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <Container className="mt-6 md:mt-8 xl:mt-10">
      <div className="flex flex-wrap items-center gap-12 xl:gap-14 mb-14">
        {posts.map((post) => <Post key={post.id} post={post} />)}
      </div>
    </Container>
  )
}

export default Posts
