$(document).ready(function () {
    slider();
.mouseover(function() {
        var src = $(this).attr("src").match(/[^\.]+/) + ".png";
        $(this).attr("src", src);
    })
        .mouseout(function() {
            var src = $(this).attr("src").replace("over.gif", ".gif");
            $(this).attr("src", src);
        });
});

function slider(){
    //wybierz slade kolejny (prawy czy lewy) i wyswietlSlide
    poprz=$(".prev");
    nast=$(".next");
    slide=$(".slade");
    aktualny=0;
    liczba=slide.length;
    //alert(liczba);
    // wylicz aktualny
    nast.click(function () {
        if (aktualny===liczba-1)
            aktualny=0;
        else
            aktualny++;
        wyswietlSlajd(aktualny);
    });
    poprz.click(function () {
        //policz aktualny
        if (aktualny===0)
            aktualny=liczba-1;
        else
            aktualny--;
        wyswietlSlajd(aktualny);
    });
}

function wyswietlSlajd(aktualny) {
    sliderco=$("#slider #slide");
    sliderco.fadeOut(200,function () {
        slide.removeClass("active");
        slide.eq(aktualny).addClass("active");
        sliderco.fadeIn();

    })

}

//efekt rollover biblioteka fancybox