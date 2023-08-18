{
  // hanbergerメニューの展開
  const ham = document.querySelector('.hamburger-btn');
  const hamopen = document.querySelector('.main-header-nav-list');
  ham.addEventListener('click', () => {
    ham.classList.toggle('js-close');
    hamopen.classList.toggle('js-close');
  })
}


{
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

  // 当日の日付を取得
  const currentDate = new Date();
  const currentDay = currentDate.getDate(); // 1:1日, 2:2日, ..., 31:31日

  // 先頭のセルに曜日と日付の表記を設定
  const thCells = document.querySelectorAll('#scheduleTable th');
  for (let i = 0; i < 7; i++) {
    const th = thCells[i + 1]; // 0番目は時間列なのでスキップ
    const dayIndex = (today + i) % 7;
    const dayNumber = currentDay + i > 31 ? currentDay + i - 31 : currentDay + i;
    th.textContent = `${dayNumber}(${weekdays[dayIndex]})`;
  }

}



{
  // 画面下のボタン表示の制御
  document.addEventListener('DOMContentLoaded', function () {
    function fadeIn(element, duration) {
      element.style.opacity = 0;
      element.style.visibility = 'visible';
      let start = null;
  
      function step(timestamp) {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          element.style.opacity = progress / duration;
          if (progress < duration) {
              window.requestAnimationFrame(step);
          }
      }
  
      window.requestAnimationFrame(step);
  }
  
  function fadeOut(element, duration) {
      element.style.opacity = 1;
      let start = null;
  
      function step(timestamp) {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          element.style.opacity = 1 - progress / duration;
          if (progress < duration) {
              window.requestAnimationFrame(step);
          } else {
              element.style.visibility = 'hidden';
          }
      }
  
      window.requestAnimationFrame(step);
  }
  
    let offset = 100;
    let duration = 500;
    let chooseplan = document.querySelector('#chooseplan');
    let fixBtn = document.querySelector('.fix_btn'); // 追加
  
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > offset) {
            // fadeIn(chooseplan, duration);
            fixBtn.classList.add('appear'); // 追加
        } else {
            // fadeOut(chooseplan, duration);
            fixBtn.classList.remove('appear'); // 追加
        }
    });
  });

}

{
    // ラヂオボタンの選択と本文の切り替えの制御
    document.addEventListener('DOMContentLoaded', function() {
        const radioLabels = document.querySelectorAll('.location_radio_label');
        const firstRadio = document.getElementById('exp_counseling_location_online');
        const secondRadio = document.getElementById('exp_counseling_location_shibuya');
        const firstNotation = document.querySelectorAll('.counseling-notation')[0];
        const secondNotation = document.querySelectorAll('.counseling-notation')[1];

        radioLabels.forEach(label => {
            label.addEventListener('click', function() {
                if (this === radioLabels[0]) {
                    firstRadio.checked = true;
                    secondRadio.checked = false;
                    firstNotation.style.display = 'block';
                    secondNotation.style.display = 'none';
                } else {
                    firstRadio.checked = false;
                    secondRadio.checked = true;
                    firstNotation.style.display = 'none';
                    secondNotation.style.display = 'block';
                }
                radioLabels.forEach(otherLabel => {
                    otherLabel.classList.remove('checked');
                });
                this.classList.add('checked');
            });
        });
    });
}