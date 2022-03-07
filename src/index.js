import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import 'antd/dist/antd.less';
import App from './App';
import { BrowserRouter} from "react-router-dom";


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);