# nativescript-AutoComplete
A simple AutoComplete for nativescript

<p>
            #Install<br />Simply download the files and add them to your project.</p>
<p>
            #Usage<br />
            <p>
Add xmlns:customControl="shared/AutoComplete" on the page element.
                        </p>
                        <p>
In your view-model:
            </p>
            <p>
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
            </p>
            <p>
 viewModel.set('list', countries);
            </p>
            <p>
 To get selected/entered text:
            </p>
            <p>
 viewModel.getText = function (args) {
        var controlValue = view.getViewById(page, "myControl");
        console.log(controlValue.selectedValue);
    };
 </p>
 <p>
 In your XLM:
            </p>
            <p>
 <customControl:AutoComplete data = '{{ list }}'  selectedValue ="{{ selectedValue }}" id="myControl" setThreshold="1" class="m-b-10"/>
 setThreshold property tells the control to show suggestions after a user has entered x characters. Default 3.
 
 You are allowed to extend this source code and even build a commuity plugin around it.
 </p>
