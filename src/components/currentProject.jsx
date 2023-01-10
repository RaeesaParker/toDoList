import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Heading from "./heading";
import CurrentInserts from "./currentInserts";
import Archive from "./archive";
import Doing from "./doing";
import Footer from "./footer";
import { readNotes } from "../utils/notes";

function CurrentProject(props) {
  // Navigation for redirect
  const navigate = useNavigate();

  // Check if there is a user logged in => if not => route to the login page
  useEffect(() => {
    if (!props.userDetails.userName) {
      console.log("Rerouting back to homepage as there is no user");
      navigate("../../toDoList/");
    }
    readNotesFunc()
  }, []);


  // Function to get all the notes already associated with a user 
  const readNotesFunc = async () => {
    let allNotes = await readNotes(props.projectDetails.project_id);
    console.log(allNotes)
    filterNotesFunc(allNotes)
  }

  // Set the notelists using noteBin => 1 = toDo    2 = doing     3 = done
  const filterNotesFunc = async (allNotes) => {
    setNoteList(allNotes.filter( note =>  note.noteBin === 1))
    setDoingNoteList(allNotes.filter( note =>  note.noteBin === 2))
    setArchiveNoteList(allNotes.filter( note =>  note.noteBin === 3))
  }


  //  Create an array to store the noteList
  const [noteList, setNoteList] = useState([]);

  //  Create an array to store the archiveNoteList
  const [archiveNoteList, setArchiveNoteList] = useState([]);

  //  Create an array to store the doingNoteList
  const [doingNoteList, setDoingNoteList] = useState([]);

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
          setNoteList={setNoteList}
          archiveNoteList={archiveNoteList}
          setArchiveNoteList={setArchiveNoteList}
          doingNoteList={doingNoteList}
          setDoingNoteList={setDoingNoteList}
        ></CurrentInserts>
        <div className="section-storage-container">
          <Doing
            noteList={noteList}
            setNoteList={setNoteList}
            doingNoteList={doingNoteList}
            setDoingNoteList={setDoingNoteList}
            archiveNoteList={archiveNoteList}
            setArchiveNoteList={setArchiveNoteList}
          ></Doing>
          <Archive
            noteList={noteList}
            setNoteList={setNoteList}
            doingNoteList={doingNoteList}
            setDoingNoteList={setDoingNoteList}
            archiveNoteList={archiveNoteList}
            setArchiveNoteList={setArchiveNoteList}
          ></Archive>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default CurrentProject;
