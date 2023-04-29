import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Hell no, we won't go!</Alert>}
      <Button color="primary" onClick={() =>setAlertVisibility(true)}>I'm a button!</Button>

    </div>
  
  )
  
}

export default App;