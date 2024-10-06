import { NavLink } from 'react-router-dom';
import './Navbar.css';



const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">

          <ul className="nav-list" >
            <li className="nav-list__item">
              <NavLink to='/' className='Nav-Link'>
                Направления
              </NavLink>
            </li>

            <li className="nav-list__item">
              <NavLink to='/' className='Nav-Link'>
                Стационар
              </NavLink>
            </li >

            <li className="nav-list__item">
              <NavLink to='/' className='Nav-Link'>
                Врачи
              </NavLink>
            </li>

            <li className="nav-list__item">
              <NavLink to='/' className='Nav-Link'>
                Услуги
              </NavLink>
            </li>

            <li className="nav-list__item">
              <NavLink to='/' className='Nav-Link'>
                Заболевания
              </NavLink>
            </li>

            <li className="nav-list__item">
              <NavLink to='/' className='Nav-Link'>
                Цены
              </NavLink>
            </li >

            <li className="nav-list__item">
              <NavLink to='/' className='Nav-Link'>
                О клинике
              </NavLink>
            </li>

            <li className="nav-list__item">
              <NavLink to='/' className='Nav-Link'>
                Контакты
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;