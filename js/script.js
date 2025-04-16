// 確保 DOM 完全載入後再執行腳本
document.addEventListener('DOMContentLoaded', function() {

    console.log("腳本已載入！");

    // 取得按鈕和訊息區域的元素
    const button = document.getElementById('myButton');
    const messageArea = document.getElementById('messageArea');
    const timeDisplay = document.getElementById('generationTime');

    // 設定按鈕的點擊事件監聽器
    if (button && messageArea) {
        button.addEventListener('click', function() {
            // 獲取當前台灣時間 (CST, UTC+8)
            const now = new Date();
            const options = {
                timeZone: 'Asia/Taipei', // 指定時區為台北
                year: 'numeric', month: 'long', day: 'numeric',
                hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
            };
            const taiwanTime = now.toLocaleString('zh-TW', options);

            // 更新訊息區域的內容
            messageArea.textContent = '按鈕在 ' + taiwanTime + ' 被點擊了！';
            console.log('按鈕被點擊！');
        });
    } else {
        console.error("找不到按鈕或訊息區域元素！");
    }

    // 顯示頁面大約生成時間 (腳本執行時)
    if (timeDisplay) {
       const loadTime = new Date();
       const loadOptions = { timeZone: 'Asia/Taipei', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
       timeDisplay.textContent = loadTime.toLocaleTimeString('zh-TW', loadOptions) + ' (CST)';
    }

});