const whitelist = [
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:3030",
  "http://127.0.0.0.1:3000",
  "https://your-site.com",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

module.exports = corsOptions;
