$(document).ready(function () {
    (function () {
        for (let i = 0; i < boxContainer.length; i++) {
            document.querySelector(".Products .row").innerHTML += `
                <div class="`+ boxContainer[i].whatBox + ` col-11 container" data-aos="zoom-in-up" data-aos-duration="2000">
                    <div class="row">
                        <div class="about-container-post col-md-2 col-3">
                            <span class="text col-12">`+ boxContainer[i].whatTitleBox + `</span>
                            <a href="#" class="show-more col-12">مشاهده همه<i class="fas fa-arrow-left"></i></a>
                        </div>
                        <div class="post-container col-md-10 col-9">
                            <button class="scroll-left-post" id="scroll-left-post-`+ boxContainer[i].whatBox + `">
                                <i class="fas fa-arrow-left"></i></button>
                            <button class="scroll-right-post " id="scroll-right-post-`+ boxContainer[i].whatBox + `">
                                <i class="fas fa-arrow-right"></i></button>
                            <div class="post" id="box-post-`+ boxContainer[i].whatBox + `"></div>
                        </div>
                    </div>
                </div>`;
            if (i == boxContainer.length - 1) {
                addProductToBox();
            }
        }
    }())

    $("#nav .btn-home-page").click(function () {
        window.location = "index.html";
    });

    $(".scroll-to-product").click(function () {
        window.scrollTo(0, 600);
    });

    $("#nav .btn-info").click(function () {
        scrollToFooterItem(".item-about-us");
    });

    $("#nav .btn-phone").click(function () {
        scrollToFooterItem(".item-ways-of-communication");
    });

    $("#scroll-left-post-shert").click(function () {
        checkScrollBox("shert", "left");
    });

    $("#scroll-right-post-shert").click(function () {
        checkScrollBox("shert", "right");
    });

    $("#scroll-left-post-hat").click(function () {
        checkScrollBox("hat", "left");
    });

    $("#scroll-right-post-hat").click(function () {
        checkScrollBox("hat", "right");
    });

    $("#scroll-left-post-shoose").click(function () {
        checkScrollBox("shoose", "left");
    });

    $("#scroll-right-post-shoose").click(function () {
        checkScrollBox("shoose", "right");
    });

    $("#footer .item-about-us .read-more p").click(function () {
        $("#footer .item-about-us .read-more p").css("visibility", "hidden");
        $("#footer .item-about-us .read-more").css("visibility", "hidden");
        $("#footer .fade-text").css("visibility", "hidden");
    });
});

function scrollToFooterItem(item) {
    window.scrollTo(0, 3500);
    $("#footer " + item + "").animate({
        marginTop: "10px",
        flexBasis: "45%"
    }, 1200).animate({
        marginTop: "0px",
        flexBasis: "34%"
    }, 400);
}

function checkScrollBox(product, direction) {
    let oppositeDirection, sizeScroll, minusOrPlusLeftScroll;
    if (direction == "left") {
        oppositeDirection = "right";
        minusOrPlusLeftScroll = "-";
        sizeScroll = $("#box-post-" + product + "").scrollLeft() <= 200;
    } else if (direction == "right") {
        oppositeDirection = "left";
        minusOrPlusLeftScroll = "+";
        sizeScroll = $("#box-post-" + product + "").scrollLeft() >= 800;
    }
    $("#box-post-" + product + "").animate({
        scrollLeft: "" + minusOrPlusLeftScroll + "=250"
    }, 10, function () {
        if (sizeScroll) {
            $("#scroll-" + direction + "-post-" + product + "").css("visibility", "hidden");
        }
        $("#scroll-" + oppositeDirection + "-post-" + product + "").css("visibility", "visible");
    });
}
function addProductToBox() {
    for (let selectProducts = 0; selectProducts < allProduct.length; selectProducts++) {
        document.getElementById("box-post-" + allProduct[selectProducts].category + "").innerHTML += `
            <article class="post-item col-lg-2 col-md-3 col-4">
                <div class="post-image">
                    <img src="`+ allProduct[selectProducts].imgSrc + `" alt="">
                </div>
                <div class="post-content">
                    <p>`+ allProduct[selectProducts].title + `</p>
                </div>
            </article>`
    }
    for (let i = 0; i < customersLogo.length; i++) {
        document.querySelector(".logo-image").innerHTML += `
            <img class="col-lg-1 col-sm-2 col-3 ` + customersLogo[i].className + `" src=" ` + customersLogo[i].imgSrc + `">
        `;
    }
    for (let i = 0; i < whyus.length; i++) {
        document.querySelector(".posts-container").innerHTML += `
                <article class="posts col-lg-4 col-md-6 col-6">
                    <div class="post-item">
                        <div class="icon-post container">
                            <div class="row">
                                <img class="icon col-md-4" src="`+ whyus[i].imgSrc + `">
                                <div class="title-post col-md-8 col-12">`+ whyus[i].postTitle + `</div>
                            </div>
                        </div>
                        <div class="post-content">
                            <p>`+ whyus[i].content + `</p>
                        </div>
                    </div>
                </article>
        `;
    }
}