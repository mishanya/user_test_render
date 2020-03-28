import React, { Component } from "react"
import Search from './components/Search';
import Header from './components/Header';
import UserItem from './components/UserItem'

class App extends Component {

    constructor() {
      super();
      this.state = {};
      this.updateContent = this.updateContent.bind(this);
    }

    updateContent(content) {
      this.setState(content)
    }

    render() {
      const { error, data } = this.state;
      return (
	      <div>
					<Header />
					<div className='container my-3'>
						<div className='row'>
							  <Search updateContent={this.updateContent}/>
						 		<div className='py-2 col-12 text-center'>{error}</div>
						 		<div className='row text-center mt-5'>
						 			{data && data.map(user => <UserItem user={user} key={user.id}/>)}
						 		</div>	
						</div>
					</div>	
				</div>

    )
  }
}



export default App;