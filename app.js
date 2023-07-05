// FIREBASE

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
  import { getDatabase,ref,set,push,onValue,remove,update } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyANf31dSFMhCRqta4kxUKpfGY0yedwMFTQ",
    authDomain: "todo-app-16f71.firebaseapp.com",
    databaseURL: "https://todo-app-16f71-default-rtdb.firebaseio.com",
    projectId: "todo-app-16f71",
    storageBucket: "todo-app-16f71.appspot.com",
    messagingSenderId: "133209455449",
    appId: "1:133209455449:web:660415e73f26de3e72ea48",
    measurementId: "G-35HV550C2F"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase();


  
  
  
  // LI UL FUNCTION
  window.AddTask = function (){
var obj = {
    todo: document.getElementById('input').value
}
console.log(obj);
var userRef = push(ref(database , 'todos/'))

obj.id = userRef.key

set(userRef , obj)
    }

    // GET DATA2

    window.get = function(){
        var listData = document.getElementById('List')

        onValue(ref(database , 'todos/'),function(todo){
            listData.innerHTML = ""

            var todos = Object.values(todo.val())
            
            for(var i = 0; i < todos.length; i++){
                var app = todos[i]
                console.log(app.todo);
                listData.innerHTML += `
                <li class = "listing" > TODO : ${app.todo} <button class = "edit-btn"
                onclick = "ToDoUpdate('${app.id}' )" > EDIT </button>
                
                <button class = "del-btn"
                onclick = "Tododel('${app.id}')"  > DELETE</button>
                
                </li>`
            }
            var inp = document.getElementById('input').value = "";
        })
    }
    get()
    
    // DELETE DATA WORK
    
    window.Tododel = function(id){
    remove(ref(database , `todos/${id}`))
}

window.delAll = function (){
    remove(ref(database , `todos/`))

}

window.ToDoUpdate = function(id){
    var newTodo = prompt("enter your data")

    update(ref(database , `todos/${id}`),{
        todo : newTodo
    })
}
// TODO APP INPUT WORK
// var inpValue = document.getElementById("input");

// var listValue = document.getElementById("List");


// DELETE ALL FUNCTION
// window.delAll = function(){
//     listValue.innerHTML = "";
// }


// EDIT FUNCTION
//  function editWork (ew){
//     ew.parentNode.firstChild.nodeValue = prompt();
//     console.log(ew);
// }


// DELETE FUNCTION
//   function deleteWork (dw){
//       dw.parentNode.remove();
//       console.log(dw);
//     }

// FIREBASE WORKING

        // var value = input.value;
        // console.log(value);
        
        // var idRef = ref(database , "todo/")
        // var id = push(idRef).key
        // console.log(id);
        
        // var obj = {
        //     todo: value,
        //     id: id, 
        // }
        
        // var refrence = ref(database , `todo/${id}`)
        // console.log(refrence);
        
        // set(refrence , obj);
        // alert(value)
    // inpValue.value = "";


    // EDIT BUTTON WORK
    // var editBtn = document.createElement("button");
    // console.log(editBtn);
    
    // var editText = document.createTextNode("Edit");
    // console.log(editText);
    
    // editBtn.appendChild(editText);
    // Li.appendChild(editBtn);
    
    // editBtn.setAttribute("class" , "editButton");
    // editBtn.setAttribute("onclick" , "editWork(this)");
    
    
    // DELETE WORK
//     var delBtn = document.createElement("button");
//     console.log(delBtn);
    
//     var delText = document.createTextNode("Delete");
//     console.log(delBtn);
    
//     delBtn.appendChild(delText);
//     Li.appendChild(delBtn);

//     delBtn.setAttribute("class" , "deleteButton");
//     delBtn.setAttribute("onclick" , "deleteWork(this)");
// }

// GET DATA

// function getTodo (){
//     var refrence = ref(database, "todo/")
//     console.log(refrence);

//     onValue(refrence , function(gd){
//         var dataObj = (gd.val());
//         var listData = Object.values(dataObj);
//         console.log(listData);
// rendorList(listData)
//     })
// }
// getTodo()

// function rendorList(dataArr){

//     for(var i = 0; i < dataArr.length; i++ ){
//         listValue.innerHTML = "";
//         listValue.innerHTML += `<li> 
//         ${dataArr[i].todo} </li>`
//     }
// }

