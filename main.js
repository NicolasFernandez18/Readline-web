const btn=document.getElementById('mobile-menu-btn'),menu=document.getElementById('mobile-menu');
if(btn&&menu){
  const set=o=>{menu.classList.toggle('open',o);btn.setAttribute('aria-expanded',o);btn.querySelector('i').className=o?'fa-solid fa-xmark':'fa-solid fa-bars'};
  btn.addEventListener('click',()=>set(!menu.classList.contains('open')));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')set(false)});
  menu.addEventListener('click',e=>{if(e.target.closest('a'))set(false)});
}
const form=document.getElementById('contact-form');
if(form){
  const ok=document.getElementById('form-ok'),err=document.getElementById('form-err'),sb=document.getElementById('submit-btn'),label=sb.innerHTML;
  form.addEventListener('submit',async e=>{
    e.preventDefault();ok.classList.add('hidden');err.classList.add('hidden');
    sb.disabled=true;sb.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Enviando';
    try{
      const r=await fetch(form.action,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}});
      if(r.ok){form.reset();ok.classList.remove('hidden');ok.focus()}else{err.classList.remove('hidden');err.focus()}
    }catch{err.classList.remove('hidden');err.focus()}
    sb.disabled=false;sb.innerHTML=label;
  });
}
