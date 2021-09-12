const data = [
    {
        name: "Anu",
        Register_number :"111519104001",
        Discrete_Mathematics:"A+",
        Data_Structures: "A",
        OOPS: "B",
        Digital_Principles:"O",
       GPA: "8.3"
    },  
    {
        name: "Baskar",
        Register_number :"111519104002",
        Discrete_Mathematics:"A+",
        Data_Structures: "A",
        OOPS: "0",
        Digital_Principles:"A+",
        GPA:"8.9"
        
    },
    
    {
        name: "Sruthi",
        Register_number :"111519104151",
        Discrete_Mathematics:"A+",
        Data_Structures: "A",
        OOPS: "O",
        Digital_Principles:"O",
        GPA:"8.9"
        
    }
]

const results = document.getElementById('res')

const smBtn = document.getElementById('smt-btn')
smBtn.addEventListener("click", function() {
    const name = document.getElementById('name-box').value;
    for(let i = 0; i < data.length; i++){
        if(data[i].name.toLowerCase() == name.toLowerCase()){
            console.log(data[i].marks)
            results.innerHTML ="<h3>" + "Discrete_Mathematics : " + data[i].Discrete_Mathematics +"</h3>" + "<h3>" + " Data Structures: " 
            + data[i].Data_Structures +"</h3>" +"<h3>" + "OOPS: " + data[i].OOPS +"</h3>"+"<h3>" + "Digital_Principles: " + data[i].Digital_Principles + "</h3>"
            " GPA: " +data[i].GPA + "</h3>"
            return;
        }
    }
    results.innerHTML = "<h3>" + "Information is unavailable!!!" + "</h3>" 

}) 