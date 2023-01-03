function kontrolet()
{
    var mail = document.getElementById("email").value;
    var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+.)+([.])+[a-zA-Z0-9.-]{2,4}$/;
    if (regex.test(mail)==true)
    {
        document.getElementById("actxt").innerHTML="";
    }
    else{
	    document.getElementById("actxt").innerHTML="E-posta Adresi Geçersiz";
    }
}
