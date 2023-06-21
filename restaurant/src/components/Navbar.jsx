import "./Navbar.css";

function Navbar() {
  return (
    <>
      <ul className="navbar">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/reviews">Reviews</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </>
  );
}
export default Navbar;
