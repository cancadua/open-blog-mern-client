import './Comment.css'
import {deleteComment} from "../api"

const Comment = ({comment, reloadComments}) => {

    const handleDelete = () => {
        deleteComment({post_id: comment.post_id}, {_id: comment._id})
            .then(() => reloadComments())
    }

    return (
        <div className='comment-container'>
            <div className='comment-title'>
                {comment.title}
            </div>
            <a className='comment-delete' onClick={handleDelete}>
                Delete
            </a>
            <div className='comment-time'>
                {comment.updated_on.replace('T', ' ').slice(0, -5)}
            </div>
            <div className='comment-content'>
                {comment.content}
            </div>
        </div>
    )
}

export default Comment;