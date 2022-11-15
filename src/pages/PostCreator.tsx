import {useForm} from 'react-hook-form'
import {IPost} from '../models'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

type FormInputs = {
  postId: string,
  author: string,
  title: string,
  email: string,
  body: string,
}

function PostCreator() {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>({
    defaultValues: {
      postId: '',
      author: '',
      title: '',
      email: '',
      body: ''
    }
  })
  const [loading, setLoading] = useState<boolean>(false)

  const submitHandler = (data:IPost ) => {
    const post:IPost = data

    setLoading(true)
    fetch('http://localhost:8000/posts', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(post)
    }).then(() => {
      console.log('new post added:', post);
      setLoading(false)
    })

    navigate('/')
  }

  return (
    <div className="p-4 bg-light rounded-2 border border-secondary">
      <h3 className="text-center">Post Creator</h3>
      <form 
        className="d-flex flex-column px-4 p-sm-none"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="form-group mb-4">
          <label htmlFor="postId">Post number</label>
          <input
            className="form-control" 
            id="postId"
            placeholder='Post number'
            {...register(
              "postId", 
              { 
                required: "Post number is required",
                pattern: {
                  value: /^[0-9]*$/,
                  message: "Post number should contains digits only"
                },
                min: 1
              },
            )}
          />
          { errors.postId?.message && 
            <p className="text-danger m-0">{errors.postId?.message}</p>
          }
        </div>
        <div className="form-group mb-4">
          <label htmlFor="author">Author</label>
          <input
            className="form-control" 
            id="author"
            placeholder='Author'
            {...register(
              "author", {required: "Author is required"})}
          />
          { errors.author?.message && 
            <p className="text-danger m-0">{errors.author?.message}</p>
          }
        </div>
        <div className="form-group mb-4">
          <label htmlFor="title">Title</label>
          <input
            className="form-control" 
            id="title"
            placeholder='Title'
            {...register(
              "title", {required: "Title is required"})}
          />
          { errors.title?.message && 
            <p className="text-danger m-0">{errors.title?.message}</p>
          }
        </div>
        <div className="form-group mb-4">
          <label htmlFor="email">Email address</label>
          <input
            className="form-control" 
            id="email"
            placeholder="name@example.com" 
            {...register(
              "email", {
                required: "Email is required",
                pattern: {
                  value: emailRegex,
                  message: "Please enter E-mail correctly"
                },
              }
            )}
          />
          { errors.email?.message && 
            <p className="text-danger m-0">{errors.email?.message}</p>
          }
        </div>
        <div className="form-group mb-4">
          <label htmlFor="body">Description</label>
          <textarea 
            className="form-control" 
            id="body" 
            rows={3}
            placeholder="Enter your text here..." 
            {...register(
              "body", {required: "Description is required"}
            )}
          />
          { errors.body?.message && 
            <p className="text-danger m-0">{errors.body?.message}</p>
          }
        </div>
        <div className="d-flex justify-content-center">
          { !loading 
              ? <button 
                  className="btn btn-primary px-4" 
                  type='submit'
                >Add Post</button>
              : <button 
                  className="btn btn-primary px-4" 
                  type='submit'
                  disabled
                >Add Post</button>
          }
        </div>
      </form>
    </div>
  )
}

export {PostCreator}