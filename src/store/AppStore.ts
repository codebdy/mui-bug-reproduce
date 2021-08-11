import { makeAutoObservable } from "mobx";
import { createContext, useContext } from "react";
import { PREDEFINED_THEMES, PRIMARY_COLOR } from "../util/consts";
import { AppError } from "./AppError";
import { Confirm } from "./Confirm";
import _ from 'lodash';

class ThemeSettings{
  drawerSkinName: string = 'fine-blue';
  drawerPrimary: string = PRIMARY_COLOR;

  skinName: string = 'fine-blue';
  primary: string = PRIMARY_COLOR;
}

export class AppStore{
  showThemeSettings = false;
  token:string = "";
  successAlert: boolean|string = false;
  error: AppError = new AppError();
  confirm: Confirm = new Confirm();
  drawerSkinName: string = 'fine-blue';
  drawerPrimary: string = PRIMARY_COLOR;

  skinName: string = 'fine-blue';
  primary: string = PRIMARY_COLOR;

  themeBackup = new ThemeSettings();

  constructor() {
    makeAutoObservable(this)
  }

  backupTheme(){
    this.themeBackup.drawerSkinName = this.drawerSkinName
    this.themeBackup.drawerPrimary = this.drawerPrimary
    this.themeBackup.skinName = this.skinName
    this.themeBackup.primary = this.primary
  }

  restoreTheme(){
    this.drawerSkinName = this.themeBackup.drawerSkinName
    this.drawerPrimary = this.themeBackup.drawerPrimary
    this.skinName = this.themeBackup.skinName
    this.primary = this.themeBackup.primary    
  }

  setDrawerSkinName(name:string){
    this.drawerSkinName = name;
  }

  setDrawerPrimary(primary:string){
    this.drawerPrimary = primary;
  }

  setSkinName(name:string){
    this.skinName = name;
  }

  setPrimary(primary:string){
    this.primary = primary;
  }

  get miniDrawerThemeOptions(){
    const defaultThemeOption = PREDEFINED_THEMES[this.drawerSkinName];
    return _.merge(
      JSON.parse(JSON.stringify(defaultThemeOption)),
      {
        palette: {
          primary:{
            main: this.drawerPrimary,
          },
        }
      }
    )
  }

  get themeOptions(){
    const defaultThemeOption = PREDEFINED_THEMES[this.skinName];
    return _.merge(
      JSON.parse(JSON.stringify(defaultThemeOption)),
      {
        palette: {
          primary:{
            main: this.primary,
          },
        }
      }
    )
  }


  openThemeSettings(){
    this.showThemeSettings = true
  }

  closeThemeSettings(){
    this.showThemeSettings = false
  }

  setToken(token:string){
    this.token = token;
  }


  showSuccessAlert(alert:boolean|string = true){
    this.successAlert = alert;
  }

  infoError(message:string|undefined, details?:string){
    this.error.message = message;
    this.error.details = details;
  }

  clearError(){
    this.error.message = undefined;
    this.error.details = undefined;
  }

  confirmAction(message:string, actionCallback:()=>void){
    this.confirm.open(message, actionCallback);
  }
}

export const AppContext = createContext<AppStore>({} as AppStore);
export const AppStoreProvider = AppContext.Provider;

export const useAppStore = (): AppStore => useContext(AppContext);