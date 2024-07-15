function handleClick(buttonName){
    let arr = [];
    for(let i=0;i<=100;i++){
        arr.push(i);
    }

    switch(buttonName){
        case 1: one(arr);break;
        case 2: two(arr);break;
        case 3: three(arr);break;
        case 4: four(arr);break;
        case 5: five(arr);break;
    }
   
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
function one(arr){
    for(let i=0;i<=100;i++){
        if(arr[i]%3==0){
            arr.splice(i,1);
        }
    }
    console.log(arr);
}
function two(arr){
    for(let i=101;i<=150;i++){
        arr.push(i);
    }
    console.log(arr);
    
}
function three(arr){
    for(let i=0;i<=100;i++){
        arr[i]+=3;
    }
    console.log(arr);
}
function four(arr){
    for(let i=20;i<=40;i++){
        console.log(arr[i]);   
    }
}
function five(arr){
    shuffleArray(arr);
    console.log(arr);
    arr.sort(function(a, b){return b - a});
    console.log(arr);
}