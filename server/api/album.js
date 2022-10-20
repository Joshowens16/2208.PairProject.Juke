const router = require("express").Router();
const { Album, Song, Artist } = require("../db/models");

router.get("/", async (req, res, next) => {
  try {
    const allAlbums = await Album.findAll({});
    res.send(allAlbums);
  } catch (error) {
    next(error);
  }
});

router.get("/:albumId", async (req, res, next) => {
  const id = req.params.albumId;
  const album = await Album.findAll({
    where: {
      id: id,
    },
    include: [
      {
        model: Artist,
      },
      {
        model: Song,
      },
    ],
  });
  res.send(album);
});

module.exports = router;
