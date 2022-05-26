import { generateId } from "../Utils/generateId.js";

export class Item{

  constructor(listData){
    this.id = listData.id || generateId()
    this.name = listData.name
    this.isDone = listData.isDone
    this.taskID = listData.taskID
  }

get Template(){
    return `
    <button class="btn btn-dark"> Add Item</button>
  
    `
    
    
  }
}
