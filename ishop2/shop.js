var Shop = React.createClass ({

    displayName: Shop,

    propTypes: {
        shop: React.PropTypes.string.isRequired,
        goods: React.PropTypes.array.isRequired,
    },

    getInitialState: function(){
        return {
            goods: this.props.goods.slice(),
            selectedItemCode: 0,
            classNameItemDefault: 'Item',
            classNameItemSelect: 'Item_Select',
        }

    },

    selectItem(code){
        this.setState ({selectedItemCode: code })
    },

    deleteItem(code){
    var Question = confirm("Вы хотите удалить товар?");
       if (Question) {
       var filterGoods = this.state.goods.filter (v =>
       v.code !==code);
       this.setState ({ goods:filterGoods})
}
    },

    render: function (){
        var headings = Object.keys(this.props.goods[0]);
        for (var z = 0; z < headings.length; z++){
            if (headings[z] === "code") headings.splice(z, 1);
        };

        var headingsCode = headings.map( k =>
            React.DOM.td ({key:k,className: 'HeadingsItem' }, k)
        );

        var goodsCode = this.state.goods.map (v=>
        React.createElement(Product, { key:v.code,
            code:v.code,
            name:v.name,
            price:v.price,
            url:v.url,
            balance:v.balance,
            cbSelectItem: this.selectItem,
            cbDeleteItem: this.deleteItem,
        classNameItem: (this.state.selectedItemCode == v.code)?this.state.classNameItemSelect:this.state.classNameItemDefault}))

        return React.DOM.div( {className:'IShop'},
            React.DOM.div( {className:'Shop'}, this.props.shop ),
            React.DOM.table ( {className:'GoodsShop'},
                React.DOM.tbody({},
                    React.DOM.tr ({className: 'Headings'}, headingsCode,
                        React.DOM.td ({className:'HeadingsItem'},'control')),  goodsCode)),
        );

    },

})