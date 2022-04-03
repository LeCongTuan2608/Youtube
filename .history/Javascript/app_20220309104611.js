const Btn_Menu = document.querySelector(".header-ytb-left-button-menu");
const Content_Menu = document.querySelectorAll(".position-left-menu-bar ul li a");
const Length_Menu = document.querySelector(".container-body-position-left");
let Menu_Click = true;
let Index = 0;

window.addEventListener("load", ()=>{
    Menu_Active();
})

Btn_Menu.addEventListener("click", function() {
    let Length = Content_Menu.length;
    if (Menu_Click) {
        for (let i = 0; i < Length; i++) {
            Content_Menu[i].classList.add("menu_active");
            Length_Menu.setAttribute("class", "container-body-position-left-menu-width");
        }
        Menu_Click = false;

    } else {
        for (let i = 0; i < Length; i++) {
            Content_Menu[i].classList.remove("menu_active");
            Length_Menu.setAttribute("class", "container-body-position-left");
        }
        Menu_Click = true;
    }
});


function Menu_Active() {
    const Menu_icon_List = document.querySelectorAll(".position-left-menu-bar ul li");
    let Length = Menu_icon_List.length;
    for (let i = 0; i < Length; i++) {
        if(Menu_icon_List[i].classList.contains("active")){
            Menu_icon_List[i].classList.remove("active");
        }
        if (Menu_icon_List[i].getAttribute("index") == Index) {
            // Menu_icon_List[i].classList.add("active");
        }
        Menu_icon_List[i].setAttribute("onclick", "clicked(this)");
    }
};
function clicked(element){
    let getIndex = element.getAttribute("index");
    Index = getIndex;
    Menu_Active();
}





const KeyWord = document.querySelector(".key_word");
const Btn_Search = document.querySelector(".btn-seach");
Btn_Search.addEventListener("click", () => {
    console.log(KeyWord.value);
    search();
})

const url = 'https://www.googleapis.com/youtube/v3/search?';
const parameter = 'part=snippet&maxResults=5&type=video';
const apiKey = 'AIzaSyArduLszOeBXxOQfYg6iCRENRUYhJUx5Oo'; // key api
function search() {
    fetch(url + parameter + '&q=' + KeyWord.value + '&key=' + apiKey)
        .then(async data => data.json())
        // .then(data => console.log(data));

    .then(function(data) {
        console.log(data);
        Result(data);
    })
}
const Contents_video = document.querySelector(".container-body-contents");

function Result(data) {
    for (let i = 0; i < data.items.length; i++) {
        let Thumbnails = data.items[i].snippet.thumbnails.medium.url;
        let Title = data.items[i].snippet.title;
        let output = `
            <div class="container-body-content">
                <div class="container-body-content-image">
                    <img src="${Thumbnails}">
                </div>
                <div class="container-body-content-title">
                    <div class="container-body-content-title-media">
                        <h3 class="title">${Title}</h3>
                    </div>
                </div>
            </div>`
        Contents_video.insertAdjacentHTML("beforeend", output);
    }
}