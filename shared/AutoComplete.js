"use strict";
var StackLayout = require("ui/layouts/stack-layout").StackLayout;
var Placeholder = require('ui/placeholder').Placeholder;
var observable_1 = require("data/observable");
var app = require('application');
var data;
var threshHold;

var Control = (function (_super) {
    global.__extends(AutoComplete, _super);

    Object.defineProperty(AutoComplete.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = value;
            this.populateData();
        }
    });

    Object.defineProperty(AutoComplete.prototype, "selectedValue", {
        get: function () {
            return this._selectedValue;
        },
        set: function (value) {
            this._selectedValue = value;
            this.populateData();
        }
    });
    
    Object.defineProperty(AutoComplete.prototype, "setThreshold", {
        get: function () {
            return this._setThreshold;
        },
        set: function (value) {
            this._setThreshold = value;
            this.populateData();
        }
    });
    
    function AutoComplete() {
        _super.call(this);
        this._selectedValue = "";
        this._setThreshold = "";
        this._data = [];

        this.populateData = function () {
            this.removeChildren();
            var lblQuestion = new Placeholder();
            data = this._data;
            threshHold = this._setThreshold;
            lblQuestion.on('creatingView', function (args) {
                creatingView(args, data, threshHold);
            });
            lblQuestion.className = "autocomplete";
            this.addChild(lblQuestion);
        };

        var creatingView = function (args, userData, threshhold) {
            try
            {
                var th = parseInt(threshhold);
                var threshHoldValue;
                if(Number.isInteger(th)) {
                    threshHoldValue = th;
                }else {
                    threshHoldValue = 3;
                }
                var myData = userData;
                var nativeView = new android.widget.AutoCompleteTextView(args.context);
                nativeView.setThreshold(threshHoldValue);
                nativeView.className = "question";
                args.view = nativeView;

                //Items adapter
                var arr = Array.create(java.lang.String, myData.length);
                myData.forEach(function (item, index) {
                    arr[index] = item;
                });
                var ad = new android.widget.ArrayAdapter(app.android.context, android.R.layout.simple_list_item_1, arr);
                nativeView.setAdapter(ad);

                //OnItemTap
                nativeView.setOnItemClickListener(new android.widget.AdapterView.OnItemClickListener({
                    onItemClick: function (parent, view, index, id) {
                        var selectedValue = view.getText();
                        //console.log(selectedValue);
                    }
                }));

                //OnDismissListener
                nativeView.setOnDismissListener(new android.widget.AutoCompleteTextView.OnDismissListener({
                    onDismiss: function () {
                        //console.log('Dismissed');
                    }
                }));

                //addTextChangedListener
                nativeView.addTextChangedListener(new android.text.TextWatcher({
                    beforeTextChanged: function (TEXT) {
                        //console.log(TEXT);
                    },
                    onTextChanged: function (TEXT) {
                        //Update selected value on UI
                        onValueChanged(args, TEXT);
                    },
                    afterTextChanged: function (TEXT) {
                        //console.log(TEXT);
                    }
                }));

            } catch (e) {
                console.log(e); //Catch errors
            }
        };
        var onValueChanged = function (args, passedData) {
            //Update UI (selectedValue) value
            if ((passedData === '') || (passedData.length === 0)) {
                this._selectedValue = 'null';
            } else {
                this._selectedValue = passedData;
            }
            this.notify({
                eventName: "selectedValue",
                object: this,
                selectedView: args,
                data: passedData
            });
        }.bind(this);
    }
    return AutoComplete;

})(StackLayout);

exports.AutoComplete = Control;