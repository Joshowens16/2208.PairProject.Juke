import React, { useEffect, useState } from "react";
import SideBar from "./components/SideBar.jsx";
import AllAlbums from "./components/AllAlbums.jsx";
import Player from "./components/Player.jsx";
import SingleAlbum from "./components/SingleAlbum.jsx";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(0);

  const getAlbums = async () => {
    const response = await fetch("http://localhost:8080/api/albums");
    const albums = await response.json();
    setAlbums(albums);
  };

  useEffect(() => {
    getAlbums();
  }, []);

  return (
    <div id="app">
      <div id="main" className="row container">
        <SideBar />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <AllAlbums
                  albums={albums}
                  selectedAlbum={selectedAlbum}
                  setSelectedAlbum={setSelectedAlbum}
                />
              }
            />
            <Route
              path={`/albums/${selectedAlbum}`}
              element={
                <SingleAlbum albums={albums} selectedAlbum={selectedAlbum} />
              }
            />
          </Routes>
        </div>
        <Player />
      </div>
    </div>
  );
};

export default App;
