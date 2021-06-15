import React from 'react'
import img from '../../unnamed.jpg'
import '../../scrolltext.css'

function Details(props) {
    return (
        <div className="c-player--details">
            <div className="details-img">
            <img src={img} alt="" />
                {/* <img src={props.song.img_src} alt="" /> */}
            </div>
            <h3 className="details-title marquee"><span>{props.song.title}</span></h3>
            {/* <h4 className="details-artist">{props.song.artist}</h4> */}
        </div>
    )
}

export default Details
