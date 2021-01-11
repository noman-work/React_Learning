//Template One
var template =(
<div>
    <p>Hello form App.JSX 🤔😇  Changed ??</p>
    <h1>Noman</h1>
</div>);
var appRoot  = document.getElementById('app');
ReactDOM.render(template, appRoot);


//Template Two
var img_temp = (
    <div class="ths">
        <p>Elon Reeve Musk FRS is a business magnate, industrial designer and engineer. He is the founder, CEO, CTO and chief designer of SpaceX; early investor, CEO and product architect of Tesla, Inc.; founder of The Boring Company; co-founder of Neuralink; and co-founder and initial co-chairman of OpenAI.</p>
        <img src='./img/1.jpg'/>
    </div>
);
var imgShow = document.getElementById('img');
ReactDOM.render(img_temp, imgShow);