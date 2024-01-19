import React from 'react'

function TitleCard({children, title, listItems}) {
  return (
    <div className='card-container'>
        <div className="card-title">
            {children}
            <h4>{title}</h4>
        </div>
        <hr />
        <ul>
        {listItems.map((listItem)=> {
            return (
                <li>{listItem}</li>
            )
        })}
        </ul>
    </div>
  )
}

export default TitleCard