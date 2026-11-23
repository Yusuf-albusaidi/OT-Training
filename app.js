(function(){
"use strict";
var KEY="squh_ot_training_v1";
var S=window.SITE, M=window.MODULES;
var app=document.getElementById("app");

/* ---------- helpers ---------- */
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function md(s){return esc(s).replace(/\*\*(.+?)\*\*/g,"<b>$1</b>")}
function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t}return a}
function load(){try{var s=JSON.parse(localStorage.getItem(KEY));if(s&&s.mods)return s}catch(e){}return {name:"",staffId:"",mods:{},exam:null}}
var st=load();
function save(){try{localStorage.setItem(KEY,JSON.stringify(st))}catch(e){}}
function modState(id){return st.mods[id]||(st.mods[id]={learned:false,best:0,passed:false,attempts:0})}
function passedCount(){return M.filter(function(m){return modState(m.id).passed}).length}
function allPassed(){return M.length>0&&passedCount()===M.length}
function byId(id){return M.filter(function(m){return m.id===id})[0]}
function fmtDate(iso){var d=new Date(iso);return d.toLocaleDateString("en-GB",{day:"2-digit",month:"long",year:"numeric"})}
function hash(str){var h=0;for(var i=0;i<str.length;i++){h=(h*31+str.charCodeAt(i))>>>0}return h.toString(36).toUpperCase().padStart(6,"0").slice(-6)}
function pct(a,b){return Math.round(a/b*100)}

/* ---------- header / footer ---------- */
function renderChrome(){
  var w=document.getElementById("who");
  w.innerHTML=st.name?("<b>"+esc(st.name)+"</b> · ID "+esc(st.staffId)+' <a class="btn sm" href="#/profile">Edit</a>'):'<a class="btn sm" href="#/profile">Enter your details</a>';
  document.getElementById("foot").innerHTML=esc(S.credit)+' · <a href="#" id="reset">Reset my progress on this device</a>';
  document.getElementById("reset").onclick=function(e){e.preventDefault();if(confirm("Delete all progress and details saved on this device?")){localStorage.removeItem(KEY);st=load();location.hash="#/";route()}};
}

/* ---------- home ---------- */
function statusBadge(m){var s=modState(m.id);if(s.passed)return '<span class="badge ok">Passed · '+s.best+'%</span>';if(s.learned||s.attempts)return '<span class="badge prog">In progress</span>';return '<span class="badge">Not started</span>'}
function modCard(m){
  return '<a class="card mod" href="#/m/'+m.id+'"><span class="code">'+esc(m.code)+'</span><h3>'+esc(m.title)+'</h3><p>'+esc(m.summary)+'</p><div class="meta"><span>'+m.lessons.length+' lessons · '+m.questions.length+' questions · ~'+m.minutes+' min</span>'+statusBadge(m)+'</div></a>';
}
function section(title,sec,emptyMsg){
  var list=M.filter(function(m){return m.section===sec});
  return '<h2>'+title+'</h2>'+(list.length?'<div class="grid">'+list.map(modCard).join("")+'</div>':'<div class="empty">'+emptyMsg+'</div>');
}
function home(){
  var done=passedCount()+(st.exam&&st.exam.passed?1:0), total=M.length+1;
  var h='<h1>Welcome</h1><p class="lead">Learn each policy and work instruction, pass the short quiz (<b>'+S.passMark+'%</b>), then take the final exam to earn your <b>theory certificate</b>.</p>';
  if(!st.name)h+='<div class="card"><b>Step 1:</b> enter your name and staff ID so it appears on your certificate. <a class="btn sm" href="#/profile">Enter details</a></div><br>';
  h+='<div class="card"><div class="row" style="justify-content:space-between"><b>Your progress</b><span>'+passedCount()+' of '+M.length+' modules passed'+(st.exam&&st.exam.passed?' · exam passed':'')+'</span></div><div class="bar" style="margin-top:8px"><i style="width:'+pct(done,total)+'%"></i></div></div>';
  h+=section("Must Know Policies","policy","Policy modules will appear here.");
  h+=section("OT Work Instructions","wi","No work instructions yet.");
  var ok=allPassed();
  h+='<h2>Final exam and certificate</h2><div class="grid">'+
   '<div class="card mod"><span class="code">FINAL EXAM</span><h3>'+S.examQuestions+'-question exam</h3><p>Questions are drawn from every module. Pass mark '+S.passMark+'%. Unlimited retries.</p><div class="meta">'+(st.exam&&st.exam.passed?'<span class="badge ok">Passed · '+st.exam.best+'%</span>':(ok?'<span class="badge prog">Ready</span>':'<span class="badge lock">Locked – pass all modules</span>'))+'<a class="btn sm" '+(ok?'href="#/exam"':'style="pointer-events:none;opacity:.5"')+'>Start</a></div></div>'+
   '<div class="card mod"><span class="code">CERTIFICATE</span><h3>Theory completion certificate</h3><p>Printable. To be signed by the Head Nurse. Theory only – practical competency is assessed by your supervisor.</p><div class="meta">'+(st.exam&&st.exam.passed?'<span class="badge ok">Available</span>':'<span class="badge lock">Locked</span>')+'<a class="btn sm" '+(st.exam&&st.exam.passed?'href="#/cert"':'style="pointer-events:none;opacity:.5"')+'>Open</a></div></div></div>';
  app.innerHTML=h;
}

/* ---------- profile ---------- */
function profile(){
  app.innerHTML='<h1>Your details</h1><div class="card"><p class="lead">These appear on your certificate and are saved only on this device.</p><div class="formgrid"><div><label for="n">Full name</label><input type="text" id="n" value="'+esc(st.name)+'" autocomplete="name"></div><div><label for="i">Staff ID</label><input type="text" id="i" value="'+esc(st.staffId)+'"></div></div><br><button class="btn" id="sv">Save</button> <a class="btn ghost" href="#/">Cancel</a></div>';
  document.getElementById("sv").onclick=function(){var n=document.getElementById("n").value.trim(),i=document.getElementById("i").value.trim();if(!n||!i){alert("Please enter both your full name and staff ID.");return}st.name=n;st.staffId=i;save();location.hash="#/"};
}

/* ---------- module / lessons ---------- */
var lessonIdx={};
function practicalBlock(m){
  if(!m.practical)return "";
  return '<div class="prac"><b>Practical competency reference</b> – '+esc(m.practical.title)+'<p class="small" style="margin:6px 0">'+esc(m.practical.note||"Assessed in the department by your supervisor. This is not part of the theory certificate.")+'</p><ul>'+m.practical.items.map(function(x){return '<li>'+esc(x)+'</li>'}).join("")+'</ul></div>';
}
function module(id){
  var m=byId(id);if(!m){location.hash="#/";return}
  var s=modState(id), i=(lessonIdx[id]===undefined)?-1:lessonIdx[id];
  var h='<div class="crumb"><a href="#/">Home</a> › '+esc(m.code)+'</div>';
  if(i<0){
    h+='<h1>'+esc(m.title)+'</h1><p class="lead">'+esc(m.summary)+'</p><div class="card"><div class="row"><span><b>Source:</b> '+esc(m.doc)+'</span></div><div style="margin-top:6px"><b>Responsible:</b> '+esc(m.owner)+'</div></div><h2>Must-know numbers</h2><div class="facts">'+m.facts.map(function(f){return '<div class="fact"><small>'+esc(f.k)+'</small><b>'+esc(f.v)+'</b></div>'}).join("")+'</div>'+practicalBlock(m)+'<br><div class="row"><button class="btn" id="go">'+(s.learned?"Review lessons":"Start lessons")+'</button>'+(s.learned?'<a class="btn ghost" href="#/m/'+id+'/quiz">Go to quiz</a>':'')+'</div>';
    app.innerHTML=h;document.getElementById("go").onclick=function(){lessonIdx[id]=0;module(id)};return;
  }
  var L=m.lessons[i], last=i===m.lessons.length-1;
  h+='<div class="steps">'+m.lessons.map(function(_,k){return '<i class="'+(k<i?"done":k===i?"cur":"")+'"></i>'}).join("")+'</div><div class="card lesson"><small style="color:var(--mut)">Lesson '+(i+1)+' of '+m.lessons.length+'</small><h2>'+esc(L.title)+'</h2>';
  if(L.body)h+='<p>'+md(L.body)+'</p>';
  if(L.points)h+='<ul>'+L.points.map(function(p){return '<li>'+md(p)+'</li>'}).join("")+'</ul>';
  if(L.steps)h+='<ol>'+L.steps.map(function(p){return '<li>'+md(p)+'</li>'}).join("")+'</ol>';
  if(L.why)h+='<div class="why"><b>Why?</b> '+md(L.why)+'</div>';
  h+='</div><br><div class="row" style="justify-content:space-between"><button class="btn ghost" id="pv">← Back</button>'+(last?'<button class="btn" id="nx">Finish lessons</button>':'<button class="btn" id="nx">Next →</button>')+'</div>';
  app.innerHTML=h;
  document.getElementById("pv").onclick=function(){lessonIdx[id]=i-1;module(id);window.scrollTo(0,0)};
  document.getElementById("nx").onclick=function(){
    if(last){s.learned=true;save();lessonIdx[id]=-1;
      app.innerHTML='<div class="crumb"><a href="#/">Home</a> › '+esc(m.code)+'</div><div class="card" style="text-align:center"><h1>Lessons complete</h1><p>Ready to test yourself? You need <b>'+S.passMark+'%</b> to pass. You can retry as many times as you like.</p>'+practicalBlock(m)+'<br><a class="btn" href="#/m/'+id+'/quiz">Start the quiz</a> <button class="btn ghost" id="rv">Review lessons</button></div>';
      document.getElementById("rv").onclick=function(){lessonIdx[id]=0;module(id)};
    } else {lessonIdx[id]=i+1;module(id)}
    window.scrollTo(0,0);
  };
}

/* ---------- quiz engine ---------- */
function runQuiz(opts){
  var qs=shuffle(opts.pool).slice(0,opts.count).map(function(q){
    var idx=shuffle(q.o.map(function(_,k){return k}));
    return {q:q.q,o:idx.map(function(k){return q.o[k]}),a:idx.indexOf(q.a),why:q.why,mod:q.mod};
  });
  var n=0,score=0,answers=[];
  function show(){
    var q=qs[n],picked=null;
    var h='<div class="crumb"><a href="#/">Home</a> › '+esc(opts.title)+'</div><div class="card"><div class="qhead"><span>Question '+(n+1)+' of '+qs.length+'</span><span>'+score+' correct so far</span></div><div class="bar"><i style="width:'+pct(n,qs.length)+'%"></i></div><p class="q">'+esc(q.q)+'</p><div id="opts">'+q.o.map(function(t,k){return '<button class="opt" data-k="'+k+'">'+esc(t)+'</button>'}).join("")+'</div><div id="fb"></div><br><button class="btn" id="nx" disabled>'+(opts.instant?"Check answer":"Next")+'</button></div>';
    app.innerHTML=h;window.scrollTo(0,0);
    var btns=app.querySelectorAll(".opt"),nx=document.getElementById("nx"),checked=false;
    btns.forEach(function(b){b.onclick=function(){if(checked)return;picked=+b.dataset.k;btns.forEach(function(x){x.classList.remove("sel")});b.classList.add("sel");nx.disabled=false}});
    nx.onclick=function(){
      if(opts.instant&&!checked){
        checked=true;var ok=picked===q.a;
        btns.forEach(function(b,k){b.disabled=true;if(k===q.a)b.classList.add("right");else if(k===picked)b.classList.add("wrong")});
        document.getElementById("fb").innerHTML='<div class="fb '+(ok?"ok":"bad")+'"><b>'+(ok?"Correct.":"Not quite.")+'</b> '+esc(q.why)+'</div>';
        nx.textContent=(n===qs.length-1)?"See results":"Next question";return;
      }
      if(picked===q.a)score++;answers.push({q:q,picked:picked});
      n++;if(n<qs.length)show();else finish();
    };
  }
  function finish(){
    var p=pct(score,qs.length),pass=p>=S.passMark;
    opts.onDone(p,pass);
    var h='<div class="crumb"><a href="#/">Home</a> › '+esc(opts.title)+'</div><div class="card" style="text-align:center"><p class="score '+(pass?"ok":"bad")+'">'+p+'%</p><h2 style="margin-top:0">'+(pass?"Passed":"Not passed yet")+'</h2><p>'+score+' of '+qs.length+' correct · pass mark '+S.passMark+'%</p><div class="row" style="justify-content:center">'+opts.after(pass)+'</div></div>';
    var wrong=answers.filter(function(a){return a.picked!==a.q.a});
    if(wrong.length){h+='<h2>Review your mistakes</h2><div class="card">'+wrong.map(function(a){return '<div class="rev"><b>'+esc(a.q.q)+'</b><br><b class="x">Your answer:</b> '+esc(a.q.o[a.picked])+'<br><b class="v">Correct answer:</b> '+esc(a.q.o[a.q.a])+'<br><span style="color:var(--mut)">'+esc(a.q.why)+'</span></div>'}).join("")+'</div>'}
    app.innerHTML=h;window.scrollTo(0,0);
    var rt=document.getElementById("retry");if(rt)rt.onclick=function(){runQuiz(opts)};
  }
  show();
}
function moduleQuiz(id){
  var m=byId(id);if(!m){location.hash="#/";return}
  var s=modState(id);
  if(!s.learned){location.hash="#/m/"+id;return}
  runQuiz({title:m.code+" quiz",pool:m.questions,count:Math.min(8,m.questions.length),instant:true,
    onDone:function(p,pass){s.attempts++;if(p>s.best)s.best=p;if(pass)s.passed=true;save()},
    after:function(pass){return (pass?'':'<button class="btn" id="retry">Try again</button> <a class="btn ghost" href="#/m/'+id+'">Review lessons</a>')+'<a class="btn'+(pass?'':' ghost')+'" href="#/">'+(pass?"Back to modules":"Home")+'</a>'}});
}
function exam(){
  if(!allPassed()){location.hash="#/";return}
  var pool=[];M.forEach(function(m){m.questions.forEach(function(q){pool.push({q:q.q,o:q.o,a:q.a,why:q.why,mod:m.id})})});
  // balance: draw evenly across modules first
  var per=Math.max(1,Math.floor(S.examQuestions/M.length)),pick=[],rest=[];
  M.forEach(function(m){var p=shuffle(pool.filter(function(q){return q.mod===m.id}));pick=pick.concat(p.slice(0,per));rest=rest.concat(p.slice(per))});
  pick=pick.concat(shuffle(rest).slice(0,Math.max(0,S.examQuestions-pick.length)));
  runQuiz({title:"Final exam",pool:pick,count:S.examQuestions,instant:false,
    onDone:function(p,pass){var e=st.exam||(st.exam={best:0,passed:false,attempts:0});e.attempts++;if(p>e.best)e.best=p;if(pass&&!e.passed){e.passed=true;e.date=new Date().toISOString();e.score=p}save()},
    after:function(pass){return pass?'<a class="btn" href="#/cert">Open my certificate</a> <a class="btn ghost" href="#/">Home</a>':'<button class="btn" id="retry">Retake exam</button> <a class="btn ghost" href="#/">Review modules</a>'}});
}

/* ---------- certificate ---------- */
function cert(){
  if(!(st.exam&&st.exam.passed)){location.hash="#/";return}
  if(!st.name||!st.staffId){location.hash="#/profile";return}
  var date=fmtDate(st.exam.date), no="OT-"+st.exam.date.slice(0,10).replace(/-/g,"")+"-"+hash(st.name+"|"+st.staffId+"|"+st.exam.date+"|"+st.exam.score);
  var list=M.map(function(m){return '<div>• '+esc(m.code)+' – '+esc(m.title)+'</div>'}).join("");
  app.innerHTML='<div class="no-print row" style="margin-bottom:14px"><button class="btn" onclick="window.print()">Print certificate</button><a class="btn ghost" href="#/">Back</a><span class="small" style="color:var(--mut)">Tip: choose “A4 · Landscape” and tick “Background graphics” off. Then give it to the Head Nurse to sign.</span></div>'+
  '<div class="cert"><div><div class="org">'+esc(S.hospital)+' · '+esc(S.department)+'</div><h1>Certificate of Theory Completion</h1><p>This is to certify that</p><div class="nm">'+esc(st.name)+'</div><p class="small">Staff ID: '+esc(st.staffId)+'</p></div>'+
  '<div><p>has successfully completed the <b>'+esc(S.title)+'</b> and passed the final theory examination with a score of <b>'+st.exam.score+'%</b> on <b>'+date+'</b>.</p><div class="mods">'+list+'</div><p><span class="theory">THEORY ONLY – practical competency is assessed and signed off in the department by the supervisor</span></p></div>'+
  '<div><div class="sigs"><div class="sig">Head Nurse (name &amp; signature)</div><div class="sig">Date signed</div></div><p class="small" style="margin-top:12px">Certificate No. '+esc(no)+' · '+esc(S.credit)+'</p></div></div>';
}

/* ---------- router ---------- */
function route(){
  var h=location.hash||"#/", p=h.replace(/^#\/?/,"").split("/");
  renderChrome();
  if(p[0]===""||p[0]==="home")return home();
  if(p[0]==="profile")return profile();
  if(p[0]==="m"&&p[2]==="quiz")return moduleQuiz(p[1]);
  if(p[0]==="m")return module(p[1]);
  if(p[0]==="exam")return exam();
  if(p[0]==="cert")return cert();
  home();
}
window.addEventListener("hashchange",route);
route();
})();
