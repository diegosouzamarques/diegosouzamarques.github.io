//importScripts('./ngsw-worker.js');

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
  fetch('https://monitoramento-backend.herokuapp.com/anotacao', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  })
    .then(() => Promise.resolve())
    .catch(() => Promise.reject());
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
        addData(reqObject.result);
        console.log('delete seq: '+seq);

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

       };
    } 
 
  };
}
;
//# sourceMappingURL=scripts.js.map