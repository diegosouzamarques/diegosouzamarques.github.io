//importScripts('./ngsw-worker.js');

self.addEventListener('fetch', function(event) {
  return event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      let requestToCache = event.request.clone();

      return fetch(requestToCache).then().catch(error => {
        // Check if the user is offline first and is trying to navigate to a web page
        if (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html')) {
          // Return the offline page
          return caches.match("offline-page.html");
        }
      });
    })
  );
});

self.addEventListener('sync', (event) => {
  if (event.tag === 'post-data') {
    // call method
    event.waitUntil(getDataAndSend());
  }
});

function addData(nota) {
  let obj = {
    titulo: nota.titulo,
    message: nota.message,
    color: nota.color 
  };
 return fetch('https://monitoramento-backend.herokuapp.com/anotacao', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
}

function getDataAndSend() {
  let db;
  const request = indexedDB.open('db-motin');
  request.onerror = (event) => {
    console.log('Please allow my web app to use IndexedDB 😃>>>👻');
  };
  request.onsuccess = (event) => {
    db = event.target.result;
    getData(db);
  };
}

function getData(db) {

   console.log("getData-10");
   console.log("Event");
  const transaction = db.transaction(['notas']);
  const objectStore = transaction.objectStore('notas');
  const reqkey = objectStore.getAllKeys();
  reqkey.onerror = (event) => {
    // Handle errors!
    console.error(event);
  };
  reqkey.onsuccess = (event) => {
    // Do something with the request.result!
    console.log(reqkey.result);
    for (let i = 0; i < reqkey.result.length; i++) {
      seq = reqkey.result[i];
      console.log (seq);
      const reqObject  = objectStore.get(seq);
      reqObject.onerror = (event) => {
        // Handle errors!
        console.error(event);
      };
      reqObject.onsuccess = (event) => {
        console.log(reqObject.result);
        addData(reqObject.result).then((seq) => {
          const trans = db.transaction(["notas"], "readwrite");
          const store = trans.objectStore("notas");
          const reqDelete = store.delete(seq);
          
          reqDelete.onerror = (event) => {
            // Handle errors!
            console.error(event);
          };
          reqDelete.onsuccess = (event) => {
            // Handle errors!
            console.log('delete sucess: '+seq);
          };
          
          Promise.resolve()})
        .catch(() => Promise.reject());;


       };
    } 
 
  };
}