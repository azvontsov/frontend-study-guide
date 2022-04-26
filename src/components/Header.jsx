import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <nav className="nav">
        <h2>Study Guide</h2>
        <Link to="/">
          <div>Home Page</div>
        </Link>
        <Link to="/create">
          <div>Create New Card</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
