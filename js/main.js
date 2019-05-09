'use strict';

(function ($) {
    $(document).ready(function () {
        // Code


        $(".main__form").submit(function (event) {
            if ($(".inputLogin").val() == "admin" && $(".inputPassword").val() == "qwe") {
                correctLogin();
            } else {
                wrongLogin();
                $('.toast').toast('show')
            }
            event.preventDefault();
            setTimeout(stopConfetti, 4000);
            setTimeout(resetColor, 2500);
            setTimeout(resetVal, 500);

        });

        function correctLogin() {
            startConfetti();
            $(".loginLabel").css("color", "green");
            $(".passwordLabel").css("color", "green");

        }

        function wrongLogin() {
            $(".loginLabel").css("color", "red");
            $(".inputLogin").effect("shake");
            $(".passwordLabel").css("color", "red");
            $(".inputPassword").effect("shake");
        }

        function resetColor() {
            $(".loginLabel").css("color", "black");
            $(".passwordLabel").css("color", "black");
        }

        function resetVal() {
            $(".inputLogin").val('');
            $(".inputPassword").val('');
        }





    });
})(jQuery);
