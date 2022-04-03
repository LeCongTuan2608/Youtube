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
            <div class="ytb-contents-container">
                <a class="link" href="watch.html">
                    <div class="ytb-contents">
                        <div class="ytb-content-image">
                            <img
                            src="https://i.ytimg.com/vi/keCFnn0pPGw/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAUPR6M5EqZpr-xLqhwRypLJ1eaXQ"
                            />
                        </div>
                        <div class="ytb-content-title">
                            <div class="title">
                            <h3>Đế Vương</h3>
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
