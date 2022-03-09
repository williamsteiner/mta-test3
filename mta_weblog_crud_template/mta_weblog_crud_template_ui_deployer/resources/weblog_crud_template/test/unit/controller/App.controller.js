sap.ui.define(["com/owi/webmin/weblog_crud_template/controller/App.controller","sap/m/SplitApp","sap/ui/core/Control","sap/ui/model/json/JSONModel","sap/ui/thirdparty/sinon","sap/ui/thirdparty/sinon-qunit"],function(t,e,n,i){"use strict";QUnit.module("AppController - Hide master");QUnit.test("Should hide the master of a SplitApp when selection in the list changes",function(o){var s,r=new n,a=new i,l=new n,p=new e,u=sinon.spy(p,"hideMaster");l.oListSelector={attachListSelectionChange:function(t,e){s=t.bind(e)}};l.getContentDensityClass=jQuery.noop;a.metadataLoaded=function(){return{then:jQuery.noop}};l.setModel(a);var d=new t;this.stub(d,"byId").withArgs("idAppControl").returns(p);this.stub(d,"getView").returns(r);this.stub(d,"getOwnerComponent").returns(l);d.onInit();o.ok(s,"Did register to the change event of the ListSelector");s();o.strictEqual(u.callCount,1,"Did hide the master")})});