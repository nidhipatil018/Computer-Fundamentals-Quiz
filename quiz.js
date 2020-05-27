function submitAnswers()
{
    var total=6;
    var score=0;

   var q1=document.forms["QuizForm"]["q1"].value;
   var q2=document.forms["QuizForm"]["q2"].value;
   var q3=document.forms["QuizForm"]["q3"].value;
   var q4=document.forms["QuizForm"]["q4"].value;
   var q5=document.forms["QuizForm"]["q5"].value;
   var q6=document.forms["QuizForm"]["q6"].value;

   for(i = 1; i <= total; i++)
    {
        if(eval('q'+i) == null || eval('q'+i) == '')
           {
    	      alert(' You missed question ' + i);
    	      return false;
            }
    }
    var answers=["c","c","b","c","c","b"];

    for(i = 1; i <= total; i++)
    {
        if(eval('q'+i) == answers[i-1])
           {
        	score++;
           }
           
    }
    var results=document.getElementById('results');
    results.innerHTML=' <h3> You scored <span> ' +score+ ' </span> out of <span>' +total+ '</span></h3>';	     
    alert(' You scored ' +score+ ' out of ' +total);
     return false;
   		    
} 