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
