import React, { useEffect, useState } from 'react';

const SingleAlbum = ({ selectedAlbum }) => {
   const [album, setAlbum] = useState([])

  const getAlbum = async () => {
    const response = await fetch(`http://localhost:8080/api/albums/${selectedAlbum}`);
    const json = await response.json();
    console.log(json)
    setAlbum(json)
  };


  useEffect(() => {
    getAlbum();
    console.log(album)
  }, []);


    return (
        <div id='single-album' className='column'>
        <div className='album'>
          {album.map((index)=>{
            return(
              <a>
              <img src={index.artworkUrl}/>
              <p></p>
              <small>{index.artist.name}</small>
            </a>
            )
          })}
        </div>
        <table id='songs'>
                {album.map((index)=>{
                return (
                  <tbody>
                      <tr className='gray'>
                      <td />
                      <td>#</td>
                      <td>Name</td>
                      <td>Artist</td>
                      <td>Genre</td>
                      </tr>
                    {index.songs.map((song)=>{
                return (<tr>
                        <td><i className='fa fa-play-circle' /></td>
                        <td>{song.id}</td>
                        <td>{song.name}</td>
                        <td>{index.artist.name}</td>
                        <td>{song.genre}</td>
                      </tr>)
                    })}

                  </tbody>
                )
                })}
            </table>
    </div>
    )
};

export default SingleAlbum;