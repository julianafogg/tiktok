import React from 'react';
import OneUp from "../OneUp";
import ThreeUp from "../ThreeUp";

import "../../styles/styles.scss"

const Home = ({ data }) => {

  console.log(data)
 
  return (
      <div className="container">
        <OneUp oneUp={data.oneUp} list={data.list} /> 
        <ThreeUp items={data.threeUp} />  {/* 3 photos />*/}
      </div>
  );
};

export default Home;