import Container from "../AllPages/Container"

interface NoPostProps {
  search?: string
  category?: string
}

const NoPost: React.FC<NoPostProps> = ({ search, category }) => {
  return (
    <Container className="min-h-[400px] max-w-[600px] flex flex-col">
      <div className='flex m-auto flex-col items-center gap-5'>
        <p className='text-slate-400 text-xl md:text-3xl text-center md:leading-[50px]'>
          Blog dengan
          {category && <> kategori <span className='text-primary font-bold italic'>{category}</span></>}{' '}
          {category && search && 'dan'} {search && <>keyword <span className='italic text-primary font-bold'>{search}</span></>}{' '}
          tidak dapat ditemukan
        </p>
        <p className='text-2xl md:text-4xl'>😭😭😭</p>
      </div>
    </Container>
  )
}

export default NoPost