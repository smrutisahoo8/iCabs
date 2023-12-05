function customerValidate() {
  let userName = document.getElementById("username").value;
  let gmail = document.getElementById("gmail").value;
  let phone = document.getElementById("phone").value;
  let userStatus = (mailStatus = phoneStatus = false);
  let userExp = /^[a-zA-Z\s]+$/;
  let mailExp = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
  let phoneExp = /^[0-9]+$/;

  if (userName === "") {
    document.getElementById("nameNote").innerHTML = "Enter Your Name";
    userStatus = false;
  } else {
    if (userName.match(userExp)) {
      document.getElementById("nameNote").innerHTML = "";
      userStatus = true;
    } else {
      document.getElementById("nameNote").innerHTML = "Alphabets Only";
    }
  }

  if (gmail === "") {
    document.getElementById("mailNote").innerHTML = "Enter Your Mail";
    mailStatus = false;
  } else {
    if (gmail.match(mailExp)) {
      document.getElementById("mailNote").innerHTML = "";
      mailStatus = true;
    } else {
      document.getElementById("mailNote").innerHTML = "Enter valid Mail";
      mailStatus = false;
    }
  }

  if (phone === "") {
    document.getElementById("phoneNote").innerHTML = "Enter Phone Number";
    phoneStatus = false;
  } else {
    if (phone.match(phoneExp)) {
      if (phone.length === 10) {
        document.getElementById("phoneNote").innerHTML = "";
        phoneStatus = true;
      } else {
        document.getElementById("phoneNote").innerHTML = "10 Digits Only";
        phoneStatus = false;
      }
    } else {
      document.getElementById("phoneNote").innerHTML =
        "Enter Valid Phone Number";
      phoneStatus = false;
    }
  }

  if ((userStatus === true && mailStatus === true && phoneStatus === true)) {
    return true;
  } else {
    return false;
  }
}
