
import Counter from "./componet/counter"


function App() {
  

  return (
    <>
      <h1 className="text-3xl font-bold text-center underline my-12">Counter App </h1>
  <Counter></Counter>

    </>
  )
}

export default App


// plane
// 1. state = count: 0
// 2. actions = increment, decrement, reset
// 3. reducers = incerment=> count = count + 1
//               decrement => count = count - 1
//               reset => count =0
// 4.store
//npm i redux
// npm i react-redux = react এর সাথে connect করার জন্য 

//main.js > <probider store={store}></probider>
//useSelector() এর মাধ্যমে state এর value কে access করা যাবে



