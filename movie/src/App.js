import React from 'react';
import PropTypes from 'prop-types'

class App extends React.Component{
  constructor(props){
    super(props);
    console.log("hello1");
  }
  state = {
    count : 0,
  }
  add = ()=>{
    this.setState(current => ({count : current.count+1}))
  }
  minus = ()=>{
    this.setState({count : this.state.count-1})
  }
  componentDidMount(){
    console.log("component renderd")
  }//렌더링끝나고
  componentDidUpdate(){
    console.log("I just updateds");
  }//이벤트 동작시(state가 바뀌니까 호출됨)

  componentWillUnmount(){
    console.log("bye");
  }//다른페이지로 이동할 때
  render(){//setState를 사용시 렌더시 호출             
    console.log("I am rendering");
    return( 
    <>
    <h1>i am class component {this.state.count}</h1>
    <button onClick={this.add}>
      Add
    </button>
    <button onClick={this.minus}>
      minus
    </button>

    </>
    )
  }
}

export default App;
