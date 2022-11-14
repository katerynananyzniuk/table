import {useState, useEffect} from 'react'
import {IPost} from '../models'
import axios from 'axios'
import {Post} from '../components/Post'

function Table() {
  const [posts, setPosts] = useState<IPost[]>([])

  async function fetchData() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments?_start=0&_limit=10')
    const posts = response.data
    console.log(posts);
    
    setPosts(posts)
  }

  // async function postData() {
  //   const response = await axios.post('https://my-json-server.typicode.com/katerynananyzniuk/table/user', {
  //     postId: 1,
  //     id: 2,
  //     name: "id labore ex et quam laborum",
  //     email: "Eliseo@gardner.biz",
  //     body: "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium"
  //   })
    
  //   const post = response.data
  //   console.log(post);

  //   setPosts(post)
  // }

  useEffect(() => {
    try {
      fetchData()
    } catch (error) {
      console.log(error);
    }
  }, [])

  return (
    <table className="table table-striped">
      <thead className='text-lowercase'>
        <tr>
          <th scope="col">post_id</th>
          <th scope="col">id</th>
          <th scope="col">name</th>
          <th scope="col">email</th>
          <th scope="col">body</th>
        </tr>
      </thead>
      <tbody>
        {
          posts.map(post => {
            return <Post post={post} key={post.id} />
          })
        }
      </tbody>
    </table>
  )
}

export {Table}