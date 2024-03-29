import React from 'react';

class SearchBar extends React.Component{
  state={term:''};
  onFormSubmit=event=>{
    event.preventDefault();
    console.log(this.state.term);
    this.props.onSubmit(this.state.term);

  }
  render(){
    return(
    <div>
      <form onSubmit={this.onFormSubmit}>
        <div>
          <label>City Search</label>
          <input
            type='text'
            value={this.state.term}
            onChange={e=>this.setState({term:e.target.value})}/>
        </div>
      </form>
    </div>)
  }

}
export default SearchBar;
