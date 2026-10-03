const body=document.body;
const themeBtn=document.getElementById('themeBtn');
themeBtn?.addEventListener('click',()=>{body.classList.toggle('dark');localStorage.setItem('darkMode',body.classList.contains('dark'))});
if(localStorage.getItem('darkMode')==='true') body.classList.add('dark');

const seats=[...document.querySelectorAll('.seat')];
const count=document.getElementById('count'), base=document.getElementById('basePrice'), fee=document.getElementById('fee'), total=document.getElementById('total'), msg=document.getElementById('message');
let selected=0;
function update(){
  const price=selected*249;
  const service=selected?49:0;
  if(count) count.textContent=selected;
  if(base) base.textContent='₹'+price;
  if(fee) fee.textContent='₹'+service;
  if(total) total.textContent='₹'+(price+service);
  if(msg) msg.textContent=selected?`${selected} selection(s) ready. You can continue.`:'Choose an item or seat to begin.';
}
seats.forEach(s=>s.addEventListener('click',()=>{
  s.classList.toggle('selected');
  selected=document.querySelectorAll('.seat.selected').length;
  update();
}));
document.querySelectorAll('.select-btn').forEach(btn=>btn.addEventListener('click',()=>{
  btn.textContent=btn.textContent==='Selected'?'Select':'Selected';
  btn.classList.toggle('primary');
  selected=btn.textContent==='Selected'?1:0;
  update();
}));
document.querySelectorAll('.chip').forEach(ch=>ch.addEventListener('click',()=>{
  document.querySelectorAll('.chip').forEach(x=>x.classList.remove('active'));
  ch.classList.add('active');
  if(msg) msg.textContent=`Showing options for ${ch.textContent}.`;
}));
document.getElementById('continueBtn')?.addEventListener('click',()=>{
  if(!selected) alert('Please make a selection first.');
  else alert('Demo action: your selection is ready for the next step.');
});
document.getElementById('searchBtn')?.addEventListener('click',()=>{
  const q=(document.getElementById('searchInput')?.value||'').toLowerCase();
  document.querySelectorAll('.item-card').forEach(card=>card.style.display=card.dataset.name.toLowerCase().includes(q)?'block':'none');
});
update();
