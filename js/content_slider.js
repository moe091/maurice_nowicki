var wrapper;
window.onload = function () {
    var intro = $('#intro-link');
    var services = $('#services-link');
    var portfolio = $('#portfolio-link');
    var about = $('#about-link');
    var skills = $('#skills-link');
    var contact = $('#contact-link');
    wrapper = $('.content-wrapper');
    
    intro.location = 0;
    services.location = 1;
    portfolio.location = 2;
    about.location = 3;
    skills.location = 4;
    contact.location = 5;
    
    var links = $('.content-link');
    $.each(links, function(index, value) {
        this.onclick = function() {
            slideContent(parseInt(this.id));
        };
    });
};

function slideContent(index) {
    console.log(index);
    var margin = {marginLeft : index * -1000}
    wrapper.animate(margin, 500, "swing");
    wrapper.css("margin-left", index * -1000);
}















