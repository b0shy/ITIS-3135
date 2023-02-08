//BXSlider JQuery Plugin
$(document).ready(function() {
    $("#slideshow").bxSlider({
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 500,
        pause: 3000,
    });
});

$(document).ready(function(){
    
});

//AJAX
window.onload = function() {
	setTimeout(function() {
        var xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://webpages.uncc.edu/bshabani/itis3135/project/flavors-of-palestine-home-page.html');
		xhr.send('');
        var xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://webpages.uncc.edu/bshabani/itis3135/project/flavors-of-palestine-breakfast-page.html');
		xhr.send('');
        var xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://webpages.uncc.edu/bshabani/itis3135/project/flavors-of-palestine-Appetizer-and-salad-page.html');
		xhr.send('');
        var xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://webpages.uncc.edu/bshabani/itis3135/project/flavors-of-palestine-dinner-page.html');
		xhr.send('');
        var xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://webpages.uncc.edu/bshabani/itis3135/project/flavors-of-palestine-dessert-page.html');
		xhr.send('');
//AJAX
        new Image().src = "https://webpages.uncc.edu/bshabani/itis3135/project/images/babaghanoush.jpg";
        new Image().src = "https://webpages.uncc.edu/bshabani/itis3135/project/images/button-valid-css.jpg";
        new Image().src = "https://webpages.uncc.edu/bshabani/itis3135/project/images/button-valid-html5.jpg";
        new Image().src = "https://webpages.uncc.edu/bshabani/itis3135/project/images/fattoush.jpg";
        new Image().src = "https://webpages.uncc.edu/bshabani/itis3135/project/images/hareesah.jpg";
        new Image().src = "https://webpages.uncc.edu/bshabani/itis3135/project/images/hummus.jpg";
        new Image().src = "https://webpages.uncc.edu/bshabani/itis3135/project/images/knafeh.jpg";
        new Image().src = "https://webpages.uncc.edu/bshabani/itis3135/project/images/left-arrow.jpg";
        new Image().src = "https://webpages.uncc.edu/bshabani/itis3135/project/images/manakeesh.jpg";
        new Image().src = "https://webpages.uncc.edu/bshabani/itis3135/project/images/mansaf.jpg";
        new Image().src = "https://webpages.uncc.edu/bshabani/itis3135/project/images/maqlubah.jpg";
        new Image().src = "https://webpages.uncc.edu/bshabani/itis3135/project/images/mfarakeh.jpg";
        new Image().src = "https://webpages.uncc.edu/bshabani/itis3135/project/images/msakhaan.jpg";
        new Image().src = "https://webpages.uncc.edu/bshabani/itis3135/project/images/right-arrow.jpg";
        new Image().src = "https://webpages.uncc.edu/bshabani/itis3135/project/images/shakshoukah.jpg";
        new Image().src = "https://webpages.uncc.edu/bshabani/itis3135/project/images/tabouleh.jpg";
	}, 1000);
};