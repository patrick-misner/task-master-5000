import { generateId } from "../Utils/generateId.js"


export class Task{

  constructor(taskData){

    this.id = taskData.id || generateId()
    this.title = taskData.title
    this.color = taskData.color
    this.taskID = taskData.taskID || 'noid'
  }

  get Template(){
    return `
    <div class="col-lg-4">
    <div class="bg-white rounded shadow m-3 text-center">
      <div class="text-light" style="background-color: ${this.color};">
        <h1>${this.title}</h1>
        <h2 class="">0/4</h2>
      </div>
      <div id="items">
      </div>
    </div>

  </div>
    `
  }
}