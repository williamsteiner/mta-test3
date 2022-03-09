jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/owi/webmin/weblog_crud_template/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/owi/webmin/weblog_crud_template/test/integration/pages/App",
	"com/owi/webmin/weblog_crud_template/test/integration/pages/Browser",
	"com/owi/webmin/weblog_crud_template/test/integration/pages/Master",
	"com/owi/webmin/weblog_crud_template/test/integration/pages/Detail",
	"com/owi/webmin/weblog_crud_template/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.owi.webmin.weblog_crud_template.view."
	});

	sap.ui.require([
		"com/owi/webmin/weblog_crud_template/test/integration/NavigationJourneyPhone",
		"com/owi/webmin/weblog_crud_template/test/integration/NotFoundJourneyPhone",
		"com/owi/webmin/weblog_crud_template/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});