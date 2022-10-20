const db = require("./db");

const { Album, Artist, Song } = require("./models.js");

Album.belongsTo(Artist);
Artist.hasMany(Album);

Song.belongsTo(Album);
Album.hasMany(Song);

Artist.hasMany(Song);
Song.belongsTo(Artist);

module.exports = {
  db,
  Song,
  Album,
  Artist,
};

//Album can have many songs but a song can have one album. one to many
//Artists can have many songs but a song can have one artist. one to many
//Artist can have many albums but a album can have one artist. one to many
//  User.belongsTo(User, { as: 'mentor' });
//  User.hasMany(User, { as: 'mentees', foreignKey: 'mentorId' });
