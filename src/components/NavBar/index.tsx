import { Logo, Menu, NavBarHeader, NavBarContent } from "./style";

import MarvelLogo from "../../assets/MARVEL.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Container } from "../../styles/styles";
import { Link } from "react-router-dom";


export default function NavBar() {
  return (
    <NavBarHeader>
      <Container>
        <NavBarContent>
          <Logo>
            <Link to='/'>
             <img src={MarvelLogo} alt="Marvel-Logo" />
            </Link>
          </Logo>

          <Menu>
            <li>
             <button>
                <FontAwesomeIcon icon={faSearch} />
             </button>
            </li>
            <li>
            <button>
                <FontAwesomeIcon icon={faBell} />
             </button>
            </li>
            <li>
              <button>
                Sign up
              </button>
            </li>
          </Menu>
        </NavBarContent>
      </Container>
    </NavBarHeader>
  );
}
