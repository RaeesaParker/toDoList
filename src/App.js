import './App.css';
import {useState} from 'react';
import Heading from './components/heading';
import CurrentInserts from './components/currentInserts';
import Archive from './components/archive';
import Footer from './components/footer';


function App() {


    //  Create an array to store the archiveNoteList
    const [archiveNoteList, setArchiveNoteList] = useState([]);



  return (
    <div>
        <Heading></Heading>
        
        <div className='section-main-container'> 
          <CurrentInserts archiveNoteList={archiveNoteList} setArchiveNoteList={setArchiveNoteList} ></CurrentInserts>
          <Archive archiveNoteList={archiveNoteList} ></Archive>
        </div>
        <Footer></Footer>
    </div>
  );
}

export default App;
