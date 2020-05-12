

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 1) || 1000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #FFFFFF}";
    document.body.appendChild(css);
};

$(document).ready(function(){
    $(window).scroll(function(){
        var positiontop = $(document).scrollTop();
        console.log(positiontop);

        if((positiontop > 330) && (positiontop < 1168)){
            $('#service-head').addClass('animate__animated animate__rollIn')
            $('#card-one').addClass('animate__animated animate__jackInTheBox')
            $('#card-two').addClass('animate__animated animate__jackInTheBox')
            $('#card-three').addClass('animate__animated animate__jackInTheBox')
        }

        if((positiontop > 736) && (positiontop < 1168)){
            $('#card-four').addClass('animate__animated animate__jackInTheBox')
            $('#card-five').addClass('animate__animated animate__jackInTheBox')
            $('#card-six').addClass('animate__animated animate__jackInTheBox')
        }

        if((positiontop > 1232) && (positiontop < 1786)){
            $('#exp-head').addClass('animate__animated animate__rollIn')
            $('#exp-card-one').addClass('animate__animated animate__lightSpeedInLeft')
            $('#exp-card-two').addClass('animate__animated animate__bounceInUp')
            $('#exp-card-three').addClass('animate__animated animate__lightSpeedInRight')
        }
        if((positiontop > 1537) && (positiontop < 1786)){
            $('#exp-card-four').addClass('animate__animated animate__lightSpeedInLeft')
            
            $('#exp-card-five').addClass('animate__animated animate__lightSpeedInRight')
        }

        if((positiontop > 1860) && (positiontop < 1995)){
            $('#recent-head').addClass('animate__animated  animate__rollIn')
        }

        if((positiontop > 2608) && (positiontop < 2666)){
            $('#feedback-ico').addClass('animate__animated  animate__heartBeat animate__repeat-3')
        }

    })
});
