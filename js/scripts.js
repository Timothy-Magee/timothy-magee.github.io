// Needs to reference nunjucks-slim in the HTML file before
// <script src="js/nunjucks-slim.min.js" type="text/javascript"></script>
const env = nunjucks.configure('/js', {
    autoescape: true
});



// Sample call to Nunjucks view
const dummyArea = document.getElementById('dummy-nunjuck-view');

const dummyVariable = ["one", "two", "three"];

let dummyContent = `<ul>`;
for (let i = 0; i < dummyVariable.length; i++) {
    const viewRender = env.render('dummy-view.html', { item: dummyVariable[i] });
    dummyContent += viewRender;
}
dummyContent += `</ul>`;

dummyArea.innerHTML = dummyContent;
