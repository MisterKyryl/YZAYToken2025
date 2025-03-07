(() => {
    "use strict";
    function addLoadedClass() {
        if (!document.documentElement.classList.contains("loading")) window.addEventListener("load", (function() {
            setTimeout((function() {
                document.documentElement.classList.add("loaded");
            }), 0);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const now = new Date;
    const hour = now.getHours();
    const htmlEl = document.documentElement;
    if (hour >= 20 || hour < 6) {
        htmlEl.classList.add("dark");
        htmlEl.classList.remove("light");
    } else {
        htmlEl.classList.add("light");
        htmlEl.classList.remove("dark");
    }
    document.addEventListener("DOMContentLoaded", (function() {
        const htmlEl = document.documentElement;
        if (htmlEl.classList.contains("light")) {
            const mainImg = document.querySelector(".main__image img.main__picture");
            if (mainImg) mainImg.src = "../img/main/bg-light.png";
            const mainImgMob = document.querySelector(".main__image-mob img.main__picture-mob");
            if (mainImgMob) mainImgMob.src = "../img/main/bg-mob-light.png";
        }
    }));
    window["FLS"] = true;
    addLoadedClass();
})();