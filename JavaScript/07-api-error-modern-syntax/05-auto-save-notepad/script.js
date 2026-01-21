const noteArea = document.getElementById("noteArea");
const clearBtn = document.getElementById("clearBtn");

const savedNote = localStorage.getItem("myNote");
if(savedNote){
    noteArea.value = savedNote;
}

noteArea.addEventListener("input", ()=>{
    localStorage.setItem("myNote",noteArea.value);
});

clearBtn.addEventListener("click", ()=>{
    localStorage.removeItem("myNote");
    noteArea.value = "";
});
