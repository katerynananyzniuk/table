import {useState, useRef} from 'react'
import {PostForm} from './PostForm'
import {Transition} from 'react-transition-group'

function PostCreation() {
  const [newPost, setNewPost] = useState(false)
  const nodeRef = useRef(null)

  const onClose = () => setNewPost(!newPost)
  
  return (
    <>
      {!newPost && 
        <div className='text-center'>
          <button 
            className='btn btn-primary mb-4'
            onClick={() => setNewPost(true)}
          >Create Post</button>
        </div>
      }
      <Transition
        in={newPost}
        timeout={1000}
        mountOnEnter
        unmountOnExit
        nodeRef={nodeRef}
      >
        {state => {
          return (
            <div ref={nodeRef} className={`form ${state}`}>
              <PostForm onClose={onClose}/>
            </div>
          )
        }}
      </Transition>
    </>
  )
}

export {PostCreation}