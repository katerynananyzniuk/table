import {Table} from '../components/Table'
import useFetch from '../hooks/useFetch'
import {PostCreator} from '../components/PostCreator'
import {useState, useRef} from 'react'
import {Transition} from 'react-transition-group'
import {newTenPosts} from '../generatedPosts'
import {IPost} from '../models'

export const Home = () => {
  const {data: posts, loading, error} = useFetch('http://localhost:8000/posts')
  const [creation, setCreation] = useState(false)
  const nodeRef = useRef(null)

  const onClose = () => setCreation(!creation)

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
    })
  }

  return (
    <>
      {!creation && 
        <div className='text-center'>
          <button 
            className='btn btn-primary mb-2'
            onClick={() => setCreation(true)}
          >Create Post</button>
        </div>
      }
      <Transition
        in={creation}
        timeout={1000}
        mountOnEnter
        unmountOnExit
        nodeRef={nodeRef}
      >
        {state => {
          return (
            <div ref={nodeRef} className={`form ${state}`}>
              <PostCreator onClose={onClose}/>
            </div>
          )
        }}
      </Transition>

      {error && <div className='text-danger text-center'>{error}</div>}
      {loading && <div className='text-center'>Loading...</div>}
      {posts && 
        <>
          <Table posts={posts}/>
          <div className='text-center'>
            <button 
              className='btn btn-primary m-4'
              onClick={addTenPosts}>
                Add 10 more Posts...
            </button>
          </div>
        </>
      }
    </>
  )
}