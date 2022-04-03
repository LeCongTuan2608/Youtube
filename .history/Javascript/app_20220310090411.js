let Menu_Click = true;
let Index = 0;

window.addEventListener("load", ()=>{
    Menu_Active();
});

const ReLoad = document.querySelector(".header-ytb-left-logo-child");
ReLoad.addEventListener("click", function(){
    window.location.replace('index.html');
});

const Btn_Menu = document.querySelector(".header-ytb-left-button-menu");
const Length_Menu = document.querySelector(".container-body-position-left");
Btn_Menu.addEventListener("click", function() {
    let Content_Menu = document.querySelectorAll(".position-left-menu-bar ul li a");
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
            Menu_icon_List[i].classList.add("active");
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
const Enter = document.querySelector(".key_word");
Enter.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        document.querySelector(".btn-seach").click();
    }
});




const url = 'https://www.googleapis.com/youtube/v3/search?';
const parameter = 'part=snippet&maxResults=20&type=video';
const apiKey = 'AIzaSyArduLszOeBXxOQfYg6iCRENRUYhJUx5Oo'; // key api
function search() {
    fetch(url + parameter + '&q=' + KeyWord.value + '&key=' + apiKey)
        .then(async data => data.json())
        // .then(data => console.log(data));

    .then(function(data) {
        let List_data = [];
        Result(data);
        List_data.push(Result(data));
        console.log(Result());
    })
}
const Contents_video = document.querySelector(".container-body-contents");

function Result(data) {
    let Url_youtube = 'https://www.youtube.com/embed/';
    for (let i = 0; i < data.items.length; i++) {
        let Id_video = data.items[i].id.videoId;
        let Thumbnails = data.items[i].snippet.thumbnails.medium.url;
        let Title = data.items[i].snippet.title;
        let output = `
            <div class="container-body-content" index=${i}>
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
        // console.log(Url_youtube+Id_video)
    }
}
function Video_Active() {
    const Video_List = document.querySelectorAll(".container-body-content");
    let Length = Video_List.length;
    for (let i = 0; i < Length; i++) {
        if(Video_List[i].classList.contains("active")){
            Video_List[i].classList.remove("active");
        }
        if (Video_List[i].getAttribute("index") == Index) {
            Video_List[i].classList.add("active");
        }
        Video_List[i].setAttribute("onclick", "clicked(this)");
    }
};
function clicked(element){
    let getIndex = element.getAttribute("index");
    Index = getIndex;
    Video_Active();
}