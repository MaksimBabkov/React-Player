import React from "react";






function Modal(props) {

  const { show, closeModal } = props;
    
  
    
  

  return (
    <>
  
  <div className={show ? "modal" : "hide"}>
        <button className="Setsongs close" onClick={closeModal}>X</button>
        <button className="Setsongs clear"  onClick={() => {props.setSongs(props.playerList1)}}>&#8634;</button>

        <button className="Setsongs"  onClick={() => {props.setSongs(props.playerList2)}}>Top Chart</button>

        <button className="Setsongs close skrinSkip" onClick={closeModal}>X</button>


       

 
      
        
       
      </div>
    
    </>
  );
}

export default Modal;