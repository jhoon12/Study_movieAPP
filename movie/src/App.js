import React from "react";
import {BrowserRouter, Route } from "react-router-dom";
import about from "./routes/About";
import home from "./routes/home";
import Details from "./routes/Details";
import Navigation from "./Components/Navigation"
function App() {
  return (
    <BrowserRouter>
      <Navigation ></Navigation>
      <Route path="/" exact={true} component={home}></Route>
      <Route path="/about" component={about}></Route>
      <Route path="/Movie-detail" component={Details}></Route>
      {/* path의 주소와 같을 때 보여줌 */}
    </BrowserRouter>
  );
}
export default App;
