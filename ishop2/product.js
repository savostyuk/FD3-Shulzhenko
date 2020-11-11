var Product = React.createClass ({

    displayName: Product,

    propTypes: {
        name: React.PropTypes.string.isRequired,
        price: React.PropTypes.string.isRequired,
        url: React.PropTypes.string.isRequired,
        balance: React.PropTypes.string.isRequired,
    },

    getInitialState: function(){
        return {

            selectedItemCode: 0,
            classNameItem: 'Item',
        }

    },

    colorTR(){
        var classNameItem;
        if (this.state.selectedItemCode=this.props.code)
            classNameItem = 'Item_Select'
        else
            classNameItem = 'Item';
        this.setState ({ classNameItem: classNameItem});
  },

    highlightItem(EO){
        this.setState({selectedItemCode: this.props.code}, this.colorTR)
    },

    deleteItem(EO){

    },

    render: function (){

console.log(this.props.code);
        return React.DOM.tr ({className: this.state.classNameItem, onClick:this.highlightItem},
            React.DOM.td ({className:'Name'}, this.props.name),
            React.DOM.td ({className:'Price'}, this.props.price),
            React.DOM.td ({className:'Url'},
                React.DOM.a ({className:'Img', href:this.props.url},  this.props.url),),
            React.DOM.td ({className:'Balance'}, this.props.balance),
            React.DOM.td ({className:'Control'},
                React.DOM.input ({type:'button', value:'Delete', onClick:this.deleteItem})),
            )

    },

})
