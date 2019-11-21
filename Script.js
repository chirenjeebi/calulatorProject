// var a=20;
// function aFun(){
//  a=a+10;
//     console.log(a);
// }
// aFun();

// function a(){
//     document.write("fucntion a")
//     function b(){
//         document.write("fucntion b")
       
//         function c(){
//             document.write("Hello");
           
//         }
//     }
// };
// c();

// var myObject ={
//     fname:"chirenjeebi",
//     lname:"Parajuli",
//     age:25,
//     salary:10000,
    
    
// }
// document.write(myObject);
// document.write(myObject.fname+" "+myObject.lname);


function calculation(){
    var num1=parseFloat(document.getElementById("num1").value)
    var num2=parseFloat(document.getElementById("num2").value)

    var op=document.getElementById("opr").value

    if(op==="+"){
        document.getElementById("result").value=num1+num2;
    }
    if(op==="-"){
        document.getElementById("result").value=num1-num2;
    }
    if(op==="*"){
        document.getElementById("result").value=num1*num2;
    }
    if(op==="/"){
        document.getElementById("result").value=num1/num2;
    }
    if(op==="%"){
        document.getElementById("result").value=num1%num2;
    }
}
