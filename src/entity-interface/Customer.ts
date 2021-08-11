import { Remind } from "./Remind";
import { Comment } from "./Comment";
import { Contact } from "./Contact";

export interface Customer{
  id?: number;
  name: string;
  comments?: Comment[];
  reminds?: Remind[];
  color?: string;
  contacts?: Contact[];
}