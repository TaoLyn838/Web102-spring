import './PostCard.css'
import Icons from '../../Icons'
import { convertToTimeAgo } from '../../GlobalFunctions'

const PostCard = ({ post }) => {
  return (
    <div className="postcard-container mx-4 md:mx-auto my-4 max-w-md md:max-w-2xl">
      <div className="flex items-start px-4 py-6">
        <img
          className="postcard-image"
          src="https://friconix.com/png/fi-cnsuxx-user-circle.png"
        ></img>
        <div>
          <div className="postcard-user-container">
            <h2 className="postcard-author -mt-1">{post.author}</h2>
            <small className="postcard-date">
              {convertToTimeAgo(post.created_at)}
            </small>
          </div>
          <p className="mt-3 postcard-title">{post.title}</p>
          <p className="mt-3 postcard-description">{post.description}</p>
          <div className="mt-4 postcard-engagement-container">
            <div className=" postcard-like mr-3">
              <Icons.LikeCount />
              <span>{post.likeCount}</span>
            </div>
            {/* <div className=" postcard-comment mr-8">
              <Icons.Comments />
              <span>8</span>
            </div> */}
            <div className="postcard-category mr-4">
              <Icons.Category />
              <span>{post.category}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PostCard
