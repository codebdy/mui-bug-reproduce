import { createdId } from "../../util/createId";
import { createIndustires } from "./industies";

export const CUSTOMERS = [
  {
    id:createdId(),
    name: 'Martin',
    children: createIndustires(),
  },
  {
    id:createdId(),
    name: 'Emily',
    children: createIndustires(),
  },
  {
    id:createdId(),
    name: 'Joise',
    children: createIndustires(),
  },
  {
    id:createdId(),
    name: '张小小',
    children: createIndustires(),
  },
  {
    id:createdId(),
    name: '无所谓',
    children: createIndustires(),
  },

]