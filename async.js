const axios = require("axios");

const fetchData = async (number) => {
  try {
    const result = await axios(
      `https://jsonplaceholder.typicode.com/posts/${number}`
    );
    return "it worked";
  } catch (e) {
    // return "it failed lol";
    throw new Error("it failed lol");
    //
    // console.log("it failed lol");
  }
};

module.exports = fetchData;
