var url1 = "https://freepngimg.com/save/31669-bulb-off-transparent-image/500x500";
var url2 = "https://www.freeiconspng.com/thumbs/bulb/clip-art-yellow-light-bulb-png-8.png";


function switchonoff(image) {
    console.log(image);
    if (image.src == url1){
        image.src = url2;
    } else{
        image.src = url1;
    }
}










