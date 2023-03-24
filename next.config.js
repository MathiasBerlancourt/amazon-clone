module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
      {
        protocol: "https",
        hostname: "links.papareact.com",
      },
    ],
  },
  loaders: [
    {
      test: /\.(jpe?g|png)$/i,
      loaders: ["file-loader", "webp-loader?{quality: 13}"],
    },
  ],
  module: {
    rules: [
      {
        test: /\.(jpg|JPG|jpeg|png|gif|mp3|svg|ttf|woff2|woff|eot)$/gi,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
};
const withImages = require("next-images");
module.exports = withImages();

//   images: {
//     domains: [
//       `links.papareact.com`,
//       `fakestoreapi.com`,
//       `upload.wikimedia.org`,
//     ],
//   },
// };
