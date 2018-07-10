import React, {Component} from 'React'
import GitHub from './github'

class GitHubUser extends Component {

   render() {
      return (
          
          <div className-"GitHubUser">
             {this.props.match.params.username}
          </div>


      	)


   }



}