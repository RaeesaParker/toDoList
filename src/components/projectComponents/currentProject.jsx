import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Heading from "./heading";
import CurrentInserts from "./currentInserts";
import Archive from "./archive";
import Doing from "./doing";
import { readNotes } from "../../utils/notes";

function CurrentProject(props) {

  // Navigation for redirect
  const navigate = useNavigate();

    //  Create an array to store the note, doing and archive lists
  const [noteList, setNoteList] = useState([]);
  const [doingNoteList, setDoingNoteList] = useState([]);
  const [archiveNoteList, setArchiveNoteList] = useState([]);


  useEffect(() => {
    if (!props.userDetails.userName) {
      navigate("/");
    }
    readNotesFunc()
  }, []);


  // Function to get all the notes already associated with a  project
  const readNotesFunc = async () => {
    let allNotes = await readNotes(props.projectDetails.project_id);
    if (!allNotes.status){
      filterNotesFunc(allNotes)
    }else{
      navigate("/");
    }
  }

  // Set the notelists using noteBin => 1 = toDo    2 = doing     3 = done
  const filterNotesFunc = async (allNotes) => {
    setNoteList(allNotes.filter( note =>  note.noteBin === 1))
    setDoingNoteList(allNotes.filter( note =>  note.noteBin === 2))
    setArchiveNoteList(allNotes.filter( note =>  note.noteBin === 3))
  }




  return (
    <div>
      <Heading
        userName={props.userDetails.userName}
        projectName={props.projectDetails.projectName}
      ></Heading>

      <div className="section-main-container">
        <CurrentInserts
          userId={props.userDetails.user_id}
          projectId={props.projectDetails.project_id}
          noteList={noteList}
          archiveNoteList={archiveNoteList}
          doingNoteList={doingNoteList}
          readNotesFunc={readNotesFunc}
        ></CurrentInserts>
        <div className="section-storage-container">
          <Doing
            noteList={noteList}
            doingNoteList={doingNoteList}
            archiveNoteList={archiveNoteList}
            readNotesFunc={readNotesFunc}
            projectId={props.projectDetails.project_id}
          ></Doing>
          <Archive
            noteList={noteList}
            doingNoteList={doingNoteList}
            archiveNoteList={archiveNoteList}
            readNotesFunc={readNotesFunc}
            projectId={props.projectDetails.project_id}
          ></Archive>
        </div>
      </div>
    </div>
  );
}

export default CurrentProject;
