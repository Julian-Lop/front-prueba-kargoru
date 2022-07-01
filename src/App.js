import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Navbar from './components/Navbar'
import CreateQuotation from './components/CreateQuotation'
import QuotationTable from './components/QuotationTable'
import QuotationView from './components/QuotationView'
import EditQuotation from './components/EditQuotation'
import './App.css';

function App() {
  return (
   <div className='App'>
    
    <Router>
      <Navbar/> 
      <Routes>
        <Route path='*' element={<Navigate to="/quotestable"/>}/>
        <Route path='/createquote' element={<CreateQuotation/>}/>
        <Route path='/quotestable' element={<QuotationTable/>}/>
        <Route path='/quoteview/:id' element={<QuotationView/>}/>
        <Route path='/editquote/:id' element={<EditQuotation/>}/>
      </Routes>
    </Router>
   </div> 
  )
}

export default App;
