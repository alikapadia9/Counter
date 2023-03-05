// let count = 0;
// const value = document.querySelector("#value");
// const btns = document.querySelectorAll(".btn");

// btns.forEach(function (btn){
//     btn.addEventListener("click", function (e){
//         const styles = e.currentTarget.classList;
//         if(styles.contains("decrease")){
//             count--;

//         }
//           else if(styles.contains('increase')){
//             count++;
//           }
//           else{
//             count = 0;
//           }
//           value.textContent = count;
//     });
//   //console.log(btn);
// });

function increaseCount(){
    let span = document.querySelector('#value');
    console.log(span.textContent);
    let count = parseInt(span.textContent);
    count++;
    span.textContent = count;
    console.log(count, span.textContent)
}

function decreaseCount(){
    let span = document.querySelector('#value');
    
    let count = parseInt(span.textContent);
    
   //if (count != 0){
        count--;
   //}else{
      //  alert('nai thase?')
   // }
    span.textContent = count;
    
}

function resetCount(){
    let span = document.querySelector("#value");
    span.textContent = 0;
}