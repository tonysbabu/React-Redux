import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {selectUser} from '../actions/index';

class UserList extends Component{

    renderList() {
        return this.props.users.map(user => {

             return (
                 <li key={user.id} onClick={()=>this.props.selectUser(user)}>
                    {user.title}
                </li>
             );

        });
    }


    render(){
        return (<ul>{this.renderList()}</ul>);


    }


}

function mapStateToProps(state) {
    return {
    users:state.users
    };

}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectUser: selectUser},dispatch);

}
export default connect(mapStateToProps,mapDispatchToProps)(UserList);
