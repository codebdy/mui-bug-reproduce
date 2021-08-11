import { Customer } from "../../entity-interface/Customer";
import { createdId } from "../../util/createId";

export function customers():Customer[]  {
  return [
    {
      id:createdId(),
      name: 'Company 1',
      color: 'red',     
      contacts: [
        {
          id:createdId(),
          name:'Jiama Josih',
          abbr: 'Jiama'
        },
        {
          id:createdId(),
          name:'Muhanmmued Hahalla',
          abbr: 'Hahalla'
        },
        {
          id:createdId(),
          name:'Jack'
        },

      ],       
    },
    {
      id:createdId(),
      name: 'MicroSoft',
      comments:[
        {
          id:createdId(),
          content:'客户大约每年5月份采购，通常规格：耳机、话筒各5000只'
        },
        {
          id:createdId(),
          content:'还有其他产品，从其它供应商购买'
        },
      ],
      contacts: [
        {
          id:createdId(),
          name:'Jiama Josih2'
        },
        {
          id:createdId(),
          name:'Muhanmmued 2'
        },
        {
          id:createdId(),
          name:'Tom cat'
        },

      ],                 
    },

    {
      id:createdId(),
      name: 'Company 3'                
    },
    {
      id:createdId(),
      name: 'Company 4',
      color: '#7367f0',
      reminds:[
        {
          id: createdId(),
          content: '3月份发邮件报价',
          alarmDate: new Date('2022-3-10'),
        }
      ]                
    },
    {
      id:createdId(),
      name: 'Company 5'                
    },
    {
      id:createdId(),
      name: 'Company 6'                
    },
    {
      id:createdId(),
      name: 'Company 7'                
    },
  ]
}