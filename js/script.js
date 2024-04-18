// function dmode(){
//     let x=document.body;
//     x.classList.add("dark");
//     x.classList.remove("light");

    

// }
// function lmode(){
//     let x=document.body;
//     x.classList.add("light");
//     x.classList.remove("dark");
// }
const z=document.getElementById("ham");
function myfunc(){
    
    z.classList.toggle("change");
    document.querySelector("body").classList.toggle("blur");
    }
const y=document.querySelector(".cont");
const a=document.querySelector(".text");
z.addEventListener("click",()=> {
y.classList.toggle("active");


})
z.addEventListener("click",()=> {
  a.classList.toggle("active");  
  })


  const d=document.getElementById("hide");
  var p=document.getElementById("com");
  var q=document.getElementById("name");
  var r=document.getElementById("email");

  r.addEventListener("keyup",(e)=>{
    const email=e.currentTarget.value;
    var atposition=email.indexOf("@");  
var dotposition=email.lastIndexOf(".");  

   if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
      d.disabled=true;
    }
    else{
      d.disabled=false;
    }


  });




  
let c=document.body;
d.addEventListener("click",()=>{
    c.classList.add("hide");
    c.classList.add("show");

});
 






// let snip=document.querySelector(".snip");
// snip.querySelector(".copy-button").addEventListener("click",async()=>{
//   let input=snip.getElementById("#text");
  
//   input.ariaSelected();
//   try {
//     await navigator.clipboard.writeText(input.innerHTML);
//   } catch (err) {
//     console.error(err.name, err.message);
//   }
//   document.execCommand("copy");
//   snip.classList.add("copied");
//   window.getSelection().removeAllRanges();
//   setTimeout(function(){
//     snip.classList.remove("copied");

//   },2500);
// })
// var clipboard = new ClipboardJS('#copyButton', {
//   target: function(trigger) {
//       return trigger.previousElementSibling.querySelector('code');
//   }
// });



// clipboard.on('success', function(e) {
        
       
//   e.clearSelection();
//   console.log('Copied!');
// });

// clipboard.on('error', function(e) {
//   console.error('Failed to copy:', e.action);
// });

// contents.forEach(function(content) {
     
//   content.classList.remove('showcode');
//  // if (content.className='cpp-code') content.classList.add('notcode')
//   document.querySelector('.cpp-code').classList.add('notcode')
// });



// clipboard1.for_each(function(clip){
//   clip.on('success', function(e) {
//       copying();
//       console.log('Copied content 1:', e.text);
//   });
//   clip.on('error', function(e) {
//       console.error('Failed to copy content 1:', e.action);
//   });

// })
// clipboard1.on('success', function(e) {
//   copying();
//   console.log('Copied content 1:', e.text);
// });
// clipboard1.on('error', function(e) {
//   console.error('Failed to copy content 1:', e.action);
// });

// // Handle success and error events for button 2
// clipboard2.on('success', function(e) {
//   copying();
//   console.log('Copied content 2:', e.text);
// });
// clipboard2.on('error', function(e) {
//   console.error('Failed to copy content 2:', e.action);
// });

// clipboard3.on('success', function(e) {
//   copying();
//   console.log('Copied content 3:', e.text);
// });
// clipboard3.on('error', function(e) {
//   console.error('Failed to copy content 3:', e.action);
// });

// // Handle success and error events for button 2
// clipboard4.on('success', function(e) {
//   copying();
//   console.log('Copied content 4:', e.text);
// });
// clipboard4.on('error', function(e) {
//   console.error('Failed to copy content 4:', e.action);
// });
// var clipboard = new ClipboardJS('#copyButton', {
// target: function(trigger) {
// return trigger.previousElementSibling.querySelector('content-code');
// }
// });
// let snip=document.querySelector(".snip");
// var clipboard1 = new ClipboardJS('.copy-but1');
// var clipboard2 = new ClipboardJS('.copy-but2');
// var clipboard3 = new ClipboardJS('.copy-but3');
// var clipboard4 = new ClipboardJS('.copy-but4');
   /* if (id=='java3' || id=='py3' || id=='asm3' ) {document.querySelector('#cpp3').classList.add('notcode')
    document.querySelector('#cpp1').classList.remove('notcode')
    document.querySelector('#cpp2').classList.remove('notcode')
    document.querySelector('#cpp4').classList.remove('notcode')
    document.querySelector('#cpp5').classList.remove('notcode')
}
else if (id=='java4' || id=='py4' || id=='asm4' ) {document.querySelector('#cpp4').classList.add('notcode')
document.querySelector('#cpp1').classList.remove('notcode')
document.querySelector('#cpp2').classList.remove('notcode')
document.querySelector('#cpp3').classList.remove('notcode')
document.querySelector('#cpp5').classList.remove('notcode')
}
else if (id=='java5' || id=='py5' || id=='asm5' ) {document.querySelector('#cpp5').classList.add('notcode')
    document.querySelector('#cpp1').classList.remove('notcode')
    document.querySelector('#cpp2').classList.remove('notcode')
    document.querySelector('#cpp3').classList.remove('notcode')
    document.querySelector('#cpp4').classList.remove('notcode')

}
    else console.log('false')
*/