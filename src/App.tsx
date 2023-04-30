import Button from "./components/Buttons/Buttons.module.css";
import styles from "./components/ListGroup/ListGroup.module.css"

function App() {

  return (
    <div>
      <Button className="{styles.Button}" onClick={() => {console.log('clicked')}}>My button</Button>
    </div>  
  )
  
}

export default App;