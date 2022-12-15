const toggleBtn = document.querySelector('.sidebar-toggle');
const aside = document.querySelector('.sidebar')
const closeBtn = document.querySelector('.close-btn');

toggleBtn.addEventListener('click',function(){
  aside.classList.toggle('show-sidebar');
})

closeBtn.addEventListener('click',function(){
  aside.classList.remove('show-sidebar')
})