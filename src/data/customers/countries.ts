import { createdId } from "../../util/createId";
import { types } from "./types";

export function countries() {
  return [
    {
      id:createdId(),
      name: '法国',
      children: types(),
    },
    {
      id:createdId(),
      name: '英国',
      children: types(),
    },

    {
      id:createdId(),
      name: '加拿大',
      children: types(),
    },

    {
      id:createdId(),
      name: '巴西',
      children: types(),
    },

    {
      id:createdId(),
      name: '智利',
      children: types(),
    },
    {
      id:createdId(),
      name: '泰国',
      children: types(),
    },
    {
      id:createdId(),
      name: '哥斯达黎加',
      children: types(),
    },
  ]
}

