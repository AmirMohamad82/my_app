const Navbar = () => {
  const list = ["Message", "Today's Task", "Last Activity"];
  return (
    <nav className="navbar navbar-default col-sm-auto">
      <ul className="nav nav-tabs">
        {list.map((i, idx) => {
          return (
            <li
              key={idx}
              className={idx === 1 ? "navbar-item active" : "navbar-item"}
            >
              <button className="btn btn-default btn-lg">{i}</button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
