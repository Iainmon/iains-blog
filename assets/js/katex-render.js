
function katexGo() {

    // renderMathInElement(document.body);
    renderMathInElement(document.body, {delimiters: [
        {left: '$', right: '$', display: false},
    ]});
    // renderMathInElement(document.body,         {
    //     delimiters: [
    //         {left: "$$", right: "$$", display: true},
    //         {left: "\\[", right: "\\]", display: true},
    //         {left: "$", right: "$", display: false},
    //         {left: "\\(", right: "\\)", display: false}
    //     ]
    // });
    // renderMathInElement(document.body, {delimiters: [
    //     // {left: '$$', right: '$$', display: true},
    //         {left: '$', right: '$', display: false},
    //     ]});


}

console.log('hello from katex-render.js');