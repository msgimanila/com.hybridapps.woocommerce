angular.module("woocommerce-api").constant("CONFIG", {

     
    
	 site_url: 'http://demowp.x10.bz',
     

    // Max period of time to wait for reply from the server, defined in milliseconds.
    request_timeout: 6000,

    // The url that follows your main domain, the API version is of interest here, v3 is the latest.
    wc_api_endpoint: '/wc-api/v3',
   
    // Signature method
    oauth_signature_method: 'HMAC-SHA256',
    
	wc_consumer_key: 'ck_3aefb9c4872172e077482c1d14bc160ea1eeddee',
    wc_consumer_secret: 'cs_d81a243b7913af4331ac0bfec2df66223bd6b4fe',
     

    // The number of products to be fetched with each API call.
    products_per_page: 6,

    // The number of reviews to be fetched with each API call.
    reviews_per_page: 6,

    // Frontpage Slideshow Category
    slideshow_category: 'hoodies'

});
