import React,{useState} from 'react';
// import './App.css';

function App() {

  const [count,setCount] = useState(0);
  const [value,setValue] = useState('AAA');

  function increment() {
   
    setCount(count+1);
  };
  function decrement() {
    setCount(count-1);
   
  };
  function changeHandler(e){

    setValue(e.target.value)
  }
  
  return (
    <div className="App">
      Cont:{count}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <br/>
      InpitValue: {value}
      <br/>
      <input type="text" value={value} onChange={(e)=>{changeHandler(e)}}></input>
      
    </div>
  );
}

export default App;
