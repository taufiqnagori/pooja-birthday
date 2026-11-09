const button=document.getElementById('celebrate');
button.addEventListener('click',()=>{
  const layer=document.getElementById('confetti');
  const colors=['#f6a9bd','#d66e91','#ffd17a','#f8dce5','#c6a4d5'];
  for(let i=0;i<65;i++){
    const bit=document.createElement('i');
    bit.className='confetti-piece';
    bit.style.left=Math.random()*100+'%';
    bit.style.background=colors[Math.floor(Math.random()*colors.length)];
    bit.style.animationDelay=(Math.random()*.8)+'s';
    bit.style.transform=`rotate(${Math.random()*360}deg)`;
    layer.appendChild(bit);
    setTimeout(()=>bit.remove(),3800);
  }
});
