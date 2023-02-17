import './App.css';
import Home from './page/Home';
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Page2 from './page/Page2';

function App() {
  return (
    <div className="App">
    
    <Router>
     <Routes>
        <Route  path="/" element={<Home  />} />
        <Route  path="/page2" element={<Page2 />} />
     </Routes>
     </Router>
 
    </div>
  );
}

export default App;