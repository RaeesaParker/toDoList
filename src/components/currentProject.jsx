import {useState} from 'react';
import { BrowserRouter , Routes , Route , Link   } from 'react-router-dom';
import Heading from './heading';
import CurrentInserts from './currentInserts';
import Archive from './archive';
import Doing from './doing'
import Footer from './footer';


function CurrentProject(props){

  return(
    <div>
      <Heading userName={props.userName} projectName={props.projectName}  ></Heading>
       
       <div className='section-main-container'> 
         <CurrentInserts archiveNoteList={props.archiveNoteList} setArchiveNoteList={props.setArchiveNoteList} doingNoteList={props.doingNoteList} setDoingNoteList={props.setDoingNoteList} ></CurrentInserts>
         <div className='section-storage-container'>
           <Doing doingNoteList={props.doingNoteList} setDoingNoteList={props.setDoingNoteList} archiveNoteList={props.archiveNoteList} setArchiveNoteList={props.setArchiveNoteList}></Doing>
           <Archive archiveNoteList={props.archiveNoteList} setArchiveNoteList={props.setArchiveNoteList} ></Archive>
         </div>
       </div>
       <Footer></Footer>
    </div>
  )
}

export default CurrentProject;