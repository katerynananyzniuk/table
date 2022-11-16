import {IPost} from "../models"

interface PostProps {
  post: IPost,
}

export const Post = ({post}: PostProps) => {
  return (
    <tr>
      <td>{post.id}</td>
      <td className="text-center">{post.postId}</td>
      <td>{post.author}</td>
      <td>{post.title}</td>
      <td>{post.email}</td>
      <td>{post.body}</td>
    </tr>
  )
}