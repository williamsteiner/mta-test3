sap.ui.define(["com/owi/webmin/weblogCrud/controller/BaseController","sap/ui/model/json/JSONModel"],function(e,t){"use strict";return e.extend("com.owi.webmin.weblogCrud.controller.App",{onInit:function(){var e,n,o=this.getOwnerComponent().oListSelector,i=this.getView().getBusyIndicatorDelay();e=new t({busy:true,delay:0,itemToSelect:null,addEnabled:false});this.setModel(e,"appView");n=function(){e.setProperty("/busy",false);e.setProperty("/delay",i)};this.getOwnerComponent().getModel().metadataLoaded().then(n);o.attachListSelectionChange(function(){this.byId("idAppControl").hideMaster()},this);this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass())}})});