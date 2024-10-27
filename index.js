let eduList = document.getElementById('eduList');      //unordered of education
let btn01 = document.getElementById('btn01');         //education button
btn01.addEventListener('click',function(){
    if(eduList.style.display == 'block'){
        eduList.style.display = 'none';
        btn01.innerHTML = 'Show Education';
    }
    else {
        eduList.style.display = 'block';
        btn01.innerHTML = 'Hide Education'
    }
})


let skillsList = document.getElementById('skillsList');  //unordered of skills
let btn02 = document.getElementById('btn02');           // button
btn02.addEventListener('click',function(){
    if(skillsList.style.display == 'block'){
        skillsList.style.display = 'none';
        btn02.innerHTML = 'Show Skills';
    }
    else {
        skillsList.style.display = 'block'
        btn02.innerHTML = 'Hide Skills'
    }
})


let expList = document.getElementById('expList');       //list of experiance
let btn03 = document.getElementById('btn03');           //button
btn03.addEventListener('click',function(){
    if(expList.style.display == 'block'){
       expList.style.display = 'none'
        btn03.innerHTML = 'Show Experiance';
    }
    else {
        expList.style.display = 'block';
        btn03.innerHTML = 'Hide Experiance';
    }
})