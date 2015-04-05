function randomizeImage() {
    var bannerMin = 10;
    var bannerMax = 20;
    var img = Math.floor(Math.random() * (bannerMax - bannerMin + 1)) + bannerMin;
    var path = "img/background" + img + ".jpg";
    document.body.style.backgroundImage = "url('" + path + "')";
}