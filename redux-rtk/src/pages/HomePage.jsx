import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewHobby, setActiveHobby } from "../actions/hobby";
import HobbyList from "../components/Home/HobbyList";

const randomNumber = () => {
  return 1000 + Math.trunc(Math.random() * 9000);
};
console.log(randomNumber());

export default function HomePage(props) {
  //shallow comparison- {} {} di tung key trong obj
  //su dung strict comparison === moi lan state duoc cap nhap thi useSelector duoc chay lai
  const hobbyList = useSelector((state) => state.hobby.list);
  const activeId = useSelector((state) => state.hobby.activeId);

  const dispatch = useDispatch();

  console.log("Hobby list:", hobbyList);

  const handleAddHobbyClick = () => {
    //Random a hobby object: id + title
    const newId = randomNumber();
    const newHobby = {
      id: newId,
      title: `Hobby ${newId}`,
    };
    console.log("bb", newHobby);
    //Dispatch action to add new hobby to redux store
    const action = addNewHobby(newHobby);
    dispatch(action);
  };

  const handleHobbyClick = (hobby) => {
const action = setActiveHobby(hobby);
dispatch(action);
  };
  return (
    <div className="home-page">
      <h1>REDUX HOOKS - HOME PAGE</h1>
      <button onClick={handleAddHobbyClick}>Random Hobby</button>
      <HobbyList
        hobbyList={hobbyList}
        activeId={activeId}
        onHobbyClick={handleHobbyClick}
      />
    </div>
  );
}
