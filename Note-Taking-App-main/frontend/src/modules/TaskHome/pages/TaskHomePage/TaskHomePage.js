import React,{useState} from 'react';
import NoteForm from '../../components/NoteForm/NoteForm';
import BigNoteCard from '../../components/BigNoteCard/BigNoteCard';
import Heading from '../../components/Heading/Heading';
import NavBar from '../../../../shared/components/NavBar/NavBar';
import { v4 as uuidv4 } from 'uuid';

const TaskHomePage = () => {
  const initialNotes=[
    {name: "Cricket", id: 1},
    {name: "Coding", id: 2}
  ];
  const [notes,setNotes]=useState(initialNotes);
  const updateNotes=(newNote)=>{
    setNotes([{name: newNote,id: uuidv4()},...notes]);
  }
  return (
    <div>
        <NavBar />
        <Heading />
        <NoteForm updateNotes={updateNotes}/>
        <BigNoteCard notes={notes} />
    </div>
  )
}

export default TaskHomePage