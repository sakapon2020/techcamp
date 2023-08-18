{
    const swiper1 = new Swiper('.swiper1', {
        // Optional parameters
        // direction: 'horizontal',
        loop: true,
        autoplay:  {
          delay: 0,
          disableOnInteraction: false,
        },
        autoHeight: true,
        grabCursor: true,
        effect: 'slide',
        centeredSlides: false,
        slidesPerView: 'auto',
        
        spaceBetween: 10,
        speed: 4000,
        // initialSlide: 1,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets', //ページネーションの種類
          clickable: false, //クリックに反応させる
        },  
    });
}
{
    const swiper2 = new Swiper('.swiper2', {
        // Optional parameters
        // direction: 'horizontal',
        loop: true,
        autoplay:  {
          delay: 0,
          reverseDirection: true,
          disableOnInteraction: false,
        },
        autoHeight: true,
        grabCursor: true,
        effect: 'slide',
        centeredSlides: false,
        slidesPerView: 'auto',
        
        spaceBetween: 10,
        speed: 4000,
        // initialSlide: 1,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets', //ページネーションの種類
          clickable: false, //クリックに反応させる
        },  
    });
}

// #Newjob {
//     padding: 16px 0 32px;
//     & h2 {
//         color: $dBlue;
//     }
// }
// .slider {
//     display: flex;
//     width: 100vw;
//     height: 70px;
//     overflow: hidden;
// }
// .swiper-wrapper {
//     height: 70px;
//     width: auto;
//     // padding: 10px;
//     transition-timing-function: linear;
//     & .swiper-slide {
//         height: 70px;
//         & img {
//             display: block;
//             height: 64px;
//             width: auto;
//         }
//     }
// }
// .swiper1 {
//     width: max(25%,240px);
//     height: 70px;
// }
// .swiper2 {
//     width: max(25%,240px);
//     height: 70px;
// }
// .swiper-autoheight {
//     padding-top: 8px;
// }

// 各ロゴの幅が240px固定となり、ある程度スライドすると上の方が中間から現れるので没とした。
// 結局他と同様animation で対応した。

{
  {
    // calender 生成
    // スケジュールデータの仮想的な配列（例）
    const scheduleData = [
        { time: "09:00", schedule: ["✕", "◯", "◯", "◯", "✕", "△", "◯"] },
        { time: "10:00", schedule: ["✕", "◯", "◯", "✕", "◯", "◯", "◯"] },
        { time: "11:00", schedule: ["✕", "◯", "✕", "◯", "◯", "◯", "◯"] },
        { time: "12:00", schedule: ["✕", "◯", "◯", "◯", "◯", "◯", "◯"] },
        { time: "13:00", schedule: ["✕", "◯", "◯", "◯", "◯", "◯", "◯"] },
        { time: "14:00", schedule: ["✕", "✕", "◯", "◯", "◯", "◯", "◯"] },
        { time: "15:00", schedule: ["✕", "◯", "◯", "◯", "◯", "◯", "◯"] },
        { time: "16:00", schedule: ["◯", "◯", "◯", "◯", "△", "◯", "✕"] },
        { time: "17:00", schedule: ["◯", "◯", "◯", "△", "◯", "◯", "◯"] },
        { time: "18:00", schedule: ["◯", "◯", "◯", "◯", "◯", "◯", "◯"] },
        { time: "19:00", schedule: ["◯", "◯", "◯", "◯", "◯", "◯", "◯"] },
        { time: "20:00", schedule: ["◯", "◯", "◯", "◯", "◯", "◯", "◯"] },
        { time: "21:00", schedule: ["◯", "◯", "◯", "◯", "◯", "◯", "◯"] },
        // 他の時間帯のデータも同様に追加
    ];
    
    // 当日の曜日を取得
    const today = new Date().getDay(); // 0:日曜, 1:月曜, ..., 6:土曜
    
    // 曜日の表記を調整するための配列
    const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
    
    // テーブルのtbody要素を取得
    const tbody = document.querySelector('#scheduleTable tbody');
    
    // スケジュールデータをもとにテーブルを生成
    for (const data of scheduleData) {
      const row = document.createElement('tr');
      const timeCell = document.createElement('td');
      timeCell.textContent = data.time;
      row.appendChild(timeCell);
    
      for (let i = 0; i < 7; i++) {
        const dayIndex = (today + i) % 7;
        const cell = document.createElement('td');
        cell.textContent = data.schedule[dayIndex] || '';
        if (data.schedule[dayIndex] === '✕') {
          cell.classList.add('unavailable'); // × のセルにスタイルを適用
        }
        row.appendChild(cell);
      }
    
      tbody.appendChild(row);
    }
    
    // 先頭のセルに曜日の表記を設定
    const thCells = document.querySelectorAll('#scheduleTable th');
    for (let i = 0; i < 7; i++) {
      const th = thCells[i + 1]; // 0番目は時間列なのでスキップ
      th.textContent = `${i + 12}(${weekdays[(today + i) % 7]})`;
    }
  }
}