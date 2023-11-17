const forEach = (item, callback) => {
  for (let i = 0; i < item.length; i++) {
    callback(item[i]);
  }
};

module.exports = forEach;

