let Array_Video = JSON.parse(localStorage.getItem('Array_Video')); // đưa cái string trở về cái mảng
let getID = JSON.parse(localStorage.getItem('getID'));
let getTitle = JSON.parse(localStorage.getItem('getTitle'));
let getChannel = JSON.parse(localStorage.getItem('getChannel'));
let getComments = JSON.parse(localStorage.getItem('array_comments'));
console.log(getComments);
// console.log(Array_Video);
console.log('get id:', getID);
console.log('get title:', getTitle);
// import { Id_Video_Watch, Title_Video_Watch } from './app.js';

let Menu_Click = true;
let Index = 0;

window.addEventListener('load', () => {
   //    Active_like_dislike();
   function load_cmt() {
      Commented_Text_Container.insertAdjacentHTML('afterbegin', getComments);
   }
});
const ReLoad = document.querySelector('.header-ytb-left-logo-child'); //click logo
ReLoad.addEventListener('click', () => {
   window.location.replace('index.html');
});

var KeyWord_in_watch = document.querySelector('.key_word');
const Btn_Search = document.querySelector('.btn-seach');
Btn_Search.addEventListener('click', () => {
   if (KeyWord_in_watch.value == '') {
      alert('Bạn chưa nhập dữ liệu vào thanh tìm kiếm');
   }
   // console.log(KeyWord.value);
   if (KeyWord_in_watch.value != '') {
      localStorage.setItem('KeyWord_in_watch', JSON.stringify(KeyWord_in_watch.value));
      window.location.replace('index.html');

      search();
   }
});

console.log(KeyWord_in_watch.value);
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
      alert('Đã bảo là chưa làm mà cứ click, click vào ăn cứt à ??');
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
const header_child = document.querySelector('.container-header-child');
const ytb_watch_set_color = document.querySelector('.ytb-watch');

const btn_set_color = document.querySelector('.btn_color');
btn_set_color.addEventListener('click', () => {
   if (Menu_Click) {
      header_child.setAttribute('class', 'container-header-child-set-color');
      ytb_watch_set_color.setAttribute('class', 'ytb-watch-set-color');
      Menu_Click = false;
   } else {
      header_child.setAttribute('class', 'container-header-child');
      ytb_watch_set_color.setAttribute('class', 'ytb-watch');
      Menu_Click = true;
   }
});

// bật tắt thanh menu
// function Menu_Active() {
//    let Menu_icon_List = document.querySelectorAll('.position-left-menu-bar ul li');
//    let Length = Menu_icon_List.length;
//    for (let i = 0; i < Length; i++) {
//       if (Menu_icon_List[i].classList.contains('active')) {
//          Menu_icon_List[i].classList.remove('active');
//       }
//       if (Menu_icon_List[i].getAttribute('index') == Index) {
//          Menu_icon_List[i].classList.add('active');
//       }
//       Menu_icon_List[i].setAttribute('onclick', 'clicked(this)');
//    }
// }
// function clicked(element) {
//    let getIndex = element.getAttribute('index');
//    Index = getIndex;
//    Menu_Active();
// }

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

const Video_Watch = document.querySelector('.ytb-video');
const Title_Video = document.querySelector('.title');
const Channel_Subscribe_Video = document.querySelector('.channel-name');
function Video_Watching() {
   let Iframe = document.querySelector('.iframe_cls');
   let title_music = document.querySelector('.title h2');
   let channel_music = document.querySelector('.channel-name h4');
   let Subscribe_Channel = document.querySelector('.channel-name span');
   Video_Watch.removeChild(Iframe);
   Title_Video.removeChild(title_music);
   Channel_Subscribe_Video.removeChild(channel_music);
   Channel_Subscribe_Video.removeChild(Subscribe_Channel);
   let src_video = 'https://www.youtube.com/embed/';
   let output = `
         <iframe
            class="iframe_cls"
            src="${src_video + getID}?autoplay=1"
            allow="accelerometer;autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen 
         ></iframe>`;
   let output_Title = `
            <h2>${getTitle}</h2>`;
   let output_Channel = `
            <h4>${getChannel}</h4>
            <span>5Tr người đăng kí</span>`;
   Video_Watch.insertAdjacentHTML('beforeend', output);
   Title_Video.insertAdjacentHTML('beforeend', output_Title);
   Channel_Subscribe_Video.insertAdjacentHTML('beforeend', output_Channel);
}
Video_Watching();
var array_title = [];
var array_channel = [];
function Result_List_watch() {
   const Contents_video = document.querySelector('.ytb-list-contents');
   let Length_Video = Array_Video.length;
   // console.log('lenght:', Length_Video);
   for (let i = 0; i < Length_Video; i++) {
      let Id_video = Array_Video[i].id.videoId;
      let Thumbnails = Array_Video[i].snippet.thumbnails.medium.url;
      let Title = Array_Video[i].snippet.title;
      let Channel = Array_Video[i].snippet.channelTitle;
      array_title.push(Title);
      array_channel.push(Channel);
      let output = `
            <div class="ytb-contents-container" index = ${i}>
                <a class="link" Id-Video = ${Id_video}" href = watch.html>
                    <div class="ytb-contents">
                        <div class="ytb-content-image">
                            <img src="${Thumbnails}"/>
                        </div>
                        <div class="ytb-content-title">
                            <div class="title">
                                <h3>${Title}</h3>
                            </div>
                            <div class="ytb-content-source">
                                <span class="channel">${Channel}</span>
                                <span class="view">50N lượt xem</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>`;
      Contents_video.insertAdjacentHTML('beforeend', output);
   }
   let List_Contents_Video = document.querySelectorAll('.ytb-contents-container ');
   let List_Contents_id = document.querySelectorAll('.ytb-contents-container a');
   for (let j = 0; j < Length_Video; j++) {
      List_Contents_Video[j].onclick = function () {
         let getIndex = List_Contents_Video[j].getAttribute('number');
         Index = getIndex;
         if (List_Contents_Video[j].getAttribute('number') == Index) {
            let getID = List_Contents_id[j].getAttribute('Id-Video');
            let getTitle = array_title[j];
            let getChannel = array_channel[j];
            console.log(getID);
            console.log(getTitle);
            console.log(getChannel);
            localStorage.setItem('getID', JSON.stringify(getID));
            localStorage.setItem('getTitle', JSON.stringify(getTitle));
            localStorage.setItem('getChannel', JSON.stringify(getChannel));
         }
      };
   }
}
Result_List_watch();
const Send = document.querySelector('.send');
const Comment_Text = document.querySelector('.comment');
const Commented_Text_Container = document.querySelector('.ytb-video-commented');
let array_comments = [];
Send.addEventListener('click', function () {
   if (Comment_Text.value == '') {
      alert('Bạn chưa nhập bình luận');
   } else {
      var output_commented = `
         <div class="commented-container">
            <img
               src="https://yt3.ggpht.com/yti/APfAmoGOKDU3dpweltQGctyOkdUr1wfkPCngH0x-druu9A=s88-c-k-c0x00ffffff-no-rj"
               alt=""/>
            <div class="commented-content">
               <h4>Tuấn Lê</h4>
               <p>${Comment_Text.value}</p>
            </div>
         </div>`;
      Commented_Text_Container.insertAdjacentHTML('afterbegin', output_commented);
      array_comments.push(output_commented);
      localStorage.setItem('array_comments', JSON.stringify(array_comments));
   }
   Comment_Text.value = '';
});

Comment_Text.addEventListener('keyup', function (event) {
   if (event.keyCode === 13) {
      event.preventDefault();
      Send.click();
   }
});
