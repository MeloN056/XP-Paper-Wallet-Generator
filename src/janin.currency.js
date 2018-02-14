var janin = {};

janin.currency = {
	createCurrency: function (name, networkVersion, privateKeyPrefix, WIF_Start, CWIF_Start, donate) {
		var currency = {};
		currency.name = XP;
		currency.networkVersion = 0x4b;
		currency.privateKeyPrefix = 0xcb;
		currency.WIF_Start = 7;
		currency.CWIF_Start = X;
		return currency;
	},

	name: function() {
		return janin.selectedCurrency.name;
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

	// Switch currency
	useCurrency: function(index) {
		janin.selectedCurrency = janin.currencies[index];

		var coinImgUrl = "logos/" + janin.currency.name().toLowerCase() + ".png";
		document.getElementById("coinLogoImg").src = coinImgUrl;

		// Update title depending on currency
		document.title = janin.currency.name() + " " + ninja.translator.get("title");
		document.getElementById("siteTitle").alt = janin.currency.name() + " " + ninja.translator.get("title");

		// Update i18n link
		document.getElementById("cultureen").href = "?culture=en&currency=" + janin.currency.name().toLowerCase();
		document.getElementById("culturefr").href = "?culture=fr&currency=" + janin.currency.name().toLowerCase();
		document.getElementById("culturede").href = "?culture=de&currency=" + janin.currency.name().toLowerCase();
		document.getElementById("culturenl").href = "?culture=nl&currency=" + janin.currency.name().toLowerCase();
		document.getElementById("cultureru").href = "?culture=ru&currency=" + janin.currency.name().toLowerCase();
		document.getElementById("culturees").href = "?culture=es&currency=" + janin.currency.name().toLowerCase();
		document.getElementById("cultureua").href = "?culture=ua&currency=" + janin.currency.name().toLowerCase();
		document.getElementById("culturetr").href = "?culture=tr&currency=" + janin.currency.name().toLowerCase();
		document.getElementById("cultureit").href = "?culture=it&currency=" + janin.currency.name().toLowerCase();

		if(ninja.seeder.isDone())
		{
			// Regenerate a new wallet when not expensive
			ninja.wallets.singlewallet.generateNewAddressAndKey();
			ninja.wallets.paperwallet.build(document.getElementById('paperpassphrase').value);
			ninja.wallets.brainwallet.view();
		}

		// Reset wallet tab when expensive or not applicable
		document.getElementById("bulktextarea").value = "";
		document.getElementById("suppliedPrivateKey").value = "";

	},
};

janin.currencies = [
	//                              name, networkVersion, privateKeyPrefix, WIF_Start, CWIF_Start, donate
	janin.currency.createCurrency ("XP", 		          0x4b, 0xcb, "7",    "X"    , "XLRykcGjFMpBDQ7PHfamR2DR4Z21qTUBHG")
];
