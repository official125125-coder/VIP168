/* ==========================================
   VIP168
========================================== */


/* CUSTOMER SERVICE */

var whatsappCustomerLink =
    "https://wa.me/qr/Y5HNIWJKBKANN1";

var telegramCustomerLink =
    "https://t.me/Vip_168_cs";


/* GROUP / CHANNEL */

var whatsappGroupLink =
    "https://wa.me/qr/Y5HNIWJKBKANN1";

var telegramChannelLink =
    "https://t.me/VIP168_Channel";


/* ELEMENTS */

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


/* OPEN POPUP */

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


/* CLOSE POPUP */

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


/* GAME CARD */

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


/* CLOSE BUTTON */

if (popupClose) {

    popupClose.addEventListener(
        "click",
        closeGamePopup
    );

}


/* CLICK OUTSIDE */

if (popupOverlay) {

    popupOverlay.addEventListener(
        "click",
        closeGamePopup
    );

}


/* ESC */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeGamePopup();

        }

    }
);


/* OPEN OFFICIAL LINK */

function openOfficialLink(link) {

    if (!link || link === "#") {
        return;
    }

    window.open(
        link,
        "_blank",
        "noopener,noreferrer"
    );
}


/* WHATSAPP CUSTOMER SERVICE */

if (popupWhatsapp) {

    popupWhatsapp.addEventListener(
        "click",
        function () {

            openOfficialLink(
                whatsappCustomerLink
            );

        }
    );

}


/* TELEGRAM CUSTOMER SERVICE */

if (popupTelegram) {

    popupTelegram.addEventListener(
        "click",
        function () {

            openOfficialLink(
                telegramCustomerLink
            );

        }
    );

}


/* WHATSAPP CHANNEL */

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


/* TELEGRAM CHANNEL */

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


/* YEAR */

if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* BACK TOP */

if (backTop) {

    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 500) {

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
                behavior: "smooth"
            });

        }
    );
}