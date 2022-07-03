import React from 'react';
import './style.css';

class PlaylistCard extends React.Component {
    render() {
        return (
        <div className="card-wrapper">
            <div style={{backgroundImage: `url(${this.props.playlistCover})`}} className="card-image" />

            <h3 className="playlist-title">{this.props.playlistTitle}</h3>

            <ul className="tag-list">
                {this.props.tagList.map((tag, index) => (
                    <li className="tag-item" key={index}>{tag}</li>
                ))}
            </ul>
        </div>
        );
    }
}

export default PlaylistCard;
