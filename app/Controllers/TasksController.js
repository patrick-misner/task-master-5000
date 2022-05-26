import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";


function _drawTasks(){
  let tasks = ProxyState.tasks
  let template = ''
  tasks.forEach(t => {
    template += t.Template
  })
  document.getElementById('tasks').innerHTML = template
}

export class TasksController{

  constructor(){
    _drawTasks()
    ProxyState.on('tasks', _drawTasks)
    console.log('constuct')
  }

addTask(){
  window.event.preventDefault()
  console.log('button pushed')
  let form = window.event.target
  let taskData = {
    title : form.title.value,
    color : form.color.value,
  }
  tasksService.addTask(taskData)
}

}