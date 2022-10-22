import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AllAlbums = (props) => {

    const getAlbum = (album) => {
        const selected = album
        props.setSelectedAlbum(selected)
    }
    return (
        <div id='albums' className='row wrap'>
            {props.albums.map((album)=> {
            return (<div className='album' key={album.id} >
                <a>
                    <Link to={`/albums/${album.id}`} onClick={()=> {getAlbum(album.id)}} > 
                    <img src={album.artworkUrl} />
                    </Link>

                <p>{album.name}</p>
                <small>{album.artist.name}</small>
                </a>
            </div>)
            })}

          </div>
    );
};

export default AllAlbums;