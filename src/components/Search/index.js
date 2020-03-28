import React, {Component} from 'react';
import {API_URL}   from './../../constants/main'

export default  class Search  extends Component {

  constructor(){
    super()
    this.state = {}
  }

  get getQuery(){
  
    return Object.keys(this.refs).map(key => `&${key}=${this.refs[key].value}`).join('')
  }

  search(){

    if (this.state.fetching) return;



    this.setState({
      fetching: true
    })

    fetch(`${API_URL}/user?${this.getQuery}`,{
      method: 'GET'
    })
    .then(
      res => res.json(),
      err => this.props.updateContent({data: null, error: 'Fetching error'})
    )
   .then (json => this.props.updateContent({data: json.response, error: json.status.message}))
   .then(() => this.setState({fetching: false}))

  }

  render() {

    return (
      <form 
        onSubmit={(e) => e.preventDefault() || this.search()} 
        className='mx-auto mt-5 col-12 col-md-6 col-lg-3'>
        <div className="form-group" >
          <h2>Search for users</h2>
        </div>
        <div className="form-group" >
          <label>Enter first name</label>
          <input 
            type="text" 
            className="form-control" 
            ref="first_name"
            placeholder="Enter first name" 
          />
        </div>
        <div className="form-group" >
          <label>Enter last name</label>
          <input 
            type="text" 
            className="form-control" 
            ref="last_name"
            placeholder="Enter last name" 
          />
        </div>
        <button type="submit" className="btn btn-primary">Search{this.state.fetching && 'ing...'}</button>
      </form>
    )
  }
}
