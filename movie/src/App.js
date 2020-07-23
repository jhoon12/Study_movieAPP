import React from 'react';


function Food({name}){
  return<h1> I Like f {name}</h1>
}
const foodILike = [{
  id:1,
  name : 'kimbap'
},
{
  id:2,
  name : 'chicken'
},
{
  id:3,
  name : 'rice'
},
{
  id:4,
  name : 'meat'
},
{
  id:5,
  name : 'vagetable',
}]; 

function renderFood(dish){
  return<Food name={dish.name}/>
}

function App() {
  return (
    <div><h1>hello</h1> 
      {foodILike.map(dish=>{
        return<Food key = {dish.id} name={dish.name}/>
    })} 
    </div>  
  )
}

export default App;
