let form=document.getElementById("form");
let textInput=document.getElementById("textInput");
let dateInput=document.getElementById("dateInput");
let textarea=document.getElementById("textarea");
let tasks=document.getElementById("tasks");
let msg=document.getElementById("msg");
let add=document.getElementById("add");
let me=document.getElementById("m1");

form.addEventListener("submit" ,(e)=>{
    e.preventDefault();
    formValidation();
});

let formValidation=()=>{
    if(textInput.value===""){
        msg.innerHTML="Empty Task Cannot be Added";
    }
    else{
        msg.innerHTML="";
        acceptData();
        add.setAttribute("data-bs-toggle", "modal");
        add.click();
        add.setAttribute("data-bs-toggle", "");
    }
};

let data={};

let acceptData=()=>{
    data["text"]=textInput.value;
    data["date"]=dateInput.value;
    data["description"]=textarea.value;
   
    createTask();
    resetForm();
};

let createTask=()=>{
    me.innerHTML+=`
    <div id="tasks">
            <span>${data.text}</span>
            <span class="small text-secondary">${data.date}</span>
            <p >${data.description}</p>

            <div class="options">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" data-bs-toggle="modal" data-bs-target="#form" onClick="editTask(this)" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                  </svg></span>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" onClick="deleteTask(this)" height="16" fill="currentColor" class="bi bi-archive" viewBox="0 0 16 16">
                        <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                      </svg>
                </span>
            </div>
          </div>
    `;
};

let deleteTask=(e)=>{
    e.parentElement.parentElement.parentElement.remove();
};

let editTask=(e)=>{
    let selectedTask=e.parentElement.parentElement.parentElement;

    textInput.value=selectedTask.children[0].innerHTML;
    dateInput.value=selectedTask.children[1].innerHTML;
    textarea.value=selectedTask.children[2].innerHTML;
    selectedTask.remove();
}
let resetForm=()=>{
    textInput.value="";
    dateInput.value="";
    textarea.value="";
}
