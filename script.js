// nav bar 
const menu=document.querySelector('.menu')
const navbar=document.querySelector('.navbar')

menu.addEventListener('click',()=>{
    navbar.classList.toggle('change')
    menu.classList.toggle('change')
})
// end of  nav bar 
//   section-2 video 
const video= document.querySelector('.video')
const btn= document.querySelector('.button i')
const bar=document.querySelector('.video-bar')

const playPause=()=>{
    if (video.paused) {
        video.play()
        btn.className='far fa-pause-circle'
        video.style.opacity='.7'
    }
    else{
        video.pause()
        btn.className='far fa-play-circle'
        video.style.opacity='.3'
    }
   
}
btn.addEventListener('click',()=>{
playPause()
})
video.addEventListener('timeupdate',()=>{
    const barwidth=video.currentTime / video.duration;
    bar.style.width=`${barwidth*100}%`

    if (video.ended) {
        btn.className='far fa-play-circle';
        video.style.opacity='.3'
        }
 
    })
//   end of section-2 video 
// section 3
var Swiper = new Swiper(".swiper-contanier", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 70,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
     
  });
  
// end of section 3
