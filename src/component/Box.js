import React from 'react'

const Box = (props) => {
  return (
    <div>
      <div className="box">
        블랙핑크멤버{props.num}
        <p>{props.name}</p>
      </div>
    </div>
  )
}

export default Box