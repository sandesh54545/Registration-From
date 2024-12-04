$(document).ready(function () {
    $('#submitBtn').click(function () {
        const formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            message: $('#message').val(),
        };

        $.post('process.php', formData, function (response) {
            $('#result').html(response);
            $('#registrationForm')[0].reset();
        });
    });
});
