// $(document).ready((e) => { 
   
    console.log("DOM ready");

const form = document.getElementById('deliveryAddr');
const errorMessage = document.getElementById('error');

  let $a = function(id) {
    return window.document.getElementById(id);
  };

  function checkOptions(val) {
    if (val === "Other") {
      $a("address1").style.display = "block";
    } else {
      $a("address1").style.display = "none";
    }
  };

// pizza Building address


  let customerName = function validName() {
    let regex = /^[a-z A-Z]{2,30}$/;
    if (regex.test($a("name").value) && $a("name").value !== " ") {
      return ($a("name").style.border = "2px solid green");
    } else {
      return ($a("name").style.border = "2px solid red");
    }
  };
  let email = function validEmail() {
    let emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/,
      emailResult;
    if (emailRegex.test($a("email").value) && $a("email").value !== "") {
      emailResult = ($a("email").style.border = "2px solid green");
      return emailResult;
    } else {
      emailResult = ($a("email").style.border = "2px solid red");
      return emailResult;
    }
  };

  let addressType = function validAddress(val) {
    let result;
    if ((val !== " ") && ($a("addressDrop").selectedIndex) !== 0) {
      result = ($a("addressDrop").style.border = "2px solid green");
      return result;
    } else {
      result = ($a("addressDrop").style.border = "2px solid red");
      return result;
    }
  };

let address = function validStreet() {
    let regex = /^[a-zA-Z0-9\s,'-]*$/,
      result;
    if (regex.test($a("addressOne").value) && $a("addressOne").value !== "") {
      result = ($a("addressOne").style.border = "2px solid green");
      return result;
    } else {
      result = ($a("addressOne").style.border = "2px solid red");
      return result;
    }
  };

 let addresstwo = function validApartment() {
    let regex = /^[a-zA-Z0-9\s,'-]*$/,
      result;
    if (regex.test($a("apartmentNumber").value) && $a("apartmentNumber").value !== "") {
      result = ($a("apartmentNumber").style.border = "2px solid green");
      return result;
    } else {
      result = ($a("apartmentNumber").style.border = "1px solid black");
      return result;
    }
  };
  let city = function validCity() {
    let cityRegex = /^[a-z A-Z]{2,50}$/,
      result;
  
    if (cityRegex.test($a("inputCity").value) && $a("inputCity").value !== " ") {
      result = ($a("inputCity").style.border = "2px solid green");
      return result;
    } else {
      result = ($a("inputCity").style.border = "2px solid red");
      return result;
    }
  };

  let state = function validState() {
    let stateRegex = /^(AK|AL|AR|AZ|CA|CO|CT|DC|DE|FL|GA|HI|IA|ID|IL|IN|KS|KY|LA|MA|MD|ME|MI|MN|MO|MS|MT|NB|NC|ND|NH|NJ|NM|NV|NY|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VA|VT|WA|WI|WV|WY)$/i,
      result;
  
    if (stateRegex.test($a("state").value) && $a("state").value !== "") {
      result = ($a("state").style.border = "2px solid green");
      return result;
    } else {
      result = ($a("state").style.border = "2px solid red");
      return result;
    }
  };

  let zip = function validZip() {
    let zipRegex = /(^\d{5}$)|(^\d{5}-\d{4}$)/,
      zipResult;
    if (zipRegex.test($a("inputZip").value) && $a("inputZip").value !== "") {
      zipResult = ($a("inputZip").style.border = "2px solid green");
      return zipResult;
    } else {
      zipResult = ($a("inputZip").style.border = "2px solid red");
      return zipResult;
    }
  };
  let phone = function validPhone() {
    let phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
      phoneResult;
    if (phoneRegex.test($a("phone").value) && $a("phone").value !== "") {
      phoneResult = ($a("phone").style.border = "2px solid green");
      return phoneResult;
    } else {
      phoneResult = ($a("phone").style.border = "2px solid red");
      return phoneResult;
    }
  };

  window.addEventListener("load", function() {

    $a("name").addEventListener("input", function() {
      customerName();
      if ($a("name").style.border === "2px solid red") {
        $a("nameerror").style.color = "red";
      } else {
        $a("nameerror").style.color = "green";
      }
    });
    $a("email").addEventListener("input", function() {
        email();
        if ($a("email").style.border === "2px solid red") {
          $a("emailerror").style.color = "red";
        } else {
          $a("emailerror").style.color = "green";
        }
      });
      $a("addressDrop").addEventListener("input", function() {
        addressType();
        if ($a("addressDrop").style.border === "2px solid red") {
        //   $a("addresserror").style.color = "red";
        // } else {
        //   $("addresserror").style.color = "green";
        }
    
      });

      $a("addressOne").addEventListener("input", function() {
        address();
        if ($a("addressOne").style.border === "2px solid red") {
          $("streeterror").style.color = "red";
        // } else {
        //   $a("streeterror").style.color = "green";
        }
    
      });

      $a("apartmentNumber").addEventListener("input", function() {
        addresstwo();
        if ($a("apartmentNumber").style.border === "2px solid red") {
          $a("apartmenterror").style.color = "red";
        // } else {
        //   $a("apartmenterror").style.color = "green";
        }
      });

      $a("inputCity").addEventListener("input", function() {
        city();
        if ($a("inputCity").style.border === "2px solid red") {
        //   $("cityerror").style.color = "red";
        // } else {
        //   $("cityerror").style.color = "green";
        }
      });
      $a("state").addEventListener("input", function() {
        state();
        if ($a("state").style.border === "2px solid red") {
        //   $a("stateerror").style.color = "red";
        // } else {
        //   $a("stateerror").style.color = "green";
        }
      });
      $a("inputZip").addEventListener("input", function() {
        zip();
        if ($a("inputZip").style.border === "2px solid red") {
        //   $("ziperror").style.color = "red";
        // } else {
        //   $("ziperror").style.color = "green";
        }
    
      });
      $a("phone").addEventListener("input", function() {
        phone();
        if ($a("phone").style.border === "2px solid red") {
        //   $("phonenumbererror").style.color = "red";
        // } else {
        //   $("phonenumbererror").style.color = "green";
        }
    
      });
  
    });

    // Dough option
    const Crust = {
        dough: {
            HandTossed:  [["Small", "9.99"], ["Medium", "12.99"], ["Large", "14.99"]],
            ThinCrust:   [["Medium", "11.99"], ["Large", "13.99"]],
            NewYorkStyle:[["Large", "16.99"], ["Extra large", "19.99"]],
            GlutenFree:  [["Small", "10.99"]]
        }
    }

    $a('handTossed').addEventListener('click', () => {
        $a('sizeBox').style.display = 'block';
        $a('sizeAndCost').innerHTML = "";
        for (let i = 0; i < Crust.dough.HandTossed.length; i += 1) {
            $a('sizeAndCost').innerHTML += 
             `<option value = "${Crust.dough.HandTossed[i][0]} ($${Crust.dough.HandTossed[i][1]})">${Crust.dough.HandTossed[i][0]} ($${Crust.dough.HandTossed[i][1]})</option>`    
        }
       
        $('sizeOrder').innerHTML   = `Size and cost: ${Crust.dough.HandTossed[0][0]} ($${Crust.dough.HandTossed[0][1]})`;
      
    });
    $a('thinCrust').addEventListener('click', () => {
        $a('sizeBox').style.display = 'block';
        $a('sizeAndCost').innerHTML = "";
        for (let i = 0; i < Crust.dough.ThinCrust.length; i += 1) { 
            $a('sizeAndCost').innerHTML += 
            `<option value = "${Crust.dough.ThinCrust[i][0]} ($${Crust.dough.ThinCrust[i][1]})">${Crust.dough.ThinCrust[i][0]} ($${Crust.dough.ThinCrust[i][1]})</option>`
        }
       
       
        $('sizeOrder').innerHTML   = `Size and cost: ${Crust.dough.ThinCrust[0][0]} ($${Crust.dough.ThinCrust[0][1]})`;
       
      
    });
    
    $a('inlineRadio3').addEventListener('click', () => { 
        $a('sizeBox').style.display = 'block';
        $a('sizeAndCost').innerHTML = "";
        for (let i = 0; i < Crust.dough.NewYorkStyle.length; i += 1) { 
            $a('sizeAndCost').innerHTML += 
            `<option value = "${Crust.dough.NewYorkStyle[i][0]} ($${Crust.dough.NewYorkStyle[i][1]})">${Crust.dough.NewYorkStyle[i][0]} ($${Crust.dough.NewYorkStyle[i][1]})</option>`
        }
   
        $('sizeOrder').innerHTML   = `Size and cost: ${Crust.dough.NewYorkStyle[0][0]} ($${Crust.dough.NewYorkStyle[0][1]})`;
       
    });
    
    $a('Gfee').addEventListener('click', () => {
        $a('sizeBox').style.display = 'block';
        $a('sizeAndCost').innerHTML = "";
        for (let i = 0; i < Crust.dough.GlutenFree.length; i += 1) { 
            $a('sizeAndCost').innerHTML += 
            `<option value = "${Crust.dough.GlutenFree[i][0]} $${Crust.dough.GlutenFree[i][1]}">${Crust.dough.GlutenFree[i][0]} ($${Crust.dough.GlutenFree[i][1]})</option>`
        }
       
       
        $('sizeOrder').innerHTML   = `Size and cost: ${Crust.dough.GlutenFree[0][0]} ($${Crust.dough.GlutenFree[0][1]})`;
       
    });

//End Dough option 

 let totalsCostCrust =0

$('.sizeAndCost').change((e) => {
            let sizeOrder            = $a('sizeAndCost').value; 
            let sizeOrderArr         = sizeOrder.split("$");
            
            let sizeTotal            = Number(parseFloat(sizeOrderArr[1]));
            $a('sizeTotal').innerHTML = sizeTotal; 
            let total                = sizeTotal ;
            totalsCostCrust          = total  ;
            console.log(total);
            addTotals();
            console.log("size and cost");

})
    //Pizza other
    let totalToppings = 0;
    cheesePrice=0
    saucePrice=0


$('.cheesePrice').change((e) => {
    //Set the global crust price
    cheesePrice = Number(e.target.value);
    if (cheesePrice > 0) {
        check = true;
    } else {
        check = false;
    }
   
    addTotals();
    console.log(cheesePrice);
});

$('.saucePrice').change((e) => {
    //Set the global crust price
    saucePrice = Number(e.target.value);
    if (saucePrice > 0) {
        check = true;
    } else {
        check = false;
    }
    
    addTotals();
    console.log(saucePrice);
});


// Toppings


let toppingsSel= []; 
$('#toppings').click((e) => {

    if (e.target.checked === undefined){
       
    } else if (e.target.checked === true) {
        toppingsSel.push(e.target.value);
      
    } else {
        let removeItem = toppingsSel.indexOf(e.target.value);
        toppingsSel.splice(removeItem, 1);
    }
   totalToppings = $('input:checkbox:checked').length;
   
    addTotals();
}); 

function addTotals(){
    // getToppings();
    let toppingCost = totalToppings * .99;
    let priceCrust = totalsCostCrust ;
    let endPrice =priceCrust +  cheesePrice + saucePrice + toppingCost;
    $('.orderTotal').text("Total Due: $" + endPrice.toFixed(2));
   
    console.log("AddTotal is running");
}

//  showing order total on page
  let completeOrder = document.getElementById('completeOrder');
  $(completeOrder).click((e) => {
      console.log(addTotals.value);
  })

//End Pizza Other

    $a("submit").addEventListener("click", function(e){

        e.preventDefault();
        if (($a("name").value !== "")&& ($("email").value !== "") && ($a("addressType").value !== "") && ($a("addressOne").value !== "") && ($a("inputCity").value !== "") && ($a("state").value !== "") && ($a("inputZip").value !== "") && ($a("phone").value !== "") ) {
            if ($a("handTossed").checked || $a("thinCrust").checked || $a("inlineRadio3").checked || $a("Gfee").checked) {
              e.preventDefault();
              console.log("Enter billing information below");
              $a("billing").style.display = "block";


            } else {
                e.preventDefault();
                window.alert("Please select crust first");

            }
        
        } else {
            e.preventDefault();
            window.alert("Please fill customer information first");
          }
    });

// Payment address
   //Hidden div
  function checkOptions2(val) {
    if (val === "Other") {
      $a("address2").style.display = "block";
    } else {
      $a("address2").style.display = "none";
    }
  };

 //address validation

 let customerName2 = function validName() {
  let regex = /^[a-z A-Z]{2,30}$/;
  if (regex.test($a("name2").value) && $a("name2").value !== " ") {
    return ($a("name2").style.border = "2px solid green");
  } else {
    return ($a("name2").style.border = "2px solid red");
  }
};
let email2 = function validEmail() {
  let emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/,
    emailResult;
  if (emailRegex.test($a("email2").value) && $a("email2").value !== "") {
    emailResult = ($a("email2").style.border = "2px solid green");
    return emailResult;
  } else {
    emailResult = ($a("email2").style.border = "2px solid red");
    return emailResult;
  }
};

let addressType2 = function validAddress(val) {
  let result;
  if ((val !== " ") && ($a("addressDrop2").selectedIndex) !== 0) {
    result = ($a("addressDrop2").style.border = "2px solid green");
    return result;
  } else {
    result = ($a("addressDrop2").style.border = "2px solid red");
    return result;
  }
};

let address2 = function validStreet() {
  let regex = /^[a-zA-Z0-9\s,'-]*$/,
    result;
  if (regex.test($a("addressOne2").value) && $a("addressOne2").value !== "") {
    result = ($a("addressOne2").style.border = "2px solid green");
    return result;
  } else {
    result = ($a("addressOne2").style.border = "2px solid red");
    return result;
  }
};

let addresstwo2 = function validApartment() {
  let regex = /^[a-zA-Z0-9\s,'-]*$/,
    result;
  if (regex.test($a("apartmentNumber2").value) && $a("apartmentNumber2").value !== "") {
    result = ($a("apartmentNumber2").style.border = "2px solid green");
    return result;
  } else {
    result = ($a("apartmentNumber2").style.border = "1px solid black");
    return result;
  }
};
let city2 = function validCity() {
  let cityRegex = /^[a-z A-Z]{2,50}$/,
    result;

  if (cityRegex.test($a("inputCity2").value) && $a("inputCity2").value !== " ") {
    result = ($a("inputCity2").style.border = "2px solid green");
    return result;
  } else {
    result = ($a("inputCity2").style.border = "2px solid red");
    return result;
  }
};

let state2 = function validState() {
  let stateRegex = /^(AK|AL|AR|AZ|CA|CO|CT|DC|DE|FL|GA|HI|IA|ID|IL|IN|KS|KY|LA|MA|MD|ME|MI|MN|MO|MS|MT|NB|NC|ND|NH|NJ|NM|NV|NY|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VA|VT|WA|WI|WV|WY)$/i,
    result;

  if (stateRegex.test($a("state2").value) && $a("state2").value !== "") {
    result = ($a("state2").style.border = "2px solid green");
    return result;
  } else {
    result = ($a("state2").style.border = "2px solid red");
    return result;
  }
};

let zip2 = function validZip() {
  let zipRegex = /(^\d{5}$)|(^\d{5}-\d{4}$)/,
    zipResult;
  if (zipRegex.test($a("inputZip2").value) && $a("inputZip2").value !== "") {
    zipResult = ($a("inputZip2").style.border = "2px solid green");
    return zipResult;
  } else {
    zipResult = ($a("inputZip2").style.border = "2px solid red");
    return zipResult;
  }
};
let phone2 = function validPhone() {
  let phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
    phoneResult;
  if (phoneRegex.test($a("phone2").value) && $("phone2").value !== "") {
    phoneResult = ($a("phone2").style.border = "2px solid green");
    return phoneResult;
  } else {
    phoneResult = ($a("phone2").style.border = "2px solid red");
    return phoneResult;
  }
};

window.addEventListener("load", function() {

  $a("name2").addEventListener("input", function() {
    customerName2();
    if ($a("name2").style.border === "2px solid red") {
    //   $a("nameerror").style.color = "red";
    // } else {
    //   $a("nameerror").style.color = "green";
     }
  });
  $a("email2").addEventListener("input", function() {
      email2();
      if ($a("email2").style.border === "2px solid red") {
      //   $a("emailerror").style.color = "red";
      // } else {
      //   $a("emailerror").style.color = "green";
       }
    });
    $a("addressDrop2").addEventListener("input", function() {
      addressType2();
      if ($a("addressDrop2").style.border === "2px solid red") {
      //   $a("addresserror").style.color = "red";
      // } else {
      //   $("addresserror").style.color = "green";
      }
  
    });

    $a("addressOne2").addEventListener("input", function() {
      address2();
    
  
    });

    $a("apartmentNumber2").addEventListener("input", function() {
      addresstwo2();
    
    });

    $a("inputCity2").addEventListener("input", function() {
      city2();
     
    });
    $a("state2").addEventListener("input", function() {
      state2();
      
    });
    $a("inputZip2").addEventListener("input", function() {
      zip2();
      
  
    });
    $a("phone2").addEventListener("input", function() {
      phone2();
      
  
    });

  });




// Card Info
function validCreditCard(value) {
  if (/[^0-9-\s]+/.test(value)) return false;
  let nCheck = 0,
    nDigit = 0,
    bEven = false,
    n;
  value = value.replace(/\D/g, "");

  for (n = value.length - 1; n >= 0; n--) {
    let cDigit = value.charAt(n);
    nDigit = parseInt(cDigit, 10);
    if (bEven) {
      if ((nDigit *= 2) > 9) {
        nDigit -= 9;
      }
    }

    nCheck += nDigit;
    bEven = !bEven;
  }

  return (nCheck % 10) === 0;
}

$a("cardNumber").addEventListener("blur", function() {
  let visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
let masterRegEx = /^(?:5[1-5][0-9]{14})$/;
let americanRegEx = /^(?:3[47][0-9]{13})$/;

if (visaRegEx.test($a("cardNumber").value)) {

  if (!validCreditCard($a("cardNumber").value)) {
    $a("cardNumber").style.border = "2px solid red";
  } else {
    $("cardNumberError").style.color = "green";
    $a("cardNumber").style.border = "2px solid green";
    return true;
  }

} else if (masterRegEx.test($a("cardNumber").value)) {

  if (!validCreditCard($("cardNumber").value)) {
    $a("cardNumber").style.border = "2px solid red";
  } else {
    $("cardNumberError").style.color = "green";
    $a("cardNumber").style.border = "2px solid green";
    return true;
  }

} else if (americanRegEx.test($a("cardNumber").value)) {

  if (!validCreditCard($("cardNumber").value)) {
    $a("cardNumber").style.border = "2px solid red";
  } else {
    $("cardNumberError").style.color = "green";
    $a("cardNumber").style.border = "2px solid green";
    return true;
  }

} else {
  $("cardNumberError").style.color = "red";
  $a("cardNumber").style.border = "2px solid red";

}
});

let cvcCode = function validCvc() {
  let regex = /^[0-9]{3}$/,
    result;

  if (regex.test($a("cvcCode").value) && $a("cvcCode").value !== "") {
    result = ($a("cvcCode").style.border = "2px solid green");
    return result;
  } else {
    result = ($a("cvcCode").style.border = "2px solid red");
    return result;
  }
};

  let exMonth = function validMoth() {
     
    if ($a("ex-month").selectedIndex === 0) {
      window.alert("Please select the month");
      return false;
    }
  };
  let exYear = function vaildYear() {

    if ($a("ex-year").selectedIndex === 0) {
      window.alert("Please select the year");
      return false;
    }
  
  };


  $a("cvcCode").addEventListener("input", function() {
    cvcCode();
    
  });

 $a("ex-month").addEventListener("change",  function() {
    exMonth();
   
  });

 $a("ex-year").addEventListener("change", function() {
    exYear();
  let d = new Date();
  let currentYear = d.getFullYear();
  let month = new Date().getMonth() + 1;
  let year = parseInt($a("ex-year").options[$a("ex-year").selectedIndex].value, 10);
  if (($a("ex-month").selectedIndex < month && currentYear === year) || (year < currentYear)) {
    window.alert("please enter valid date");
    $a("ex-month").selectedIndex = 0;
    $a("ex-year").selectedIndex = 0;
   }
});





//delivery2 section

function sameInfoCheckBox() {
    $a("name2").value = $a("name").value;
    $a("name2").style.border = "2px solid green";

    $a("email2").value = $a("email").value;
    $a("email2").style.border = "2px solid green";

    $a("addressDrop2").value = $a("addressDrop").value;
    $a("addressDrop2").style.border = "2px solid green";

    $a("addressOne2").value = $a("addressOne").value;
    $a("addressOne2").style.border = "2px solid green";

    $a("apartmentNumber2").value = $a("apartmentNumber").value;
    $a("apartmentNumber2").style.border = "2px solid green";

    $a("inputCity2").value = $a("inputCity").value;
    $a("inputCity2").style.border = "2px solid green";

    $a("state2").value = $a("state").value;
    $a("state2").style.border = "2px solid green";

    $a("inputZip2").value = $a("inputZip").value;
    $a("inputZip2").style.border = "2px solid green";

    $a("phone2").value = $a("phone").value;
    $a("phone2").style.border = "2px solid green";

}


function sameInfoUnCheckBox() { 
    $a("name2").value = " ";
    $a("name2").style.border = "2px solid #fff";

    $a("email2").value = " ";
    $a("email2").style.border = "2px solid #fff";

    $a("addressDrop2").value = $a("addressDrop").value;
    $a("addressDrop2").style.border = "2px solid #fff";

    $a("addressOne2").value = " ";
    $a("addressOne2").style.border = "2px solid #fff";

    $a("apartmentNumber2").value = " ";
    $a("apartmentNumber2").style.border = "2px solid #fff";

    $a("inputCity2").value = " ";
    $a("inputCity2").style.border = "2px solid #fff";

    $a("state2").value = " ";
    $a("state2").style.border = "2px solid #fff";

    $a("inputZip2").value = " ";
    $a("inputZip2").style.border = "2px solid #fff";

    $a("phone2").value = " ";
    $a("phone2").style.border = "2px solid #fff";
}


// });
$a("sameinfo").addEventListener("click", function() {
    if ($a("sameinfo").checked) {
        sameInfoCheckBox();
        console.log("same info checkbox is checked")
    } else {
        sameInfoUnCheckBox()
      console.log("same info checkbox is not checked")
    }
  });

  let btnPay = document.getElementById("paymentBtn");
  btnPay.addEventListener('click', (e) => {

    e.preventDefault();
    if (($a("name2").value !== "")&& ($("email2").value !== "") && ($a("addressType2").value !== "") && ($a("addressOne2").value !== "") && ($a("inputCity2").value !== "") && ($a("state2").value !== "") && ($a("inputZip2").value !== "") && ($a("phone2").value !== "") ) { 
      $a("paymentDiv").style.display = "block"; 
    } else {
      
      e.preventDefault()
      alert("Please fill billing address first");
    }
  });






  let btnSubmit = document.getElementById("confirmPurchase");
  btnSubmit.addEventListener('click', (e) => {

    e.preventDefault();
    if (($a("name2").value !== "")&& ($("email2").value !== "") && ($a("addressType2").value !== "") && ($a("addressOne2").value !== "") && ($a("inputCity2").value !== "") && ($a("state2").value !== "") && ($a("inputZip2").value !== "") && ($a("phone2").value !== "") ) { 
      if (($a("cardNumber").value !== "")&& ($("cvcCode").value !== "") && ($a("ex-month").value !== "")  ) { 
        console.log("confirmPurchase is clicked");
        e.preventDefault();
         if (!confirm("Are you sure?")) {
      
        return false;
         } else {
         alert("Thank you for ordering!!")
        return true;
       
    }


      } else {
        e.preventDefault();
        alert("please enter your payment information")
      }



    } else {
      e.preventDefault();
      alert("Please enter your billing address ");
    }
    
    


});
         
