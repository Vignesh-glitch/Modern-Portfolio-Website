
const video2=document.getElementById("projectvideo2");

const hoverSign=document.querySelector(".hover-sign");
const videoList=[video2];

videoList.forEach(function(video){
    video.addEventListener('mouseover',function(){
        video.play();
        hoverSign.classList.add("active")
    })
    video.addEventListener('mouseout',function(){
        video.pause();
        hoverSign.classList.remove("active")
    })
})