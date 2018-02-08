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
            'TANZANIA',
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
            <b>In your XLM</b>
            <br />		
            &lt;customControl:AutoComplete data = "{{ list }}"  selectedValue ="{{ selectedValue }}" id="myControl" setThreshold="1"&#47;&gt;
            </p>
            <p>            
            <b>setThreshold</b> property tells the control to show suggestions when a user has typed a give number of characters. Default threshhold is 3.
            <br />
            <customControl:AutoComplete data = "{{ list }}"  selectedValue ="{{ selectedValue }}" id="myControl" setThreshold="1" />
</p>
