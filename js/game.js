
"use strict";

const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const rnd=(a,b)=>a+Math.random()*(b-a);

/* ============ BACKGROUND ============ */
(function buildBG(){
  const mid=$("#bg-mid"), near=$("#bg-near");
  // bokeh ceiling lights
  for(let i=0;i<46;i++){
    const d=document.createElement("div"); d.className="bokeh";
    const s=rnd(5,20);
    Object.assign(d.style,{width:s+"px",height:s+"px",left:rnd(0,100)+"%",top:rnd(0,34)+"%",
      background:["#ffd27a","#ff8fa3","#7ad0ff","#c79bff","#ffe9a8"][i%5],
      animationDuration:rnd(5,13)+"s",animationDelay:rnd(0,6)+"s"});
    mid.appendChild(d);
  }
  // slot machine banks
  for(let i=0;i<16;i++){
    const s=document.createElement("div"); s.className="slot";
    const w=rnd(26,44), side=i<8;
    Object.assign(s.style,{width:w+"px",height:w*1.75+"px",
      left:(side?rnd(1,26):rnd(74,99))+"%", top:rnd(24,42)+"%",opacity:rnd(.45,.85)});
    s.style.setProperty("--fd",rnd(.4,1.6)+"s");
    s.style.setProperty("--fdel",rnd(0,3)+"s");
    mid.appendChild(s);
  }
  // silhouetted patrons at varied depths / periods
  for(let i=0;i<14;i++){
    const p=document.createElement("div"); p.className="patron";
    const h=rnd(90,165), side=i%2===0;
    Object.assign(p.style,{width:h*.52+"px",height:h+"px",
      left:(side?rnd(0,30):rnd(70,100))+"%",bottom:rnd(30,44)+"%",
      opacity:rnd(.55,.9),animationDuration:rnd(4.5,11)+"s",animationDelay:rnd(0,5)+"s",
      filter:`blur(${rnd(0,1.6)}px)`});
    near.appendChild(p);
  }
})();

/* ============ DEALER ============ */
$("#dealer").innerHTML=`
<svg viewBox="0 0 300 340" xmlns="http://www.w3.org/2000/svg">
 <defs>
  <linearGradient id="jk" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#23262d"/><stop offset="1" stop-color="#0e1013"/></linearGradient>
  <linearGradient id="sk" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#f5d3b6"/><stop offset="1" stop-color="#e3b895"/></linearGradient>
  <linearGradient id="hr" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2a1c16"/><stop offset="1" stop-color="#120b08"/></linearGradient>
  <radialGradient id="blush" cx=".5" cy=".5" r=".5">
    <stop offset="0" stop-color="#e88a7a" stop-opacity=".5"/>
    <stop offset="1" stop-color="#e88a7a" stop-opacity="0"/></radialGradient>
 </defs>

 <g id="torso">
   <!-- arms behind torso -->
   <g id="armL"><path d="M96 196 C64 208 44 236 40 268 C56 276 76 268 88 250 C96 236 100 214 104 202 Z" fill="url(#jk)"/>
     <ellipse cx="46" cy="270" rx="16" ry="12" fill="url(#sk)"/>
     <path d="M34 268 q10 -7 22 -2" stroke="#d4a888" stroke-width="1.4" fill="none"/></g>
   <g id="armR"><path d="M204 196 C236 208 256 236 260 268 C244 276 224 268 212 250 C204 236 200 214 196 202 Z" fill="url(#jk)"/>
     <ellipse cx="254" cy="270" rx="16" ry="12" fill="url(#sk)"/>
     <path d="M244 268 q10 -7 22 -2" stroke="#d4a888" stroke-width="1.4" fill="none"/></g>

   <!-- body -->
   <path d="M150 168 C110 170 86 190 80 232 L74 300 L226 300 L220 232 C214 190 190 170 150 168 Z" fill="url(#jk)"/>
   <!-- shirt V -->
   <path d="M150 172 L128 300 L172 300 Z" fill="#f2f4f7"/>
   <path d="M150 172 L131 214 L150 236 L169 214 Z" fill="#e6e9ee"/>
   <!-- lapels -->
   <path d="M150 170 C136 176 124 196 120 300 L138 300 L150 190 Z" fill="#171a20"/>
   <path d="M150 170 C164 176 176 196 180 300 L162 300 L150 190 Z" fill="#171a20"/>
   <!-- neck -->
   <path d="M132 138 h36 v34 c-8 8 -28 8 -36 0 Z" fill="#dcae8b"/>
   <!-- collar -->
   <path d="M124 160 L150 186 L176 160 L168 150 L150 168 L132 150 Z" fill="#fbfcfe"/>
   <!-- pendant -->
   <circle cx="150" cy="196" r="5.5" fill="#e8c14a" stroke="#a8862c"/>
   <path d="M136 172 q14 18 28 0" stroke="#c9a63c" stroke-width="1.2" fill="none"/>
   <!-- crest -->
   <circle cx="196" cy="214" r="9" fill="none" stroke="#e8c14a" stroke-width="1.6"/>
   <text x="196" y="218" font-size="9" fill="#e8c14a" text-anchor="middle" font-weight="700">LS</text>

   <g id="headgrp">
     <!-- hair back -->
     <path d="M150 42 C104 42 92 82 96 118 C98 140 100 150 104 156 L112 120 C120 96 128 88 150 88 C172 88 180 96 188 120 L196 156 C200 150 202 140 204 118 C208 82 196 42 150 42 Z" fill="url(#hr)"/>
     <!-- ears -->
     <ellipse cx="112" cy="106" rx="7" ry="11" fill="#e8bd9a"/>
     <ellipse cx="188" cy="106" rx="7" ry="11" fill="#e8bd9a"/>
     <!-- face -->
     <path d="M150 56 C122 56 112 78 112 102 C112 130 128 152 150 152 C172 152 188 130 188 102 C188 78 178 56 150 56 Z" fill="url(#sk)"/>
     <!-- fringe -->
     <path d="M150 48 C120 48 108 70 110 96 C122 78 132 70 150 70 C168 70 182 78 192 98 C194 70 180 48 150 48 Z" fill="url(#hr)"/>
     <!-- brows -->
     <path d="M126 92 q10 -6 20 -1" stroke="#2a1c16" stroke-width="2.6" fill="none" stroke-linecap="round"/>
     <path d="M154 91 q10 -5 20 1" stroke="#2a1c16" stroke-width="2.6" fill="none" stroke-linecap="round"/>
     <!-- eyes -->
     <g>
       <ellipse cx="134" cy="105" rx="8.5" ry="5.4" fill="#fff"/>
       <circle cx="135" cy="105" r="3.6" fill="#2b1b12"/>
       <circle cx="136.3" cy="103.6" r="1.2" fill="#fff"/>
       <path class="lid" id="lidL" d="M125.5 105 h17 v-7 h-17 Z" fill="#e8bd9a"/>
       <path d="M125.5 100.5 q8.5 -5 17 0" stroke="#3a2419" stroke-width="1.5" fill="none"/>
     </g>
     <g>
       <ellipse cx="166" cy="105" rx="8.5" ry="5.4" fill="#fff"/>
       <circle cx="167" cy="105" r="3.6" fill="#2b1b12"/>
       <circle cx="168.3" cy="103.6" r="1.2" fill="#fff"/>
       <path class="lid" id="lidR" d="M157.5 105 h17 v-7 h-17 Z" fill="#e8bd9a"/>
       <path d="M157.5 100.5 q8.5 -5 17 0" stroke="#3a2419" stroke-width="1.5" fill="none"/>
     </g>
     <!-- nose -->
     <path d="M150 110 q-4 12 2 15" stroke="#cf9e7d" stroke-width="1.8" fill="none" stroke-linecap="round"/>
     <!-- blush -->
     <ellipse cx="126" cy="120" rx="11" ry="7" fill="url(#blush)"/>
     <ellipse cx="174" cy="120" rx="11" ry="7" fill="url(#blush)"/>
     <!-- mouth -->
     <path id="mouth" d="M138 133 q12 9 24 0 q-12 4 -24 0 Z" fill="#b84550"/>
     <!-- headset -->
     <path d="M110 96 C108 62 192 62 190 96" stroke="#15181d" stroke-width="4.5" fill="none"/>
     <rect x="104" y="96" width="9" height="15" rx="4" fill="#15181d"/>
     <path d="M110 110 q16 22 26 26" stroke="#15181d" stroke-width="2.6" fill="none"/>
     <circle cx="137" cy="137" r="3.4" fill="#22262d"/>
   </g>
 </g>
</svg>`;

const dealerEl=$("#dealer"), mouth=$("#mouth");
function pose(p){dealerEl.className="pose-"+p;}
function smile(on){mouth.setAttribute("d", on
  ? "M136 131 q14 13 28 0 q-14 6 -28 0 Z"
  : "M139 134 q11 6 22 0 q-11 3 -22 0 Z");}
(function blinkLoop(){
  const l=$("#lidL"),r=$("#lidR");
  const go=()=>{ l.classList.add("blink"); r.classList.add("blink");
    setTimeout(()=>{l.classList.remove("blink");r.classList.remove("blink");},140);
    setTimeout(go, rnd(2600,6200)); };
  setTimeout(go, 1200);
})();

/* ============ TABLE LAYOUT ============ */
const PAY={small:1,big:1,odd:1,even:1,any3:30,spec3:180,
  4:60,5:30,6:17,7:12,8:8,9:6,10:6,11:6,12:6,13:8,14:12,15:17,16:30,17:60};

function zone(id,lab,odds,cls){
  const d=document.createElement("div");
  d.className="zone"+(cls?" "+cls:""); d.dataset.id=id;
  d.innerHTML=`<div><div class="lab">${lab}</div><div class="odds">${odds}</div></div>`;
  return d;
}
const rTop=$("#r-top"), rNum=$("#r-num"), rTrip=$("#r-trip"), rBot=$("#r-bot");
rTop.append(
  zone("small","SMALL<br>4–10","1 : 1"),
  zone("any3","ANY TRIPLE","30 : 1"),
  zone("odd","ODD","1 : 1"),
  zone("big","BIG<br>11–17","1 : 1"));
for(let t=4;t<=17;t++) rNum.append(zone("t"+t,t,PAY[t]+" : 1"));
for(let f=1;f<=6;f++) rTrip.append(zone("s"+f,"TRIPLE "+f,"180 : 1"));
rTrip.append(zone("even","EVEN","1 : 1"));
rBot.append(
  zone("small2","小 SMALL","1 : 1"),
  zone("odd2","單 ODD","1 : 1"),
  zone("even2","雙 EVEN","1 : 1"),
  zone("big2","大 BIG","1 : 1"));
// alias duplicates to the same bet key
const ALIAS={small2:"small",odd2:"odd",even2:"even",big2:"big"};

/* ============ DICE ============ */
const PIPS={1:[4],2:[0,8],3:[0,4,8],4:[0,2,6,8],5:[0,2,4,6,8],6:[0,2,3,5,6,8]};
// face-to-camera rotations (deg) for value on each of the 6 physical faces
const FACEROT={1:[0,0],2:[0,180],3:[0,-90],4:[0,90],5:[-90,0],6:[90,0]};
const dicewrap=$("#dicewrap"), dice=[];
for(let i=0;i<3;i++){
  const die=document.createElement("div"); die.className="die";
  [1,2,3,4,5,6].forEach(v=>{
    const f=document.createElement("div"); f.className="face f"+v;
    for(let c=0;c<9;c++){
      const cell=document.createElement("div");
      if(PIPS[v].includes(c)){cell.className="pip";}
      f.appendChild(cell);
    }
    die.appendChild(f);
  });
  dicewrap.appendChild(die); dice.push(die);
}
let tumbleRAF=null;
function startTumble(){
  const st=dice.map(()=>({x:rnd(0,360),y:rnd(0,360),z:rnd(0,360),
    vx:rnd(9,17),vy:rnd(9,17),vz:rnd(5,12)}));
  dice.forEach(d=>d.classList.add("tumbling"));
  const step=()=>{
    st.forEach((s,i)=>{s.x+=s.vx;s.y+=s.vy;s.z+=s.vz;
      dice[i].style.transform=`rotateX(${s.x}deg) rotateY(${s.y}deg) rotateZ(${s.z}deg)`;});
    tumbleRAF=requestAnimationFrame(step);
  };
  step();
}
function settleDice(vals){
  cancelAnimationFrame(tumbleRAF); tumbleRAF=null;
  dice.forEach((d,i)=>{
    d.classList.remove("tumbling");
    const [rx,ry]=FACEROT[vals[i]];
    // add full spins so it decelerates into place rather than snapping
    d.style.transform=`rotateX(${rx+720}deg) rotateY(${ry+720}deg) rotateZ(0deg)`;
  });
}
