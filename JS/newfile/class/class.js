// function getData(dataId, getNextData){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//         console.log("data", dataId);
//         resolve("success");
//         if(getNextData){
//             getNextData();
//         }
//         },4000);
//     });
// }

// const getPromise =()=>{
//     return new Promise ((resolve, reject)=>{
//        console.log("I am in promise ")
//        resolve("success"); 
//        reject("not found")  
//     });
// }

// let promise = getPromise();

// // promise.then((res)=>{
// //     console.log("promise fulfilled",res)
// // })

// promise.catch((err)=>{
//     console.log("rejected",err)
// })





// function asyncfunc1(){
//     return new Promise((resolve, reject)=>{
//        setTimeout(()=>{
//         console.log("some data1");
//         resolve("successs");
//        }, 4000);
//     });
// }

// function asyncfunc2(){
//     return new Promise((resolve, reject)=>{
//        setTimeout(()=>{
//         console.log("some data2");
//         resolve("successs");
//        }, 4000);
//     });
// }

// let p1 = asyncfunc1();
// p1.then((res)=>{
//     //console.log("fetching data 2..")
//     let p2 = asyncfunc2();
//     p2.then((res)=>{})
// })


function api(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        console.log("weather details");
        resolve(200);
        }, 2000);
    });
}

(async function getWeather(){
      await api();
})();
