import React from 'react';
import { arrayOf } from 'prop-types';

class Details extends React.Component{
    componentDidMount(){
        const{location, history} = this.props;
        console.log(location.state);
        if(location.state === undefined){
            history.push("/"); 
        }
    }
    render(){
        const{location} = this.props;
        return <div> {location.state.title}</div>
    }
}
// function Details(props){
//     const{location} = props;
//     console.log(location.state);
// return(<div>sad</div>)
// }
export default Details;