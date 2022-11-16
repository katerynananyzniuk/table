import {Table} from '../components/Table'
import useFetch from '../hooks/useFetch'
import {newTenPosts} from '../generatedPosts'
import {IPost} from '../models'
import {PostCreation} from '../components/PostCreation'

export const Home = () => {
  const {data: posts, loading, error} = useFetch('http://localhost:8000/posts')

  const addTenPosts = () => {
    const posts:IPost[] = newTenPosts

    posts.map(post => {
      fetch('http://localhost:8000/posts', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(post)
      }).then(() => {
        console.log('new post added:', post);
      })
      return post
    })
  }

  return (
    <>
      <PostCreation />
      
      {error && <div className='text-danger text-center'>{error}</div>}
      {loading && <div className='text-center'>Loading...</div>}
      {posts && 
        <>
          <Table posts={posts}/>
          
          <div className='text-center'>
            <button 
              className='btn btn-primary mt-2 mb-4'
              onClick={addTenPosts}>
                Add 10 more Posts...
            </button>
          </div>
        </>
      }
    </>
  )
}