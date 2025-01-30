import React, { useState, useEffect } from 'react';

interface Note {
  id: number;
  text: string;
  timestamp: Date;
}

const Diary: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>(() => {
    const savedNotes = localStorage.getItem('diary-notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [inputText, setInputText] = useState<string>('');

  useEffect(() => {
    localStorage.setItem('diary-notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (inputText.trim() === '') return;
    const newNote: Note = {
      id: Date.now(),
      text: inputText,
      timestamp: new Date(),
    };
    setNotes([newNote, ...notes]);
    setInputText('');
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-pink-100 to-purple-200">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/30 backdrop-blur-lg rounded-lg p-6 shadow-lg border border-white/20">
          <textarea
            className="w-full p-4 bg-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-gray-600"
            rows={3}
            placeholder="Take a note..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button
            className="mt-4 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all duration-300"
            onClick={addNote}
          >
            Add Note
          </button>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <div
              key={note.id}
              className="bg-white/30 backdrop-blur-lg rounded-lg p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
            >
              <p className="text-gray-700">{note.text}</p>
              <p className="text-sm text-gray-500 mt-2">
                {new Date(note.timestamp).toLocaleString()}
              </p>
              <button
                className="mt-4 px-4 py-2 bg-red-500/80 text-white rounded-lg hover:bg-red-600/80 transition-all duration-300"
                onClick={() => deleteNote(note.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Diary;
