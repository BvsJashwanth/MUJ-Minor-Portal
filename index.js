var a=8,b=8,c=8,d=8,e=8,f=8,g=8,h=8,i=8,j=8;
function clicks1(){
        if(confirm("Are you Sure to apply under Dr.Rishav Dubey:")==true)
        {
            a-=1;
            document.getElementById("click1").innerHTML=a;
            do{
                 input = prompt("Enter your Project Name & Idea:");
            }while(input == null || input == "" );
            
            const button = document.getElementsByClassName('proj_btn');
            const disableButton = () => 
            {
                button.disabled = true;
            };
            button.addEventListener('click', disableButton);
        }
        else
            a=a;
}
function clicks2(){
    if(confirm("Are you Sure to apply under Dr.Sandeep Chaurasia: ")==true)
    {
        b-=1;
        document.getElementById("click2").innerHTML=b;
        do{
            input = prompt("Enter your Project Name & Idea:");
       }while(input == null || input == "" );
    }
    else
        b=b;
}
function clicks3(){
    if(confirm("Are you Sure to apply under Dr.Neha Chowdary:")==true)
    {
        c-=1;
        document.getElementById("click3").innerHTML=c;
        do{
            input = prompt("Enter your Project Name & Idea:");
       }while(input == null || input == "" );
    }
    else
        c=c;
}
function clicks4(){
    if(confirm("Are you Sure to apply under Dr.Umashankar Rawat:")==true)
    {
        d-=1;
        document.getElementById("click4").innerHTML=d;
        do{
            input = prompt("Enter your Project Name & Idea:");
       }while(input == null || input == "" );
    }
    else
        d=d;
}
function clicks5(){
    if(confirm("Are you Sure to apply under Dr.Satyabrata Roy:")==true)
    {
        e-=1;
        document.getElementById("click5").innerHTML=e;
        do{
            input = prompt("Enter your Project Name & Idea:");
       }while(input == null || input == "" );
    }
    else
        e=e;
}
function clicks6(){
    if(confirm("Are you Sure to apply under Dr.Harish Sharma:")==true)
    {
        f-=1;
        document.getElementById("click6").innerHTML=f;
        do{
            input = prompt("Enter your Project Name & Idea:");
       }while(input == null || input == "" );
    }
    else
        f=f;
}
function clicks7(){
    if(confirm("Are you Sure to apply under Dr.Neetu Gupta:")==true)
    {
        g-=1;
        document.getElementById("click7").innerHTML=g;
        do{
            input = prompt("Enter your Project Name & Idea:");
       }while(input == null || input == "" );
    }
    else
        g=g;
}
function clicks8(){
    if(confirm("Are you Sure to apply under Dr.Vibha Jain:")==true)
    {
        h-=1;
        document.getElementById("click8").innerHTML=h;
        do{
            input = prompt("Enter your Project Name & Idea:");
       }while(input == null || input == "" );
    }
    else
        h=h;
}
function clicks9(){
    if(confirm("Are you Sure to apply under Dr.Ashish Kumar:")==true)
    {
        i-=1;
        document.getElementById("click9").innerHTML=i;
        do{
            input = prompt("Enter your Project Name & Idea:");
       }while(input == null || input == "" );
    }
    else
        i=i;
}
function clicks10(){
    if(confirm("Are you Sure to apply under Dr.Manmohan Sharma:")==true)
    {
        j-=1;
        document.getElementById("click10").innerHTML=j;
        do{
            input = prompt("Enter your Project Name & Idea:");
       }while(input == null || input == "" );
    }
    else
        j=j;
}