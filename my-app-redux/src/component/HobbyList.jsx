import React from 'react'

export default function HobbyList({hobbyList}) {
  return (
    <div>
      {hobbyList.map((hobby)=>
        <ul>
          <li>{hobby}</li>
        </ul>
      )}
    </div>
  )
}
