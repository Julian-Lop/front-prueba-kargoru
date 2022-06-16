import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Navbar from './components/Navbar'
import CreateQuote from './components/CreateQuote';
import QuotesTable from './components/QuotesTable';
import QuoteView from './components/QuoteView';
import EditQuote from './components/EditQuote';
import './App.css';

function App() {
  return (
   <div className='App'>
    
    <Router>
      <Navbar/> 
      <Routes>
        <Route path='*' element={<Navigate to="/quotestable"/>}/>
        <Route path='/createquote' element={<CreateQuote/>}/>
        <Route path='/quotestable' element={<QuotesTable/>}/>
        <Route path='/quoteview/:id' element={<QuoteView/>}/>
        <Route path='/editquote/:id' element={<EditQuote/>}/>
      </Routes>
    </Router>
   </div> 
  )
}

export default App;
