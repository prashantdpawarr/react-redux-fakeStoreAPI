import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchProducts } from './redux/slice/product';
import { useEffect } from 'react';


function App() {

  const dispatch = useDispatch()
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <>
      {/* <button onClick={e => dispatch(fetchProducts())}>Fetch Product</button> */}
      <div className="container">
        <div className="row">
          {state.products.isLoading ? (
            <h2>Loading...</h2>
          ) : state.products.data ? (
            state.products.data.map((product, index) => (
              <div key={index} className="col-xl-3 border">
                <p>{product.title}</p>
                <img src={product.image} alt="" className="img-fluid" />
                <p>{product.price}$</p>
              </div>
            ))
          ) : (
            <h2>No products found.</h2>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
