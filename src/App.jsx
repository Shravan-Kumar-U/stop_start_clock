import { useState , useRef } from 'react'
import './App.css'

//Suppose if a user don't give any input to the first input box and click the submit btn we have to focuse to the input box which the user dont give any input automatically which means cursor will automaticall go to the input box which not contians any user information. Using useRef hook we can able to do it

// function App() {
//   // const inputref = useRef()
//   // function handleFocus(){
//   //   inputref.current.focus();
//   // }
//   return (
//     // <>
//     // sigup
//     // <input ref={inputref} type= {"text"} placeholder='Click the button for focus me' />
//     // <br />
//     // <br />
//     // <input type= {"text"} />
//     // <br />
//     // <button onClick={handleFocus}>Click</button>
//     // </>
//   )
// }

//To create a clock with 2 buttons start and stop using useState and useRef hook
function App(){
  const [currentCount, setcurrentCount] = useState(0);
  const timer = useRef();
  function startClock(){
    let value = setInterval(function(){
      setcurrentCount(c => c + 1);
    }, 1000 )
    timer.current = value;
  }
  function stopClock(){
    clearInterval(timer.current)
  }
  return (
    <>
    {/* redering the component */}
    {currentCount}
    <br />
    <button onClick={startClock}>Start</button>
    <br />
    <button onClick={stopClock}>Stop</button>
    </>
  )
}
export default App
