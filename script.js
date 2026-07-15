document.querySelectorAll('[data-filter]').forEach(function(button){
  button.addEventListener('click',function(){
    var selected=button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(function(item){item.classList.toggle('active',item===button);});
    document.querySelectorAll('.works article').forEach(function(item){
      item.hidden=selected!=='All'&&item.dataset.category!==selected;
    });
  });
});
document.getElementById('contact-form').addEventListener('submit',function(event){
  event.preventDefault();
  var data=new FormData(event.currentTarget);
  var subject='ChessMedia project inquiry from '+data.get('name');
  var body=['Name: '+data.get('name'),'Email: '+data.get('email'),'Company: '+(data.get('company')||''),'Phone: '+(data.get('phone')||''),'','Project details:',''+data.get('message')].join('\n');
  window.location.href='mailto:chessmediany@gmail.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
});
