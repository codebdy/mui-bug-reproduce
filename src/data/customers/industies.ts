import { createdId } from "../../util/createId";
import { countries } from "./countries";

export function createIndustires() {
  return [
    {
      id:createdId(),
      name: '泳池',
      children: countries(),
    },
    {
      id:createdId(),
      name: '食品添加剂',
      children: countries(),
    },

    {
      id:createdId(),
      name: '药物中间体',
      children: countries(),
    },

    {
      id:createdId(),
      name: '油漆添加剂',
      children: countries(),
    },
  ]
}