jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 weblog in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/owi/webmin/weblogCrud/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/owi/webmin/weblogCrud/test/integration/pages/App",
	"com/owi/webmin/weblogCrud/test/integration/pages/Browser",
	"com/owi/webmin/weblogCrud/test/integration/pages/Master",
	"com/owi/webmin/weblogCrud/test/integration/pages/Detail",
	"com/owi/webmin/weblogCrud/test/integration/pages/Create",
	"com/owi/webmin/weblogCrud/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.owi.webmin.weblogCrud.view."
	});

	sap.ui.require([
		"com/owi/webmin/weblogCrud/test/integration/MasterJourney",
		"com/owi/webmin/weblogCrud/test/integration/NavigationJourney",
		"com/owi/webmin/weblogCrud/test/integration/NotFoundJourney",
		"com/owi/webmin/weblogCrud/test/integration/BusyJourney",
		"com/owi/webmin/weblogCrud/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});