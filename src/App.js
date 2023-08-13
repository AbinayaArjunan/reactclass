import React, { useEffect, useRef, useState } from 'react'


function Note({ note }) {
  return (
    <li >{note.content}</li>
  )
}

function App(props) {
  
// define a state
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [newNoteImportant, setNewNoteImportant] = useState('');
  const[showStatus,setShowStatus]=useState('all')

  useEffect(() => {
    setNotes(props.notes);
    
  }, []);


  const newNotecontentRef = useRef(null);
  let addNote = (event) => {
    event.preventDefault();

    //create a new object
    let noteObject = {
      id: notes.length + 1,
      content: newNote,
      important: newNoteImportant==="true"
    };
    console.log(noteObject);
    //add the new object to the note state
    setNotes(notes.concat(noteObject));

    //clear the input text
    setNewNote('');

    setNewNoteImportant('');
    newNotecontentRef.current.focus();
  }


  let handleNoteChange = (event) => {
    setNewNote(event.target.value);
  }
  let handleselectchange = (event) => {
    setNewNoteImportant(event.target.value);
  }
   
  let handlestatusChange = (event) => {
    setShowStatus(event.target.value);
  }
  let filteredNotes = (notes, status) => {
    switch (status) {
      case 'all':
        return notes;
      case 'imp':
        return notes.filter((note) => note.important === true);
      case 'nonimp':
        return notes.filter((note) => note.important === false)

    }
  }

  const notesFiltered = filteredNotes(notes, showStatus);

  return (
    <div>
      <h1>Notes</h1>
      <label>
        <input type="radio"
          name="filter"
          value="all"
          checked={showStatus === 'all'}
          onChange={handlestatusChange}
        />
        show all notes
      </label>
      
      <label>
        <input type="radio"
          name="filter"
          value="imp"
          checked={showStatus === 'imp'}
          onChange={handlestatusChange}
        />
        show important notes
      </label>

      <label>
        <input type="radio"
          name="filter"
          value="nonimp"
          checked={showStatus === 'nonimp'}
          onChange={handlestatusChange}
        />
        show Non-important notes
      </label>





      <ul>
        {notesFiltered.map(note => 
          <Note key={note.id} note={ note} />)}
      </ul>
      {/*add a simple form for adding notes */}
      <form onSubmit={addNote}>
        <input
          type="text"
          onChange={handleNoteChange}
          placeholder="enter a note"
          value={newNote}
          ref={newNotecontentRef}
        /><br/>
        {/* <input
          type="text"
          placeholder="enter true or false"
          value={newNoteImportant}
          onChange={(event)=>{setNewNoteImportant(event.target.value)}}
        /><br /> */}
        <select onChange={handleselectchange} value={newNoteImportant}>
          <option>select</option>
          <option>true</option>
          <option>false</option>
        </select>
        <br />
        <button type="submit">Add Note</button>
       </form>




      </div>
  )
}

export default App;
