var Product = React.createClass ({

    displayName: Product,

    propTypes: {
        code: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        price: React.PropTypes.string.isRequired,
        url: React.PropTypes.string.isRequired,
        balance: React.PropTypes.string.isRequired,
        classNameItem: React.PropTypes.string.isRequired,
        cbSelectItem:React.PropTypes.func.isRequired,
        cbDeleteItem:React.PropTypes.func.isRequired,
    },


    highlightItem(EO){
        this.props.cbSelectItem ( this.props.code);
    },

    delItem(EO){
        EO.stopPropagation();
        this.props.cbDeleteItem ( this.props.code);
    },

    render: function (){

        return React.DOM.tr ({className: this.props.classNameItem, onClick:this.highlightItem},
            React.DOM.td ({className:'Name'}, this.props.name),
            React.DOM.td ({className:'Price'}, this.props.price),
            React.DOM.td ({className:'Url'},
                React.DOM.a ({className:'Img', href:this.props.url},  this.props.url),),
            React.DOM.td ({className:'Balance'}, this.props.balance),
            React.DOM.td ({className:'Control'},
                React.DOM.input ({type:'button', value:'Delete', onClick:this.delItem})),
            )

    },

})
