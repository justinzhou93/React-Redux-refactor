import React from 'react';
import Songs from './Songs';

export default function (props) {

    const genreName = props.genreName;
    const songs = props.songs;
    const isPlaying = props.isPlaying;
    const currentSong = props.currentSong;
    const toggleOne = props.toggleOne;

    console.log("in station------------->")
    console.log(props);

    return (
        <div>
            <h3>{ genreName } Station</h3>
            <Songs
                songs={songs}
                currentSong={currentSong}
                isPlaying={isPlaying}
                toggleOne={toggleOne}
            />
        </div>
    );
}