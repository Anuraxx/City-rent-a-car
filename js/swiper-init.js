        // Install Plugin To Swiper
        //Swiper.use(myPlugin);

        // Init Swiper
        var swiper = new Swiper('.swiper-container', {
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