import {useState, useEffect} from 'react';
import { useNavigate  } from 'react-router-dom';
import Heading from './heading';
import CurrentInserts from './currentInserts';
import Archive from './archive';
import Doing from './doing'
import Footer from './footer';


function CurrentProject(props){

  // Navigation for redirect
  const navigate = useNavigate();

  // Check if there is a user logged in => if not => route to the login page 
  useEffect (() => {
    if (!props.username){
      console.log("Rerouting back to homepage as there is no user")
      navigate("../../toDoList/"); 
    }
  }, [])


  //  Create an array to store the noteList
  const [noteList, setNoteList] = useState([]);

  //  Create an array to store the archiveNoteList
  const [archiveNoteList, setArchiveNoteList] = useState([]);
  
  //  Create an array to store the doingNoteList
  const [doingNoteList, setDoingNoteList] = useState([]);




  return(
    <div>
      <Heading userName={props.username} projectName={props.projectName}  ></Heading>
       
       <div className='section-main-container'> 
         <CurrentInserts noteList={noteList} setNoteList={setNoteList} archiveNoteList={archiveNoteList} setArchiveNoteList={setArchiveNoteList} doingNoteList={doingNoteList} setDoingNoteList={setDoingNoteList} ></CurrentInserts>
         <div className='section-storage-container'>
           <Doing noteList={noteList} setNoteList={setNoteList} doingNoteList={doingNoteList} setDoingNoteList={setDoingNoteList} archiveNoteList={archiveNoteList} setArchiveNoteList={setArchiveNoteList}></Doing>
           <Archive noteList={noteList} setNoteList={setNoteList} doingNoteList={doingNoteList} setDoingNoteList={setDoingNoteList} archiveNoteList={archiveNoteList} setArchiveNoteList={setArchiveNoteList} ></Archive>
         </div>
       </div>
       <Footer></Footer>
    </div>
  )
}

export default CurrentProject;