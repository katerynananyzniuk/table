import {IPost} from "../models"

interface PostProps {
  post: IPost
}

export const Post = ({post}: PostProps) => {
  return (
    <tr>
      <td>{post.postId}</td>
      <td>{post.id}</td>
      <td>{post.name}</td>
      <td>{post.email}</td>
      <td>{post.body}</td>
    </tr>
  )
}