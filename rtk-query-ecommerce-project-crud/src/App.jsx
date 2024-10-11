import ProductView from "./features/products/ProductView";


const App = () => {
  return (
    <div className="w-[90%] mx-auto">
        <h1 className="text-3xl mt-5 mb-10 font-bold text-[#5d95d4] text-center">RTK Query Ecommerce CRUD App</h1>
        <ProductView></ProductView>
    </div>
  );
};

export default App;