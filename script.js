const check = document.getElementById('check');

function clicar() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    const samText = document.getElementById('sam_text');
    const profText = document.getElementById('prof_text');
    const Samuca = document.getElementById('Samuel');
    const bemvi = document.getElementById('bemvindo');

    const c_sharp = document.getElementById('C#');
    const html = document.getElementById('HTML');
    const css = document.getElementById('CSS');
    const js = document.getElementById('JS');
    const samimg = document.getElementById('sam_img');

    
    if (body.classList.contains('dark-mode')) {
        samText.style.color = 'transparent'; 
        profText.style.color = 'transparent'; 
        Samuca.style.color = 'transparent';
        bemvi.style.color = 'transparent';
        c_sharp.src = "C_sharp_white.png";
        html.src = "Html_white.png";
        css.src = "Css_white.png";
        js.src = "Js_white.png";
        samimg.src = "Eu_black.png";
    } else {
        samText.style.color = 'transparent'; 
        profText.style.color = 'transparent'; 
        Samuca.style.color = 'transparent';
        bemvi.style.color = 'transparent';
        c_sharp.src = "C_sharp.png";
        html.src = "Html.png";
        css.src = "Css.png";
        js.src = "Js.png";
        samimg.src = "Eu.png";
    }
}