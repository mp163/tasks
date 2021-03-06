import React from 'react';
import { statusName, prioritetName } from './TableRows'
import styles from './css/taskdetail.css'

class TaskDetails extends React.Component {
    constructor (props){
        super(props)
        this.setSelectStatus=this.setSelectStatus.bind(this)
        this.setSelectPrioritet=this.setSelectPrioritet.bind(this)
        this.onChangeStatus=this.onChangeStatus.bind(this)
        this.onClickHandler=this.onClickHandler.bind(this)
    }

    componentWillMount(){
        if (!this.props.ifEnter) this.props.history.push('/');
    }

    setSelectStatus (status){
        if (status===this.props.taskDetail.status) return true;
    }

    setSelectPrioritet (prioritet) {
        if (prioritet===this.props.taskDetail.prioritet) {
            return true;
        }
    }

    onChangeStatus (e){
        let changes={id: this.props.taskDetail.id}
        if (e.target.id==="selectStatus") changes.status=e.target.value
            else changes.prioritet=e.target.value
        this.props.saveChanges(changes);
    }

    onClickHandler (e){
        this.props.history.push('/list');
        this.props.returnToList();
    }

    render (){
        if (this.props.ifEnter)
        return (
            <div id="details">
                <h1>{this.props.taskDetail.title}</h1>
                <h2>Описание: {this.props.taskDetail.discription}</h2>
                <h2>Время выполнения: {this.props.taskDetail.timeToDo}</h2>
                <h2>Запланированное время: {this.props.taskDetail.timePlan}</h2>
                <span>Статус выполнения задачи: </span>
                    <select id="selectStatus" onChange={this.onChangeStatus}>
                        <option key="1" value="1" selected={this.setSelectStatus("1")}>Открытая</option>
                        <option key="2" value="2" selected={this.setSelectStatus("2")}>В работе</option>
                        <option key="3" value="3" selected={this.setSelectStatus("3")}>Отложенная</option>
                        <option key="4" value="4" selected={this.setSelectStatus("4")}>Закрытая</option>
                    </select>
                <h2>Дата: {this.props.taskDetail.date}</h2>
                <span>Приоритет выполнения задачи: </span>
                    <select id="selectPrioritet" onChange={this.onChangeStatus}>
                        <option key="1" value="1" selected={this.setSelectPrioritet("1")}>Высокий</option>
                        <option key="2" value="2" selected={this.setSelectPrioritet("2")}>Обычный</option>
                        <option key="3" value="3" selected={this.setSelectPrioritet("3")}>Низкий</option>
                    </select><br/>
                <button onClick={this.onClickHandler}>Сохранить изменения и вернуться к списку задач</button>
            </div>
        )
        return <h1></h1>

    }
}

export default TaskDetails;