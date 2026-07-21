document.querySelectorAll('[data-filter]').forEach(function(button){
  button.addEventListener('click',function(){
    var selected=button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(function(item){item.classList.toggle('active',item===button);});
    document.querySelectorAll('.works article').forEach(function(item){
      item.hidden=selected!=='All'&&item.dataset.category!==selected;
    });
  });
});

var contactForm=document.getElementById('contact-form');
var submitButton=contactForm.querySelector('button[type="submit"],button');
var defaultButtonText=submitButton.textContent;

contactForm.addEventListener('submit',async function(event){
  event.preventDefault();
  if(!contactForm.reportValidity()) return;
  submitButton.disabled=true;
  submitButton.textContent='SENDING...';
  var data=new FormData(contactForm);
  data.append('_subject','New ChessMedia project inquiry');
  data.append('_template','table');
  data.append('_captcha','false');
  data.append('_next','https://chessmedia.us/?contact=sent#contact');
  try{
    var response=await fetch('https://formsubmit.co/ajax/chessmediany@gmail.com',{
      method:'POST',
      headers:{'Accept':'application/json'},
      body:data
    });
    var result=await response.json();
    if(!response.ok||result.success===false) throw new Error('Submission failed');
    contactForm.reset();
    submitButton.textContent='MESSAGE SENT ✓';
  }catch(error){
    submitButton.disabled=false;
    submitButton.textContent='TRY AGAIN';
    window.alert('We could not send your message. Please email chessmediany@gmail.com directly.');
    window.setTimeout(function(){submitButton.textContent=defaultButtonText;},3000);
  }
});


// Animated chess opening
(()=>{const intro=document.querySelector("#chessIntro");if(!intro)return;const steps=[{piece:"♔",title:"KING",line:"OF MARKETING",note:"Strategy leads every winning move."},{piece:"♕",title:"QUEEN",line:"OF CREATIVITY",note:"Ideas with the power to command attention."},{piece:"♖",title:"ROOK",line:"OF BRAND BUILDING",note:"Strong foundations. Unmistakable presence."},{piece:"♗",title:"BISHOP",line:"OF STRATEGY",note:"The sharp angle that opens new opportunity."},{piece:"♘",title:"KNIGHT",line:"OF BOLD MOVES",note:"Unexpected thinking that changes the board."},{piece:"♙",title:"PAWN",line:"OF POSSIBILITY",note:"Every great brand begins with one move."}];const piece=intro.querySelector("[data-intro-piece]");const kicker=intro.querySelector("[data-intro-kicker]");const title=intro.querySelector("[data-intro-title]");const line=intro.querySelector("[data-intro-line]");const note=intro.querySelector("[data-intro-note]");const copy=intro.querySelector(".introCopy");const rail=[...intro.querySelectorAll(".introRail span")];let index=0,timer,closed=false;document.documentElement.classList.add("introRunning");const render=()=>{const step=steps[index];piece.textContent=step.piece;kicker.textContent=String(index+1).padStart(2,"0")+" — "+step.title;title.textContent=step.title;line.textContent=step.line;note.textContent=step.note;rail.forEach((item,i)=>item.classList.toggle("active",i===index));piece.classList.remove("pulse");copy.classList.remove("swap");void piece.offsetWidth;piece.classList.add("pulse");copy.classList.add("swap")};const close=()=>{if(closed)return;closed=true;clearInterval(timer);intro.classList.add("isLeaving");document.documentElement.classList.remove("introRunning");setTimeout(()=>{intro.remove();window.dispatchEvent(new Event("chessIntroComplete"))},850)};intro.querySelector(".introSkip").addEventListener("click",close);if(matchMedia("(prefers-reduced-motion: reduce)").matches){setTimeout(close,500);return}render();timer=setInterval(()=>{index+=1;if(index>=steps.length){clearInterval(timer);setTimeout(close,650);return}render()},700);setTimeout(close,5200)})();


// Animated achievement counters
(()=>{const counters=[...document.querySelectorAll(".stats b")];if(!counters.length)return;const reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;const prepared=counters.map(el=>{const original=el.textContent.trim();const value=parseInt(original,10);const suffix=original.replace(/[0-9]/g,"");el.textContent="0"+suffix;el.style.fontVariantNumeric="tabular-nums";return{el,value,suffix}});let started=false;const animate=()=>{if(started)return;started=true;const duration=1500;prepared.forEach(({el,value,suffix})=>{if(reduced){el.textContent=value+suffix;return}const start=performance.now();const frame=now=>{const progress=Math.min((now-start)/duration,1);const eased=1-Math.pow(1-progress,4);el.textContent=Math.round(value*eased)+suffix;if(progress<1)requestAnimationFrame(frame)};requestAnimationFrame(frame)})};const observe=()=>{const stats=document.querySelector(".stats");if(!stats){animate();return}const observer=new IntersectionObserver(entries=>{if(entries.some(entry=>entry.isIntersecting)){observer.disconnect();animate()}},{threshold:.45});observer.observe(stats)};if(document.querySelector("#chessIntro"))window.addEventListener("chessIntroComplete",observe,{once:true});else observe()})();
