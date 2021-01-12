import React from 'react';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      term: '',
    }
  }

  handleChange(e){
      this.setState({
        term: e.target.value
      }, () => {
          if(this.state.term && this.state.term.length > 3){
            this.props.handleChange(this.state.term);
          }
      });
  }

  render(){
    return (
      <div>
        <input type="text" className="form-control mb-3" placeholder="Search here..." value={this.state.term} 
        onChange={(e) => this.handleChange(e)} />
      </div>
    );
  }
  
}

export default SearchBar;