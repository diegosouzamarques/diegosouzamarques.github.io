function addData(e){fetch("https://monitoramento-backend.herokuapp.com/anotacao",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({titulo:e.titulo,message:e.message,color:e.color})}).then(()=>Promise.resolve()).catch(()=>Promise.reject())}function getDataAndSend(){let e;const t=indexedDB.open("db-motin");t.onerror=e=>{console.log("Please allow my web app to use IndexedDB \ud83d\ude03>>>\ud83d\udc7b")},t.onsuccess=t=>{e=t.target.result,getData(e)}}function getData(e){console.log("getData-10"),console.log("Event");const t=e.transaction(["notas"]).objectStore("notas"),o=t.getAllKeys();o.onerror=e=>{console.error(e)},o.onsuccess=s=>{console.log(o.result);for(let n=0;n<o.result.length;n++){seq=o.result[n],console.log(seq);const s=t.get(seq);s.onerror=e=>{console.error(e)},s.onsuccess=t=>{console.log(s.result),addData(s.result),console.log("delete seq: "+seq);const o=e.transaction(["notas"],"readwrite").objectStore("notas").delete(seq);o.onerror=e=>{console.error(e)},o.onsuccess=e=>{console.log("delete sucess: "+seq)}}}}}self.addEventListener("fetch",(function(e){return e.respondWith(caches.match(e.request).then((function(t){let o=e.request.clone();return fetch(o).then().catch(t=>{if("GET"===e.request.method&&e.request.headers.get("accept").includes("text/html"))return caches.match("offline-page.html")})})))})),self.addEventListener("sync",e=>{"post-data"===e.tag&&e.waitUntil(getDataAndSend())});