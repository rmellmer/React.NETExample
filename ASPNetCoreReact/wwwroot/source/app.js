require('./lib');

import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './reactcomponent';
import FetchData from './fetchdata';
import ES6Lib from './es6codelib';

ReactDOM.render(
    <div>
        <Counter />
    </div>,
    document.getElementById('basicreactcomponent')
);
ReactDOM.render(
    <FetchData />,
    document.getElementById('reactcomponentwithapidata')
);
//document.getElementById("fillthis").innerHTML = getText();
//$('#fillthiswithjquery').html('Filled by Jquery??');
//let myES6Object = new ES6Lib();
//$('#fillthiswithes6lib').html(myES6Object.getData());
module.hot.accept();