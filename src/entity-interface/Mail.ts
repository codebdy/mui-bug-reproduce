import { Contact } from "./Contact";
import { RxMedia } from "./RxMedia";

export interface Mail{
  id?: number;
  subject: string;
  from: string;
  to: string[]
  cc?: string[]
  bcc?: string[];
  content: string;
  attachments?: RxMedia[];
  receivedAt: Date;
  contact?: Contact;
}