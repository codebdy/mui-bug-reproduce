import { CustomerNode } from "./CustomerNode";
import { FolderNode } from "./FolderNode";
import { NodeData } from "./NodeData"

export const NodeItem = (props:{
  node:NodeData,
  onSelect: ()=>void,
})=>{
  const {node, onSelect} = props; 
  return (
    <>
      {
        node.children
          ? <FolderNode folder = {node} onSelect ={onSelect} />
          : <CustomerNode customer = {node} onSelect = {onSelect}/>
      }
    </>
  )
}