import {useState} from 'react';
import { BrowserRouter , Routes , Route , Link   } from 'react-router-dom';
import Heading from './heading';
import CurrentInserts from './currentInserts';
import Archive from './archive';
import Doing from './doing'
import Footer from './footer';


function CurrentProject(props){

  //  Create an array to store the archiveNoteList
  const [archiveNoteList, setArchiveNoteList] = useState([]);
  
  //  Create an array to store the doingNoteList
  const [doingNoteList, setDoingNoteList] = useState([]);

  return(
    <div>
      <Heading userName={props.userName} projectName={props.projectName}  ></Heading>
       
       <div className='section-main-container'> 
         <CurrentInserts archiveNoteList={archiveNoteList} setArchiveNoteList={setArchiveNoteList} doingNoteList={doingNoteList} setDoingNoteList={setDoingNoteList} ></CurrentInserts>
         <div className='section-storage-container'>
           <Doing doingNoteList={doingNoteList} setDoingNoteList={setDoingNoteList} archiveNoteList={archiveNoteList} setArchiveNoteList={setArchiveNoteList}></Doing>
           <Archive archiveNoteList={archiveNoteList} setArchiveNoteList={setArchiveNoteList} ></Archive>
         </div>
       </div>
       <Footer></Footer>
    </div>
  )
}

export default CurrentProject;