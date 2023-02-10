import React from "react";
import { useSelector } from "react-redux";
import HobbyList from "../component/HobbyList";

export default function Home() {
  const hobbyList = useSelector((state) => state.hobbyReducer.list);
  console.log(hobbyList,"hobbyList")
  return (
    <div className="home-page">
      <h4>Home</h4>
      <HobbyList hobbyList={hobbyList} />
    </div>
  ); 
}
