import React from 'react';


function Food(props){
  console.log(props);
  return<h1> I Like f</h1>
}

function App() {
  return (
    <div><h1>hello</h1>
        <Food fav="Kimchi"/> 
        <Food fav="1"/> 
        <Food fav="2"/> 
        <Food fav="3"/> 
    </div>  
  )
}

export default App;
