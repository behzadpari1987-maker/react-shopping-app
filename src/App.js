import './App.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { Nav } from './Components/nav';
import { ShopContextProvider } from './context/shopContext';
import { Welcome } from './Components/welcome';
import { Register } from './Components/register';
import { Profile } from './pages/profile/profile';
import { Login } from './pages/login/login';
import { CurrencyConverter } from './Components/currencyConverter/currencyConverter';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Contact from './Components/contact/contact';
const queryClient = new QueryClient();
function App() {

  return (
    <QueryClientProvider client={queryClient}>

      <div className="App">

        <ShopContextProvider>

          <Router>

            <Nav />
            <Welcome />

            <Routes>

              <Route path="/" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/currency" element={<CurrencyConverter />} />
              <Route path="/contact" element={<Contact />} />

            </Routes>

          </Router>

        </ShopContextProvider>

      </div>

    </QueryClientProvider>
  );
}

export default App;
