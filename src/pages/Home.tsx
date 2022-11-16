import {Table} from '../components/Table'
import useFetch from '../hooks/useFetch'
import {PostCreator} from '../components/PostCreator'
import {useState, useRef} from 'react'
import {Transition} from 'react-transition-group'

export const Home = () => {
  const {data: posts, loading, error} = useFetch('http://localhost:8000/posts')
  const [creation, setCreation] = useState(false)
  const nodeRef = useRef(null)

  const onClose = () => setCreation(!creation)

  return (
    <>
      {!creation && 
        <div className='text-center'>
          <button 
            className='btn btn-primary mb-4'
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
      {posts && <Table posts={posts}/>}
    </>
  )
}