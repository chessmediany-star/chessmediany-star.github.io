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


// Rotating chess messages in the hero image
(()=>{const wrap=document.querySelector(".heroChessMessages");if(!wrap)return;const steps=[{piece:"♔",title:"KING",line:"OF MARKETING",note:"Strategy leads every winning move."},{piece:"♕",title:"QUEEN",line:"OF CREATIVITY",note:"Ideas with the power to command attention."},{piece:"♖",title:"ROOK",line:"OF BRAND BUILDING",note:"Strong foundations. Unmistakable presence."},{piece:"♗",title:"BISHOP",line:"OF STRATEGY",note:"The sharp angle that opens new opportunity."},{piece:"♘",title:"KNIGHT",line:"OF BOLD MOVES",note:"Unexpected thinking that changes the board."},{piece:"♙",title:"PAWN",line:"OF POSSIBILITY",note:"Every great brand begins with one move."}];const piece=wrap.querySelector("[data-hero-piece]");const kicker=wrap.querySelector("[data-hero-kicker]");const title=wrap.querySelector("[data-hero-title]");const line=wrap.querySelector("[data-hero-line]");const note=wrap.querySelector("[data-hero-note]");const dots=[...wrap.querySelectorAll(".heroChessDots i")];let index=0;const render=()=>{const step=steps[index];piece.textContent=step.piece;kicker.textContent=String(index+1).padStart(2,"0")+" — "+step.title;title.textContent=step.title;line.textContent=step.line;note.textContent=step.note;dots.forEach((dot,i)=>dot.classList.toggle("active",i===index));wrap.classList.remove("isSwapping");void wrap.offsetWidth;wrap.classList.add("isSwapping")};render();if(!matchMedia("(prefers-reduced-motion: reduce)").matches)setInterval(()=>{index=(index+1)%steps.length;render()},1700)})();

// Animated achievement counters
(()=>{const counters=[...document.querySelectorAll(".stats b")];if(!counters.length)return;const reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;const prepared=counters.map(el=>{const original=el.textContent.trim();const value=parseInt(original,10);const suffix=original.replace(/[0-9]/g,"");el.textContent="0"+suffix;el.style.fontVariantNumeric="tabular-nums";return{el,value,suffix}});let started=false;const animate=()=>{if(started)return;started=true;const duration=1500;prepared.forEach(({el,value,suffix})=>{if(reduced){el.textContent=value+suffix;return}const start=performance.now();const frame=now=>{const progress=Math.min((now-start)/duration,1);const eased=1-Math.pow(1-progress,4);el.textContent=Math.round(value*eased)+suffix;if(progress<1)requestAnimationFrame(frame)};requestAnimationFrame(frame)})};const observe=()=>{const stats=document.querySelector(".stats");if(!stats){animate();return}const observer=new IntersectionObserver(entries=>{if(entries.some(entry=>entry.isIntersecting)){observer.disconnect();animate()}},{threshold:.45});observer.observe(stats)};if(document.querySelector("#chessIntro"))window.addEventListener("chessIntroComplete",observe,{once:true});else observe()})();
