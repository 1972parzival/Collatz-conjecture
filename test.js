for (let i = 0; i < 3; i++){
    rando = Math.floor(Math.random()*1000);

    console.log("////////////////////////");
    console.log(`${rando} is the random interger`);
    console.log("------------------------");
    while (rando != 1){
        if (rando % 2 != 0){
            console.log("odd");
            rando = (rando*3) +1;
            console.log(rando);
        }
        if ((rando % 2) == 0){
            console.log("even");
            rando = rando/2;
            console.log(rando);
        }
    }
    console.log("////////////////////////");
}
