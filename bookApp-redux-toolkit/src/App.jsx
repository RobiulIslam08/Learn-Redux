import BookForm from "./component/BookForm";
import BookList from "./component/BookList";

const App = () => {
  return (
    <div className="w-[85%] mx-auto">
      <h1  className='text-7xl text-center font-bold my-10'>Book App</h1>
      <BookForm></BookForm>
      <BookList></BookList>
    </div>
  );
};

export default App;