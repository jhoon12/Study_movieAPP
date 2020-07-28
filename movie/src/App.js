import React from "react";
import {HashRouter, Route} from "react-router-dom"
import About from "./routes/About"
import home from "./routes/home"
function App(){
  return(<HashRouter>
      <Route path="/" exact={true} component={home}></Route>
      <Route path="/about" component={About}></Route>
  </HashRouter>
  )
}
export default App;