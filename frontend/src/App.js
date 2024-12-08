// import logo from './logo.svg';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from './Page/IndexPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<IndexPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
