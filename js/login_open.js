// 로그인 오픈 윈도우
var login = document.getElementById('login');
console.log(login);

login.onclick = function(){
    window.open('login.html', '알라딘 로그인', 'width=605, height=836, left=500, top=20');
}