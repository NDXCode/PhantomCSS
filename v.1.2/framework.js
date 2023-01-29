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

const acccols = document.querySelectorAll("[class*='acc-col-custom-']");
console.log(acccols);
for (const elementAccCol of acccols) {
const classList = elementAccCol.classList;
for (const className of classList) {
    if (className.startsWith("acc-col-custom-")) {
        elementAccCol.style.accentColor = className.substring(15);
    }
}
}

const bsizes = document.querySelectorAll("[class*='b-size-']");
console.log(bsizes);
for (const elementBSize of bsizes) {
const classList = elementBSize.classList;
for (const className of classList) {
    if (className.startsWith("b-size-")) {
        elementBSize.style.blockSize = className.substring(7);
    }
}
}

const tops = document.querySelectorAll("[class*='t-']");
console.log(tops);
for (const elementTop of tops) {
const classList = elementTop.classList;
for (const className of classList) {
    if (className.startsWith("t-")) {
        elementTop.style.top = className.substring(2);
    }
}
}

const lefts = document.querySelectorAll("[class*='l-']");
console.log(lefts);
for (const elementLeft of lefts) {
const classList = elementLeft.classList;
for (const className of classList) {
    if (className.startsWith("l-")) {
        elementLeft.style.left = className.substring(2);
    }
}
}

const bottoms = document.querySelectorAll("[class*='b-']");
console.log(bottoms);
for (const elementBottom of bottoms) {
const classList = elementBottom.classList;
for (const className of classList) {
    if (className.startsWith("b-")) {
        elementBottom.style.bottom = className.substring(2);
    }
}
}

const rights = document.querySelectorAll("[class*='r-']");
console.log(rights);
for (const elementRight of rights) {
const classList = elementRight.classList;
for (const className of classList) {
    if (className.startsWith("r-")) {
        elementRight.style.right = className.substring(2);
    }
}
}

const caretcols = document.querySelectorAll("[class*='caret-col-']");
console.log(caretcols);
for (const elementCaretcol of caretcols) {
const classList = elementCaretcol.classList;
for (const className of classList) {
    if (className.startsWith("caret-col-")) {
        elementCaretcol.style.caretColor = className.substring(10);
    }
}
}

const zindexes = document.querySelectorAll("[class*='z-']");
console.log(zindexes);
for (const elementZindex of zindexes) {
const classList = elementZindex.classList;
for (const className of classList) {
    if (className.startsWith("z-")) {
        elementZindex.style.zIndex = className.substring(2);
    }
}
}

const wspaces = document.querySelectorAll("[class*='w-space-']");
console.log(zindexes);
for (const elementWspace of wspaces) {
const classList = elementWspace.classList;
for (const className of classList) {
    if (className.startsWith("w-space-")) {
        elementWspace.style.wordSpacing = className.substring(8);
    }
}
}

const windows = document.querySelectorAll("[class*='windows-']");
console.log(windows);
for (const elementWindow of wspaces) {
const classList = elementWindow.classList;
for (const className of classList) {
    if (className.startsWith("windows-")) {
        elementWindow.style.windows = className.substring(8);
    }
}
}

const verticalaligns = document.querySelectorAll("[class*='v-align-']");
console.log(verticalaligns);
for (const elementVAlign of verticalaligns) {
const classList = elementVAlign.classList;
for (const className of classList) {
    if (className.startsWith("v-align-")) {
        elementVAlign.style.verticalAign = className.substring(8);
    }
}
}
}