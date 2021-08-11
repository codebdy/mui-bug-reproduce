import { makeAutoObservable } from "mobx";
import { createContext, useContext } from "react";
import { Customer } from "../../../entity-interface/Customer";

export interface AccountData{
  id: number;
  name: string;
}

export class CustomerMailsStore{
  selectedCustomer?: Customer;
  showMailBoxOnMobile: boolean = false;
  showCustomerTreeMobile: boolean = false;
  selectedMailIds: number[] = [];
  currentAccount?: AccountData;

  constructor(){
    makeAutoObservable(this);
  }

  openMailBoxOnMobile(){
    this.showMailBoxOnMobile = true;
  }

  closeMailBoxOnMobile(){
    this.showMailBoxOnMobile = false;
  }

  openCustomerTreeOnMobile(){
    this.showCustomerTreeMobile = true;
  }

  closeCustomerTreeOnMobile(){
    this.showCustomerTreeMobile = false;
  }

  toggleCustomerTreeOnMobile(){
    this.showCustomerTreeMobile = !this.showCustomerTreeMobile;
  }

  setSelectedCustomer(custormer?:Customer){
    this.selectedCustomer = custormer;
  }

  toggleMailSelect(mailId:number, isSelected:boolean){
    if(isSelected){
      this.selectedMailIds.push(mailId);
    }
    else{
      this.selectedMailIds = this.selectedMailIds.filter(id=>id !== mailId);
    }
  }

  isMailSelected(mailId?:number){
    return !!this.selectedMailIds?.find(id => id === mailId);
  }

  selectAccount(account:AccountData){
    this.currentAccount = account;
  }
}

export const MailContext = createContext<CustomerMailsStore>({} as CustomerMailsStore);
export const CustomerMailsStoreProvider = MailContext.Provider;

export const useCustomerMailsStore = (): CustomerMailsStore => useContext(MailContext);