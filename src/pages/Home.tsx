import {Table} from '../components/Table'
import useFetch from '../hooks/useFetch'

export const Home = () => {
  const {data: posts, loading, error} = useFetch('http://localhost:8000/posts')

  return (
    <>
      {error && <div className='text-center text-danger'>{error}</div>}
      {loading && <div className='text-center'>Loading...</div>}
      {posts && <Table posts={posts}/>}
    </>
  )
}