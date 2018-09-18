import React, { Component } from 'react';


class Details extends React.Component {
constructor(props){
    super(props);
    this.setSelectStatus=this.setSelectStatus.bind(this);
    this.setSelectPrioritet=this.setSelectPrioritet.bind(this);
}

setSelectStatus(id){
    if (currentTask.status==id) return true;
}

setSelectPrioritet(id){
    switch(id){
        case 1:
        return "Низкий";
        break;
        case 2:
        return "Обычный";
        break;
        case 3:
        return "Высокий";
        break;
    }
}

    render(){
        return(
            <div>
            <h1> Подробности</h1>
            {
                tasks.map((task)=>{
                if (task.id==this.props.id) {
                    currentTask=task;
                }
            })
           
            }
            <p>ID задания: <span id="detailId">{currentTask.id}</span> </p>
            <p>Название: {currentTask.title}</p>
            <p>Подробное описание: {currentTask.discription}</p>
            <p>Время выполнения: {currentTask.timeToDo}</p>
            <p>Запланированное время : {currentTask.timePlan}</p>
            <p>Дата: {currentTask.date}</p>
            <p>Статус: </p>
                <select id="selectStatus" onChange={this.props.showHiddenBtn} >
                    <option key="1" value="1" selected={this.setSelectStatus("1")}>Открытая</option>
                    <option key="2" value="2" selected={this.setSelectStatus("2")}>В работе</option>
                    <option key="3" value="3" selected={this.setSelectStatus("3")}>Отложенная</option>
                    <option key="4" value="4" selected={this.setSelectStatus("4")}>Закрытая</option>
                </select>
            <p>Приоритет: {this.setSelectPrioritet(currentTask.prioritet)}</p>
            </div>
        )
    }
}
export default Details;