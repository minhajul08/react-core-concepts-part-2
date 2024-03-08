import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './user'
import Friends from "./Friends";

function App() {

  function handelClick () {
    alert ('Button click')
  }

const handelClick2 = () =>{
  alert ('Button CLick 2')
}

const addToFive = (num) => {
     alert (num + 15);
}

  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handelClick}>Click Me!</button>
      <button onClick={handelClick2}>CLick Me2!</button>

      <button onClick={() => {alert ('click button 3')}}>Third</button>

      <button onClick={() => {addToFive (3)}}>Fourth</button>
    </>
  )
}

export default App
