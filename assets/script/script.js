// jquery for main slide
$(document).ready(function () {
    $('.imageslide').hide();
    var s = $('.imageslide');
    var num = s.length;
    var index = 0;
    s.eq(index).show();
    // btn next
    $('.tbnSlideNext').click(function () {
        s.eq(index).hide();
        index++;
        if (index >= num) {
            index = 0;
        }
        s.eq(index).show();
    })

    // btn back
    $('.tbnSlideBack').click(function () {
        s.eq(index).hide();
        index--;
        if (index < 0) {
            index = num - 1;
        }
        s.eq(index).show();
    })
    // Auto slide
    setInterval(() => {
        s.eq(index).hide();
        index++;
        if (index >= num) {
            index = 0;
        }
        s.eq(index).show();
    }, 5000);

     // Slide the banner by translating it along the X-axis
    $('.wrapperSlide').css("transform", "translateX(" + (-bannerWidth * index) + "px)");
})

// Toggle password visibility for login
$('#toggle-password').click(function() {
    var passwordField = $('#login-password');
    var icon = $(this).find('i');
    if (passwordField.attr('type') === 'password') {
        passwordField.attr('type', 'text');
        icon.removeClass('fa-eye').addClass('fa-eye-slash');
    } else {
        passwordField.attr('type', 'password');
        icon.removeClass('fa-eye-slash').addClass('fa-eye');
    }
});

// Toggle password visibility for register
$('#toggle-register-password').click(function() {
    var passwordField = $('#register-password');
    var icon = $(this).find('i');
    if (passwordField.attr('type') === 'password') {
        passwordField.attr('type', 'text');
        icon.removeClass('fa-eye').addClass('fa-eye-slash');
    } else {
        passwordField.attr('type', 'password');
        icon.removeClass('fa-eye-slash').addClass('fa-eye');
    }
});

// Toggle between Login and Register forms
function toggleForms() {
    $('#login-form').toggle();
    $('#register-form').toggle();
}

// javascript add active to pagebtn of new-arrival (index.html)
const pagebtn = document.querySelectorAll(".page-menu li");
for(let i = 0; i < pagebtn.length; i++){
  pagebtn[i].addEventListener("click", function(){
    const current = document.querySelector(".active");
    current.className = current.className.replace("active", "");
    pagebtn[i].className = "active";
    
    //menu name
    let menu_name = pagebtn[i].textContent.toLocaleLowerCase();
    let allpage = document.querySelectorAll(".page");
    // console.log(menu_name);
    //change page
    for(let i=0; i<allpage.length; i++){
        let pagename = allpage[i].getAttribute('page');
        if(menu_name === pagename){
            let pageActive = document.querySelector(".page.active");
            pageActive.classList.remove("active");
            allpage[i].classList.add("active");
        }
    }


  })
}

// Function to toggle the visibility of the search box and overlay
function toggleSearchBox() {
    const searchBox = document.getElementById('searchBox');
    const overlay = document.getElementById('overlay');
    
    // Toggle visibility
    searchBox.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
}

// Function to close the search box and overlay
function closeSearchBox() {
    const searchBox = document.getElementById('searchBox');
    const overlay = document.getElementById('overlay');
    
    searchBox.classList.add('hidden');
    overlay.classList.add('hidden');
}

$(document).ready(function () {
    $('#btnMenu').click(function () {
      $('#menu').slideToggle();
      // $('.btnSubMenu').hide();
      // $('.btnCloseSubMenu').show();
    })
    $('#btnSubMenu1').click(function () {
      $('#sub-menu1').slideToggle().css({
        "display": "grid"
      });
      // $('.btnSubMenu').hide();
      // $('.btnCloseSubMenu').show();
    })
    $('#btnSubMenu2').click(function () {
      $('#sub-menu2').slideToggle().css({
        "display": "grid"
      });
      // $('.btnSubMenu').hide();
      // $('.btnCloseSubMenu').show();
    })
    $('#btnSubMenu3').click(function () {
      $('#sub-menu3').slideToggle().css({
        "display": "grid"
      });
      // $('.btnSubMenu').hide();
      // $('.btnCloseSubMenu').show();
    })
    $('#btnSubMenu4').click(function () {
      $('#sub-menu4').slideToggle().css({
        "display": "grid"
      });
      // $('.btnSubMenu').hide();
      // $('.btnCloseSubMenu').show();
    })
    $('#btnSubMenu5').click(function () {
      $('#sub-menu5').slideToggle().css({
        "display": "grid"
      });
      // $('.btnSubMenu').hide();
      // $('.btnCloseSubMenu').show();
    })
    $('#btnSubMenu6').click(function () {
      $('#sub-menu6').slideToggle().css({
        "display": "grid"
      });
      // $('.btnSubMenu').hide();
      // $('.btnCloseSubMenu').show();
    })
  })