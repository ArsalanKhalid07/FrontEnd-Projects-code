
$('.first ').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    autoplay:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.second ').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    autoplay:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.third ').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    autoplay:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// counter clock start


            function countdown(){
                var now = new Date();
                var eventDate = new Date(2018, 11, 25);

                var currentTiime = now.getTime();
                var eventTime = eventDate.getTime();

                var remTime = eventTime - currentTiime;
                
                if(remTime <= 0) {
                    document.getElementById('countdownContainer').style.display = 'none';
                    document.getElementById('greetingMsg').style.display = '';
                    return;
                }

                var s = Math.floor(remTime / 1000);
                var m = Math.floor(s / 60);
                var h = Math.floor(m / 60);
                var d = Math.floor(h / 24);

                h %= 24;
                m %= 60;
                s %= 60;

                h = (h < 10) ? "0" + h : h;
                m = (m < 10) ? "0" + m : m;
                s = (s < 10) ? "0" + s : s;

                document.getElementById("days").textContent = d;
                document.getElementById("days").innerText = d;

                document.getElementById("hours").textContent = h;
                document.getElementById("minutes").textContent = m;
                document.getElementById("seconds").textContent = s;

                setTimeout(countdown, 1000);
            }

            countdown();
        // counter clock end

   dycalendar.draw({
      // target: '#dycalendar-month-prev-next-button',
      target:".dycalendar-month-prev-next-button",
      type:"month",
      monthformat:"full",
      highlighttargetdate:true,
      prevnextbutton:"show"
      
    });