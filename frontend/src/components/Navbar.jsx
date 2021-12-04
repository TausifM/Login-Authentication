import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <div className="navbar">
      <span className="logo">
        <Link to="/" className="link">
          Login App
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
              alt=""
              className="avatar"
            />
          </li>
          <li className="listItem">John Doe</li>
          <li className="listItem">Logout</li>
        </ul>
      ) : (
        <Link to="login" className="link">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
