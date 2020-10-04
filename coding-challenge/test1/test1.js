import { LightningElement, wire,api } from 'lwc';
import { getRecord ,getFieldValue} from 'lightning/uiRecordApi';

export default class Test1 extends LightningElement {
 
    @api recordId;
 
    @wire(getRecord,{recordId: '$recordId',fields:['Account.Name','Account.BillingStreet','Account.BillingCity']})
    myAccount;
 
    get name()
    {
        return getFieldValue(this.myAccount.data,'Account.Name');
    }

    get city()
    {
        return getFieldValue(this.myAccount.data,'Account.BillingCity' );
    }

    get street()
    {
        return getFieldValue(this.myAccount.data, 'Account.BillingStreet');
    }
 
}