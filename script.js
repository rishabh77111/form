function updateCard(){
   document.getElementById("schoolNameVal").innerText= document.getElementById("schoolName").value;
   document.getElementById("studentNameVal").innerText= document.getElementById("studentName").value;
   document.getElementById("dateOfBirthVal").innerText= document.getElementById("dateOfBirth").value;
   document.getElementById("classVal").innerText= document.getElementById("class").value;
   document.getElementById("rollNumberVal").innerText= document.getElementById("rollNumber").value;
   document.getElementById("contactNumbeVal").innerText= document.getElementById("contactNumber").value;


   console.log(schoolNameText,studentText,dateOfBirthText,classText,rollNoText,contactNoText);
}

function clearAll(){
    document.getElementById("schoolName").value="";
    document.getElementById("studentName").value="";
    document.getElementById("dateOfBirth").value="";
    document.getElementById("class").value="";
    document.getElementById("rollNumber").value="";
    document.getElementById("contactNumber").value="";
}

function printIdCard(){
    window.print();
}