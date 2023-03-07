let name=document.querySelector("#full-name");
let email=document.querySelector("#email");
let feedback=document.querySelector("#feedback");
let recordBtn=document.getElementById("record-btn");
let submitBtn=document.querySelector("#submit-feedback");



submitBtn.addEventListener("click",function(e){

    let studentName=name.value;
    let StudentEmail=email.value;
    let StudentFeedback=feedback.value;

    // e.preventDefault();

    console.log(studentName, "  " , StudentEmail, "   ", StudentFeedback);


    

    
})


recordBtn.addEventListener("click", function() {

    alert("Start speaking your comments after saying Feedback.'");
    if (annyang) {
       
        let  commands = {
          "feedback *message": function(message) {

            
            console.log(  message);
            feedback.value=message;
          }
        };
      
        
        annyang.addCommands(commands);
      
      
        annyang.start();
      }


        
});