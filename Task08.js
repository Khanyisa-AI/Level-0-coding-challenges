function intoTime(number){
    //Hours:
    let hours
     if (Math.floor(number/60)==1)
        {hours= "hour"} 
    else 
        {hours= "hours"} 

    //Minutes:
    let minutes
    if (number%60==1)
        {minutes= "minute"} 
    else 
        {minutes= "minutes"}
    
    return Math.floor(number/60) +" " +hours +", "
    +number%60 +" " +minutes;
}

