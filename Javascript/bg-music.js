(function () {
    const AUDIO_SRC = 'AUDIO\\Magic-Valentines.mp3'; // sửa đúng đường dẫn nhạc của anh
    const STORAGE_KEY = 'shared-bg-music';

    const audio = document.createElement('audio');
    audio.src = AUDIO_SRC;
    audio.loop = true;
    audio.volume = 0.5; // mặc định 50%, giá trị từ 0 (im lặng) đến 1 (tối đa)
    audio.id = 'shared-bg-audio';
    document.body.appendChild(audio);

    function tryPlay() {
        audio.play().catch(() => {
            // Trình duyệt chặn autoplay -> chờ cú click/chạm đầu tiên bất kỳ trên trang
            const startOnInteract = () => {
                audio.play();
                document.removeEventListener('click', startOnInteract);
                document.removeEventListener('touchstart', startOnInteract);
            };
            document.addEventListener('click', startOnInteract, { once: true });
            document.addEventListener('touchstart', startOnInteract, { once: true });
        });
    }

    function restoreState() {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
        if (saved.time) audio.currentTime = saved.time;
        tryPlay();
    }

    // Lưu vị trí đang phát liên tục để trang sau load đúng chỗ
    setInterval(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ time: audio.currentTime }));
    }, 500);

    window.addEventListener('beforeunload', () => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ time: audio.currentTime }));
    });

    restoreState();
    window.sharedAudio = audio;
})();