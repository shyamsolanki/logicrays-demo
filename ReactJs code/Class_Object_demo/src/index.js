/*
class Books
{
  constructor(bookName,bookAuther,bookPrice,bookPages)
  {
      this.bookName=bookName;
      this.bookAuther=bookAuther;
      this.bookPrice=bookPrice;
      this.bookPages=bookPages;
  }

  displayBookRecord()
  {
      document.writeln("<br>Book Name:"+this.bookName);
      document.writeln("<br>Book auther name:"+this.bookAuther);
      document.writeln("<br>Book Price:"+this.bookPrice);
      document.write("<br>Book Pages:"+this.bookPages);
  }
}

let book1=new Books("Sacience","jdh",59,50);//constructor call
book1.displayBookRecord();

let book2=new Books("Maths","Richars",89,45);//constructor call
book2.displayBookRecord();
*/


/*
class Person
{
  constructor(Pid,Pname)
  {
    this.Pid=Pid;
    this.Pname=Pname;
  }
  displayPersonDetails()
  {
    document.write("<br> Person Id:"+this.Pid);
    document.write("<br> Person Name:"+this.Pname);
  }
}
//child class OR SUB class
class Teacher extends Person
{
  constructor(Pid,Pname,subject,salary)
  {
    super(Pid,Pname);//Super represent parent class constructor
    this.subject=subject;
    this.salary=salary;
  }
  displayTeacherDetails()
  {
    this.displayPersonDetails();//method of Parent Person
    document.write("<br> Teacher Subject:"+this.subject);
    document.write("<br> Teacher Salary:"+this.salary);
  }
}

//object of child class
let tea1=new Teacher(11,"Ajay","Sacience",55000);
tea1.displayTeacherDetails();

let tea2=new Teacher(12,"Dhavel","Maths",34097);
tea2.displayTeacherDetails();
*/
/*
//Two Number OF Addition Of Arrow Function
let add = () => {
  let num1 = parseInt(prompt("Enter The Number 1"));
  let num2 = parseInt(prompt("Enter The Number 2"));

let sum = num1 + num2;

  document.write('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);
}
add();
*/

//Two Number OF Addition Of Arrow Function
/*
let sum = () => {
  let a=parseInt(prompt("Enter First Number"));
  let b=parseInt(prompt("Enter Second Number"));
  return a+b;
}
document.getElementById("result").innerHTML=sum();
<p id="result"></p>
*/

//Accept any number from user and find out factorial of the given numbers using parameter less arrow function
/*
var fact = () =>{
  var i,number,fact;
  fact=1;
  number=parseInt(prompt("Enter Any Number"));
  for(i=1;i<=number;i++)
  {
    fact=fact*i;
  }
  document.write("Factorial Number is:"+fact);
}
fact();
*/

//Accept any number from user and find out factorial of the given numbers
//using parameter less arrow function.
/*
var fact = () =>{  
    var i, num, fact, j;  
    fact = 1;  
    var range1 = parseInt(prompt("Enter The Range 1"));
    var range2 = parseInt(prompt("Enter The Range 2"));

    for(j = range1; j <= range2; j++)  
    {
      num = j;
      fact = 1;
      for(i = 1; i <= num; i++)    
      {  
        fact = fact * i;  
      }  

        document.write("<br>The factorial of the number " + i + " is: " + fact ); 
    }
  }
    fact();
*/
/*
//.1 Jsx Demo
import ReactDOM from "react-dom";

const area=<h1>Area of Circle {3.14*4*8}</h1>
const cir=<h1>Circu of circle {2*3.14*3*8}</h1>
ReactDOM.render(area,document.getElementById("Result"));
ReactDOM.render(cir,document.getElementById("Result2"));
*/
//.2 Multiline  Expression demo
/*
import ReactDOM from "react-dom";

const display=
<div>
<h1>This is H1 tag</h1>
<h2>This is H2 tag</h2>
<h3>This is H3 tag</h3>
<p>This is paragraph tag</p>
<p>This is 2nd Paragarph tag</p>
</div>
ReactDOM.render(display,document.getElementById("JSX_multiline expression"));
*/

//Write a JS program that reads a positive integer and count the number of digits the  number. 
var coun = () => {
  var num;
  var count=0;      
      num=parseInt(prompt("Enter Number"));
            
            while(num > 0)
                {
                    num = num/10;
                    count++;
                }
            document.write("<br>Totle Number of Digit in:"+count);
}
coun();
