// Vanilla Javascript Carousel v3.1.2
// https://zoltantothcom.github.io/vanilla-jsCarousel

function Carousel(n) {
    var i = document.getElementById(n.elem || "Carousel"),
        e = n.interval || 3e3,
/*
        r = n.btnPlayText || "Play",
        l = n.btnStopText || "Stop",
*/
        a = n.arrNextText || "",
        o = n.arrPrevText || "",
        u = "jsCarousel",
        c = "jsCarousel-arrowPrev",
        s = "jsCarousel-arrowNext",
        d = "jsCarousel-dots",
/*
        f = "jsCarousel-btnStop",
        v = "jsCarousel-btnPlay",
*/
        p = i.querySelectorAll("li").length,
        L = 0,
        t = null;
    function m(e, t, n) {
        var r = i.querySelectorAll("." + u + " > ul li")[e];
        r.style.marginLeft = t,
        i.querySelector("." + u + " > ul").removeChild(r),
        i.querySelector("." + u + " > ul").insertAdjacentHTML(n, r.outerHTML)
    }
    function y() {
        [].forEach.call(i.querySelectorAll("." + d + " li"), function (e) {
                e.classList.remove("is-active")
            }),
        i.querySelectorAll("." + d + " li")[L].classList.add("is-active")
    }
    function h(e) {
        e.style.marginLeft = ""
    }
    function b(e) {
        e.style.marginLeft = -i.offsetWidth + "px"
    }
    function C(e) {
        var t = L - e;
        t < 0
            ? E(-t, q)
            : E(t, S)
    }
    function E(e, t) {
        for (var n = 0; n < e; n++) 
            t()
    }
    function S() {
        n.infinite
            ? (h(i.querySelectorAll("." + u + " > ul li")[0]), m(p - 1, -i.offsetWidth + "px", "afterBegin"), g(-1))
            : function () {
                if (T(), 0 === L) 
                    return;
                h(i.querySelectorAll("." + u + " > ul li")[L - 1]),
                g(-1)
            }(),
        A()
    }
    function q() {
        n.infinite
            ? (b(i.querySelectorAll("." + u + " > ul li")[1]), m(0, "", "beforeEnd"), g(1))
            : function () {
                if (L === p - 1) 
                    return T();
                b(i.querySelectorAll("." + u + " > ul li")[L]),
                g(1)
            }(),
        A()
    }
    function g(e) {
        switch (L += e) {
            case - 1:
                L = p - 1;
                break;
            case p:
                L = 0;
                break;
            default:
                L = L
        }
        n.dots && y()
    }
    function A() {
        t && (T(), x())
    }
    function x() {
        t || (t = setInterval(q.bind(this), e))
    }
    function T() {
        clearInterval(t),
        t = null
    }
    return 1 < p && function () {
        var e = {
            dots: function () {
                return function () {
                    var e = document.createElement("ul");
                    e.classList.add(d)
/*
                    e.addEventListener("click", function (e) {
                        "LI" === e.target.tagName && (C(e.target.getAttribute("data-position")), A())
                    }.bind(this));
*/
                    for (var t = 0; t < p; t++) {
                        var n = document.createElement("li");
                        n.setAttribute("data-position", t),
                        e.appendChild(n)
                    }
                    i.appendChild(e),
                    y()
                }()
            },
            arrows: function () {
                return function () {
                    var e = document.createElement("button");
                    e.innerHTML = o, /* e.appendChild(createSVGClose()); */
                    e.classList.add(c);
                    var t = document.createElement("button");
                    t.innerHTML = a,
                    t.classList.add(s),
                    e.addEventListener("click", S),
                    t.addEventListener("click", q),
                    i.appendChild(e),
                    i.appendChild(t)
                }()
            },
/*
            buttons: function () {
                return function () {
                    var e = document.createElement("button");
                    e.innerHTML = r,
                    e
                        .classList
                        .add(v),
                    e.addEventListener("click", x);
                    var t = document.createElement("button");
                    t.innerHTML = l,
                    t
                        .classList
                        .add(f),
                    t.addEventListener("click", T),
                    i.appendChild(e),
                    i.appendChild(t)
                }()
            },
            autoplay: function () {
                return x()
            },
*/
            infinite: function () {
                return m(p - 1, -i.offsetWidth + "px", "afterBegin")
            },
            initial: function () {
                var e = n.initial >= p
                    ? p
                    : n.initial;
                return C(e)
            }
        };
        for (var t in e) 
            n.hasOwnProperty(t) && n[t] && e[t]()
    }(), {
        live: function () {
            return L
        },
        show: C,
        prev: S,
        next: q,
        play: x,
        stop: T
    }
}
function createSVGClose() {
    const svgClose = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgClose.setAttribute("class", "navTR")
    svgClose.setAttribute("viewBox", "-1 -1 18 17.5");
    const svgClosePath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    svgClosePath.setAttribute("d", "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z");
    svgClose.appendChild(svgClosePath);
    return svgClose;
}
function createSVGPrev() {
    const svgPrev = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgPrev.setAttribute("class", "navCL")
    svgPrev.setAttribute("viewBox", "-1 -1 18 17.5");
    const svgPrevPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    svgPrevPath.setAttribute("fill-rule", "evenodd");
    svgPrevPath.setAttribute("d", "M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z");
    svgPrev.appendChild(svgPrevPath);
    return svgPrev;
}
function createSVGNext() {
    const svgNext = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgNext.setAttribute("class", "navCR")
    svgNext.setAttribute("viewBox", "-1 -1 18 17.5");
    const svgNextPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    svgNextPath.setAttribute("fill-rule", "evenodd");
    svgNextPath.setAttribute("d", "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z");
    svgNext.appendChild(svgNextPath);
    return svgNext;
}
document.body.appendChild(createSVGClose());
document.body.appendChild(createSVGPrev());
document.body.appendChild(createSVGNext());






/* timo hlubek   https://timohlubek.com/public/global.js 



const imgNumber = document.getElementById("lightbox-img-nr");
function openLightbox(imgUrl, index) {
    currentIndex = index;
    lightboxImg.setAttribute("src", imgUrl);
    lightbox.style.display = "flex";
    lightboxImg.style.objectFit = "contain";
    imagesArray = Array.from(triggerElements).map((trigger) => trigger.getAttribute("src"));
    updateImageNumber();
  }
  function navigateImages(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
      currentIndex = imagesArray.length - 1;
    } else if (currentIndex >= imagesArray.length) {
      currentIndex = 0;
    }
    const imgUrl = imagesArray[currentIndex];
    lightboxImg.setAttribute("src", imgUrl);
    updateImageNumber();
  }
  function updateImageNumber() {
    imgNumber.textContent = `${currentIndex + 1} / ${imagesArray.length}`;
  }

  <div class="lightbox" id="lightbox">
  <button class="close-btn" id="close-btn">close</button>
  <img src="" alt="Lightbox Image" class="lightbox-img" id="lightbox-img" draggable="false" loading="lazy">
  <div class="lightbox-controls">
    <button class="prev-btn" id="prev-btn">←</button>
    <p class="lightbox-count" id="lightbox-img-nr">[1/12]</p>
    <button class="next-btn" id="next-btn">→</button>
  </div>
</div>



*/