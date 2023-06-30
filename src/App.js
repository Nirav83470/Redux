import './App.css';
import Headers from './componets/Heders';
import Menu from './componets/Menu';
import Conten from './componets/Conten';
import { Route, Routes } from 'react-router-dom';
import From from './componets/From';
import Table from './componets/Tabel';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div class="wrapper">
        <Menu />
        <Routes>
          <Route path="/" element={<Conten />} />
          <Route path="From" element={<From />} />
          <Route path="Table" element={<Table />} />
        </Routes>

        {/* <Headers /> */}
        {/* <Menu /> */}
        {/* <Conten /> */}
      </div>
    </>
  );
}
export default App;
