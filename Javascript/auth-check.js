// AUTH CHECK — thêm file này vào thẻ <head> của mọi trang
if (sessionStorage.getItem('olc-auth') !== 'true') {
    window.location.href = 'index.html';
}