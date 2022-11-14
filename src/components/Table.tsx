import {useState, useEffect} from 'react'
import {IPost} from '../models'
import axios from 'axios'

function Table() {
  const [posts, setPosts] = useState<IPost[]>([])

  async function fetchData() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10')
    const posts = response.data
    console.log(posts);
    
    setPosts(posts)
  }

  useEffect(() => {
    try {
      fetchData()
    } catch (error) {
      console.log(error);
    }
  }, [])

  return (
    <table className="table table-striped">
      <thead className='text-uppercase'>
        <tr>
          <th scope="col">user_id</th>
          <th scope="col">email</th>
          <th scope="col">post_id</th>
          <th scope="col">title</th>
          <th scope="col">body</th>
        </tr>
      </thead>
      <tbody>
        {
          posts.map(post => {
            return (
              <tr key={post.id}>
                <td>{post.userId}</td>
                <td>email</td>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export {Table}