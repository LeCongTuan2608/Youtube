import { Array_Video } from './app.js';
// console.log(Array_Video);
function Result_watch(Array_Video) {
   const Contents_video = document.querySelector('.ytb-list-contents');
   let Length_Video = Array_Video[0].items.length;
   for (let i = 0; i < 10; i++) {
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
