# nativescript-AutoComplete
A simple AutoComplete for nativescript

##Install
Simply download the files and add them to your project.

##Usage
Add xmlns:customControl="shared/AutoComplete" on the page element.
In your view-model:
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
 To get selected/entered text
 viewModel.getText = function (args) {
        var controlValue = view.getViewById(page, "myControl");
        console.log(controlValue.selectedValue);
    };
 
 In your XLM:
 <customControl:AutoComplete data = '{{ list }}'  selectedValue ="{{ selectedValue }}" id="myControl" setThreshold="1" class="m-b-10"/>
 setThreshold property tells the control to show suggestions after a user has entered x characters. Default 3.
 
 You are allowed to extend this source code and even build a commuity plugin around it.
