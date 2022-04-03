let Menu_Click = true;
let Index = 0;

window.addEventListener('load', () => {
   Menu_Active();
   KeyWord_begin();
   // search();
});

const ReLoad = document.querySelector('.header-ytb-left-logo-child');
ReLoad.addEventListener('click', () => {
   window.location.replace('index.html');
});

const Btn_Menu = document.querySelector('.header-ytb-left-button-menu');
const Length_Menu = document.querySelector('.container-body-position-left');
const body_right = document.querySelector('.container-body-position-right');
Btn_Menu.addEventListener('click', function () {
   let Content_Menu = document.querySelectorAll('.position-left-menu-bar ul li a');
   let Length = Content_Menu.length;
   if (Menu_Click) {
      for (let i = 0; i < Length; i++) {
         Content_Menu[i].classList.add('menu_active');
         Length_Menu.setAttribute('class', 'container-body-position-left-menu-width');
         body_right.setAttribute('class', 'container-body-position-right-content-active');
      }
      Menu_Click = false;
   } else {
      for (let i = 0; i < Length; i++) {
         Content_Menu[i].classList.remove('menu_active');
         Length_Menu.setAttribute('class', 'container-body-position-left');
         body_right.setAttribute('class', 'container-body-position-right');
      }
      Menu_Click = true;
   }
});

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
      // Menu_icon_List[i].setAttribute('onclick', 'clicked(this);');
      Menu_icon_List[i].onclick = function () {
         let getIndex = Menu_icon_List[i].getAttribute('index');
         Index = getIndex;
         Menu_Active();
      };
   }
}
var KeyWord_in_watch = JSON.parse(localStorage.getItem('KeyWord_in_watch'));
function KeyWord_begin() {
   if (KeyWord.value == '') {
      return (KeyWord.value = KeyWord_in_watch);
   } else {
      return KeyWord.value;
   }
}

var KeyWord = document.querySelector('.key_word');
const Btn_Search = document.querySelector('.btn-seach');
var get_KeyWord = 'Thịnh hành';
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
const header_child = document.querySelector('.container-header-child');
const body_child = document.querySelector('.container-body-child');

const Set_Color = document.querySelector('.set-color');
Set_Color.addEventListener('click', () => {
   if (Menu_Click) {
      header_child.setAttribute('class', 'container-header-child-set-color');
      body_child.setAttribute('class', 'container-body-child-set-color');
      Menu_Click = false;
   } else {
      header_child.setAttribute('class', 'container-header-child');
      body_child.setAttribute('class', 'container-body-child');
      Menu_Click = true;
   }
});
// let url = "https://www.googleapis.com/youtube/v3/videos?id=" + videoID + "&key=" + apiKey + "&part=snippet,contentDetails";
const url = 'https://youtube.googleapis.com/youtube/v3/search?';
const parameter = 'part=snippet&maxResults=40&type=video';
const apiKey = 'AIzaSyArduLszOeBXxOQfYg6iCRENRUYhJUx5Oo'; // key api
let Array_Video = []; //tạo 1 cái mảng rỗng
// let KeyWord_in_watch = JSON.parse(localStorage.getItem('KeyWord_in_watch'));

// function get_KeyWord() {
//    if (KeyWord.value == '') {
//       KeyWord = KeyWord_in_watch;
//    } else {
//       return (KeyWord.value = '');
//    }
// }

function search() {
   Array_Video.splice(0, 40);
   fetch(url + parameter + '&q=' + KeyWord.value + '&key=' + apiKey)
      .then(async (data) => data.json())
      .then(function (data) {
         data.items.map((item) => {
            return Array_Video.push(item);
         });
         localStorage.setItem('Array_Video', JSON.stringify(Array_Video)); // set cho cái mảng đó thành string
         Result(Array_Video);
      })
      .catch(function (error) {
         let output_error = `
            <div class="error">
               <h3>
                  Ối dồi ôi!! Web đang bị lỗi rồi, giờ bạn cút đi lát quay lại
                  sau<ion-icon name="sad-outline"></ion-icon>
               </h3>
            </div>`;
         Contents_video.insertAdjacentHTML('beforeend', output_error);
      });
}

const Contents_video = document.querySelector('.container-body-contents');
function Result(Array_Video) {
   let Content = document.querySelectorAll('.container-body-content');
   // let Content_id = document.querySelectorAll('.container-body-content a');
   let Length_Content = Content.length;
   if (KeyWord.value != '') {
      // (if) nếu thanh tìm kiếm khác rỗng thì thực hiện
      for (let index = 0; index < Length_Content; index++) {
         Contents_video.removeChild(Content[index]); // xóa element
      }
   }
   var array_title = [];
   var array_channel = [];
   let Length_Video = Array_Video.length;
   for (let i = 0; i < Length_Video; i++) {
      let Id_video = Array_Video[i].id.videoId;
      let Thumbnails = Array_Video[i].snippet.thumbnails.medium.url;
      let Title = Array_Video[i].snippet.title;
      let Channel = Array_Video[i].snippet.channelTitle;
      array_title.push(Title);
      array_channel.push(Channel);
      let output = `
                  <div class="container-body-content" number = ${i}>
                     <a class="link"  id-video = ${Id_video} href = "watch.html" >
                        <div class="container-body-content-image">
                           <img src="${Thumbnails}">
                        </div>
                        <div class="container-body-content-title">
                           <img
                              src="https://hinhnen123.com/wp-content/uploads/2021/07/Bo-suu-tap-1001-hinh-anh-mang-dep-an-tuong-nhat-nam-2021.jpg"
                           />
                           <div class="container-body-content-title-video">
                              <h3 class="title">${Title}</h3>
                              <span class="channel">${Channel}</span>
                              <span>40N lượt xem</span>
                           </div>
                        </div>
                     </a>
                  </div>`;
      Contents_video.insertAdjacentHTML('beforeend', output);
   }
   let Contents = document.querySelectorAll('.container-body-content ');
   let Contents_id = document.querySelectorAll('.container-body-content a');
   for (let j = 0; j < Length_Video; j++) {
      Contents[j].onclick = function () {
         let getIndex = Contents[j].getAttribute('number');
         Index = getIndex;
         if (Contents[j].getAttribute('number') == Index) {
            let getID = Contents_id[j].getAttribute('id-video');
            let getTitle = array_title[j];
            let getChannel = array_channel[j];
            localStorage.setItem('getID', JSON.stringify(getID));
            localStorage.setItem('getTitle', JSON.stringify(getTitle));
            localStorage.setItem('getChannel', JSON.stringify(getChannel));
         }
      };
   }
}

// export { Id_Video_Watch, Title_Video_Watch };
