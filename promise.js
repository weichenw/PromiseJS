//Visit https://developers.google.com/web/fundamentals/primers/promises

function loadFile(filename) {
  return new Promise(function(resolve, reject) {
      // do anything blah blah blah
  
      // when done
      resolve();
      // or use: resolve(value) if you want to return something
  }
}

Promise.all([loadFile(file1), loadFile(file2)]).then(function(results) {
   // Something to do when they are all done !
});