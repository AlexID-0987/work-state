const list=[];

document.querySelector('button').onclick=()=>{
    let valueitem=document.querySelector('input').value;
    list.push(valueitem);
    draw();miltip();
}

function draw(){
    let str='', str1=''
    for (let i=0;i<list.length;i++)
    {
        str+=`<li>${list[i]}</li>`
        str1+=`<tr>${list[i]}</tr>`
    }
    document.querySelector('span').innerHTML=str;
    document.querySelector('tbody').innerHTML=str1;
}
function miltip(){
    let a=''
    if(!!list){
    a=45*78
    }
    document.querySelector('h2').innerHTML=a;
}