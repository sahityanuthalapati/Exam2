function checkButton(){
    if(document.getElementById('Oneway').checked) 
                         { 
                           document.getElementById("returndate").disabled = true;
                          } else {
                            document.getElementById("returndate").disabled = false;
                          }

}
function validname()
   {
        let username=document.getElementById("name").value;
      
      if (username== "null" || username == "")
             {
                alert( "enter correctname");
                return false;
             }
             
    }
    function Checkmail()
{
   let mymail=document.myform.myemail.value;
   let attherate=mymail.indexOf("@");
   let atthedot=mymail.lastIndexOf(".");

   if (attherate<1 || atthedot<attherate+2 || atthedot>=mymail.length)
          {
             alert( "enter the correct email");
             return false;
          }
 } 
 function Checkmob()
      {
         
         let mobile1=(document.myform.mobile.value)

         if (mobile1.length==10)
             {
                return true
             }
          else      
                 {
                   alert( "enter the correct 10 digits number");
                   return false;
                }
       } 

