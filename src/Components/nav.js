  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faShoppingCart, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
  import { Link } from "react-router-dom"
  import { useContext, useEffect, useState } from "react";
  import { shopContext } from "../context/shopContext";
  import './nav.css'
export const Nav=()=>{
const [isLoggedIn, setIsLoggedIn] = useState(
  localStorage.getItem("isLoggedIn") === "true"
);

useEffect(() => {
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  window.addEventListener("login", handleLogin);

  return () => {
    window.removeEventListener("login", handleLogin);
  };
}, []);

const [nav,setNav]=useState(false);
              const {cartItems}=useContext(shopContext);
            const itemCount=cartItems?.reduce((prev,current)=>{
return prev+current.count
            },0);

    const handleClick=()=>{
      setNav(!nav)
     };
  const closeMenu=()=>{
    setNav(false)
  }

  const handleLogout = () => {
  localStorage.removeItem("isLoggedIn");
  setIsLoggedIn(false);
  closeMenu();
};

    return(<nav className="navbar navbar-dark bg-dark fixed-top " >
      <div className="container">


        <Link to='/'  className="navbar-brand">Behzad coding</Link>


        <ul className="navbar-nav flex-row gap-4 d-none d-md-flex">
          <li className="nav-item">
            <Link to='/' className="nav-link" >Shop</Link>
          </li>
          
          <li className="nav-item">
<Link to='/cart' className="nav-link">
            <FontAwesomeIcon icon={faShoppingCart} />
            {itemCount>0&&<span className="cart-items-count">{itemCount} </span>}
            <span className="ms-2"> </span>
</Link>

          </li>
<li className="nav-item">
  <Link to="/register" className="nav-link">
    Register
  </Link>
</li>
 
<li className="nav-item">
  <Link to="/currency" className="nav-link">
    Currency
  </Link>
</li>



 <li className="nav-item">
  <Link to="/profile" className="nav-link">
    Profile
  </Link>
</li>


<li className="nav-item">
  <Link to="/contact" className="nav-link">
    Contact
  </Link>
</li>


{isLoggedIn ? (
  <li className="nav-item">
    <button onClick={handleLogout} className="btn btn-link nav-link">
      Logout
    </button>
  </li>
) : (
  <li className="nav-item">
    <Link to="/login" className="nav-link">
      Login
    </Link>
  </li>
)}


        </ul>


    <button onClick={handleClick} className="btn text-white fs-3 d-md-none order-first">
{nav?(<FontAwesomeIcon icon={faTimes}/>):(<FontAwesomeIcon icon={faBars}/>)}
    </button>

    {nav&&( <div className="mobile-menu d-md-none">
        <Link to='/' onClick={closeMenu} >Shop</Link>

<Link to='/cart' onClick={closeMenu}>
<FontAwesomeIcon icon={faShoppingCart}/>
{itemCount>0&&(<span className="cart-items-count">{itemCount} </span>) }
<span className="ms-"> </span>
</Link>

<Link to="/register" onClick={closeMenu}>
  Register
</Link>



<Link to="/profile" onClick={closeMenu}>
  Profile
</Link>

<Link to="/currency" onClick={closeMenu}>
  Currency
</Link>
 
<Link to="/contact" onClick={closeMenu}>
  Contact
</Link>

{isLoggedIn ? (
  <button onClick={handleLogout} className="btn text-white mb-2">
    Logout
  </button>
) : (
  <Link to="/login" className="mb-2" onClick={closeMenu}>
    Login
  </Link>
)}




      </div>
    )}
      </div>
   
    </nav>
  );
}

