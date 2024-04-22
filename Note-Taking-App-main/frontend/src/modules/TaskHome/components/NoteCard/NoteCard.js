import React from 'react';
import './NoteCard.css';

const NoteCard = (props) => {
    const {item}=props;
    return (
      <div className="NoteCard">
        <div>{item}</div>
      </div>
    )
}

export default NoteCard