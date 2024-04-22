import React,{useState} from 'react';
import NoteCard from '../NoteCard/NoteCard';
import axios from 'axios';
import { apiClient } from '../../../../shared/services/api-client';
import './BigNoteCard.css';

const BigNoteCard = (props) => {
    const {notes}=props;
    const [arrNote,setArr]=useState([]);
    const response=axios.get('http://localhost:4444/getNote')
    .then((res)=>{
      // console.log(res.data);
      const arr=res.data;
      // console.log(arr);
      setArr(arr);
    })
    .catch((err)=>{
      console.log(err);
    })
    // console.log(arrNote);
    return (
      <div className="BigNoteCardDiv">
        {/* {notes.map((n)=><NoteCard key={n.id} item={n.name}/>)} */}
        {arrNote.map((n)=><NoteCard key={n._id} item={n.note}/>)}
      </div>
    )
}

export default BigNoteCard