import {IPost} from '../models'
import {Post} from '../components/Post'

interface TableProps {
  posts: IPost[]
}

function Table({posts}: TableProps) {
  return (
    <div className='table-responsive-lg'>
      <table className="table table-hover">
        <thead className='text-lowercase text-capitalize'>
          <tr>
            <th scope="col">#</th>
            <th scope="col">post number</th>
            <th scope="col">author</th>
            <th scope="col">title</th>
            <th scope="col">email</th>
            <th scope="col">body</th>
          </tr>
        </thead>
        <tbody>
          {
            posts.map((post, index) => {
              return <Post post={post} key={index} />
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export {Table}