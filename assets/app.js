// reveal
const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
// nav scrolled
const hdr=document.getElementById('hdr');
const onScroll=()=>{hdr.classList.toggle('scrolled',window.scrollY>40);
  const y=window.scrollY;
  const hb=document.getElementById('heroBg'); if(hb) hb.style.transform='scale(1.04) translateY('+(y*0.18)+'px)';
  const bb=document.getElementById('bandBg'); if(bb){const r=bb.parentElement.getBoundingClientRect();bb.style.transform='scale(1.05) translateY('+(-(r.top)*0.08)+'px)';}
};
window.addEventListener('scroll',onScroll,{passive:true}); onScroll();
// mobile menu
const mob=document.getElementById('mob');
document.getElementById('burger').onclick=()=>mob.classList.add('open');
document.getElementById('mclose').onclick=()=>mob.classList.remove('open');
mob.querySelectorAll('a').forEach(a=>a.onclick=()=>mob.classList.remove('open'));
/* === licznik otwarć demo (buy-signal) === */
(function(){try{if(String(location.protocol).indexOf('http')!==0)return;try{if(/[?&#]team=1/.test(location.search+location.hash)){localStorage.setItem('nb_team','1');}}catch(e){}try{if(localStorage.getItem('nb_team')==='1')return;}catch(e){}if((document.referrer||'').indexOf('crm-newbeginning')>-1)return;if(sessionStorage.getItem('_dv'))return;sessionStorage.setItem('_dv','1');var seg=(location.pathname.split('/').filter(Boolean)[0])||'';var base=location.origin+(seg?('/'+seg):'');fetch('https://zngfubfinbojfgaxdrbf.supabase.co/rest/v1/demo_views',{method:'POST',keepalive:true,headers:{'Content-Type':'application/json','apikey':'sb_publishable_MWwoyGlSCWnJ4awtOPF0ow_ZVS0Y8qK','Authorization':'Bearer sb_publishable_MWwoyGlSCWnJ4awtOPF0ow_ZVS0Y8qK','Prefer':'return=minimal'},body:JSON.stringify({demo_url:base,page:location.pathname,referrer:(document.referrer||null)})}).catch(function(){});}catch(e){}})();