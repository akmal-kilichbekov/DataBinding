sap.ui.require([
    "sap/ui/core/mvc/XMLView",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function(XMLView, JSONModel, ResourceModel) {
    "use strict";

    // Attach an anonymous function to the SAPUI5 'init' event
    sap.ui.getCore().attachInit(function() {
        var oProductModel = new JSONModel();
        oProductModel.loadData("./model/Products.json");
        sap.ui.getCore().setModel(oProductModel, "products");


        // Create a JSON model from an object literal
        var oModel = new JSONModel({
            firstName: "Harry",
            lastName: "Hawk",
            enabled: true,
            panelHeaderText: "Data Binding Basics",
            address: {
                street: "Dietmar-Hopp-Allee 16",
                city: "Walldorf",
                zip: "69190",
                country: "Germany"
            },
            salesAmount: 1235.9,
            currencyCode: "EUR",
            priceThreshold: 20,
        });

        // Assign the model object to the SAPUI5 core
        sap.ui.getCore().setModel(oModel);

        var oResourceModel = new ResourceModel({
            bundleName: "root.i18n.i18n",
            supportedLocales: ["", "de"],
            fallbackLocale: ""
        });

        // Assign the model object to the SAPUI5 core using the name "i18n"
        sap.ui.getCore().setModel(oResourceModel, "i18n");

        // Display the XML view called "App"
        var oView = new XMLView({
            viewName: "root.view.App"
        });

        // Register the view with the message manager
        sap.ui.getCore().getMessageManager().registerObject(oView, true);


        // Insert the view into the DOM
        oView.placeAt("content");
    });
});