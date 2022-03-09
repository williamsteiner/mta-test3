sap.ui.define(["com/owi/webmin/weblog_crud_template/controller/ListSelector","sap/ui/thirdparty/sinon","sap/ui/thirdparty/sinon-qunit"],function(t){"use strict";QUnit.module("Initialization",{setup:function(){sinon.config.useFakeTimers=false;this.oListSelector=new t},teardown:function(){this.oListSelector.destroy()}});QUnit.test("Should initialize the List loading promise",function(t){var e=t.async(),i=this.spy(),s=this.spy();this.oListSelector.oWhenListLoadingIsDone.then(s,i);setTimeout(function(){t.strictEqual(s.callCount,0,"Did not resolve the promise");t.strictEqual(i.callCount,0,"Did not reject the promise");e()},0)});QUnit.module("List loading",{setup:function(){sinon.config.useFakeTimers=false;this.oListSelector=new t},teardown:function(){this.oListSelector.destroy()}});function e(t,e){var i=function(){return true},s={getParameter:i},n=function(t,e){e(s)},o=this.stub().returns({attachEventOnce:n}),l=function(t,e,i){e.apply(i)},c={getBindingContext:this.stub().returns({getPath:this.stub().returns(e)})},r=[];if(t){r.push(c)}return{attachEvent:l,attachEventOnce:n,getBinding:o,getItems:this.stub().returns(r)}}QUnit.test("Should resolve the list loading promise, if the list has items",function(t){var i=t.async(),s=this.spy(),n=function(e){t.strictEqual(e,e,"Did pass the binding path");t.strictEqual(s.callCount,0,"Did not reject the promise");i()};this.oListSelector.oWhenListLoadingIsDone.then(n,s);this.oListSelector.setBoundMasterList(e.call(this,true,"anything"))});QUnit.test("Should reject the list loading promise, if the list has no items",function(t){var i=t.async(),s=this.spy(),n=function(){t.strictEqual(s.callCount,0,"Did not resolve the promise");i()};this.oListSelector.oWhenListLoadingIsDone.then(s,n);this.oListSelector.setBoundMasterList(e.call(this,false))});QUnit.module("Selecting item in the list",{setup:function(){sinon.config.useFakeTimers=false;this.oListSelector=new t;this.oListSelector.oWhenListLoadingIsDone={then:function(t){this.fnAct=t}.bind(this)}},teardown:function(){this.oListSelector.destroy()}});function i(t){return{getBindingContext:this.stub().returns({getPath:this.stub().returns(t)})}}QUnit.test("Should select an Item of the list when it is loaded and the binding contexts match",function(t){var s="anything",n=i.call(this,s),o=i.call(this,"a different binding path");this.oListSelector._oList={getMode:this.stub().returns("SingleSelectMaster"),getSelectedItem:this.stub().returns(o),getItems:this.stub().returns([o,n,e.call(this,"yet another list binding")]),setSelectedItem:function(e){t.strictEqual(e,n,"Did select the list item with a matching binding context")}};this.oListSelector.selectAListItem(s);this.fnAct()});QUnit.test("Should not select an Item of the list when it is already selected",function(t){var e="anything",s=i.call(this,e);this.oListSelector._oList={getMode:this.stub().returns("SingleSelectMaster"),getSelectedItem:this.stub().returns(s)};this.oListSelector.selectAListItem(e);this.fnAct();t.ok(true,"did not fail")});QUnit.test("Should not select an item of the list when the list has the selection mode none",function(t){var e="anything";this.oListSelector._oList={getMode:this.stub().returns("None")};this.oListSelector.selectAListItem(e);this.fnAct();t.ok(true,"did not fail")});QUnit.test("Should  Find the list item from a binding contexts match",function(t){var e="anything",s=i.call(this,"a different binding path"),n=i.call(this,e);this.oListSelector._oList={getMode:this.stub().returns("SingleSelectMaster"),getSelectedItem:this.stub().returns(n),getItems:this.stub().returns([n,s]),setSelectedItem:function(e){t.strictEqual(e,s,"Did select the list item with a matching binding context")}};this.oListSelector.selectAListItem(e);this.fnAct();var o=this.oListSelector.findListItem(e);t.ok(o,"did not fail")});QUnit.test("Should find the next valid list item from the master list after the selected",function(t){var e="next item",s="selected",n=i.call(this,"first item"),o=i.call(this,s),l=i.call(this,e);this.oListSelector._oList={getMode:this.stub().returns("SingleSelectMaster"),getSelectedItem:this.stub().returns(o),getItems:this.stub().returns([n,o,l]),setSelectedItem:function(e){t.strictEqual(e,n,"Did select the list item with a matching binding context")}};this.oListSelector.selectAListItem(s);this.fnAct();var c=this.oListSelector.findNextItem(s);t.ok(c.getBindingContext().getPath()===e,"did not fail")});QUnit.test("Should return  the first list item ",function(t){var e="first item",s="selected",n=i.call(this,e),o=i.call(this,s),l=i.call(this,"Next item");this.oListSelector._oList={getMode:this.stub().returns("SingleSelectMaster"),getSelectedItem:this.stub().returns(o),getItems:this.stub().returns([n,l,o]),setSelectedItem:function(e){t.strictEqual(e,o,"Did select the list item with a matching binding context")}};this.oListSelector.selectAListItem(s);this.fnAct();var c=this.oListSelector.findNextItem(s);t.ok(c.getBindingContext().getPath()===e,"did not fail")})});