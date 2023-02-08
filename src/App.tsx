import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import 'styles/normalize.scss';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
