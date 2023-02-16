import React from "react";
import "./hobbylist.css"
// import PropTypes from 'prop-types'

// HobbyList.propTypes = {
//   hobbyList: PropTypes.array,
// };
// HobbyList.defaultProps = {
//   hobbyList:[]
// }

export default function HobbyList({ hobbyList, activeId, onHobbyClick }) {
  const handleClick = (hobby) => {
    if (onHobbyClick) {
      onHobbyClick(hobby);
    }
  };
  return (
    <ul className="hobby-list">
      {hobbyList.map((hobby) => (
        <li
          key={hobby.id}
          className={hobby.id === activeId ? "active" : ""}
          onClick={() => handleClick(hobby)}
        >
          {hobby.title}
        </li>
      ))}
    </ul>
  );
}
