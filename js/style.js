
function ab(id){
  return typeof id==='string'?document.getElementById(id):id;
}

window.onload=function(){
  // 标签的索引

  var lis=ab('notice-tit').getElementsByClassName('notcie-tab'),
      divs=ab('notice-con').getElementsByClassName('all-content1');
   if(lis.length!=divs.length)
   return;
   for(var i=0;i<lis.length;i++){
    lis[i].id=i;
    lis[i].onclick=function(){
    for(var j=0;j<lis.length;j++){
      lis[j].classList.remove("cur");
      divs[j].style.display='none';
    }
    this.classList.add("cur");
    divs[this.id].style.display='block';

    }
   }   


var video1 = document.getElementById("videoPlay1");
  video1.onclick = function() {
  if (video1.paused) {
  video1.play();
  } else {
  video1.pause();
  }
  }
  $(document).ready(function() {
  $(".img1").click(function() {
  $(".middle img").attr("src", "img/athome1.png");
  });
  $(".img2").click(function() {
  $(".middle img").attr("src", "img/athome2.png");
  });
  $(".img3").click(function() {
  $(".middle img").attr("src", "img/athome3.png");
  });
  $(".img4").click(function() {
  $(".middle img").attr("src", "img/athome4.png");
  });
  $(".img5").click(function() {
  $(".middle img").attr("src", "img/athome5.png");
  });
  $(".img6").click(function() {
  $(".middle img").attr("src", "img/athome6.png");
  });
  });
   

}

