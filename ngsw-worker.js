if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('/src/sw.js',{
       scope: '/' 
    }).then((registration) => {
        console.log('serviceWorker');
        console.log(registration);
    });
    }