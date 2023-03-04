import './header.css';
import { Link } from 'react-router-dom';

function Header(){
  return(
    <header>
      <Link className="logo" to="/">Prime Flix</Link>
      <Link className="favoritos" to="/favoritos">Meus filmes</Link>
    </header>
  )
}

export default Header;

// bc84b2ba8a96ee9a0c5932bdb1dd5ae0