'use strict';

(function ($) {
    $(document).ready(function () {
        // Code  


        $(".main__form").submit(function (event) {
            if ($(".inputLogin").val() == "admin" && $(".inputPassword").val() == "qwe") {
                correctLogin();
            } else {
                wrongLogin();
            }
            event.preventDefault();
            setTimeout(stopConfetti, 3000);
            setTimeout(resetColor, 2500);
            setTimeout(resetVal, 2500);

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
