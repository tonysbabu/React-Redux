import React from 'react';
import UserList from '../containers/UserList';
import UserDetail from '../containers/UserDetail';

const App = ()=>{
    return(
    <div>
        <h4>UserList</h4>
        <UserList/>

        <hr />
    <h4>User Details</h4>
        <UserDetail />
    </div>
    );

}

export default App;