
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

}





