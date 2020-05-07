var data = { 
  todo: [], 
  completed: [], 
  important: [], 
  isImportant: false  
}; 


//Remove and complete icons in SVG format 
var removeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6L16.3,18.7L16.3,18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8C7.4,10.2,7.7,10,8,10c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>'; 
var completeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="noFill" width="22" height="22"/><g><path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>';  
var importantSVG = '<?xml version="1.0" encoding="iso-8859-1"?><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 27.963 27.963" style="enable-background:new 0 0 27.963 27.963;" xml:space="preserve"><g><g id="c129_exclamation"><path class="fill" d="M13.983,0C6.261,0,0.001,6.259,0.001,13.979c0,7.724,6.26,13.984,13.982,13.984s13.98-6.261,13.98-13.984C27.963,6.259,21.705,0,13.983,0z M13.983,26.531c-6.933,0-12.55-5.62-12.55-12.553c0-6.93,5.617-12.548,12.55-12.548c6.931,0,12.549,5.618,12.549,12.548C26.531,20.911,20.913,26.531,13.983,26.531z"/><polygon points="15.579,17.158 16.191,4.579 11.804,4.579 12.414,17.158 "/><path class="fill" d="M13.998,18.546c-1.471,0-2.5,1.029-2.5,2.526c0,1.443,0.999,2.528,2.444,2.528h0.056c1.499,0,2.469-1.085,2.469-2.528C16.441,19.575,15.468,18.546,13.998,18.546z"/></g><g id="Capa_1_207_"></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';

// User clicked on the add button
// If there is any text inside the item field, add that text to the todo list-
document.getElementById('add').addEventListener('click', function() {
    var value = document.getElementById('item').value;

    if (value) {
        data.todo.push(value); 
        addItemTodo(value); 
        document.getElementById('item').value = ''; 
    }
  });

  function removeItem() { 
    //item is item in list
    var item = this.parentNode.parentNode; 
    //parent is list
    var parent = item.parentNode;

    if (id == 'todo') { 
      //splice 'this' item from todo list 
      data.todo.splice(data.todo.indexOf(value), 1); 
    } else { 
      //splice 'this' item from todo list 
      data.completed.splice(data.completed.indexOf(value), 1); 
    }

    parent.removeChild(item); 
  }

  function completeItem() { 
    //item is item in list
    var item = this.parentNode.parentNode; 
    //parent is list
    var parent = item.parentNode;
    var id = parent.id; 
    var value = item.innerText; 

    if (id == 'todo') { 
      //splice 'this' item from todo list 
      data.todo.splice(data.todo.indexOf(value), 1); 
      data.completed.push(value);
    } else { 
      //splice 'this' item from todo list 
      data.completed.splice(data.completed.indexOf(value), 1); 
      data.todo.push(value);
    }
    
    //if its in todo, move to completed 
    //else move to todo
    var target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo'); 

    parent.removeChild(item); 
    target.insertBefore(item, target.childNodes[0]);
    
}

function removeItem(){ 
  var item = this.parentNode.parentNode; 
  var parent = item.parentNode; 

  parent.removeChild(item); 
}

function markImportant(){ 
  /*
  //item is in list 
  var item = this.parentNode.parentNode; 
  //parent is list
  var parent = item.parentNode;
  var id = parent.id; 
  var value = item.innerText; 

  if (item.isImportant) { 
    //splice 'this' item from todo list 
    //data.todo.splice(data.todo.indexOf(value), 1); 
    item.isImportant = false;
  } else { 
    //splice 'this' item from todo list 
    item.isImportant = true;  
    //item.addClass('important'); 
    //data.todo.push(value);
  }

  if(item.isImportant){ 
    item.style.color = '#e85656'; 
  }

  else { 
    item.style.color = '#444'; 
  }*/

    var list = document.getElementById('important');

    //item is item in list
    var item = this.parentNode.parentNode; 
    //parent is list
    var parent = item.parentNode;
    var id = parent.id; 
    var value = item.innerText; 

    if (id == 'todo') { 
      //splice 'this' item from todo list 
      data.todo.splice(data.todo.indexOf(value), 1); 
      data.important.push(value);
    } else { 
      //splice 'this' item from todo list 
      data.important.splice(data.completed.indexOf(value), 1); 
      data.todo.push(value);
    }
    
    //if its in todo, move to important 
    //else move to todo
    var target = (id === 'todo') ? document.getElementById('important'):document.getElementById('todo'); 

    parent.removeChild(item); 
    target.insertBefore(item, target.childNodes[0]);

    

}

  //Add a new item to todo list 
function addItemTodo(text) {

    var list = document.getElementById('todo'); 
9
    //Item todo 
    var item = document.createElement('li'); 
    item.innerText = text; 

    var buttons = document.createElement('div'); 
    buttons.classList.add('buttons'); 

    //Add important button
    var important =  document.createElement('button'); 
    important.classList.add('important'); 
    important.innerHTML = importantSVG; 

    //Add click for marking item as important 
    important.addEventListener('click', markImportant); 

    var remove = document.createElement('button');
    remove.classList.add('remove'); 
    remove.innerHTML = removeSVG; 

    //Add click for removing item 
    remove.addEventListener('click', removeItem); 

    var complete = document.createElement('button'); 
    complete.classList.add('complete'); 
    complete.innerHTML = completeSVG; 

    //Add click for completing item 
    complete.addEventListener('click', completeItem); 

    buttons.appendChild(important); 
    buttons.appendChild(remove); 
    buttons.appendChild(complete); 
    item.appendChild(buttons)

    list.insertBefore(item, list.childNodes[0]); 

}

