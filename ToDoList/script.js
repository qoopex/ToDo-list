addEventListener("beforeunload", ()=>{
    let listText = document.querySelectorAll(".todoInput");
    let listCheckbox = document.querySelectorAll(".form-check-input");
    let listAllInfo = [];
    for(let i = 0; i < listText.length; ++i){
        listAllInfo[i] = `${listCheckbox[i].checked}` + "=" +`${listText[i].value}`;
    }
    for(let i = 0; i < listText.length; ++i){
        localStorage.setItem(i,listAllInfo[i]);
    }
});

addEventListener("DOMContentLoaded", ()=>{
    if(localStorage.length > 0){
        let length = localStorage.length;
        for(let i = 0; i < length; ++i){
            createFormWithInfo(localStorage.getItem(i));
        }
        for(let i = 0; i < length; ++i){
            localStorage.removeItem(i);
        }
    }
    if(document.cookie != "LightTheme" && document.cookie != "DarkTheme"){
        const Header = document.querySelector("#headerSection");
        Header.classList.add("headerSectionLT");
        const Settings = document.querySelector("#btnSettings");
        Settings.classList.add("btnSettingsLT");
        const ClearAll = document.querySelector("#btnClear");
        ClearAll.classList.add("btnClearLT");
        const Body = document.querySelector("body");
        Body.classList.add("bodyLT");
        const Add = document.querySelector("#btnAdd");
        Add.classList.add("btnAddLT");
        document.cookie = "LightTheme";
    }
    else if(document.cookie == "DarkTheme"){
    const Header = document.querySelector("#headerSection");
    Header.classList.add("headerSectionDT");
    const Settings = document.querySelector("#btnSettings");
    Settings.classList.add("btnSettingsDT");
    const ClearAll = document.querySelector("#btnClear");
    ClearAll.classList.add("btnClearDT");
    const Body= document.querySelector("body");
    Body.classList.add("bodyDT");
    const Add= document.querySelector("#btnAdd");
    Add.classList.add("btnAddDT");
    }
    else if(document.cookie == "LightTheme"){
        const Header = document.querySelector("#headerSection");
        Header.classList.add("headerSectionLT");
        const Settings = document.querySelector("#btnSettings");
        Settings.classList.add("btnSettingsLT");
        const ClearAll = document.querySelector("#btnClear");
        ClearAll.classList.add("btnClearLT");
        const Body = document.querySelector("body");
        Body.classList.add("bodyLT");
        const Add = document.querySelector("#btnAdd");
        Add.classList.add("btnAddLT");
    }
    console.log("DOM loaded"); //чтение с куки
})

const btnSettings = document.querySelector("#btnSettings");
btnSettings.addEventListener("click",()=>{
    const settings = document.querySelector("#settings");
    if(settings.style.opacity == 0) 
        settings.style.opacity = 1;
    else
        settings.style.opacity = 0;
})

function createForm(){
    const div = document.createElement("div");
    div.classList.add("form-check");
    
    const inputCheckbox = document.createElement("input");
    inputCheckbox.classList.add("form-check-input");
    inputCheckbox.classList.add("FCIlt");
    inputCheckbox.checked = false;
    inputCheckbox.type = "checkbox";
    inputCheckbox.value = "";
    

    inputCheckbox.id = `defaultCheck1`;
    const inputText = document.createElement("input");
    inputText.classList.add("todoInput");
    inputText.type = "text";
    inputText.placeholder = "Type To-Do";
    inputText.for=`defaultCheck1`;

    const btnClose = document.createElement("button");
    btnClose.type = "button";
    btnClose.classList.add("btn-close");
    btnClose.ariaLabel = "Close";
    btnClose.addEventListener("click", ()=>{
        event.preventDefault();
        //удаление из localStorage
        for(let i = 0; i < localStorage.length; ++i){
            if(localStorage.getItem(i) == inputText.value)
                localStorage.removeItem(i);
        }
        mainSection.removeChild(div);
    });

    div.appendChild(inputCheckbox);
    div.appendChild(inputText);
    div.appendChild(btnClose);
    
    
    const mainSection = document.getElementById("mainSection");
    if(div != null)
        mainSection.appendChild(div);
    else
        console.log("create form error");
}

function createFormWithInfo(Info){
    let checkboxInfo = Info.split("=")[0];
    let textValue = Info.substring((Info.indexOf("=") + 1));
    const div = document.createElement("div");
    div.classList.add("form-check");
    
    const inputCheckbox = document.createElement("input");
    inputCheckbox.classList.add("form-check-input");
    inputCheckbox.classList.add("FCIlt");
    if(checkboxInfo == "true"){
        inputCheckbox.checked = true;
    }
    else if(checkboxInfo == "false"){
        inputCheckbox.checked = false;
    }
    inputCheckbox.type = "checkbox";
    inputCheckbox.value = "";

    inputCheckbox.id = `defaultCheck1`;
    const inputText = document.createElement("input");
    inputText.classList.add("todoInput");
    inputText.type = "text";
    inputText.value = textValue;
    if(textValue == "")
        inputText.placeholder = "Type To-Do";
    inputText.for=`defaultCheck1`;
    
    const btnClose = document.createElement("button");
    btnClose.type = "button";
    btnClose.classList.add("btn-close");
    btnClose.ariaLabel = "Close";
    btnClose.addEventListener("click", ()=>{
        event.preventDefault();
        //удаление из localStorage
        for(let i = 0; i < localStorage.length; ++i){
            if(localStorage.getItem(i) == inputText.value)
                localStorage.removeItem(i);
        }
        mainSection.removeChild(div);
    });

    div.appendChild(inputCheckbox);
    div.appendChild(inputText);
    div.appendChild(btnClose);
    
    
    const mainSection = document.getElementById("mainSection");
    if(div != null)
        mainSection.appendChild(div);
    else
        console.log("create form error");
}

const btnAdd = document.querySelector("#btnAdd");
btnAdd.addEventListener("click", ()=>{
    event.preventDefault();
    createForm();
})

const mainSection = document.getElementById("mainSection");
const btnClear = document.querySelector("#btnClear");

    btnClear.addEventListener("click", ()=>{
    while(mainSection.querySelectorAll("div").length > 0){
        let tmpDiv = mainSection.querySelectorAll("div")[0];
            mainSection.removeChild(tmpDiv);   
        } 
    })


const btnLT = document.querySelector("#settingsLT");
btnLT.addEventListener("click", ()=>{
    const Header = document.querySelector("#headerSection");
    Header.classList.remove("headerSectionDT");
    Header.classList.add("headerSectionLT");
    const Settings = document.querySelector("#btnSettings");
    Settings.classList.remove("btnSettingsDT");
    Settings.classList.add("btnSettingsLT");
    const ClearAll = document.querySelector("#btnClear");
    ClearAll.classList.remove("btnClearDT");
    ClearAll.classList.add("btnClearLT");
    const Body= document.querySelector("body");
    Body.classList.remove("bodyDT");
    Body.classList.add("bodyLT");
    const Add= document.querySelector("#btnAdd");
    Add.classList.remove("btnAddDT");
    Add.classList.add("btnAddLT");
    document.cookie = "LightTheme";
});
const btnDT = document.querySelector("#settingsDT");
btnDT.addEventListener("click", ()=>{
    const Header = document.querySelector("#headerSection");
    Header.classList.remove("headerSectionLT");
    Header.classList.add("headerSectionDT");
    const Settings = document.querySelector("#btnSettings");
    Settings.classList.remove("btnSettingsLT");
    Settings.classList.add("btnSettingsDT");
    const ClearAll = document.querySelector("#btnClear");
    ClearAll.classList.remove("btnClearLT");
    ClearAll.classList.add("btnClearDT");
    const Body= document.querySelector("body");
    Body.classList.remove("bodyLT");
    Body.classList.add("bodyDT");
    const Add= document.querySelector("#btnAdd");
    Add.classList.remove("btnAddLT");
    Add.classList.add("btnAddDT");
    document.cookie = "DarkTheme";
});