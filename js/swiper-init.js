        // Install Plugin To Swiper
        //Swiper.use(myPlugin);

        // Init Swiper
        var swiper = new Swiper('.swiper-container', {
        	effect: 'coverflow',
        	grabCursor: true,
        	slidesPerView: 'auto',
        	coverflowEffect: {
        		rotate: 80,
        		stretch: 0,
        		depth: 100,
        		modifier: 1,
        		slideShadows: true,
        	},
        	spaceBetween: 30,
        	centeredSlides: true,
        	autoplay: {
        		delay: 2500,
        		disableOnInteraction: false,
        	},
        	pagination: {
        		el: '.swiper-pagination',
        		clickable: true,
        	},
        	navigation: {
        		nextEl: '.swiper-button-next',
        		prevEl: '.swiper-button-prev',
        	},
        	// Enable debugger
        	debugger: true,
        });