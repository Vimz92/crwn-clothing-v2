import { selectedProducts } from "./array";

const App = () => {
  return (
    <div className='main'>
     {
      selectedProducts.map((selectedProduct, index) => {
         return selectedProduct.products.map((product, index) => {
          return (
            <div className='product' key={index}>
              <img src={product.thumbnail} alt={product.title} />
              <p>{product.title}</p>
              <h1> {product.description}</h1>
            </div>
          );
         })
      })
     }
      
     
    </div>
  );
};

export default App;
