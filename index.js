// // const arr = [
// //     'https://images.unsplash.com/photo-1662330287683-6032da28889c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60', 
// //     'https://images.unsplash.com/photo-1659535907680-0e219b46c01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60', 
// //     'https://images.unsplash.com/photo-1660899599007-771f97039eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60',
// //     'https://images.unsplash.com/photo-1662324580989-591a589c5e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60'
// //   ]
// //   const imageEl = document.querySelector('img');
// //   let num = 0;
// //   setInterval(function() {
// //     imageEl.setAttribute('src', arr[num]);
// //     num = (num + 1) % arr.length;
// //   }, 2000);
// // setInterval(()=>{
// //     console.log("C");
    
// // })
// // setTimeout(()=>{
// //     console.log("heheh");
    
// // })
// // console.log("A");
// // console.log("B");

// // setTimeout(()=>{
// //     console.log("C");
    
// // },10)
// // setTimeout(()=>{
// //     console.log("B");
    
// // },0)
// // setTimeout(()=>{
// //     console.log("C");
    
// // },1000)
// // console.log("A");


// function step1(fn){
//     setTimeout(()=>{
//         console.log("select3edddddd");
//         // console.log(fn);
//         fn()
        
//     },5000)
// }
// function step2(fn){
//     setTimeout(()=>{
//         console.log("filterrrrrr");
//         fn()
//     },4000)
// }
// function step3(fn){
//     setTimeout(()=>{
//         console.log("captions...");
//         fn()
//     },3000)
// }
// function step4(){
//     setTimeout(()=>{
//         console.log("post...");
//     },2000)
// }


// step1(function(){
//     step2(function(){
//         step3(function(){
//             step4()
//         })
//     })
// })

//    let p=   new Promise((res,rej)=>{
//     res()
//     // rej()
//        })
//        p.then(()=>{
//         console.log("hello");
        
//        }).catch((err)=>{
//         console.log(err);
        
//        })
//     //    console.log(p);
       






// function step1(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("selectttttt")
//             res()
//         },5000)
//     })
// }
// function step2(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("filtredddddddddd")
//             res()
//         },4000)
//     })
// }

// async function call(){
//   await  step1()
//   await  step2()
// }
// call()



//Api
 let h2=  document.querySelector("h2")
fetch("https://jsonplaceholder.typicode.com/todos").
then((data)=>{
    return data.json()

}).then((val)=>{
    console.log(val);
    h2.innerText=val[9].title
    
}).catch((err)=>{
    console.log(err);
    

})






// step1().then(()=>{
//     return step2().then(()=>{
//     })
// })

















































//   let img=  document.querySelector("img")
//   img.setAttribute("src","byeeee")
//   console.log(img.getAttribute("src"));
  