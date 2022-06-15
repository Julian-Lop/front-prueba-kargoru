import Navbar from './components/Navbar'
import CreateQuote from './components/CreateQuote';
import QuotesTable from './components/QuotesTable';
import './App.css';

function App() {
  return (
   <div classNameName='App'>
    <Navbar/>
    {/* <CreateQuote/> */}
    <QuotesTable/>
   </div> 
  )
}

export default App;
