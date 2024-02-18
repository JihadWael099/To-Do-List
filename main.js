let input=document.getElementById('input');
let listcontainer=document.getElementById('list-container');
function addTask(){
   if(input.value==='')
   {
    alert('You Must type something first');
   }
   else
   {
    let span=document.createElement('span');
    let li=document.createElement('li');
     li.innerHTML=input.value;
     listcontainer.appendChild(li);
     span.innerHTML='x';
     li.appendChild(span);
    
   }
   input.value='';
   savedata();

}
listcontainer.addEventListener('click',function(e){

    if(e.target.tagName==='LI')
    {
        e.target.classList.toggle('checked');
    }
    else if(e.target.tagName==='SPAN')
    {
        e.target.parentElement.remove();
    }
},false);
function savedata()
{
    localStorage.setItem('Data',listcontainer.innerHTML);
}



