let Nav = ({handleNavClick}) => (

  <div className="nav">
    <nav>
      <ul>
        <li><a onClick={() => handleNavClick('Rent')}>Rent</a></li>
        <li><a onClick={() => handleNavClick('Buy')}>Buy</a></li>
        <li><a onClick={() => handleNavClick('Hack')}>Hack</a></li>
      </ul>
    </nav>
  </div>
);

export default Nav;