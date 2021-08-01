const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ] 

function superbowlWin(arg){
    const goal = arg.find(element => element.result === "W");
    //const found = array1.find(element => element > 10);
    if(goal != undefined){
        //console.log(arg.result, arg.year)
        return goal.year;
    }  
    else {
        return goal;
    }
}

console.log(record.find(superbowlWin));

