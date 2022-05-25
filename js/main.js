var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");
var tableBody = document.getElementById('tableBody');
var stieContainer = [];

function add()
 {
   if (siteName.value=='') 
   {
    siteName.value = 'systemuser';
   }
  
   if (siteUrl.value=='') 
   {
    siteUrl.value = 'systemuser';
   }
  var site= {
     Name:siteName.value,
     URL: siteUrl.value
   } 
   console.log(site); 

   stieContainer.push(site)
   console.log(stieContainer);
   
   //clearForm(); 
   displaysite (stieContainer) ;
    
}

function clearForm () 
{
   siteName.value = '';
   siteUrl.value = '';

  }

  function displaysite (sitelist) {
    var cartoona= '';
    for(i=0;i<stieContainer.length;i++){
          cartoona+= `<tr>      
      <td>${i}</td>
      <td>'${sitelist[i].siteName}'</td>
      <td>${sitelist[i].siteUrl} </td>
      <td>  
        <button class="btn btn-sm btn-outline-warning"> visit </button> 
      </td>
      <td>  
        <button class="btn btn-sm btn-outline-danger"> delete </button> 
      </td>
  </tr>`
    }
   tableBody.innerHTML=cartoona;
  }

  function validateProductName( ){
    var regax =/^[A-Z][a-z]$/;
    if(regax.test(siteName.value)==true)
    {
        return true;
    }
    else
    {
        return false;
    }
}



