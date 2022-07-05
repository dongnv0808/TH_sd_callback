function download(url, callback){
    setTimeout(() => {
        console.log(`Downloading ${url}...`);
        callback(url);
    }, 1000);
}

function process(picture){
    console.log(`process ${picture}`);
}

let url = 'https://avi.edu.vn/wp-content/uploads/2019/11/london-2393098.jpg';
download(url, process);