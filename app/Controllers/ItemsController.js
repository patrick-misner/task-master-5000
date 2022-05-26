import { ProxyState } from "../AppState.js"

function _drawItems(){

  let items = ProxyState.items
  let template = ''
  items.forEach(i => {
    template += i.Template
  })
  document.getElementById('items').innerHTML = template

}




export class ItemsController{

  constructor(){
    console.log('items controller loaded')
    _drawItems()
  }
}