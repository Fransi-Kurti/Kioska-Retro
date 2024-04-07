import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Products from "./components/Products";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import Footer from "./components/Footer";



function App() {
  return (
    <UserProgressContextProvider>
    <CartContextProvider>
      <Header />
      <Products />
      <Footer />
      <Cart />
      <Checkout />
    </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
