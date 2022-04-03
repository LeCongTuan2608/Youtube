let Array_Video = JSON.parse(localStorage.getItem('Array_Video'));
console.log(Array_Video[1]);

let Menu_Click = true;
let Index = 0;

window.addEventListener('load', () => {
   //    Active_like_dislike();
});

const ReLoad = document.querySelector('.header-ytb-left-logo-child'); //click logo
ReLoad.addEventListener('click', () => {
   window.location.replace('index.html');
});

const KeyWord = document.querySelector('.key_word');
const Btn_Search = document.querySelector('.btn-seach');
Btn_Search.addEventListener('click', () => {
   if (KeyWord.value == '') {
      alert('Bạn chưa nhập dữ liệu vào thanh tìm kiếm');
   }
   // console.log(KeyWord.value);
   if (KeyWord.value != '') {
      search();
   }
});
// bắt sự kiện enter
const Enter = document.querySelector('.key_word');
Enter.addEventListener('keyup', function (event) {
   if (event.keyCode === 13) {
      event.preventDefault();
      document.querySelector('.btn-seach').click();
   }
});
const Micro = document.querySelector('.header-ytb-center-seach-micro');
Micro.addEventListener('click', function () {
   Index++;
   if (Index == 1) {
      alert('Xin lỗi tao chưa làm tính năng này, đừng click tao nữa!!!');
   } else if (Index == 2) {
      alert('Hơiizz, chết tiệc ... mày đang làm cái quái gì vậy hả?');
      alert('Đã bảo là chưa làm mà cứ click, click vào ăn loz à ??');
      alert('click nữa liệu hồn tao!!');
   } else {
      alert('Đcm nói mà mày k nghe à ??');
      Index = 0;
   }
});
const Btn_Menu = document.querySelector('.header-ytb-left-button-menu');
const Length_Menu = document.querySelector('.container-body-position-left');
Btn_Menu.addEventListener('click', function () {
   //click vào element của menu
   let Content_Menu = document.querySelectorAll('.position-left-menu-bar ul li a');
   let Length = Content_Menu.length;
   if (Menu_Click) {
      for (let i = 0; i < Length; i++) {
         Content_Menu[i].classList.add('menu_active');
         Length_Menu.setAttribute('class', 'container-body-position-left-menu-width');
      }
      Menu_Click = false;
   } else {
      for (let i = 0; i < Length; i++) {
         Content_Menu[i].classList.remove('menu_active');
         Length_Menu.setAttribute('class', 'container-body-position-left');
      }
      Menu_Click = true;
   }
});
// bật tắt thanh menu
function Menu_Active() {
   let Menu_icon_List = document.querySelectorAll('.position-left-menu-bar ul li');
   let Length = Menu_icon_List.length;
   for (let i = 0; i < Length; i++) {
      if (Menu_icon_List[i].classList.contains('active')) {
         Menu_icon_List[i].classList.remove('active');
      }
      if (Menu_icon_List[i].getAttribute('index') == Index) {
         Menu_icon_List[i].classList.add('active');
      }
      Menu_icon_List[i].setAttribute('onclick', 'clicked(this)');
   }
}
function clicked(element) {
   let getIndex = element.getAttribute('index');
   Index = getIndex;
   Menu_Active();
}

// Like_Dislike();
const icon_Like = document.querySelector('.icon-like');
icon_Like.addEventListener('click', function () {
   if (Menu_Click) {
      if (icon_Dislike.classList.contains('icon-disliked')) {
         icon_Dislike.setAttribute('class', 'icon-dislike');
      }
      icon_Like.setAttribute('class', 'icon-liked');
      Menu_Click = false;
   } else {
      icon_Like.setAttribute('class', 'icon-like');
      Menu_Click = true;
   }
});
const icon_Dislike = document.querySelector('.icon-dislike');
icon_Dislike.addEventListener('click', function () {
   if (Menu_Click == false) {
      icon_Dislike.setAttribute('class', 'icon-dislike');
      Menu_Click = true;
   } else {
      if (icon_Like.classList.contains('icon-liked')) {
         icon_Like.setAttribute('class', 'icon-like');
      }
      icon_Dislike.setAttribute('class', 'icon-disliked');
      Menu_Click = false;
   }
});

// import { Array_Video } from './app.js';
// console.log('show:', Array_Video);
// console.log('show:', Array_Video[0]);
// async function await_result() {
//    let Result_Array = Array_Video;
//    return Result_Array;
// }
// await_result(Array_Video).then(function (value) {
//    console.log(value);
//    console.log(value[0]);
// });
function Result_watch(Array_Video) {
   const Contents_video = document.querySelector('.ytb-list-contents');
   let Length_Video = Array_Video[0].items.length;
   for (let i = 0; i < Length_Video; i++) {
      let Id_video = Array_Video[0].items[i].id.videoId;
      let Thumbnails = Array_Video[0].items[i].snippet.thumbnails.medium.url;
      let Title = Array_Video[0].items[i].snippet.title;
      let output = `
            <div class="ytb-contents-container">
                <a class="link" href="watch.html">
                    <div class="ytb-contents">
                        <div class="ytb-content-image">
                            <img src="https://i.ytimg.com/vi/keCFnn0pPGw/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAUPR6M5EqZpr-xLqhwRypLJ1eaXQ"/>
                        </div>
                        <div class="ytb-content-title">
                            <div class="title">
                                <h3>Tình Yêu Bát Cơm Rang</h3>
                            </div>
                            <div class="ytb-content-source">
                                <span class="channel">Đình Dũng Official</span>
                                <span class="view">50N lượt xem</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>`;
      Contents_video.insertAdjacentHTML('beforeend', output);
   }
}
Result_watch();
