import {xhr} from "./connection.js";
import {CreateHTML} from "./createHtml.js";


document.querySelector("#getAll").addEventListener("click",getAll);
document.querySelector("#search").addEventListener("click",getUser);



let table = document.getElementById("result-data");
let errorMsg = document.getElementById("errorMsg");

async function getUser(){
    let input_val = document.getElementById("search-input").value;
    let html ="";
      await fetch(xhr.url)
        .then(response => {
          return response.json();
        })
        .then(data =>{
          let finder =data.find(f => f.name == input_val || f.surname == input_val);    
          return {
            img:finder.img,
            name:finder.name,
            surname:finder.surname,
            salary:finder.salary.value,
            loan:finder.loans.map(m => m.loaner)
          }
        })
        .then(data_finder =>{
          return table.innerHTML = 
            CreateHTML.addOne(data_finder);    
        })
        .catch(_=>{
          table.innerHTML = "";
          let e = new Error("Not Found");
          return errorMsg.innerHTML =e;
        })
}








