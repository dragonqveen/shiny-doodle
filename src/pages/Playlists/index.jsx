import React, { Component } from 'react';
import PlaylistCard from '../../components/PlaylistCard'
import './style.css';
import client from '../../api/client'

class Playlists extends Component {
    constructor(props){
        super(props);

        this.state = {
            playlists: []
        };
    }

    componentDidMount() {
        client
        .get(`/users/${process.env.REACT_APP_USER_ID}/playlists`, {
            headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`,
                'Content-Type': 'application/json',
            }
        })
        .then((response) => {
            this.setState({playlists: response.data.items})
        });
    }

    render() {
        return (
            <div className="card-list">
                {this.state.playlists.map((playlist, index) => (
                <PlaylistCard 
                    key={index}
                    playlistTitle={playlist.name} 
                    playlistCover={playlist.images.length ? playlist.images[0].url : ''} 
                    tagList={playlist.description.match(/(?<=[#])([\w\S]*)/g) || []}
                />
            ))}
            </div>
        );
    }
}

export default Playlists;
