import React from 'react';

class UserName extends React.Component{
 /*   constructor(props){
        super(props);
    }*/

    render(){
        if (this.props.ifEnter)
            return(
            <div>
                <h2>Добро пожаловать, {this.props.user.name}</h2>
            </div>
        )
        return <h2>Войдите</h2>
    }
}

export default UserName;