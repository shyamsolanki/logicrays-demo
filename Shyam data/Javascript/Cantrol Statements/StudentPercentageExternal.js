var perc;
perc=89;

document.write("<center>percentage of the following Student:"+perc);

//Percentage of Student

if(perc<40)
    {
       document.write("<br><center>Following Student has Faild to Examination"); 
    }
else if(perc>40 && perc<=60)
    {
        document.write("<br><center>Following Student has Passed to Second Class");
    }
else if(perc>60 && perc<=75)
    {
        document.write("<br><center>Following Student has Passed to First Class");
    }
else if(perc>75)
    {
        document.write("<br><center>Following Student has Passed to Distinction");
    }
    