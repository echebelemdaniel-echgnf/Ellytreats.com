const N=n=>'₦'+n.toLocaleString('en-NG');
const cakes={6:[25000,30000,null],7:[35000,40000,45000],8:[40000,45000,55000],9:[45000,55000,63000],10:[55000,63000,80000],11:[65000,73000,90000],12:[75000,85000,110000]};
const types=['Butter cream','Whipped cream','Fondant'];
const budget={6:15000,7:24000,8:30000,10:38000,12:45000};
const soups=[['Beef soup',24000],['Goat meat soup',28000],['Chicken soup',30000]];
const $=id=>document.getElementById(id);
const size=$('size'),type=$('type'),soup=$('soup');
Object.keys(cakes).forEach(s=>size.add(new Option(s+' inches',s)));
soups.forEach(([n],i)=>soup.add(new Option(n,i)));
function fill(){const prev=type.value;type.innerHTML='';cakes[size.value].forEach((p,i)=>{if(p)type.add(new Option(types[i],i))});if(prev&&[...type.options].some(o=>o.value===prev))type.value=prev;show()}
function show(){$('total').textContent=N(cakes[size.value][type.value])}
size.onchange=fill;type.onchange=show;fill();
let cart=[];
try{cart=JSON.parse(localStorage.getItem('elly-cart')||'[]')}catch(e){}
function save(){try{localStorage.setItem('elly-cart',JSON.stringify(cart))}catch(e){}}
const esc=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function render(){
$('cart').innerHTML=cart.length?cart.map((it,i)=>`<li><span>${esc(it.label)}${it.note?`<small>${esc(it.note)}</small>`:''}</span><span><b>${N(it.price)}</b><button type="button" data-i="${i}">Remove</button></span></li>`).join(''):'<li class="empty">Nothing added yet.</li>';
$('grand').textContent=N(cart.reduce((a,b)=>a+b.price,0));save()}
$('cart').onclick=e=>{const i=e.target.dataset.i;if(i!==undefined){cart.splice(+i,1);render()}};
$('addCake').onclick=()=>{cart.push({label:`${size.value}-inch cake, ${types[type.value].toLowerCase()}`,note:$('msg').value.trim()?'Writing: '+$('msg').value.trim():'',price:cakes[size.value][type.value]});$('msg').value='';render()};
$('addSoup').onclick=()=>{const l=Math.max(1,Math.min(20,parseInt($('litres').value)||1));const [n,p]=soups[soup.value];cart.push({label:`${n}, ${l} litre${l>1?'s':''}`,note:'',price:p*l});render()};
$('mode').onchange=()=>{$('addrBox').hidden=$('mode').value!=='Delivery'};
$('date').min=new Date().toISOString().slice(0,10);
$('send').onclick=()=>{
const err=m=>{$('err').textContent=m};
if(!cart.length)return err('Add at least one cake or soup.');
if(!$('name').value.trim())return err('Enter your name.');
if(!$('phone').value.trim())return err('Enter your phone number.');
if(!$('date').value)return err('Choose the date you need it.');
if($('mode').value==='Delivery'&&!$('addr').value.trim())return err('Enter the delivery address.');
err('');
const lines=cart.map((it,i)=>`${i+1}. ${it.label} - ${N(it.price)}${it.note?' ('+it.note+')':''}`);
const t=cart.reduce((a,b)=>a+b.price,0);
const text=`Hello Ellytreats, I would like to place an order:\n\n${lines.join('\n')}\n\nTotal: ${N(t)}\nName: ${$('name').value.trim()}\nPhone: ${$('phone').value.trim()}\nDate needed: ${$('date').value}\n${$('mode').value}${$('mode').value==='Delivery'?': '+$('addr').value.trim():''}`;
window.open('https://wa.me/2348089221013?text='+encodeURIComponent(text),'_blank','noopener')};
render();
const tb=document.querySelector('#tbl tbody');
Object.entries(cakes).forEach(([s,r])=>tb.insertAdjacentHTML('beforeend',`<tr><td>${s} inches</td>${r.map(p=>`<td>${p?N(p):'-'}</td>`).join('')}</tr>`));
$('budget').innerHTML=Object.entries(budget).map(([s,p])=>`<li><span>${s} inches</span><b>${N(p)}</b></li>`).join('');
$('soupList').innerHTML=soups.map(([n,p])=>`<li><span>${n}</span><b>${N(p)}</b></li>`).join('');
