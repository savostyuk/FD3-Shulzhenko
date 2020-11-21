"use strict";
import React from 'react';
import ReactDOM from 'react-dom';

import Product from "./components/product";
import Shop from "./components/shop";

var shopName = 'Электросила';
var shopGoods = require('./shopGoods.json');

ReactDOM.render(
    <Shop
        shop={shopName}
        goods={shopGoods}
    />,
    document.getElementById('container')
);