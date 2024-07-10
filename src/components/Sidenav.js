import { Link } from 'react-router-dom';

function Sidenav() {
  return (
    <div> 
      <nav className="h-dvh float-left bg-gray-800 text-white w-56">
        <ul>
          <li className="m-3">
            <Link to="first">First Year</Link>
          </li>
          <li className="m-3">
            <Link to="second">Second Year</Link>
          </li>
          <li className="m-3">
            <Link to="third">Third Year</Link>
          </li>
          <li className="m-3">
            <Link to="fourth">Fourth Year</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidenav;