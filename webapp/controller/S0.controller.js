sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("rest.countries.controller.S0", {
		onInit: function() {
			this._oModel = new JSONModel("/api/region/americas");
			this.getView().setModel(this._oModel);
		}
	});
});