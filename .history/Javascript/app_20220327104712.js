export { Array_Video };
let Menu_Click = true;
let Index = 0;

window.addEventListener('load', () => {
   Menu_Active();
   search();
});

const ReLoad = document.querySelector('.header-ytb-left-logo-child');
ReLoad.addEventListener('click', () => {
   window.location.replace('index.html');
});

const Btn_Menu = document.querySelector('.header-ytb-left-button-menu');
const Length_Menu = document.querySelector('.container-body-position-left');
Btn_Menu.addEventListener('click', function () {
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
// let url = "https://www.googleapis.com/youtube/v3/videos?id=" + videoID + "&key=" + apiKey + "&part=snippet,contentDetails";
const url = 'https://youtube.googleapis.com/youtube/v3/search?';
const parameter = 'part=snippet&maxResults=50&type=video';
const apiKey = 'AIzaSyArduLszOeBXxOQfYg6iCRENRUYhJUx5Oo'; // key api
const Array_Video = []; //tạo 1 cái mảng rỗng

function search() {
   Array_Video.shift(); // xóa phần tử đầu tiên trong mảng
   fetch(url + parameter + '&q=' + KeyWord.value + '&key=' + apiKey)
      .then(async (data) => data.json())
      .then(function (data) {
         // data.items.map((item) => {
         //    return Array_Video.push(item);
         // });
         Array_Video.push(data); //thêm data vào mảng
         Result(Array_Video);
      })
      .catch(function (err) {
         // alert('Có lỗi khi fetch API!!!');
      });
}
console.log('show', Array_Video);

const Contents_video = document.querySelector('.container-body-contents');
function Result(Array_Video) {
   let Content = document.querySelectorAll('.container-body-content');
   let Length_Content = Content.length;
   if (KeyWord.value != '') {
      // (if) nếu thanh tìm kiếm khác rỗng thì thực hiện
      for (let index = 0; index < Length_Content; index++) {
         Contents_video.removeChild(Content[index]); // xóa element
      }
   }
   let Url_youtube = 'http://www.youtube.com/watch?v=';
   let Length_Video = Array_Video[0].items.length;
   for (let i = 0; i < Length_Video; i++) {
      let Id_video = Array_Video[0].items[i].id.videoId;
      let Thumbnails = Array_Video[0].items[i].snippet.thumbnails.medium.url;
      let Title = Array_Video[0].items[i].snippet.title;
      let output = `
                <div class="container-body-content">
                  <a class="link" href="${Url_youtube + Id_video}">
                    <div class="container-body-content-image">
                        <img src="${Thumbnails}">
                    </div>
                    <div class="container-body-content-title">
                        <div class="container-body-content-title-media">
                            <h3 class="title">${Title}</h3>
                        </div>
                    </div>
                  </a>
                </div>`;
      Contents_video.insertAdjacentHTML('beforeend', output);
   }
}