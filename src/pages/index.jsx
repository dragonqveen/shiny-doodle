import React from 'react';
import PlaylistCard from '../components/PlaylistCard';
import './style.css';

const playlistData = [
    { title: 'Alone Together', cover: 'https://i.pinimg.com/originals/d3/22/4d/d3224de952521c6906d7fd23e84eda73.jpg', tagList: ["feelings", "indie"] },
    { title: 'Below My Shadows', cover: 'https://i.pinimg.com/474x/53/de/cd/53decd0605b6fdedc6f6b61244edd3bf.jpg', tagList: ["moody", "night", "sad"] },
    { title: 'Atmospheric Escapes', cover: 'https://i.pinimg.com/236x/c6/3b/07/c63b074f76eab5eb26b390e95186c96a.jpg', tagList: ["night", "instrumental", "indie"] },
    { title: 'Runaway', cover: 'https://i.pinimg.com/564x/97/27/78/97277820fa6f4f5ff0802507a81317f8.jpg', tagList: ["angsty", "indie"] },
    { title: 'Let\'s Groove to Future Funk', cover: 'https://i.pinimg.com/originals/da/45/68/da45688f06fe432f1eb38cea16a42fb9.jpg', tagList: ["future funk", "cute", 'dance'] },
];

class Playlists extends React.Component {
    render() {
        return (
            <div className="card-list">
                {playlistData.map((playlist, index) => (
                <PlaylistCard 
                    key={index}
                    playlistTitle={playlist.title} 
                    playlistCover={playlist.cover} 
                    tagList={playlist.tagList}
                />
            ))}
            </div>
        );
    }
}

export default Playlists;
