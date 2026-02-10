const navDialog = document.getElementById("nav-dialog");
function handleMenu() {
    console.log("Menu button clicked");
    navDialog.classList.toggle("hidden");
}

function setupIntersectionObserver(element, isLTR, speed) {
    const interSectionCallBack = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if (isIntersecting) {
            document.addEventListener("scroll", handleScroll);
        } else {
            document.removeEventListener("scroll", handleScroll);
        }
    }

    const intersectionObserver = new IntersectionObserver(interSectionCallBack);
    intersectionObserver.observe(element);

    function handleScroll() {
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
        element.style.transform = `translateX(${isLTR ? translateX : -translateX}px)`;
    }
}

const line1 = document.getElementById("line1");
setupIntersectionObserver(line1, true, 0.15);

const line2 = document.getElementById("line2");
setupIntersectionObserver(line2, false, 0.15);

const line3 = document.getElementById("line3");
setupIntersectionObserver(line3, true, 0.15);

const line4 = document.getElementById("line4");
setupIntersectionObserver(line4, false, 0.8);