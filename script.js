/* ==========================================
   VIP168
========================================== */


/* ==================================================
   WHATSAPP CUSTOMER SERVICE
   Direct chat
================================================== */

var whatsappNumber =
    "601137185849";

var whatsappMessage =
    "Hi VIP168, saya ingin bertanya.";

var whatsappCustomerLink =
    "https://wa.me/" +
    whatsappNumber +
    "?text=" +
    encodeURIComponent(whatsappMessage);


/* ==================================================
   WHATSAPP GROUP / CHANNEL
   Menggunakan nombor WhatsApp yang sama
================================================== */

var whatsappGroupLink =
    "https://wa.me/" +
    whatsappNumber +
    "?text=" +
    encodeURIComponent(whatsappMessage);


/* ==================================================
   TELEGRAM
================================================== */

var telegramCustomerLink =
    "https://t.me/Vip_168_cs";

var telegramChannelLink =
    "https://t.me/VIP168_Channel";


/* ==================================================
   ELEMENT
================================================== */

var gamePopup =
    document.getElementById("gamePopup");

var popupGameName =
    document.getElementById("popupGameName");

var popupGameText =
    document.getElementById("popupGameText");

var popupClose =
    document.getElementById("popupClose");

var popupOverlay =
    document.getElementById("popupOverlay");

var popupWhatsapp =
    document.getElementById("popupWhatsapp");

var popupTelegram =
    document.getElementById("popupTelegram");

var whatsappGroup =
    document.getElementById("whatsappGroup");

var telegramChannel =
    document.getElementById("telegramChannel");

var backTop =
    document.getElementById("backTop");

var year =
    document.getElementById("year");

var gameCards =
    document.querySelectorAll(".game-card");


/* ==================================================
   OPEN GAME POPUP
================================================== */

function openGamePopup(gameName) {

    if (!gamePopup) {
        return;
    }


    if (popupGameName) {

        popupGameName.textContent =
            gameName;

    }


    if (popupGameText) {

        popupGameText.textContent =
            gameName;

    }


    gamePopup.classList.add(
        "active"
    );


    gamePopup.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "popup-open"
    );

}


/* ==================================================
   CLOSE GAME POPUP
================================================== */

function closeGamePopup() {

    if (!gamePopup) {
        return;
    }


    gamePopup.classList.remove(
        "active"
    );


    gamePopup.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "popup-open"
    );

}


/* ==================================================
   GAME CARD CLICK
================================================== */

for (
    var i = 0;
    i < gameCards.length;
    i++
) {

    gameCards[i].addEventListener(
        "click",
        function () {

            var gameName =
                this.getAttribute(
                    "data-game"
                );


            openGamePopup(
                gameName
            );

        }
    );

}


/* ==================================================
   CLOSE POPUP BUTTON
================================================== */

if (popupClose) {

    popupClose.addEventListener(
        "click",
        function () {

            closeGamePopup();

        }
    );

}


/* ==================================================
   CLICK OUTSIDE POPUP
================================================== */

if (popupOverlay) {

    popupOverlay.addEventListener(
        "click",
        function () {

            closeGamePopup();

        }
    );

}


/* ==================================================
   ESC CLOSE
================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeGamePopup();

        }

    }
);


/* ==================================================
   OPEN LINK
================================================== */

function openOfficialLink(link) {

    if (!link || link === "#") {
        return;
    }


    /*
       Gunakan location.href supaya klik
       dianggap sebagai navigasi langsung.

       Ini lebih sesuai untuk mobile browser
       berbanding membuka tab baru.
    */

    window.location.href =
        link;

}


/* ==================================================
   WHATSAPP CUSTOMER SERVICE
================================================== */

if (popupWhatsapp) {

    popupWhatsapp.addEventListener(
        "click",
        function () {

            /*
               Tutup popup dahulu
            */

            closeGamePopup();


            /*
               Buka WhatsApp direct chat
            */

            openOfficialLink(
                whatsappCustomerLink
            );

        }
    );

}


/* ==================================================
   TELEGRAM CUSTOMER SERVICE
================================================== */

if (popupTelegram) {

    popupTelegram.addEventListener(
        "click",
        function () {

            closeGamePopup();


            openOfficialLink(
                telegramCustomerLink
            );

        }
    );

}


/* ==================================================
   WHATSAPP GROUP / CHANNEL
================================================== */

if (whatsappGroup) {

    whatsappGroup.addEventListener(
        "click",
        function () {

            openOfficialLink(
                whatsappGroupLink
            );

        }
    );

}


/* ==================================================
   TELEGRAM CHANNEL
================================================== */

if (telegramChannel) {

    telegramChannel.addEventListener(
        "click",
        function () {

            openOfficialLink(
                telegramChannelLink
            );

        }
    );

}


/* ==================================================
   CURRENT YEAR
================================================== */

if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* ==================================================
   BACK TO TOP
================================================== */

if (backTop) {

    window.addEventListener(
        "scroll",
        function () {

            if (
                window.scrollY > 500
            ) {

                backTop.classList.add(
                    "show"
                );

            } else {

                backTop.classList.remove(
                    "show"
                );

            }

        }
    );


    backTop.addEventListener(
        "click",
        function () {

            window.scrollTo({

                top: 0,

                behavior:
                    "smooth"

            });

        }
    );

}
