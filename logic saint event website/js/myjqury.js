
$('.slide-1 ').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:["<img src='js/arrow-color.png'>",''],
    dots:false,
    autoplay:true,
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

$('.slide-2 ').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    navText: ["<img src='js/arrow-left.png'>","<img src='js/arrow-right.png'>"],
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

