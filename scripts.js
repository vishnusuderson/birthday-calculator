const date=new Date()
let currentdate=date.getDate()
let currentmonth=date.getMonth()+1
let currentyear=date.getFullYear()
function monthlycheck(){
    Months=[31,28,31,30,31,30,31,31,30,31,30,31]
    if(Months[month.value-1]>=Day.value){
        return true
    }
    return false
}
function check(){
   if((31>=Day.value)&&((12>=month.value))&&((currentyear>Years.value))){
        if(monthlycheck()){
            return true
        }
    }
    return false
}
function clear(){
    years.innerHTML='--';
    months.innerHTML='--';
    days.innerHTML='--';
}

function sumbit(e){
   e.preventDefault();
   if((Day.value=='')||(month.value=='')||(Years.value=='')){
    form.querySelectorAll(".form-group").forEach((k)=>{
        k.classList.remove('error');
        k.querySelector("span").innerHTML="";
        if(k.querySelector('input').value==''){
         k.classList.add('error')
         k.querySelector("span").innerHTML="this field is required";
         clear()
        }})
   }
   else{
        if(!(check())){
            clear()
            form.querySelectorAll(".form-group").forEach((k)=>{
                k.classList.add('error');
                k.querySelector("span").innerHTML="must be valid";})
         
        }
    else{
        form.querySelectorAll(".form-group").forEach((k)=>{
            k.classList.remove('error');
            k.querySelector("span").innerHTML="";})
            Months=[31,28,31,30,31,30,31,31,30,31,30,31]
    if((Day.value)>currentdate){
        currentdate=currentdate+Months[(month.value)-1];
        currentmonth--;
    }
    if((month.value)>currentmonth){
        currentmonth=currentmonth+12
        currentyear--;
    }
    years.innerHTML=currentyear-Years.value;
    months.innerHTML=currentmonth-month.value;
    days.innerHTML=currentdate-Day.value;
       
    }
}
}

