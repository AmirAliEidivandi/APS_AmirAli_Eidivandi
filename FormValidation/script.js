const validate = () => {
    const name = document.getElementById("name").value;
    const subject = document.getElementById("subject").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const errorMessage = document.getElementById("error_message");

    errorMessage.style.padding = "10px";

    let text;
    if (name.length < 5) {
        text = "Please Enter valid Name";
        errorMessage.innerHTML = text;
        return false;
    }

    if (subject.length < 10) {
        text = "Please Enter Correct Subject";
        errorMessage.innerHTML = text;
        return false;
    }

    if (isNaN(phone) || phone.length != 10) {
        text = "Please Enter valid Phone Number";
        errorMessage.innerHTML = text;
        return false;
    }

    if (email.indexOf("@") === -1 || email.length < 6) {
        text = "Please Enter valid Email";
        errorMessage.innerHTML = text;
        return false;
    }

    alert("form submitted Successfully!");
    return true;
};
