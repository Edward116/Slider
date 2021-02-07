var slider1 = {
    imagesUrls: [],
    currentImageIndex: 0,

    showPrevBtn: null,
    showNextBtn: null,
    slideImage: null,


    start: function(el) {
        var that = this;

        //var el = document.getElementById('ed-slider1');


        this.showPrevBtn = el.querySelector('.show-prev-btn');
        this.showNextBtn = el.querySelector('.show-next-btn');
        this.slideImage = el.querySelector('.slide-img');

        this.showPrevBtn.addEventListener('click', function(e) {
            that.onShowPrevBtnClick(e);
        });
        this.showNextBtn.addEventListener('click', function(e) {
            that.onShowNextBtnClick(e);
        });



        this.imagesUrls.push('https://millionstatusov.ru/pic/statpic/all8/5e04c21a52a39.jpg');
        this.imagesUrls.push('https://klike.net/uploads/posts/2019-06/1560664221_1.jpg');
        this.imagesUrls.push('https://bipbap.ru/wp-content/uploads/2017/08/LEpwl8j7fQ.jpg');
        this.imagesUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzjYKiZPiJ7sbIhwUKzku7gTA4E7z8JoKTjg&usqp=CAU');



        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = true;

    },





    onShowPrevBtnClick: function(e) {
        this.currentImageIndex--;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showNextBtn.disabled = false;

        if (this.currentImageIndex === 0) {
            this.showPrevBtn.disabled = true;
        }
    },

    onShowNextBtnClick: function(e) {
        this.currentImageIndex++;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = false;

        if (this.currentImageIndex === (this.imagesUrls.length - 1)) {
            this.showNextBtn.disabled = true;
        }
    }








}