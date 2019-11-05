import React from 'react';
import './YouTubeComp.css'

const YouTubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSahButP5xaseXBA93KSi4aRlysVdf_qGJncgW4FvC8_br1lrnihg&s" alt=""/>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YouTubeComp.defaultProps = {
    time: '00.00',
    title: 'Title here',
    desc: 'xx ditonton. x hari yang lalu'
}

export default YouTubeComp;