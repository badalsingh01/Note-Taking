import React,{useRef,useState} from 'react';
import {apiClient} from '../../../../shared/services/api-client';
import './NoteForm.css';

const NoteForm = (props) => {
  const [message, setMessage] = useState('');
  const {updateNotes}=props;
  const newNote=useRef("");
  
  const btnClickHandler=async ()=>{
    updateNotes(newNote.current.value);

    const noteInfo={
      'note': newNote.current.value
    }
    newNote.current.value="";
    try{
      const response = await apiClient.post('http://localhost:4444/addNote', noteInfo);
      setMessage(response.data.message);
      // console.log('Response is ', response);
      // console.log('noteInfo ', noteInfo);
    }
    catch(err){
      setMessage('Note adding Fail...');
      // console.log('Error is ', err);
    }
  }

  return (
    <div>
        <input className="inputNote" ref={newNote}></input>
        <button className="btn btn-lg addNoteButton" onClick={btnClickHandler}>ADD NOTE</button>
    </div>
  )
}

export default NoteForm