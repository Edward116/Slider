var currentImageIndex = 0;
var imagesUrls = [];
var showPrevBtn = document.getElementById('show-prev-btn');
var showNextBtn = document.getElementById('show-next-btn');
var slideImage = document.getElementById('slide-img');


showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);



imagesUrls.push('https://millionstatusov.ru/pic/statpic/all8/5e04c21a52a39.jpg');
imagesUrls.push('https://klike.net/uploads/posts/2019-06/1560664221_1.jpg');
imagesUrls.push('https://bipbap.ru/wp-content/uploads/2017/08/LEpwl8j7fQ.jpg');
imagesUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzjYKiZPiJ7sbIhwUKzku7gTA4E7z8JoKTjg&usqp=CAU');



slideImage.src = imagesUrls[currentImageIndex];
showPrevBtn.disabled = true;

function onShowPrevBtnClick(e) {
    currentImageIndex--;
    slideImage.src = imagesUrls[currentImageIndex];
    showNextBtn.disabled = false;

    if (currentImageIndex === 0) {
        showPrevBtn.disabled = true;
    }
}

function onShowNextBtnClick(e) {
    currentImageIndex++;
    slideImage.src = imagesUrls[currentImageIndex];
    showPrevBtn.disabled = false;

    if (currentImageIndex === (imagesUrls.length - 1)) {
        showNextBtn.disabled = true;
    }
}