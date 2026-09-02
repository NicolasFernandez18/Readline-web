const observer = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible') }), {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();

const cursor = document.querySelector('.cursor');
window.addEventListener('mousemove', e => { cursor.style.left=e.clientX+'px'; cursor.style.top=e.clientY+'px'; });
document.querySelectorAll('a,button').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cursor.style.width='34px';cursor.style.height='34px'});
  el.addEventListener('mouseleave',()=>{cursor.style.width='18px';cursor.style.height='18px'});
});

document.querySelectorAll('.magnetic').forEach(el=>{
  el.addEventListener('mousemove', e=>{const r=el.getBoundingClientRect();const x=(e.clientX-r.left-r.width/2)*.12;const y=(e.clientY-r.top-r.height/2)*.12;el.style.transform=`translate(${x}px,${y}px)`});
  el.addEventListener('mouseleave',()=>el.style.transform='translate(0,0)');
});

const art=document.querySelector('.hero-art');
window.addEventListener('scroll',()=>{if(window.innerWidth>800) art.style.transform=`rotate(-13deg) translateY(${window.scrollY*.08}px)`},{passive:true});
