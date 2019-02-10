import dotenv from 'dotenv';
dotenv.config({
    path: '.env',
});

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faHome,
    faLightbulb,
    faCaretDown,
    faInfo,
    faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faHome, faLightbulb, faGithub, faCaretDown, faInfo, faTrash);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
