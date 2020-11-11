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
         sorted: false,
         processingWords: this.props.words,
        }
    },

    processList(){
      var res = this.props.words.slice();
      if (this.state.filtered !="")
          res = res.filter( el =>
              el.indexOf(this.state.filtered) != -1);

      if (this.state.sorted == true)
          res.sort();

      this.setState ({ processingWords: res});
    },

    checkboxSorted(EO){
        this.setState( {sorted: EO.target.checked}, this.processList);
    },

    editText(EO) {
        this.setState( {filtered: EO.target.value}, this.processList);
    },

    defaultWords(){
        this.setState ({sorted:false, filtered: '', processingWords: this.props.words});
    },

    render: function (){
        var OptionList = [];
        this.state.processingWords.forEach(function (v){
            var option = React.DOM.option ({key:OptionList.length, className: 'Filter_Option'},v)
            OptionList.push(option);
        });

        return React.DOM.div ( {className: 'Filter_Block'},
            React.DOM.input ({type:'checkbox',className: 'Filter_Checkbox', checked: this.state.sorted, onClick:this.checkboxSorted}),
            React.DOM.input ({type:'text', className: 'Filter_Input', value: this.state.filtered, onChange:this.editText}),
            React.DOM.input ({type:'button', value:'сброс', className: 'Filter_Button', onClick:this.defaultWords}),
            React.DOM.select ({multiple:true, className: 'Filter_Select'}, OptionList),
        );
    },
});