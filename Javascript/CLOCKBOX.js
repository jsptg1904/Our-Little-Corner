// BANNER CHẠY CHỮ //
// TICKER BANNER
const tickerEvents = [
    { icon: '💛', text: 'anh iuuuu emmmm lớmmmmmmmmmm íiii' },
    { icon: '🐷', text: 'ai dthhhh théeeeee nhòoooooo' },
    { icon: '✨', text: 'heheheheheheheh' },
    { icon: '🧸', text: 'nếu em đọc được cái nàyyy thì tặng anh 1 tấm để a chạy kpi nhooo' },
    { icon: '🐞', text: 'fix web thoi nàoooooooo' },
    { icon: '🏴‍☠️', text: 'ahoyyyyyyyyyy' }
];

(function buildTicker() {
    const track = document.getElementById('ticker-track');
    const html = tickerEvents.map(e =>
        `<div class="ticker-item"><span>${e.icon}</span>${e.text}</div>`
    ).join('');
    track.innerHTML = html; // nhân đôi để loop mượt
})();




// NHẠC 

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('bm-btn');
    const audio = document.getElementById('bm-audio');
    if (!btn || !audio) return;

    audio.volume = 0.3; // chỉnh âm lượng mặc định ở đây (0 -> 1)

    btn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play().catch(() => {
                // Một số trình duyệt chặn autoplay có âm thanh,
            });
            btn.classList.add('bm-playing');
        } else {
            audio.pause();
            btn.classList.remove('bm-playing');
        }
    });
});








const startDate = new Date("2026-05-03T20:00:00");

function formatUnit(value, unit) {
    return `${value} ${unit}${value !== 1 ? 's' : ''}`;
}

function updateTimer() {
    const now = new Date();

    // Tính thô trước (chưa xử lý mượn)
    let months = (now.getFullYear() - startDate.getFullYear()) * 12
        + (now.getMonth() - startDate.getMonth());
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();

    // 1. Mượn từ giờ nếu phút âm
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }

    // 2. Mượn từ ngày nếu giờ âm (PHẢI làm trước khi xử lý days<0)
    if (hours < 0) {
        hours += 24;
        days--;
    }

    // 3. Mượn từ tháng nếu ngày âm (làm SAU CÙNG vì phụ thuộc vào bước 2)
    if (days < 0) {
        months--;
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
    }

    // 4. Phòng trường hợp months âm (nếu startDate ở tương lai)
    if (months < 0) {
        months = 0;
        days = 0;
        hours = 0;
        minutes = 0;
    }

    // Hiển thị sử dụng hàm formatUnit để tự thêm 's'
    document.getElementById("timer").innerHTML =
        `${formatUnit(months, 'Month')} ${formatUnit(days, 'Day')} ${formatUnit(hours, 'Hour')} ${formatUnit(minutes, 'Minute')}`;
}

setInterval(updateTimer, 60000);
updateTimer();



// NAVIGATION BAR// 


// FOOTER BẤM VÔ CÁI LITTLE SURPRISE //

function showMessage() {
    const messages = ["Emmmm dthhhhhh théeeeeeeee", "Anhhhh iuuuuuu béeeeee lớmmmmmmmm íiiiii", "Cho anhhhh xinnn ảnhhhhh ikkkkkkkk", "Chưa có đủ kpi đâuuuuuuuu", "Kpi phải là 20 tấm mụt ngày cơ!!!!!", "Bún bò hemmmmmmm?", "nhom nhomm",
        "Bleeeeeeeee", "Ai dthhhhwww théeee nhòooooo"
    ];
    const random = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("msg").innerHTML = random;
}

// HỘP QUÀ //

const wbMessages = [
    ` HAPPY 2-MONTH ANNIVERSARY EMMM!! 🎊
    Một tháng nữa trôi qua rùi đóaaa, nhanh ghê luôn á.

    Cảm ơn em nhiều lắmmm vì cả buổi đi ngày hôm nay nhee, đi workshop với em xong đi ăng nữaa, siêu PEAKKK hehehe.Nhưng mà ...thật ra, ngồi nghĩ lại anh mới thấy, hôm nay hong đi làm gì quá lớn lao, mà lại là một trong những ngày đi anh thấy vui nhất lun á, chắc đơn giản là do có em ở kế bên thôi cũng đủ làm mọi thứ trở nên đặc biệt rùiii hihi. (anh vừa thoại cái gì thế nàyyy).

    Nhưng mà cũng cho anh xin lũi bé nhìu xíu xiu nha hihi, biết z hong có cắn con ong chi làm hai đứa phải ngồi với xếp lạii:<, xong rùi còn đổi chỗ ăn phút chót nữaaa, thương em ghê huhuhu, anh cảm thấy siu có lỗi với em và cái bụng đói của em nữa, vì em xứng đáng được anh chu đáo hơn vậy nhiềuuu < 3(Cho nên là + n kinh nghiệm cho anh cho các buổi sau nhé!!).

    Hai tháng trôi vèo cái là hết, nhưng những gì tụi mình có với nhau thì anh sẽ nhớ hoài lun, mong tháng nào cũng có thêm thật nhiều kỷ niệm đáng nhớ như vậy nhee!! 💛

    Cảm ơn em vì một tháng vừa qua đã giúp anh hỉuuu em nhìuu hơn nữaaaaa!!!
    Anh iu em lắmm íii
    Aiu của em - Gthanh`

];

let wbTypeTimer = null;
let wbIndex = 0;
let wbIsOpen = false;

function wbTypeMessage(text) {
    const el = document.getElementById('wb-text');
    if (!el) return;

    el.innerHTML = '<span class="wb-cursor"></span>';
    const cursor = el.querySelector('.wb-cursor');

    let i = 0;
    if (wbTypeTimer) clearInterval(wbTypeTimer);

    wbTypeTimer = setInterval(() => {
        if (i >= text.length) { clearInterval(wbTypeTimer); return; }
        const node = document.createTextNode(text[i]);
        el.insertBefore(node, cursor);
        i++;
    }, 45);
}

function wbShowNext() {
    wbTypeMessage(wbMessages[wbIndex]);
    wbIndex = (wbIndex + 1) % wbMessages.length;
}

// ============================
// CONFETTI
// ============================
function wbSpawnConfetti() {
    const wrap = document.getElementById('wb-confetti-wrap');
    if (!wrap) return;
    const colors = ['#ff4d6d', '#ffc8d3', '#ff8fab', '#ffb3c6', '#c77dff', '#ffd1dc'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const el = document.createElement('div');
            el.className = 'wb-cp';
            el.style.left = Math.random() * 100 + 'vw';
            el.style.top = '-20px';
            el.style.background = colors[Math.floor(Math.random() * colors.length)];
            el.style.width = (6 + Math.random() * 7) + 'px';
            el.style.height = (6 + Math.random() * 7) + 'px';
            el.style.animationDuration = (2 + Math.random() * 2) + 's';
            el.style.animationDelay = (Math.random() * 0.8) + 's';
            wrap.appendChild(el);
            setTimeout(() => el.remove(), 4000);
        }, i * 50);
    }
}

// ============================
// CLICK VÀO HỘP THƯ
// ============================
function wbHandleClick() {
    const wrap = document.getElementById('wb-wrap');
    if (!wrap) return;

    wbSpawnConfetti();

    if (!wbIsOpen) {
        // Lần đầu bấm: mở hộp thư ra + chạy lời chúc
        wrap.classList.add('wb-open');
        wbIsOpen = true;
        wbShowNext();
    } else {
        // Đã mở sẵn: bấm tiếp để đổi qua lời chúc khác
        wbShowNext();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const wrap = document.getElementById('wb-wrap');
    if (wrap) wrap.addEventListener('click', wbHandleClick);
});



//NHỮNG CÁI HÌNH ẢNH BAY QUA TỪ TRÁI SANG PHẢI// 
const flyingPicImages = [
    "IMG/GIF/beachpug-vib.gif",
    "IMG/GIF/beachpug-vib.gif",
    "IMG/GIF/capoo-cow.gif",
    "IMG/GIF/capoolightstick.gif",
    "IMG/GIF/capooILY.gif",
    "IMG/GIF/bugcat-capoo-ice-cream.gif",
    "IMG/GIF/bugcat-capoo-shakingheart.gif"

];

function spawnFlyingPic() {
    const lane = document.getElementById("flying-pics-lane");
    const pic = document.createElement("div");
    pic.classList.add("flying-pic");

    const img = document.createElement("img");
    img.src = flyingPicImages[Math.floor(Math.random() * flyingPicImages.length)];
    img.alt = "";
    pic.appendChild(img);

    const duration = 6000 + Math.random() * 6000;
    const topOffset = 10 + Math.random() * 80;
    const size = 36 + Math.random() * 24;

    pic.style.animationDuration = duration + "ms";
    pic.style.top = topOffset + "%";
    pic.style.width = size + "px";
    pic.style.height = size + "px";

    lane.appendChild(pic);
    setTimeout(() => pic.remove(), duration + 500);
}

setInterval(spawnFlyingPic, 2000);
spawnFlyingPic();



// FOOTER PIGS


// TEST
