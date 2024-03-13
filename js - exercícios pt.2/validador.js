function validateForm() {
    var inputField = document.getElementById("myInput");

    if (inputField.value.trim() === "") {
        inputField.classList.add("error");
    } else {
        inputField.classList.remove("error");
    }
}