let user=document.getElementById("use")
function validateAge() {
  const birthdateInput = document.getElementById("date");
  const birthdateValue = new Date(birthdateInput.value);
  
  // Calculate the age based on the birthdate
  const today = new Date();
  const age = today.getFullYear() - birthdateValue.getFullYear();

  // Check if the age is not within the specified range (18 to 56)
  if (age < 18 || age > 55) {
    birthdateInput.setCustomValidity("Age must be between 18 and 56 years.");
  } else {
    birthdateInput.setCustomValidity("");
  }
}

const birthdateInput = document.getElementById("date");
birthdateInput.addEventListener("input", validateAge);


entr=[]
const state=(event)=>{


    event.preventDefault();


    const name1=document.getElementById("use1").value
    const name2=document.getElementById("use2").value
    const email=document.getElementById("use3").value
    const pass=document.getElementById("use4").value
    const date=document.getElementById("date").value
    const ac=document.getElementById("accept").checked

     const entry={
        name1,
        name2,
        email,
        pass,
        date,
        ac
    }
    entr.push(entry);
   localStorage.setItem("entr",JSON.stringify(entr));
   a=JSON.parse(localStorage.getItem('entr'));
   values=[]
for(const key in a[0]){
    value=a[0][key]
    values.push(value)
}

c=values.map(item=>"<td>"+item+"</td>").join(" ")

   document.getElementById('catch').innerHTML=c
}
document.addEventListener("submit",state)