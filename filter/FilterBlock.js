var FilterBlock = React.createClass({

    displayName:'FilterBlock',

    propTypes:{
        words: React.PropTypes.arrayOf(
            React.PropTypes.string.isRequired,
            ),
    },

    getInitialState: function(){
        return {
         filtered: '',
         sortered: false,
         editText: '',
         defwords: this.props.words,
        }
    },

    checkboxSorted(EO){
        this.setState( {sortered: EO.target.checked});
    },

    editText(EO) {
        this.setState( {filtered: EO.target.value});
    },

    defaultWords(){
        this.setState ({sortered:false, filtered: '', defwords: this.props.words, });
    },

    render: function (){
        var OptionList = [];
        this.state.defwords.forEach(function (v){
            var option = React.DOM.option ({multiple:true, classList: 'Filter_Option'},v)
            OptionList.push(option);
        })

        return React.DOM.div ( {className: 'Filter_Block'},
            React.DOM.input ({type:'checkbox',className: 'Filter_Checkbox', onClick:this.checkboxSorted}),
            React.DOM.input ({type:'text', className: 'Filter_Input', onChange:this.editText}),
            React.DOM.input ({type:'button', value:'сброс', className: 'Filter_Button', onClick:this.defaultWords}),
            React.DOM.select ({multiple:true, className: 'Filter_Select'}, OptionList),
        );
    },
});