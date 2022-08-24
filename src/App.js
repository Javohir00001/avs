import React, { useState } from "react";
import Form from "./Components/Form/Form"
import Succes from "./Components/Succes/Succes";

import logo from "./assets/img/logo.png"


export default function App() {
  const [success, setSucces] = useState(false);

  function userAdded(bool) {
     setSucces(bool)
  }

  return (
    <div className="App">
        <div className="wrapper">
            <div className="left">
                <div className="site__logo">
                    <a href="#">
                        <img src={logo} alt="site logo" />
                    </a>
                </div>
                <div className="container">
                    {!success && <Form userAdded={userAdded}/>}
                    {success &&  <Succes />}
                </div>
            </div>

            <div className="right">
                <h1 className="right__title">
                    AVS Video ReMaker <span className="mark">Giveaway</span>
                </h1>
            </div>
        </div>
    </div>
  );
}

