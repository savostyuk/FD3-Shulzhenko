var Shop = React.createClass ({

    displayName: Shop,

    propTypes: {
        shop: React.PropTypes.string.isRequired,
        goods: React.PropTypes.array.isRequired,
    },

    render: function (){
        var headings = Object.keys(this.props.goods[0]);
        for (var z = 0; z < headings.length; z++){
            if (headings[z] === "code") headings.splice(z, 1);
        }

        var headingsCode = headings.map( k =>
            React.DOM.td ({key:k,className: 'HeadingsItem' }, k)
        );

        var goodsCode = this.props.goods.map (v=>
        React.createElement(Product, { key:v.code, code:v.code, name:v.name, price:v.price, url:v.url, balance:v.balance}))

        return React.DOM.div( {className:'IShop'},
            React.DOM.div( {className:'Shop'}, this.props.shop ),
            React.DOM.table ( {className:'GoodsShop'},
                React.DOM.tbody({},
                    React.DOM.tr ({className: 'Headings'}, headingsCode,
                        React.DOM.td ({className:'HeadingsItem'},'control')),  goodsCode)),
        );

    },

})