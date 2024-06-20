// function abc(message) {
//     console.log(message);
// }

function changeimage(image) {
    console.log(image.src);

    var newurl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOgpwWM0nuQUA1zSi9okHponGPPwpowFMMPc6rS2q0HQ&s';

    image.src = newurl;
}