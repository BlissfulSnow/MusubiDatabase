import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const [food, setFood] = useState({
    FOOD_NAME: "",
    FOOD_DESC : "",
    DATA_SOURCE : "",
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFood((prev) => ({...prev, [e.target.name] : e.target.value}));
  };

  const handleClick = async e => {
    e.preventDefault()
    try{
      await axios.post("http://localhost:8080/food", food)
      navigate("/")
    }catch(err){
      console.log(err)
    }
  }

  console.log(food);
  return (
    <div className='form'>
      <h1>Add New Foods</h1>
      <input type="text" placeholder='Food Title' onChange={handleChange} name='FOOD_NAME'/>
      <input type="text" placeholder='Description' onChange={handleChange} name='FOOD_DESC'/>
      <input type="text" placeholder='Data Source' onChange={handleChange} name='DATA_SOURCE'/>

      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default Add