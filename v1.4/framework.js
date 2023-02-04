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

const minwidths = document.querySelectorAll("[class*='w-min-']");
console.log(minwidths);
for (const elementMinWidth of minwidths) {
const classList = elementMinWidth.classList;
for (const className of classList) {
    if (className.startsWith("w-min-")) {
        elementMinWidth.style.minWidth = className.substring(6);
    }
}
}

const minheights = document.querySelectorAll("[class*='h-min-']");
console.log(minheights);
for (const elementMinHeight of minheights) {
const classList = elementMinHeight.classList;
for (const className of classList) {
    if (className.startsWith("h-min-")) {
        elementMinHeight.style.minHeight = className.substring(6);
    }
}
}

const maxwidths = document.querySelectorAll("[class*='w-max-']");
console.log(maxwidths);
for (const elementMaxWidth of maxwidths) {
const classList = elementMaxWidth.classList;
for (const className of classList) {
    if (className.startsWith("w-max-")) {
        elementMaxWidth.style.maxWidth = className.substring(6);
    }
}
}

const maxheights = document.querySelectorAll("[class*='h-max-']");
console.log(maxheights);
for (const elementMaxHeight of maxheights) {
const classList = elementMaxHeight.classList;
for (const className of classList) {
    if (className.startsWith("h-max-")) {
        elementMaxHeight.style.mayHeight = className.substring(6);
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

const fontweights = document.querySelectorAll("[class*='f-weight-']");
console.log(fontweights);
for (const elementFontWeight of fontweights) {
const classList = elementFontWeight.classList;
for (const className of classList) {
    if (className.startsWith("f-weight-")) {
        elementFontWeight.style.fontWeight = className.substring(9);
    }
}
}

const gaps = document.querySelectorAll("[class*='gap-']");
console.log(gaps);
for (const elementGap of gaps) {
const classList = elementGap.classList;
for (const className of classList) {
    if (className.startsWith("gap-")) {
        elementGap.style.gap = className.substring(4);
    }
}
}

const lineheights = document.querySelectorAll("[class*='l-height-']");
console.log(lineheights);
for (const elementLineHeight of lineheights) {
const classList = elementLineHeight.classList;
for (const className of classList) {
    if (className.startsWith("l-height-")) {
        elementLineHeight.style.lineHeight = className.substring(9);
    }
}
}

const margintops = document.querySelectorAll("[class*='m-top-']");
console.log(margintops);
for (const elementMTops of margintops) {
const classList = elementMTops.classList;
for (const className of classList) {
    if (className.startsWith("m-top-")) {
        elementMTops.style.marginTop = className.substring(6);
    }
}
}

const marginbottoms = document.querySelectorAll("[class*='m-bottom-']");
console.log(marginbottoms);
for (const elementMBottoms of marginbottoms) {
const classList = elementMBottoms.classList;
for (const className of classList) {
    if (className.startsWith("m-bottom-")) {
        elementMBottoms.style.marginBottom = className.substring(9);
    }
}
}

const marginlefts = document.querySelectorAll("[class*='m-left-']");
console.log(marginlefts);
for (const elementMLeft of marginlefts) {
const classList = elementMLeft.classList;
for (const className of classList) {
    if (className.startsWith("m-left-")) {
        elementMLeft.style.marginLeft = className.substring(7);
    }
}
}

const marginrights = document.querySelectorAll("[class*='m-right-']");
console.log(marginrights);
for (const elementMRight of marginrights) {
const classList = elementMRight.classList;
for (const className of classList) {
    if (className.startsWith("m-right-")) {
        elementMRight.style.marginRight = className.substring(8);
    }
}
}

const paddingtops = document.querySelectorAll("[class*='p-top-']");
console.log(paddingtops);
for (const elementPTops of paddingtops) {
const classList = elementPTops.classList;
for (const className of classList) {
    if (className.startsWith("p-top-")) {
        elementPTops.style.paddingTop = className.substring(6);
    }
}
}

const paddingbottoms = document.querySelectorAll("[class*='p-bottom-']");
console.log(paddingbottoms);
for (const elementPBottoms of paddingbottoms) {
const classList = elementPBottoms.classList;
for (const className of classList) {
    if (className.startsWith("p-bottom-")) {
        elementPBottoms.style.paddingBottom = className.substring(9);
    }
}
}

const paddinglefts = document.querySelectorAll("[class*='p-left-']");
console.log(paddinglefts);
for (const elementPLeft of paddinglefts) {
const classList = elementPLeft.classList;
for (const className of classList) {
    if (className.startsWith("p-left-")) {
        elementPLeft.style.paddingLeft = className.substring(7);
    }
}
}

const paddingrights = document.querySelectorAll("[class*='p-right-']");
console.log(paddingrights);
for (const elementPRight of paddinglefts) {
const classList = elementPRight.classList;
for (const className of classList) {
    if (className.startsWith("p-right-")) {
        elementPRight.style.paddingRight = className.substring(8);
    }
}
}

const borders = document.querySelectorAll("[class*='border-']");
console.log(borders);
for (const elementBorder of borders) {
    const classList = elementBorder.classList;
    for (const className of classList) {
        if (className.startsWith("border-")) {
            const [width, type, color] = className.split("-").slice(1);
            elementBorder.style.border = `${width} ${type} ${color}`;
        }
    }
}

const gridtemplatecols = document.querySelectorAll("[class*='grid-template-columns-']");
console.log(gridtemplatecols);
for (const elementGridTC of gridtemplatecols) {
    const classList = elementGridTC.classList;
    for (const className of classList) {
        if (className.startsWith("grid-template-columns-")) {
            const values = className.split("-").slice(3);
            elementGridTC.style.gridTemplateColumns = values.join(" ");
        }
    }
}
}