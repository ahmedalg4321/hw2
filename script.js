var questions = [{"question":"20/10","option1":"2"
                  ,"option2":"3"
                  , "option3":"1"
                  , "option4": "33"
                  , "answer": "1"},
                {"question":"3+3","option1":"3"
                  ,"option2":"6"
                  , "option3":"2"
                  , "option4": "1"
                  , "answer": "2"},
                  {"question":"3/1","option1":"2"
                  ,"option2":"3"
                  , "option3":"5"
                  , "option4": "1"
                  , "answer": "2"},
                  {"question":"0+4","option1":"3"
                  ,"option2":"4"
                  , "option3":"2"
                  , "option4": "1"
                  , "answer": "2"},
                {"question":"9/9","option1":"12"
                  ,"option2":"3"
                  , "option3":"5"
                  , "option4": "1"
                  , "answer": "4"}] ; 

var questions1 = [{"question":"3-3","option1":"0"
                  ,"option2":"zero"
                  , "option3":"1"
                  , "option4": "92"
                  , "answer": ["1","2"]},
                {"question":"20/20","option1":"one"
                  ,"option2":"1"
                  , "option3":"5"
                  , "option4": "2"
                  , "answer": ["1","2"]},
                {"question":"3+0","option1":"3"
                  ,"option2":"threee"
                  , "option3":"1"
                  , "option4": "2"
                  , "answer": ["1","2"]}] ; 

//other file 
 var score = 0; 
 var currentQ = 0 ;
 var counter3 = 0; 
 var totalScore = 0;
 var divpart2 = 0;
 
 var container = document.getElementById('quizContainer') ; 
 var questionEl = document.getElementById('question');
 var opt1 = document.getElementById('opt1') ; 
 var opt2 = document.getElementById('opt2') ; 
 var opt3 = document.getElementById('opt3') ;
 var opt4 = document.getElementById('opt4') ; 
 var totQ = questions.length ;
 var nextB = document.getElementById('nextButton') ; 
 var resultCont = document.getElementById('result') ; 
 var prevB = document.getElementById('prevButton') ; 
 var flagTimer = true;
 var flagTimer2 = true;
 var flagTimer3 = true;
 var flagAccess = true;
 var flagAccess2 = true;
 var Part1Counter = 0 ; 	
  var flagTimer = true;
   var flag1 = false ; 
   var counter2 = 0;
   var counter33 = 0;

//******************************************************************** */
countDown1(20,'status');
 
 
 
function countDown1(secs,elem) {
	var element = document.getElementById(elem);
	element.innerHTML = "Please wait for "+secs+" seconds";
	if(secs==0) {
   
    document.getElementById('quizContainer').style.display='none' ;
    if(flagTimer==true && flagAccess==true){
    document.getElementById('result').style.display='block' ;
    flagTimer=false;
  }

    
    
     
    
    clearTimeout(timer);
    
		
    
	}else
  secs--;
  if(secs > -1){
	var timer = setTimeout('countDown1('+secs+',"'+elem+'")',1000);}
}


function countDown2(secs2,elem) {
  
	var element = document.getElementById(elem);
	element.innerHTML = "Please for "+secs2+" seconds";
	if(secs2 == 1 ) {
   
     document.getElementById("checkArea").style.display = "none" ; 
   
    if(flagTimer2==true && flagAccess2==true){
      document.getElementById('resultC').style.display='block' ;
      flagTimer2=false;}
   
    
		clearTimeout(timer1);
    
	}else
  secs2--;
  if(secs2 > -1){
	var timer1 = setTimeout('countDown2('+secs2+',"'+elem+'")',1000);}
}

function countDown3(secs3,elem) {
	var element = document.getElementById(elem);
	element.innerHTML = "Please for "+secs3+" seconds";
	if(secs3 == 0 ) {
    document.getElementById("part3").style.display = "none" ; 
    
    
    if(flagTimer3==true){
     FinalResultFun();
      flagTimer3=false;}
    
		clearTimeout(timer2);
    
	}else
  secs3--;
  if(secs3 > -1){
	var timer2 = setTimeout('countDown3('+secs3+',"'+elem+'")',1000);}
}

//*********************************************************************************************** */


 
 
 

function previous()
{
    if (currentQ == 2)
      {
        nextB.textContent = "Next Question" ; 
      }
  if(currentQ==1)
    {
      prevB.style.display= 'none' ; 
    }
    if (flag1== true)		
    {		
      score-- ; 		
	    }
  currentQ -- ; 
  loadQuestion(currentQ) ;
  
}

function loadQuestion(Qindex)
{
  if (Qindex!=0)
    {
      prevB.style.display = '' ; 
    }
  var q = questions[Qindex] ; 
  questionEl.textContent = (Qindex + 1) + '. ' + q.question ; 
  opt1.textContent = q.option1 ; 
  opt2.textContent = q.option2 ; 
  opt3.textContent = q.option3 ; 
  opt4.textContent = q.option4 ; 
  
}  

function loadNextQ()
{ 
  var selectedOption = document.querySelector('input[type=radio]:checked') ; 
  if(!selectedOption)
    {
      alert('Please Select your answer !'); 
      return ; 
    }
  var answer = selectedOption.value;
  if(questions[currentQ].answer == answer){
    score++ ; 
    Part1Counter++ ; 		
       flag1 = true ;
  }
 

  selectedOption.checked = false ;
  
  currentQ++ ; 
  if(currentQ == totQ -1 ){
    nextB.textContent = 'Finish' ; 
  }
  if(currentQ == totQ)
    {
      container.style.display = 'none' ; 
     resultCont.style.display = '' ; 
    document.getElementById('status').style.display = 'none'
    flagAccess=false;
    
      
      
      
      return;
    }
  loadQuestion(currentQ) ;
}
 
loadQuestion(currentQ) ; 
resultCont.style.display = 'none' ;
  var checkArea = document.getElementById('checkArea') ; 
  var checkQuestion = document.getElementById('checkQuestion') ;
  var op1 = document.getElementById('op1');
  var op2 = document.getElementById('op2');
  var op3 = document.getElementById('op3');
  var op4 = document.getElementById('op4');
  var resultContCheck = document.getElementById('resultC') ;
  var nextBC = document.getElementById('nextCheckButton') ; 
  var totQC = questions1.length ;
  var currentQC = 0 ; 
  var prevBC = document.getElementById('prevCheckButton') ;	
  	  
  var currentQC = 0 ;		
	  var flags= [] ; 		
  			
  			
  	function prevLNC()		
  	{		
  	  if (currentQC == 2)		
  	      {			        nextBC.textContent = "Next Question" ; 		
    }		
  	  if(currentQC==1)		
  	    {		
  	      prevBC.style.display= 'none' ; 		
  	    }		
  	  for(var i = 0 ; i<flags.length ; i++)		
  	  {		
           if (flags)
           {
             score -- ; 
           }	
  	  }		
  	  currentQC -- ; 		
	  loadCheck(currentQC) ;		
  	}		
  	

function loadCheck(indexCheck)
{
  if (indexCheck!=0)	 
	    {		
	      prevBC.style.display = '' ; 
	    } 
  
 
  var c = questions1[indexCheck] ; 
  checkQuestion.textContent =  (indexCheck + 1) + '. ' + c.question ;
  op1.textContent = c.option1 ;
  op2.textContent = c.option2 ;
  op3.textContent = c.option3 ;
  op4.textContent = c.option4 ;
  
} 

function loadNextCheckQ()
{  var answer1 = questions1[currentQC].answer ; 
   var selectedCheckOption = document.querySelectorAll('input[type=checkbox]:checked'); 
 
 
 
  if(selectedCheckOption.length == 0 )
    {
      alert('Please Select your answer !');
      return ;
    }
 var count = 1 ;
  
   for (var i = 0 ; i < answer1.length ; i++  )
    {
      for (var j = 0 ; j<selectedCheckOption.length ; j++)
          {
               
            if (answer1[i] == selectedCheckOption[j].value)
              {
                 count++ ;
                 score++ ; 
              }
            
          }
      
    }
  if (answer1.length < selectedCheckOption.length)
              {
                score = score - (selectedCheckOption.length - answer1.length)  ; 
                counter2 = score - Part1Counter ; 
                for (var i = 0 ; i<(score-Part1Counter) ; i++)		
	                  {		
	                    flags[i] = true ; 		
	                  }
              }
   for (var j = 0 ; j < selectedCheckOption.length ; j++)
     {
         selectedCheckOption[j].checked = false ;
     }
  currentQC++ ;
  if(currentQC == totQC -1 ){
    nextBC.textContent = 'Finish' ; 
  }
  if(currentQC == totQC)
    {
      checkArea.style.display = 'none' ; 
      resultC.style.display = '' ;
      document.getElementById('status1').style.display = 'none'
    flagAccess2=false; 
      
      count = 0 ;
      return;
    }
  loadCheck(currentQC) ; 
  
}
loadCheck(currentQC) ;
 
 
var resultchecker=0;
 function allowDrop(ev) {
     ev.preventDefault();
 }
 
 function drag(ev) {
     ev.dataTransfer.setData("text", ev.target.id);
 }
 
 function drop(ev) {
     ev.preventDefault();
     var data = ev.dataTransfer.getData("text");
     ev.target.appendChild(document.getElementById(data));
 }
 
 
 
 
 function previos(){
 
             document.getElementById("drag21").style.display = "none";
             document.getElementById("drag22").style.display = "none";
             document.getElementById("drag23").style.display = "none";
             document.getElementById("drag1").style.display = "inline";
             document.getElementById("drag2").style.display = "inline";
             document.getElementById("drag3").style.display = "inline";
             document.getElementById("previos").style.display = "none";
             document.getElementById("next").style.display = "inline";
 
 
 
 }
 
     function changeImage() {
 
             
             document.getElementById("drag21").style.display = "inline";
             document.getElementById("drag22").style.display = "inline";
             document.getElementById("drag23").style.display = "inline";
             document.getElementById("previos").style.display = "inline";
             document.getElementById("submit").style.display = "inline";
             document.getElementById("next").style.display = "none";
             document.getElementById("drag1").style.display = "none";
             document.getElementById("drag2").style.display = "none";
             document.getElementById("drag3").style.display = "none";
             document.getElementById("q").textContent="Egypt";
        
     }
     function FinalResultFun(){
      if(div1.contains(drag1)&&!div1.contains(drag2)&&!div1.contains(drag3)){
        
        counter33++ ; }
       
       if(div1.contains(drag22)&&!div1.contains(drag21)&&!div1.contains(drag23)){
        
        counter33++;}
        

      document.getElementById("FinalResult").style.display = "block";
      document.getElementById("part3").style.display = "none";
      document.getElementById("status2").style.display = "none";
      divpart2=score/3;
      totalScore= Part1Counter + divpart2 + counter33;

      
      document.getElementById("p11").innerHTML="part One :"+ Part1Counter +" out of 5   <br> part Two :"+ divpart2 +" out of 3 <br>part Three :"+ counter33 +" out of 2 <br> Your Score out of 10 is "+ totalScore;
     
     }
  
     
  
     var answer111=0 ; 
     
     function ChartFun() {

      document.getElementById("FinalResult").style.display = "none";
      document.getElementById("checkBoxContainer").style.display = "block";

      flagTimer3=false;
 
      if(div1.contains(drag1)&&!div1.contains(drag2)&&!div1.contains(drag3)){
       resultchecker++;
       counter3++ ; }
      
      if(div1.contains(drag22)&&!div1.contains(drag21)&&!div1.contains(drag23)){
       resultchecker++;
       counter3++;}
       resultchecker+= score;
      


var one = (Part1Counter/5)*100;
var two = (divpart2/3)*100;
var three = (counter3/2)*100;




      
   
     
       
       var chart2 = new CanvasJS.Chart("checkBoxContainer", {
         animationEnabled: true,
         title: {
             text: "Grade Report"
         },
         data: [{
             type: "pie",
             startAngle: 240,
             yValueFormatString: "##0.00\"%\"",
             indexLabel: "{label} {y}",
             dataPoints: [
                 {y: one, label: " percentage of correct answers in Part 1 " },
                 {y: two, label: "percentage of correct answers in Part 2 "},
           {y: three , label: "percentage of correct answers in Part 3 "}
             ]
         }]
     });
    
     chart2.render() ; 
     };

     function checkEmail() {
      

      var Email = document.getElementById('email') ; 
      var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
      if (!filter.test(Email.value)) {
      alert('Please provide a valid email address');
      Email.focus();
      return false;
   }
    else{
     parent = document.getElementById('demo') ; 
     var a = document.createElement('a');
     
    var linkText = document.createTextNode("Move to quiz one ");
      a.href = 'quiz1.html' ; 
      a.appendChild(linkText);
      parent.appendChild(a) ;
      document.getElementById('info').style.display = 'none' ; 
    }
  }

  
  