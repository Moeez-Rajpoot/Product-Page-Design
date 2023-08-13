const sp1 =  document.getElementById('sp1');
const sp2 =  document.getElementById('sp2');
const sp3 =  document.getElementById('sp3');
const img =  document.getElementById('imgg');

const spandiv = document.getElementById('controls');
const spans =  document.querySelectorAll('span');






sp1.addEventListener('click' , ()=>{

   img.src = './images/image1.png';

   spans.forEach(span => {
    span.classList.remove('circle');
});
   sp1.classList.add('circle');
});


sp2.addEventListener('click' , ()=>{

    img.src = './images/image2.png';
    spans.forEach(span => {
        span.classList.remove('circle');
    });
    



    sp2.classList.add('circle');
 });


 sp3.addEventListener('click' , ()=>{

    img.src = './images/image3.png';
    spans.forEach(span => {
        span.classList.remove('circle');
    });
    sp3.classList.add('circle');
 });


