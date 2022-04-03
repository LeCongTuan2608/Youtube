import { Array_Video } from './app.js';
const List_video = Array_Video;
console.log(List_video[0]);
const Contents_video = document.querySelector('.ytb-list-contents');
function Result_watch(Array_Video) {
   for (let i = 0; i < Array_Video.items.length; i++) {
      let Id_video = Array_Video[0].items[i].id.videoId;
      let Thumbnails = Array_Video[0].items[i].snippet.thumbnails.medium.url;
      let Title = Array_Video[0].items[i].snippet.title;
      let output = `
            <div class="ytb-contents-container">
                <a class="link" href="watch.html">
                    <div class="ytb-contents">
                        <div class="ytb-content-image">
                            <img
                            src="${Thumbnails}"
                            />
                        </div>
                        <div class="ytb-content-title">
                            <div class="title">
                            <h3>${Title}</h3>
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
