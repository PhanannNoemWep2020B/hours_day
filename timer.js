var displayDate = () =>{
    let alldays = ['sunday','monday','thousday','wednesday','thursday', 'friday','saturday'];
    let allMonths = ['janury', 'febuary','march', 'april', 'may','june','junly','augest','setember','october','november'];
    let myDate = new Date();
    let days = myDate.getDay();
    let year = myDate.getFullYear();
    let months = myDate.getMonth();
    let day = ""; 
    let month = "";
    for (let i= 0; i < alldays.length; i++){
        switch(days){
            case i:
                day = alldays[i];
                break;
        }
    }
    for (let i= 0; i <= alldays.length; i++){
        switch(months){
            case i:
                month = allMonths[i];
                break;
        }
    }
    let out = "";
    switch(days){
        case 0:
            out = "weeked ";
            break;
        case 6:
            out = "weeked";
            break;
        default:
            out = "working";
        break;
    } 
    document.querySelector('h4').innerHTML = out;

    let date = myDate.getDate();
    if (date.length < 2){
        date = '0'+date;
    }
    let output = "";
    switch(date){
        case 1:
        case 21:
        case 31:
            output = "st";
            break;
        case 2:
        case 22:
            output = "nd";
            break;
        case 3:
        case 23:
            output = "rd";
            break;
        default:
            output = "th";
            break;
    }































    document.querySelector('h1').innerHTML = day +":"+date+output+ ":" + month + ":" + year;
}
displayDate();

var timer = () =>{
    let time = new Date();
    let hours = (time.getHours() % 12).toString();
    let minutes = time.getMinutes().toString();
    let seconds = time.getSeconds().toString();
    let mili = time.getMilliseconds().toString();
    if (hours.length < 2){
        hours = '0'+hours;
    }
    if (minutes.length < 2){
        minutes = '0' +minutes;
    }
    if (seconds.length < 2){
        seconds = '0'+seconds;
    }
    if (mili.length < 2){
        mili = '0'+ mili;
    }
    if ( hours.length < 12){
        document.querySelector('h2').innerHTML = hours + ":" + minutes + ":"+seconds+":"+"AM"+mili;
    }else{
        document.querySelector('h2').innerHTML = hours + ":" + minutes + ":"+seconds+":"+"PM"+mili;
    }
    if (time.getHours() < 12){
        document.querySelector('h3').innerHTML = "good morning";
    }else if(time.getHours() < 15){

        document.querySelector('h3').innerHTML = "good afternoon";
    }else if(time.getHours() < 20){
        
        document.querySelector('h3').innerHTML = "good everning";
    }else{
        document.querySelector('h3').innerHTML = "good night";
    }
}
timer();
setInterval(timer, 1);