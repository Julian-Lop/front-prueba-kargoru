import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Navbar from './components/Navbar'
import CreateQuote from './components/CreateQuote';
import QuotesTable from './components/QuotesTable';
import './App.css';

function App() {
  return (
   <div className='App'>
    
    <Router>
      <Navbar/> 
      <Routes>
        <Route path='/createquote' element={<CreateQuote/>}/>
        <Route path='/quotestable' element={<QuotesTable/>}/>
        <Route path='/quoteview/:id' element={<div></div>}/>
        <Route path='/editquote/:id' element={<div></div>}/>
      </Routes>
    </Router>
   </div> 
  )
}

export default App;
