import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component{


    render(){
        if(!this.props.activeUser) {
            return (<h4>Select a USer ...</h4>

            );
        }else{
            return(<div>{this.props.activeUser.url}<img src={this.props.activeUser.thumbnailUrl}/></div>);
        }

    }




}

function mapStateToProps(state){

    return{
        activeUser:state.activeuser
    }
}

export default connect(mapStateToProps)(UserDetail);