import './topbar.css'
import mainPhoto from'./imgs/mainPhoto.png'
import {Link} from "react-router-dom";

export default function Topbar() {

  const user=true; 

  return (
    <div className="top">
        <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-linkedin"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
    </div>

        <div className="topCenter">
            <ul className="topList">
            <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
            <li className="topListItem"><Link className="link" to="/settings">ABOUT</Link></li>
            <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
            <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
            <li className="topListItem">
              {user && "LOGOUT"}
            </li>
            </ul>
        </div>
        <div className="topRight">
            {
              user? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src={mainPhoto}
              alt=""
            />
          </Link>
              ) : ( <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">
                  REGISTER
                </Link>
              </li>
            </ul>
          )}
          <i className="topSearchIcon fas fa-search"></i>
        </div>
      </div>
    );
  }