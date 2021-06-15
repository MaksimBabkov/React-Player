import React, {useState, useRef, useEffect} from 'react'
import Controls from './Controls';
import Details from './Details';
import '../../progress.css'
import '../../KolomnaText.css'



function Player(props) {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

   
    
    
useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
          
        } else {
          
            audioEl.current.pause();
        }
        
    });

    useEffect(() =>{

    const audioElement = document.getElementById("audio-element")

        audioElement.onended = (forwards = true) => {
           if (forwards) {
           
               props.setCurrentSongIndex(() => {
                   let temp = props.currentSongIndex;
                   temp++;
   
                   if (temp > props.songs.length - 1) {
                       temp = 0;
                   }
   
                   return temp;
               });
           } else {
               props.setCurrentSongIndex(() => {
                   let temp = props.currentSongIndex;
                   temp--;
   
                   if (temp < 0) {
                       temp = props.songs.length - 1;
                   }
   
                   return temp;
               });
           }
       }
    })
     
   




    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        }
    }

    return (
        <div className="c-player">

           <div className="Kolomna">
               <h1 id="blink7">K O L O M N A</h1>
               <p id="blink7">MUSIC</p>

            </div>

            <audio crossorigin="anonymous" id="audio-element" ref={audioEl} src={props.songs[props.currentSongIndex].file}></audio>
            
            {/* <h2>PlaYer</h2> */}
          
         
              

            <Details song={props.songs[props.currentSongIndex]} />
            <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
            {/* <p>Next up: <span>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].file}</span></p> */}
           {/* { <progress  id="seekbar" ></progress>} */}

{/*///*/}


          
{/*///*/}



        </div>
    )
}

export default Player;
