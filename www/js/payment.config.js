angular.module("woocommerce-api").constant("PAYMENT_CONFIG", {
 
    paypal: {
    	production_client_id: '',
    	sandbox_client_id: 'AX4uuPShGdklB-7cKfJ7NC3fsUzN_zbi3M66Nw4cc6HjGn6tO2dA-hRA3Iv__u_ayBW3-7kdT65uqVeP',

		config: {
		   
		    acceptCreditCards: true,
		    merchantPrivacyPolicyURL: "https://example.com/policy",
		    merchantUserAgreementURL: "https://example.com/agreement",
		   
		},

		// Artifacts from a custom implementation
	    api_endpoint: 'https://api.sandbox.paypal.com/v1',
	    client_id: 'AX4uuPShGdklB-7cKfJ7NC3fsUzN_zbi3M66Nw4cc6HjGn6tO2dA-hRA3Iv__u_ayBW3-7kdT65uqVeP',
	    client_secret: 'EL1lD_mD_OTCH0FtzXjkFAM30pao2tQtt8uA7-mRD2RY4igkdC6ExiaGuljzVk1fWJqg-wvLkNBdWDYG'
	},

	stripe: {
		public_key: 'pk_test_SpHGZTSbthpOWvOK1w1xdNWz',
	 
		secret_key: 'sk_test_d2zrPxi0tNQ51PzYFSF1KfH3'
	}

});
