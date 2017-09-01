import React from 'react'
import { Link } from 'react-router-dom'

const DisplayCard = (props) => {
  return (
    <div className='row'>
      <div className='card'>
        <div className='card-block profile-post-preview'>
          <div className='col-md-10'>
            {truncateText(props.content, props)}
          </div>
          <div className='col-md-2 icon-container'>
            <div className='edit-pencil'>
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </div>
            <div className='delete-trash'>
              <i className="fa fa-trash" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const truncateText = (text, props) => {
 const truncatedText = text.substring(0, 300)
 return (
   <div>
     <p>{truncatedText}</p>
     <Link to={`/cities/${props.cityId}/posts/${props.postId}`}>Read more</Link>
   </div>
 )
}

export default DisplayCard
