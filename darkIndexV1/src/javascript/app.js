const image = document.getElementById('image');
const ImagesList = ['red.jfif','ug.jfif','turan.jfif'];

let index = 0;

function changeImageSource(){
    image.src ='../src/images/'+ ImagesList[index];
    index = (index +1) % ImagesList.length;
}

setInterval(changeImageSource, 2000)