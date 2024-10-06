import './Header.css';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import Search from '../Icon/Search/Search';
import Phone from '../Icon/Phone/Phone';

const Header = () => {
  return (
    <>
      <header>
        <div className="all">
          <div className="center">
            <div>
              <Phone />
              {/* <NavLink to="/" style={{ fontWeight: 'bold', textDecoration: 'none', color: 'lightseagreen' }}>
                +7&nbsp;___&nbsp;___-__-__
              </NavLink> <br /> */}
            </div>
            {/* <small style={{ fontSize: '11.4px', color: 'gray', opacity: 0.8 }}>работаем круглосуточно</small> */}
          </div>
          <div style={{ display: 'flex' }}>
            <Search />
            &nbsp;
            <Button />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;