
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import { Navbar } from './Components/Navbar/Navbar';
import { Home } from './Components/Home';
import { Footer } from './Components/Footer/Footer';
import { Category } from './Components/Categories/Category';
import { BookDetails } from './Components/BookDetails/BookDetails';
import { About } from './Components/About/About';
import { Contact } from './Components/Contact/Contact';
function App() {
  return (
    <div className="App">
    <Router>
      
        <Navbar/>
        <Routes>
            <Route path ="/" element ={<Home/>} />
            <Route path ="/Category" element ={<Category/>} />
            <Route path ="/Details" element ={<BookDetails/>} />
            <Route path ="/about" element ={<About/>} />
            <Route path ="/contact" element ={<Contact/>} />
        </Routes>
        <Footer/>
        
      
    </Router>
    </div>
  );
}

export default App;
