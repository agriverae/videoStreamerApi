const Mux = require("@mux/mux-node");
const path = require("path");
require("dotenv").config();
const server = require("./src/ApolloServer/createServer");

const { Video, Data } = new Mux(
  "e8852629-151d-4c7a-b283-f5c58e6d9773",
  "8SzvKO0B7i6n4Vp/ZjdsSerjeEwimGD24iQiq0D3WYn+2mDw8oU4UFmUcbzTg8iBJ7QlWgK74bJ"
);

const uploadVideo = async () => {
  const asset = await Video.Assets.create({
    input: "https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4",
  });
  console.log(asset);

  const playbackId = await Video.Assets.createPlaybackId(asset.id, {
    policy: "public",
  });

  console.log(playbackId);
};

const checkStatus = async () => {
  const info = await Video.Assets.get(
    "m7fiOCgnxXJAiyyz2kP01yZXQ2EWc00x01lcQVOZOuKYgM"
  );
  console.log(info);
};

//checkStatus();

//uploadVideo();

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
