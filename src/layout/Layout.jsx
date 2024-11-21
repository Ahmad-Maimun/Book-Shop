import { useReducer } from "react"
import { initialData } from "../data/initialData"
import GalleryItem from "../GalleryItem"
import CartReducer from "../reducer/cartReducer";
import BookGallery from "../BookGallery";
import { CartContext } from "../context/CartContext";

function Layout() {
  const books = initialData();
  const [cartItems, dispatch] = useReducer(CartReducer, []);
  const addToCartHandler = (gallery) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: gallery
    })
  }
  const deleteHandler = (id) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: id
    })
  }
  const provideObj = {
    name: 'Ahmad Maimun',
    age: 14
  }
  return (
    <CartContext.Provider value={{
      id: 100,
      name: 'My name'
    }}>
    <div className="flex flex-wrap">
      <BookGallery books={books} />
      <div>
        <h1>My Cart</h1>
        <ul>
          <li>
            {cartItems.map(cart => (
              <div key={cart.id}>
                <h2 className="font-bold">{cart.name}</h2>
                <p>{cart.price}</p>
                <button onClick={() => deleteHandler(cart.id)} className="bg-rose-500 text-white p-2">Delete</button>
              </div>
            ))}
          </li>
        </ul>
      </div>
    </div>
    </CartContext.Provider>
  )
}

export default Layout