import './App.css';
import Heading from './components/heading';
import CurrentInserts from './components/currentInserts';
import Archive from './components/archive';
import Footer from './components/footer';

function App() {
  return (
    <div>
        <Heading></Heading>
        
        <div className='section-main-container'> 
          <CurrentInserts></CurrentInserts>
          <Archive></Archive>
        </div>
        <Footer></Footer>
    </div>
  );
}

export default App;
