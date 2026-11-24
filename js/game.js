
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

/* ============ AUDIO ENGINE ============ */
const SFX=(()=>{
  let ctx=null, master=null, on=true, rattleTimer=null;
  const ambient={running:false,bus:null,nodes:[],timer:null,level:0.5,buf:null};
  const music={src:null,gain:null};   // reserved

  function init(){
    if(ctx) return ctx;
    ctx=new (window.AudioContext||window.webkitAudioContext)();
    master=ctx.createGain(); master.gain.value=0.55; master.connect(ctx.destination);
    return ctx;
  }
  // browsers block audio until a gesture; resume on first interaction
  function unlock(){ init(); if(ctx.state==="suspended") ctx.resume(); }

  // shared noise buffer, cheap and reused by every percussive hit
  let noiseBuf=null;
  function noise(){
    if(noiseBuf) return noiseBuf;
    const n=ctx.sampleRate*0.5, b=ctx.createBuffer(1,n,ctx.sampleRate), d=b.getChannelData(0);
    for(let i=0;i<n;i++) d[i]=Math.random()*2-1;
    noiseBuf=b; return b;
  }
  // percussive hit: noise -> bandpass -> shaped gain
  function hit({freq=1200,q=1,peak=0.5,dec=0.08,type="bandpass",dly=0}={}){
    if(!on||!ctx) return;
    const t=ctx.currentTime+dly;
    const src=ctx.createBufferSource(); src.buffer=noise();
    const f=ctx.createBiquadFilter(); f.type=type; f.frequency.value=freq; f.Q.value=q;
    const g=ctx.createGain();
    g.gain.setValueAtTime(0,t);
    g.gain.linearRampToValueAtTime(peak,t+0.001);
    g.gain.exponentialRampToValueAtTime(0.0001,t+dec);
    src.connect(f); f.connect(g); g.connect(master);
    src.start(t); src.stop(t+dec+0.02);
  }
  // pitched tone with ADSR
  function tone({freq=440,peak=0.3,a=0.01,d=0.1,s=0.2,r=0.3,type="sine",dly=0,detune=0}={}){
    if(!on||!ctx) return;
    const t=ctx.currentTime+dly;
    const o=ctx.createOscillator(); o.type=type; o.frequency.value=freq; o.detune.value=detune;
    const g=ctx.createGain();
    g.gain.setValueAtTime(0,t);
    g.gain.linearRampToValueAtTime(peak,t+a);
    g.gain.exponentialRampToValueAtTime(Math.max(peak*0.55,0.0001),t+a+d);
    g.gain.setValueAtTime(Math.max(peak*0.55,0.0001),t+a+d+s);
    g.gain.exponentialRampToValueAtTime(0.0001,t+a+d+s+r);
    o.connect(g); g.connect(master);
    o.start(t); o.stop(t+a+d+s+r+0.05);
  }

  const API={
    unlock,
    toggle(){ on=!on; if(on) unlock(); return on; },
    get enabled(){ return on; },

    // clay chip landing on felt: two quick clicks, second softer
    chip(){ hit({freq:2400,q:6,peak:0.45,dec:0.045});
            hit({freq:1500,q:4,peak:0.22,dec:0.06,dly:0.025}); },
    // chip lifted off the felt on undo
    undo(){ hit({freq:1800,q:5,peak:0.2,dec:0.05});
            tone({freq:520,peak:0.1,a:0.005,d:0.05,s:0,r:0.08,type:"triangle"}); },
    // denomination select
    click(){ hit({freq:3200,q:8,peak:0.18,dec:0.02}); },

    // continuous dice rattle inside the dome
    rattleStart(){
      if(!on||!ctx) return;
      const tick=()=>{
        if(!on){ rattleTimer=null; return; }   // re-check each iteration
        const n=1+Math.floor(Math.random()*2);
        for(let i=0;i<n;i++)
          hit({freq:900+Math.random()*2200,q:3+Math.random()*5,
               peak:0.16+Math.random()*0.2,dec:0.03+Math.random()*0.03,
               dly:Math.random()*0.05});
        rattleTimer=setTimeout(tick,45+Math.random()*70);
      };
      tick();
    },
    rattleStop(){ clearTimeout(rattleTimer); rattleTimer=null; },
    // dome motor spinning up
    domeOn(){ tone({freq:70,peak:0.14,a:0.15,d:0.2,s:3.0,r:0.3,type:"sawtooth"}); },
    // dice settling onto the base
    settle(){ [0,0.06,0.13].forEach((d,i)=>
      hit({freq:600+i*180,q:2,peak:0.4,dec:0.11,dly:d})); },

    // betting window opens, bright two note
    open(){ tone({freq:660,peak:0.22,a:0.01,d:0.08,s:0.05,r:0.18,type:"triangle"});
            tone({freq:990,peak:0.18,a:0.01,d:0.08,s:0.05,r:0.22,type:"triangle",dly:0.11}); },
    // betting closes, descending warn
    close(){ tone({freq:520,peak:0.26,a:0.005,d:0.09,s:0.04,r:0.16,type:"square"});
             tone({freq:390,peak:0.26,a:0.005,d:0.09,s:0.06,r:0.26,type:"square",dly:0.15}); },
    // last five seconds urgency tick
    tick(){ hit({freq:2600,q:10,peak:0.12,dec:0.02}); },

    // win, detuned major triad with a slight arpeggio
    win(){ [[523.25,0],[659.25,0.07],[783.99,0.14],[1046.5,0.21]].forEach(([f,d])=>{
             tone({freq:f,peak:0.26,a:0.01,d:0.12,s:0.22,r:0.5,type:"triangle",dly:d});
             tone({freq:f,peak:0.10,a:0.01,d:0.12,s:0.22,r:0.5,type:"sine",dly:d,detune:7}); }); },
    // big win, longer and adds an octave shimmer
    bigwin(){ API.win();
      [[1046.5,0.3],[1318.5,0.38],[1568,0.46],[2093,0.54]].forEach(([f,d])=>
        tone({freq:f,peak:0.16,a:0.01,d:0.1,s:0.3,r:0.7,type:"sine",dly:d})); },
    // no win, soft muted fall
    lose(){ tone({freq:330,peak:0.16,a:0.01,d:0.12,s:0.02,r:0.3,type:"sine"});
            tone({freq:247,peak:0.14,a:0.01,d:0.14,s:0.03,r:0.4,type:"sine",dly:0.13}); },
    // chips swept off the table
    sweep(){ hit({freq:1100,q:1.2,peak:0.3,dec:0.35,type:"bandpass"});
             hit({freq:700,q:0.8,peak:0.18,dec:0.4,type:"bandpass",dly:0.08}); },
    // rejected action
    deny(){ tone({freq:180,peak:0.24,a:0.004,d:0.06,s:0.02,r:0.1,type:"square"}); },

    /* ---- BACKGROUND MUSIC BED ---- */
    // the track lives in js/music.js as base64 so this works from file://
    // where fetch would hit cors. decoded once, then looped.
    // a low rumble layer sits underneath for room presence.
    async ambientStart(){
      if(!ctx||ambient.running) return;
      ambient.running=true;
      ambient.bus=ctx.createGain();
      ambient.bus.gain.value=0;
      ambient.bus.connect(master);

      // low room rumble under the music
      const bed=ctx.createBufferSource(); bed.buffer=noise(); bed.loop=true;
      const bedF=ctx.createBiquadFilter(); bedF.type="lowpass";
      bedF.frequency.value=140; bedF.Q.value=0.7;
      const bedG=ctx.createGain(); bedG.gain.value=0.14;
      bed.connect(bedF); bedF.connect(bedG); bedG.connect(ambient.bus);
      bed.start(); ambient.nodes.push(bed);

      // the music track itself
      try{
        if(!ambient.buf){
          const raw=atob(MUSIC_B64);
          const bytes=new Uint8Array(raw.length);
          for(let i=0;i<raw.length;i++) bytes[i]=raw.charCodeAt(i);
          ambient.buf=await ctx.decodeAudioData(bytes.buffer);
        }
        if(!ambient.running) return;           // muted while decoding
        const m=ctx.createBufferSource();
        m.buffer=ambient.buf; m.loop=true;
        const mg=ctx.createGain(); mg.gain.value=0.85;
        m.connect(mg); mg.connect(ambient.bus);
        m.start(); ambient.nodes.push(m);
      }catch(e){ console.warn("music decode failed:",e); }

      // fade the whole bed in
      ambient.bus.gain.linearRampToValueAtTime(ambient.level,ctx.currentTime+2.5);
    },
    ambientStop(){
      if(!ambient.running) return;
      ambient.running=false;
      clearTimeout(ambient.timer); ambient.timer=null;
      if(ambient.bus) ambient.bus.gain.linearRampToValueAtTime(0,ctx.currentTime+0.6);
      const nodes=ambient.nodes.slice(); ambient.nodes=[];
      setTimeout(()=>{ nodes.forEach(n=>{ try{n.stop();}catch(e){} }); },700);
    },
    // duck the ambient bed under the dice rattle / payout so they cut through
    duck(amount=0.35,secs=0.4){
      if(!ambient.bus||!ctx) return;
      ambient.bus.gain.cancelScheduledValues(ctx.currentTime);
      ambient.bus.gain.linearRampToValueAtTime(ambient.level*amount,ctx.currentTime+secs);
    },
    unduck(secs=1.2){
      if(!ambient.bus||!ctx) return;
      ambient.bus.gain.cancelScheduledValues(ctx.currentTime);
      ambient.bus.gain.linearRampToValueAtTime(ambient.level,ctx.currentTime+secs);
    },

    /* to swap the bed, re-encode and replace the string in js/music.js
         ffmpeg -i new.mp3 -t 60 -ac 1 -ar 32000 -b:a 40k out.mp3
         base64 -w0 out.mp3                                        */
    setMusicLevel(v){ ambient.level=Math.max(0,Math.min(1,v));
      if(ambient.bus&&ctx) ambient.bus.gain.linearRampToValueAtTime(ambient.level,ctx.currentTime+0.3); }
  };
  return API;
})();
// unlock audio on the first gesture anywhere, then fade the room in
["pointerdown","keydown"].forEach(e=>
  window.addEventListener(e,()=>{ SFX.unlock(); SFX.ambientStart(); },{once:true}));

/* ============ STATE ============ */
let balance=5000, sel=25, bets={}, history=[], chipEls=[], lastAction=[];
let locked=true;
const balv=$("#balv"), stakev=$("#stakev"), feltEl=$("#felt");
const fmt=n=>n.toLocaleString("en-US");
function totalStake(){return Object.values(bets).reduce((a,b)=>a+b,0);}
function sync(){
  balv.textContent=fmt(balance);
  stakev.textContent=fmt(totalStake());
  $("#undo").disabled=locked||lastAction.length===0;
}

const CHIPCOL={10:"#2f6fd0",25:"#1d8a4a",100:"#8a1d2c",500:"#5a2d8a"};
$$(".denom").forEach(d=>d.onclick=()=>{
  $$(".denom").forEach(x=>x.classList.remove("sel"));
  d.classList.add("sel"); sel=+d.dataset.v; SFX.click();
});

function flyChip(zoneEl,val){
  const stage=$("#stage").getBoundingClientRect();
  const from=$(".denom.sel").getBoundingClientRect();
  const to=zoneEl.getBoundingClientRect();
  const c=document.createElement("div"); c.className="chip fly";
  c.style.background=CHIPCOL[val]; c.textContent=val;
  c.style.left=(from.left-stage.left+from.width/2-15)+"px";
  c.style.top=(from.top-stage.top+from.height/2-15)+"px";
  $("#stage").appendChild(c); chipEls.push(c);
  const dx=(to.left-from.left)+(to.width-from.width)/2;
  const dy=(to.top-from.top)+(to.height-from.height)/2;
  requestAnimationFrame(()=>{ c.style.transform=`translate(${dx}px,${dy}px) scale(.9)`; });
  return c;
}

$$(".zone").forEach(z=>{
  z.onclick=()=>{
    if(locked){ SFX.deny(); return; }
    if(balance<sel){ SFX.deny(); flash("INSUFFICIENT BALANCE"); return; }
    const key=ALIAS[z.dataset.id]||z.dataset.id;
    balance-=sel; bets[key]=(bets[key]||0)+sel;
    const c=flyChip(z,sel);
    // chip lands at the end of its flight, not on click
    setTimeout(()=>SFX.chip(),480);
    lastAction.push({key,val:sel,el:c});
    sync();
  };
});
$("#undo").onclick=()=>{
  if(locked||!lastAction.length){ SFX.deny(); return; }
  SFX.undo();
  const a=lastAction.pop();
  bets[a.key]-=a.val; if(bets[a.key]<=0) delete bets[a.key];
  balance+=a.val; a.el.style.opacity="0";
  setTimeout(()=>a.el.remove(),400);
  chipEls=chipEls.filter(e=>e!==a.el);
  sync();
};
$("#mute").onclick=()=>{
  const on=SFX.toggle();
  $("#mute").textContent = on ? "SOUND ON" : "SOUND OFF";
  $("#mute").classList.toggle("off",!on);
  if(!on){ SFX.rattleStop(); SFX.ambientStop(); }
  else SFX.ambientStart();
};

function clearChips(){ chipEls.forEach(c=>{c.style.opacity="0";setTimeout(()=>c.remove(),450)}); chipEls=[]; }
function flash(t){ const el=$("#toast"); el.textContent=t;
  el.classList.remove("on"); void el.offsetWidth; el.classList.add("on"); }

/* ============ SETTLEMENT ============ */
function settle(v){
  const sum=v[0]+v[1]+v[2];
  const trip=v[0]===v[1]&&v[1]===v[2];
  const won={};
  const add=(k)=>{ if(bets[k]) won[k]=bets[k]*(PAY[k.startsWith("t")?+k.slice(1):k]||0); };
  if(!trip){
    if(sum>=4&&sum<=10&&bets.small) won.small=bets.small*PAY.small;
    if(sum>=11&&sum<=17&&bets.big) won.big=bets.big*PAY.big;
    if(sum%2===1&&bets.odd) won.odd=bets.odd*PAY.odd;
    if(sum%2===0&&bets.even) won.even=bets.even*PAY.even;
  }
  const tk="t"+sum;
  if(bets[tk]) won[tk]=bets[tk]*PAY[sum];
  if(trip){
    if(bets.any3) won.any3=bets.any3*PAY.any3;
    const sk="s"+v[0];
    if(bets[sk]) won[sk]=bets[sk]*PAY.spec3;
  }
  let payout=0;
  for(const k in won){ payout += won[k] + bets[k]; }   // winnings + returned stake
  return {sum,trip,won,payout};
}
function highlight(keys){
  $$(".zone").forEach(z=>{
    const k=ALIAS[z.dataset.id]||z.dataset.id;
    if(keys.includes(k)) z.classList.add("win");
  });
  setTimeout(()=>$$(".zone").forEach(z=>z.classList.remove("win")),4400);
}
function pushHistory(sum,trip){
  history.unshift({sum,trip}); history=history.slice(0,10);
  $("#hist").innerHTML=history.map(h=>
    `<div class="hchip ${h.trip?"t":(h.sum<=10?"s":"b")}">${h.sum}</div>`).join("");
}

/* ============ ROUND FSM ============ */
const PHASES=[
  {n:"BETTING",   ms:20000, msg:"Place your bets",        pose:"open",  lock:false},
  {n:"NO MORE BETS",ms:2200, msg:"Betting is closed",     pose:"stop",  lock:true},
  {n:"SHAKING",   ms:3600,  msg:"Rolling the dice",       pose:"rest",  lock:true},
  {n:"RESULT",    ms:1600,  msg:"Reading the dice",       pose:"point", lock:true},
  {n:"PAYOUT",    ms:4200,  msg:"Settling the table",     pose:"open",  lock:true},
];
let pi=0, tstart=0, roll=null, res=null, lastTick=-1;
const pname=$("#pname"), pmsg=$("#pmsg"), bar=$("#bar");

function enter(i){
  pi=i; const p=PHASES[i]; tstart=performance.now();
  pname.textContent=p.n; pmsg.textContent=p.msg;
  locked=p.lock; feltEl.classList.toggle("locked",locked);
  pose(p.pose); smile(p.n==="BETTING"||p.n==="PAYOUT");
  sync();

  if(p.n==="BETTING"){
    if(chipEls.length) SFX.sweep();
    clearChips(); bets={}; lastAction=[]; sync();
    SFX.open(); SFX.unduck(1.5);
  }
  if(p.n==="NO MORE BETS"){ SFX.close(); flash("NO MORE BETS"); }
  if(p.n==="SHAKING"){
    $("#dome").classList.add("shake"); startTumble();
    SFX.domeOn(); SFX.rattleStart(); SFX.duck(0.3,0.5);
  }
  if(p.n==="RESULT"){
    $("#dome").classList.remove("shake");
    SFX.rattleStop(); SFX.settle();
    roll=[1,2,3].map(()=>1+Math.floor(Math.random()*6));
    settleDice(roll);
    res=settle(roll);
  }
  if(p.n==="PAYOUT"){
    const {sum,trip,won,payout}=res;
    pushHistory(sum,trip);
    const keys=Object.keys(won);
    if(keys.length) highlight(keys);
    balance+=payout; sync();
    const staked=totalStake();
    const net=payout-staked;
    pmsg.textContent = `Total ${sum} · ${trip?"TRIPLE":(sum<=10?"SMALL":"BIG")} · ${sum%2?"ODD":"EVEN"}`;
    if(payout>0){
      // 5x the stake or better gets the extended fanfare
      if(payout >= staked*5) SFX.bigwin(); else SFX.win();
      flash("WIN  +"+fmt(payout));
    }
    else if(staked>0){ SFX.lose(); flash("NO WIN"); }
    if(balance<10 && staked===0){ balance=1000; setTimeout(()=>flash("REBUY 1,000"),1600); sync(); }
  }
}
function loop(now){
  const p=PHASES[pi], el=now-tstart, f=Math.min(el/p.ms,1);
  bar.style.transform=`scaleX(${p.n==="BETTING"?1-f:f})`;
  bar.style.background = (p.n==="BETTING" && f>.72) ? "#ff3b46" : "var(--gold)";
  if(p.n==="BETTING"){
    const left=Math.ceil((p.ms-el)/1000);
    pmsg.textContent=`Place your bets ${left}s`;
    // gate to one tick per second, only in the last 5
    if(left<=5 && left>0 && left!==lastTick){ lastTick=left; SFX.tick(); }
  }
  if(f>=1){ lastTick=-1; enter((pi+1)%PHASES.length); }
  requestAnimationFrame(loop);
}
// stream clock
let t0=Date.now();
setInterval(()=>{ const s=Math.floor((Date.now()-t0)/1000);
  $("#clock").textContent=String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0"); },1000);

sync(); enter(0); requestAnimationFrame(loop);
