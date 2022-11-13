import './App.css';
import {useState} from 'react';
import Heading from './components/heading';
import Homepage from './components/homepage';
import CurrentInserts from './components/currentInserts';
import Archive from './components/archive';
import Doing from './components/doing'
import Footer from './components/footer';


function App() {


    //  Create an array to store the archiveNoteList
    const [archiveNoteList, setArchiveNoteList] = useState([]);
   
    //  Create an array to store the doingNoteList
    const [doingNoteList, setDoingNoteList] = useState([]);




  return (
    <div>
        {/* <Heading></Heading> */}
        <Homepage></Homepage>
        {/* <div className='section-main-container'> 
          <CurrentInserts archiveNoteList={archiveNoteList} setArchiveNoteList={setArchiveNoteList} doingNoteList={doingNoteList} setDoingNoteList={setDoingNoteList} ></CurrentInserts>
          <div className='section-storage-container'>
            <Doing doingNoteList={doingNoteList} setDoingNoteList={setDoingNoteList} archiveNoteList={archiveNoteList} setArchiveNoteList={setArchiveNoteList}></Doing>
            <Archive archiveNoteList={archiveNoteList} setArchiveNoteList={setArchiveNoteList} ></Archive>
          </div>
        </div> */}
        {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
