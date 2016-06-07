let Nav = ({handleNavClick}) => (

  <div>
      <ul className="navbar">
        <a href="javascript:void(0);" className="nav-rent" onClick={() => handleNavClick('Rent')}>Rent  </a>
        <a href="javascript:void(0);" className="nav-buy" onClick={() => handleNavClick('Buy')}>Buy  </a>
        <a href="javascript:void(0);" className="nav-hack" onClick={() => handleNavClick('Hack')}>Hack  </a>
      </ul>
  </div>
);

export default Nav;

