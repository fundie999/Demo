// Code 1
let body = document.querySelector('body');

let p1 = performance.now(); 
for(let i=1; i<=100; i++) {
    let para = document.createElement('p');
    para.innerText = "Paragraph " + i +  " with code 1";
    body.append(para);    
}
let p2 = performance.now();
console.log("Code 1 time: ", p2-p1);

// Code 2
let fragment = document.createDocumentFragment();

p1 = performance.now();
for(let i=1; i<=100; i++) {
    let para = document.createElement('p');
    para.innerText = "Paragraph " + i + " with code 2";
    fragment.append(para);
}
body.append(fragment);
p2 = performance.now();
console.log("Code 2 time: ", p2-p1);
// 