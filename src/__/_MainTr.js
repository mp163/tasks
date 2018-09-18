import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Details from './Details';

class MainTr extends React.Component {
constructor(props){
    super(props);
    this.onClickTr=this.onClickTr.bind(this);
}

onClickTr(e) {
    ReactDOM.render(
        <Details id={e.target.parentNode.id} showHiddenBtn={this.props.showHiddenBtn} />,
        document.getElementById("details")
    )
}
    render() {
      return (<tr data-status={this.props.data.status} onClick={this.onClickTr} id={this.props.data.id} >
                <td>{this.props.data.id}</td>
                <td>{this.props.data.title}</td>
                <td>{this.props.data.date}</td>
                <td>{this.props.data.status}</td>
                <td>{this.props.data.prioritet}</td>
            </tr>)
    }
}
export default MainTr;