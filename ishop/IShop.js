var IShop = React.createClass({

    displayName: IShop,

    getDefaultProps: function (){
return {shop:'Название не указано'}
    },

    propTypes: {
        shop: React.PropTypes.string.isRequired,
        goods: React.PropTypes.array.isRequired,
    },

render: function (){
        var goodsCode = this.props.goods.map( v =>
            React.DOM.tr ({key:v.code, className: 'Item'},
                React.DOM.td ({className:'Name'}, v.name),
                React.DOM.td ({className:'Price'}, v.price),
                React.DOM.td ({className:'Url'},
                    React.DOM.a ({className:'Img', href:v.url},  v.url),),
                React.DOM.td ({className:'Balance'}, v.balance),
            )
        );

    return React.DOM.div( {className:'IShop'},
               React.DOM.div( {className:'Shop'}, this.props.shop ),
               React.DOM.table ( {className:'GoodsShop'},
                   React.DOM.tbody({}, goodsCode)),
    );

},
});