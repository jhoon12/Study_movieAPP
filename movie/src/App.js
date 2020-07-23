import React from 'react';
import PropTypes from 'prop-types'

function Food({name, rating}){
  return<><h1> I Like f {name}</h1>
  <h4>{rating}/5.0 </h4>
  </>

}
Food.propTypes = {
  name:PropTypes.string.isRequired,
}
const foodILike = [{
  id:1,
  name : 'kimbap',
  rating: 1.0
},
{
  id:2,
  name : 'chicken'
  ,
  rating: 2.0
},
{
  id:3,
  name : 'rice'
  ,
  rating: 1.0
},
{
  id:4,
  name : 'meat'
  ,
  rating: 3.0
},
{
  id:5,
  name : 'vagetable',
  rating: 4.0
}]; 


function App() {
  return (
    <div><h1>hello</h1> 
      {foodILike.map(dish=>{
        return<Food key = {dish.id} name={dish.name} rating={dish.rating}/>
    })}
    </div>  
  )
}

export default App;
