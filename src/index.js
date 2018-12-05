import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// index.js : 다른 component를 rendering 하는 역할
//  1. 다른 component 를 불러오는 방법
//      1) component의 class 를 import
//      2) "<App />" 로 componet class 를 사용

// ReactDOM 이 "App" 이라는 component 를 index.html에 <root>에 rendering
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
