function addData(e){return fetch("https://monitoramento-backend.herokuapp.com/anotacao",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({titulo:e.titulo,message:e.message,color:e.color})})}function getDataAndSend(){let e;const t=indexedDB.open("db-motin");t.onerror=e=>{console.log("Please allow my web app to use IndexedDB \ud83d\ude03>>>\ud83d\udc7b")},t.onsuccess=t=>{e=t.target.result,getData(e)}}function getData(e){console.log("getData-10"),console.log("Event");const t=e.transaction(["notas"]).objectStore("notas"),o=t.getAllKeys();o.onerror=e=>{console.error(e)},o.onsuccess=n=>{console.log(o.result);for(let s=0;s<o.result.length;s++){seq=o.result[s],console.log(seq);const n=t.get(seq);n.onerror=e=>{console.error(e)},n.onsuccess=t=>{console.log(n.result),addData(n.result).then(t=>{const o=e.transaction(["notas"],"readwrite").objectStore("notas").delete(t);o.onerror=e=>{console.error(e)},o.onsuccess=e=>{console.log("delete sucess: "+t)},Promise.resolve()}).catch(()=>Promise.reject())}}}}self.addEventListener("fetch",(function(e){return e.respondWith(caches.match(e.request).then((function(t){let o=e.request.clone();return fetch(o).then().catch(t=>{if("GET"===e.request.method&&e.request.headers.get("accept").includes("text/html"))return caches.match("offline-page.html")})})))})),self.addEventListener("sync",e=>{"post-data"===e.tag&&e.waitUntil(getDataAndSend())});