// script-file.html
// url.html

function changeImage(object) {
  // 이미지를 받아서 바꿔주는 함수
  let status = object.classList[0]; //object의 첫번째 class를 불러와서 status에 저장

  if (status == 'on') {
    //class가 on 일때
    object.classList.replace('on', 'off'); // on -> off로 변경
    object.src = 'image/icon4.png'; //src = "image/icon3.png"
    return;
  }

  object.classList.replace('off', 'on');
  object.src = 'image/icon3.png';
}
