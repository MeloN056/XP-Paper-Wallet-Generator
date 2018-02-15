var janin = {};

janin.currency = {
	createCurrency: function (name, networkVersion, privateKeyPrefix, WIF_Start, CWIF_Start, donate) {
		var currency = {};
		currency.name = 'XP';
		currency.networkVersion = 0x4b;
		currency.privateKeyPrefix = 0xcb;
		currency.WIF_Start = 7;
		currency.CWIF_Start = 'X';
		return currency;
	},

	name: function() {
		return 'XP';//janin.selectedCurrency.name;
	},

	networkVersion: function() {
		return currency.networkVersion = 0x4b;
	},

	privateKeyPrefix: function() {
		return currency.privateKeyPrefix = 0xcb;
	},

	WIF_RegEx: function() {
		return new RegExp("^" + janin.selectedCurrency.WIF_Start + "[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{50}$");
	},

	CWIF_RegEx: function() {
		return new RegExp("^" + janin.selectedCurrency.CWIF_Start + "[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{51}$");
	},
};

janin.currencies = [
	//                              name, networkVersion, privateKeyPrefix, WIF_Start, CWIF_Start, donate
	janin.currency.createCurrency ("XP", 		          0x4b, 0xcb, "7",    "X"    , "XLRykcGjFMpBDQ7PHfamR2DR4Z21qTUBHG")
];
