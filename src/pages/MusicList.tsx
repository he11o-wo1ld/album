// import React, { useState, useRef } from 'react';
// import { Play, Pause } from 'lucide-react';

// const songs = [
//   {
//     id: 1,
//     title: "Perfect",
//     artist: "Ed Sheeran",
//     coverUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300",
//     audioUrl: "https://www2.cs.uic.edu/~i101/SoundFiles/ImperialMarch60.wav"
//   },
//   {
//     id: 2,
//     title: "All of Me",
//     artist: "John Legend",
//     coverUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300",
//     audioUrl: "https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav"
//   }
// ];

// function MusicList() {
//   const [playingId, setPlayingId] = useState<number | null>(null);
//   const audioRefs = useRef<{ [key: number]: HTMLAudioElement }>({});

//   const togglePlay = (songId: number) => {
//     if (playingId === songId) {
//       audioRefs.current[songId].pause();
//       setPlayingId(null);
//     } else {
//       // Pause currently playing song if any
//       if (playingId !== null && audioRefs.current[playingId]) {
//         audioRefs.current[playingId].pause();
//       }
      
//       // Play new song
//       if (!audioRefs.current[songId]) {
//         const song = songs.find(s => s.id === songId);
//         if (song) {
//           audioRefs.current[songId] = new Audio(song.audioUrl);
//           audioRefs.current[songId].addEventListener('ended', () => setPlayingId(null));
//         }
//       }
//       audioRefs.current[songId].play();
//       setPlayingId(songId);
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4">
//       <h1 className="text-3xl font-bold text-gray-800 mb-8">Our Playlist ♪</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {songs.map((song) => (
//           <div key={song.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
//             <div className="relative">
//               <img
//                 src={song.coverUrl}
//                 alt={song.title}
//                 className="w-full h-48 object-cover group-hover:brightness-75 transition-all"
//                 loading="lazy"
//               />
//               <button 
//                 onClick={() => togglePlay(song.id)}
//                 className="absolute bottom-4 right-4 bg-black rounded-full p-3 text-white hover:bg-gray-800 transition-colors"
//               >
//                 {playingId === song.id ? <Pause size={24} /> : <Play size={24} />}
//               </button>
//             </div>
//             <div className="p-4">
//               <h3 className="font-semibold text-lg">{song.title}</h3>
//               <p className="text-gray-600">{song.artist}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MusicList;



import React, { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

// Import local audio files
import perfectAudio from '../assets/music/perfect.mp3';

// Import cover images (optional, if you want to use local images)
import perfectCover from '../assets/img/perfect.jpg';


const songs = [
  {
    id: 1,
    title: "Perfect",
    artist: "Ed Sheeran",
    coverUrl: perfectCover, // Use local image
    audioUrl: perfectAudio, // Use local audio file
  },
];

function MusicList() {
  const [playingId, setPlayingId] = useState<number | null>(null);
  const audioRefs = useRef<{ [key: number]: HTMLAudioElement }>({});

  const togglePlay = (songId: number) => {
    if (playingId === songId) {
      audioRefs.current[songId].pause();
      setPlayingId(null);
    } else {
      // Pause currently playing song if any
      if (playingId !== null && audioRefs.current[playingId]) {
        audioRefs.current[playingId].pause();
      }

      // Play new song
      if (!audioRefs.current[songId]) {
        const song = songs.find((s) => s.id === songId);
        if (song) {
          audioRefs.current[songId] = new Audio(song.audioUrl);
          audioRefs.current[songId].addEventListener('ended', () => setPlayingId(null));
        }
      }
      audioRefs.current[songId].play();
      setPlayingId(songId);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Our Playlist ♪</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {songs.map((song) => (
          <div
            key={song.id}
            className="bg-white rounded-lg shadow-md overflow-hidden group"
          >
            <div className="relative">
              <img
                src={song.coverUrl}
                alt={song.title}
                className="w-full h-48 object-cover group-hover:brightness-75 transition-all"
                loading="lazy"
              />
              <button
                onClick={() => togglePlay(song.id)}
                className="absolute bottom-4 right-4 bg-black rounded-full p-3 text-white hover:bg-gray-800 transition-colors"
              >
                {playingId === song.id ? <Pause size={24} /> : <Play size={24} />}
              </button>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{song.title}</h3>
              <p className="text-gray-600">{song.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MusicList;