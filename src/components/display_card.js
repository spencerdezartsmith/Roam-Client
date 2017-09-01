import React from 'react'

const DisplayCard = (props) => {
  return (
    <div className='row'>
      <div className='card'>
        <div className='card-block profile-post-preview'>
          <div className='col-sm-10'>
            {/* {props.content} */}
          </div>
          <div className='col-sm-2 icon-container'>
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

export default DisplayCard
