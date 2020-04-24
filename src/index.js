import  React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import createAppStore from './store/store'

const backgroundImage = require("./resources/img/bg-img/gradient-gray.jpg");

const indexSectionStyle = {
    backgroundImage: 'url(' + backgroundImage + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%'
};

render(
    <div id="backgroundWrapper" style={indexSectionStyle}>
        <App appStore={createAppStore()} />
    </div>,
    document.getElementById('root')
);
