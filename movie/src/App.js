import React from 'react';


function Food({name}){
  return<h1> I Like f {name}</h1>
}
const foodILike = [{
  name : 'kimbap'
},
{
  name : 'chicken'
},
{
  name : 'rice'
},
{
  name : 'meat'
},
{
  name : 'vagetable'
}]; 

function App() {
  return (
    <div><h1>hello</h1>
      {foodILike.map(dish=><Food name={dish.name}></Food>)}
    </div>  
  )
}

export default App;
