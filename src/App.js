
import {useState, useEffect} from 'react';


import AudioSpectrum  from 'react-audio-spectrum'
import Player from './components/Player/Player';
import Modal from './components/Player/Modal'




import playerList1 from './playlist1.json'
import playerList2 from './playlist2.json'









import'./spectrom.css'



function App() {
  const [songs, setSongs] = useState(playerList1); //плейлист Json
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  const [show, setShow] = useState(false);

  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);


  

  useEffect(() => {

    // console.log(songs)

    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

return (
    <div className="App">


     

      <div className="StyleButtons">

      {!show && <button className="Setsongs" onClick={openModal}>&#10148;</button>}
      <Modal setSongs={setSongs}

       playerList1={playerList1}
       playerList2={playerList2}

 

      
       closeModal={closeModal}
       show={show} />

</div>




 
 






      <div className="Spectrum">
      <AudioSpectrum
  id="audio-canvas"
  height={400}
  width={1980}
  audioId={'audio-element'}
  capColor={'#FF0033'}
  capHeight={10}
  meterWidth={2}
  meterCount={512}
  meterColor={[
    {stop: 0, color: '#f00'},
    {stop: 0.5, color: '#0CD7FD'},
    {stop: 1, color: 'rgb(56, 52, 52)'}
  ]}
  gap={4}
/>
</div>




<div className="zindexi">
<Player 
      
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
</div>
     </div>
  );
}

export default App;
