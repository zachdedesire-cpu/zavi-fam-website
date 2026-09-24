const nav=document.querySelector('#nav');document.querySelector('#menu').onclick=()=>nav.classList.toggle('open');
document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));
document.querySelectorAll('.filters button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.filters button').forEach(x=>x.classList.remove('active'));b.classList.add('active');let f=b.dataset.filter;document.querySelectorAll('.grid article').forEach(x=>x.style.display=f==='all'||x.dataset.cat===f?'':'none')});
const modal=document.querySelector('#modal'),title=document.querySelector('#title');let item='';
document.querySelectorAll('.order').forEach(b=>b.onclick=()=>{item=b.dataset.item;title.textContent='Order: '+item;modal.classList.add('open')});
document.querySelector('#close').onclick=()=>modal.classList.remove('open');modal.onclick=e=>{if(e.target===modal)modal.classList.remove('open')};
document.querySelector('#form').onsubmit=e=>{e.preventDefault();let body=`Hello ZaVi Fam,%0A%0AI would like to order:%0AProduct: ${item}%0AName: ${name.value}%0ASize: ${size.value}%0AColor: ${color.value||'Any'}%0ALocation: ${place.value}%0A%0APlease confirm availability and price.`;location.href=`mailto:hello@zavifam.com?subject=ZaVi Fam Order - ${encodeURIComponent(item)}&body=${body}`};
document.querySelector('#year').textContent=new Date().getFullYear();