$(document).ready(function(){
    $('#submitBtn').click(function(){
        let name = $('input[name="fullname"]').val();
        let phone = $('input[name="phone"]').val();

        if (name.length < 3) {
            alert("Name must be at least 3 characters.");
            return false;
        }

        if (!/^\d{10}$/.test(phone)) {
            alert("Enter a valid 10-digit phone number.");
            return false;
        }

        // form will submit normally
    });
});
