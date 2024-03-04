const fs = require('fs');

fs.readFile('sample.txt', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data.toString());
  }
});
