import React, { useState } from 'react';

const AllAlbums = (props) => {

    const getAlbum = (x) => {
        const selected = props.albums[x-1]
        props.setSelectedAlbum(selected)
        console.log(props.selectedAlbum)
   
    }
    return (
        <div id='albums' className='row wrap'>
            {props.albums.map((album)=> {
            return (<div className='album' key={album.id} >
                <a onClick={getAlbum(album.id)}>
                <img src={album.artworkUrl} />
                <p>{album.name}</p>
                <small>{album.artist.name}</small>
                </a>
            </div>)
            })}

          </div>
    );
};

export default AllAlbums;