import { RxMedia } from "./RxMedia";

export interface Contact{
  id: number;
  name: string;
  abbr?: string;
  avatar?: RxMedia;
  mailAddresses?: string[];
}