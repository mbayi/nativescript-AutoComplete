var Observable = require("data/observable").Observable;
var view = require("ui/core/view");
var application = require("application");
var page;


function homeViewModel() {
    var viewModel = new Observable();
    viewModel.getText = function (args) {
        var controlValue = view.getViewById(page, "myControl");
        viewModel.set('autocomplete_value', 'Autocomplete value: ' + controlValue.selectedValue);
    };
    viewModel.pageLoaded = function (args) {
        page = args.object;
        var countries = [
            'KENYA',
            'NAIGERIA',
            'UGANDA',
            'TANZAZIA',
            'SOUTH SUDAN',
            'SOUTH AFRICA',
            'SOMALIA',
            'KAZAKHSTAN',
            'LIBYA',
            'LESOTHO'
        ];
        viewModel.set('list', countries);
    };
    return viewModel;
}
exports.homeViewModel = homeViewModel;