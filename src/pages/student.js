import { Route, Routes } from 'react-router-dom';
import Sidenav from '../components/Sidenav';
import First from './first';
import Second from './second';
import Third from './third';
import Fourth from './fourth';


function Student() {
  return (
    <div className="App">
      <Sidenav />
      <div className="content ">
        <Routes>
          <Route path="first" element={ <First/> } />
          <Route path="second" element={<Second />} />
          <Route path="third" element={<Third />} />
          <Route path="fourth" element={<Fourth />} />
        </Routes>
      </div>
    </div>
  );
}

export default Student;
