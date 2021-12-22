
// Calculate square and cube of number
let addNumber = () => {
    let num = parseInt(prompt("Enter The Number "));
    
    let square=num * num;
    document.write('The square of ' + num + ' is: ' + square);
  
    let cube=num * num * num;
    document.write('<br>The cube of ' + num + ' is: ' + cube);
  
  }
  addNumber();

/*
// Factorial of given number
let fact = () => {
    let num,i;
    let fact=1;
     
    num=parseInt(prompt("Enter Any number"));

    for(i=1; i<=num; i++)
    fact=fact*i;
    document.write("factorial is:"+fact);
}
fact();
*/
/*
//Number is prime number or not
let prime = () =>{
    let number,i,prime;
    prime=0;
    
    number=parseInt(prompt("Enter Number"));
    alert("Orignal Number Is:"+number);
    
    if(number==0)
        {
            alert("Number Is nighter Prime Or Nor Composite");
        }
    else
        {
            for(i=2;i<number;i++)
            {
                if(number%i==0)
                {
                    prime=1;
                    break;
                }
            }
            if(prime==0)
                {
                    alert("Number Is Prime");
                }
            else
                {
                    alert("Number Is Not Prime");
                }
        }
}
prime();
*/
/*
//Reverse of the number from given range(i.e from 1 to range value)
let rever = () =>{
    let num;
    let reverse=0;
                
                num=parseInt(prompt("Enter Number"));
                document.write("Orignal Number:"+num);
                
                while(num!==0)
                    {
                        reverse=(reverse*10)+(num%10);
                        num=Math.floor(num/10);
                    }
                document.write("<br>Reverse Number:"+reverse);    
}
rever();
*/