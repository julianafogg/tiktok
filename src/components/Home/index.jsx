import React from 'react';
import OneUp from "../OneUp";
import "../../styles/styles.scss"

const Home = ({ data }) => {
 
  return (
      <div className="container">
        <OneUp oneUp={data.oneUp} list={data.list} /> 
      </div>
  );
};

export default Home;