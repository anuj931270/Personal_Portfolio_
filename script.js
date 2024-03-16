$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Web Developer", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});


// contact form

function emailSend(){

  var userName = document.getElementById('name').value;
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;

  var messageBody = "Name " + userName +
  "<br/> Phone " + phone +
  "<br/> Email " + email;
  Email.send({
  Host : "smtp.elasticemail.com",
  Username : "kumaranuj90166@gmail.com",
  Password : "777A92FFB5F9AEBBB1EFC1EBD50A0B868D95",
  To : 'kumaranuj90166@gmail.com',
  From : "kumaranuj90166@gmail.com",
  Subject : "This is the subject",
  Body : messageBody
}).then(
message => {
    if(message=='OK'){
        swal("Successful", "You clicked the button!", "success");
    }
    else{
        swal("Error", "You clicked the button!", "error");
    }
}
);
}
