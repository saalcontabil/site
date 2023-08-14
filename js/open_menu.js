   /**
     * função para abrir e fechar o menu resposivo
     * @param {int} action identificar se vai abrir ou fechar
     * 1 - para abrir e 2 - para fechar
     */
    function abreMenu(action) {
        if (action === 1) {
            $('.overlay').css("display", "block");
            $('.overlay').stop().animate({
                left: "0%"
            }, 500, function () {
                $('#MenuResposivo').css("display", "block");
                $('#MenuResposivo').stop().animate({
                    left: "0%"
                }, 500, function () {});
            });
        } else {
            $('#MenuResposivo').stop().animate({
                left: "-100%"
            }, 500, function () {
                $('#MenuResposivo').css("display", "none");
                $('.overlay').stop().animate({
                    left: "100%"
                }, 500, function () {
                    $('.overlay').css("display", "none");
                });
            });
        }
    }

    $(document).ready(function () {
        $(window).scroll(function () {
            var height = $(window).scrollTop();
            if (height > 130) {
                $(".menu-topo").addClass("bg-scroll");
            } else {
                $(".menu-topo").removeClass("bg-scroll");
            }
        });
    });