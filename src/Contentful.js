const contentful = require("contentful");

export default contentful.createClient({
  space: process.env.REACT_APP_API_SPACE || "2w3d3q4ck9sv",
  accessToken: process.env.REACT_APP_ACCESS_TOKEN || "MqUtzZxVrCBeR3-sMKAaUeNFoMbGilKQ7U_i0_TNo84"
});
