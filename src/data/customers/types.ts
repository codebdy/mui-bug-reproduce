import { createdId } from "../../util/createId";
import { customers } from "./customers";

export function types(){
  return [
    {
      id:createdId(),
      name: '重点客户',
      children: customers(),
    },
    {
      id:createdId(),
      name: '一般客户',
      children: customers(),
    },
    {
      id:createdId(),
      name: '沉睡客户',
      children: customers(),
    },
    {
      id:createdId(),
      name: 'A级潜在',
      children: customers(),
    },
    {
      id:createdId(),
      name: 'B级潜在',
      children: customers(),
    },
    {
      id:createdId(),
      name: 'C级潜在',
      children: customers(),
    },

  ]
}
