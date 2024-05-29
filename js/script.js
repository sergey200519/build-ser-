// console.log("klsdnfkljsdfjfd");
// const img = document.querySelector(".welcome_content img");
// let i = 1;
// const n = 3;
// setInterval(() => {
//     console.log(i);
//     img.setAttribute("src", `img/slide_${i}.png`)
//     i++;
//     if (i > n) i = 1;
// }, 1000);
////////////////////////////////////////////////////////////////////
let i = 0;
const n = 3;
const welcomeContent = document.querySelector(".welcome_content");
let slideWidth = welcomeContent.offsetWidth;
document.documentElement.style.setProperty("--width_slide", `${slideWidth}px`);
const imgContainer = document.querySelector(".img_container");
setInterval(() => {
    if (i > n - 1) i = 0;
    console.log(i);
    const shift = slideWidth * i;
    // imgContainer.style.marginRight = `${shift}px`;
    imgContainer.style.transform = `translate3d(-${shift}px, 0px, 0px)`
    i++;
}, 5000)
window.addEventListener("resize", () => {
    slideWidth = welcomeContent.offsetWidth;
    document.documentElement.style.setProperty("--width_slide", `${slideWidth}px`);
})