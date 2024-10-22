// Banner Function

window.onscroll = function() {shrinkBanner()};

function shrinkBanner() {
    const banner = document.getElementById("banner");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        banner.classList.add("small-banner");
    } else {
        banner.classList.remove("small-banner");
    }
}

