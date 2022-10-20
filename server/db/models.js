const Sequelize = require("sequelize");
const db = require("./db");

const Album = db.define("album", {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  artworkUrl: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    defaultValue: "default-album.jpeg",
    validate: {
      notEmpty: true,
    },
  },
});

const Artist = db.define("artist", {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

const Song = db.define("song", {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  audioUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  genre: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = { Album, Artist, Song };
