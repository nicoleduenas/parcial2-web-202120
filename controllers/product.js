const data = require('../assets/data');

function getProducts(query) {
  if (query) {
    query_lower = query.toLowerCase()
    return data.filter((element) => {
      return element.name.toLowerCase().includes(query_lower)
    })
  }
  return data;
}

module.exports = { getProducts };
