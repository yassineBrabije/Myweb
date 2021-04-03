function SendMail(){
   emailjs.send("service_ox0tozm","Myweb",{
    FullName: document.getElementById("FullName").value,
    Email:    document.getElementById("Email").value,
    Message:  document.getElementById("Message").value,
    Subject:  document.getElementById("Subject").value,
    });
    alert("Hi it's Me Yassine Brabije    All done!");
   document.getElementById("FullName").value="";
   document.getElementById("Email").value="";
    document.getElementById("Message").value="";
     document.getElementById("Subject").value="";
  
}


 