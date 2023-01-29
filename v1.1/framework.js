window.onload = function() {
const elements = document.querySelectorAll("[class*='col-custom-']");
console.log(elements);
for (const element of elements) {
const classList = element.classList;
for (const className of classList) {
    if (className.startsWith("col-custom-")) {
        element.style.color = className.substring(11);
    }
}
}

const backgrounds = document.querySelectorAll("[class*='bg-custom-']");
console.log(backgrounds);
for (const elementBg of backgrounds) {
const classList = elementBg.classList;
for (const className of classList) {
    if (className.startsWith("bg-custom-")) {
        elementBg.style.background = className.substring(10);
    }
}
}


const bradiuses = document.querySelectorAll("[class*='b-rad-custom-']");
console.log(bradiuses);
for (const elementBRad of bradiuses) {
const classList = elementBRad.classList;
for (const className of classList) {
    if (className.startsWith("b-rad-custom-")) {
        elementBRad.style.borderRadius = className.substring(13);
    }
}
}

const margins = document.querySelectorAll("[class*='m-custom-']");
console.log(margins);
for (const elementMargin of margins) {
const classList = elementMargin.classList;
for (const className of classList) {
    if (className.startsWith("m-custom-")) {
        elementMargin.style.margin = className.substring(9);
    }
}
}

const paddings = document.querySelectorAll("[class*='p-custom-']");
console.log(paddings);
for (const elementPadding of paddings) {
const classList = elementPadding.classList;
for (const className of classList) {
    if (className.startsWith("p-custom-")) {
        elementPadding.style.padding = className.substring(9);
    }
}
}

const widths = document.querySelectorAll("[class*='w-custom-']");
console.log(widths);
for (const elementWidth of widths) {
const classList = elementWidth.classList;
for (const className of classList) {
    if (className.startsWith("w-custom-")) {
        elementWidth.style.width = className.substring(9);
    }
}
}

const heights = document.querySelectorAll("[class*='h-custom-']");
console.log(heights);
for (const elementHeight of heights) {
const classList = elementHeight.classList;
for (const className of classList) {
    if (className.startsWith("h-custom-")) {
        elementHeight.style.height = className.substring(9);
    }
}
}

const FSizes = document.querySelectorAll("[class*='f-size-custom-']");
console.log(FSizes);
for (const elemetFSize of FSizes) {
const classList = elemetFSize.classList;
for (const className of classList) {
    if (className.startsWith("f-size-custom-")) {
        elemetFSize.style.fontSize = className.substring(14);
    }
}
}
}