import React from "react";
import Router from "./router/Router";
import { useEffect, useState } from "react";
import Load from "./components/app/Load";

const App = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  }, []);

  return (
    <>
        {
      load ? <Load/> :   <Router />
  
    }
    </>

  )
  
}
export default App;
