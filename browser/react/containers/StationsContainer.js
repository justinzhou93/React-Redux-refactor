/**
 * Created by CharlieShi on 2/13/17.
 */


import { connect } from 'react-redux';
import Stations from '../components/stations';

const mapStateToProps = state => ({
    stations: convertSongsToStations(state.songs)

});


const mapDispatchToProps = dispatch => ({

});

const convertSongsToStations = function(songsArray) {
    let returnObj = {};

    songsArray.forEach( (song) => {
        if (returnObj.hasOwnProperty(song.genre)) {
            returnObj[song.genre].push(song);
        } else {
            //TODO
            returnObj[song.genre] = [song];
        }
    });

    return returnObj;
};


export default connect(mapStateToProps, mapDispatchToProps)(Stations);