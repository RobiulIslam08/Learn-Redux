import CounterView from "./features/counter/CounterView"
import PostsView from "./features/posts/PostsView"


function App() {


  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        Counter App
      </h1>
      <CounterView></CounterView>
      <PostsView></PostsView>

    </>
  )
}

export default App
