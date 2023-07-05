import { database,ref,set,push,onValue,remove,update,auth,createUserWithEmailAndPassword,} from "../config/config.js"

var userName = document.getElementById("Username")
var password = document.getElementById("password")
var email = document.getElementById("Email")
// var date = document.getElementById("date")
// var checkbox = document.getElementById("checkbox")
// var Address = document.getElementById("Address")
// var City = document.getElementById("City")
// var State = document.getElementById("State")
// var Country = document.getElementById("Country")

window.SignUp = function (){

    var obj = {
        userName: userName.value,
        password: password.value,
        email: email.value,
        // date: date.value,
        // checkbox: checkbox.value,
        // Address: Address.value,
        // City: City.value,
        // State:State.value,
        // Country:Country.value,
    }
    console.log(obj);

    createUserWithEmailAndPassword(auth , obj.email , obj.password).then(function(res){

        console.log("sucessfully created" , res);
    }).catch(function(err){

        console.log("ERROR" , err);
    })


    var refrence = ref(database , "users/");
    set(refrence , obj)
}