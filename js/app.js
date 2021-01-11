'use strict';

//Template One
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'p',
        null,
        'Hello form App.JSX \uD83E\uDD14\uD83D\uDE07  Changed ??'
    ),
    React.createElement(
        'h1',
        null,
        'Noman'
    )
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

//Template Two
var img_temp = React.createElement(
    'div',
    { 'class': 'ths' },
    React.createElement(
        'p',
        null,
        'Elon Reeve Musk FRS is a business magnate, industrial designer and engineer. He is the founder, CEO, CTO and chief designer of SpaceX; early investor, CEO and product architect of Tesla, Inc.; founder of The Boring Company; co-founder of Neuralink; and co-founder and initial co-chairman of OpenAI.'
    ),
    React.createElement('img', { src: './img/1.jpg' })
);
var imgShow = document.getElementById('img');
ReactDOM.render(img_temp, imgShow);
