import React, { Component } from 'react';
import MainTr from './MainTr';

class MainApp extends React.Component{
    constructor(props){
        super(props);
        
        this.changeSelect=this.changeSelect.bind(this);
        this.sortId=this.sortId.bind(this);
        this.sortStatus=this.sortStatus.bind(this);
        this.sortPrioritet=this.sortPrioritet.bind(this);
        this.saveChanges=this.saveChanges.bind(this);
        this.showHiddenBtn=this.showHiddenBtn.bind(this);
        this.setState({idSorted: true, statusSorted: true, filtered: false, prioritetSorted: true, hiddenBtn: true});
    
        if (userId!==-1){
            users.map((user)=>{
            if (user.uid==userId){
                this.state={name: user.name, surename: user.surename, tasksArr: [], tasksUserArray: []}}
            });
        
            this.props.tasks.map((task)=>{
                if (task.who==userId) {
                    this.state.tasksArr.push(task);
                    this.state.tasksUserArray.push(task);
                }
            });
        } else {
            this.props.history.push('/');
            ReactDOM.unmountComponentAtNode(document.getElementById("app"));
            return null;
        }
    }
    
    changeSelect(e){
        let select=+e.target.value;
        let filtArray=[];
    //    this.setState({hiddenBtn: false});
    test=false;
        if (select!==0){
            this.state.tasksUserArray.map((task)=>{
                if (task.status==select) {
                    filtArray.push(task);
                    }
                });
            this.setState({tasksArr: filtArray});
        } else {
            this.setState({tasksArr: this.state.tasksUserArray});
        }
    }    
    
    sortId(){
        tempArr=this.state.tasksArr.slice().sort((a, b)=>{
            if (this.state.idSorted==true)
                return a['id']-b['id']
            else return b['id']-a['id'];
        });
        this.state.idSorted=!this.state.idSorted;
        this.setState({tasksArr: tempArr});
    }
    sortStatus(){
        tempArr=this.state.tasksArr.slice().sort((a, b)=>{
            if (this.state.statusSorted==true)
                return a['status']-b['status']
                else return b['status']-a['status'];
        });
        this.state.statusSorted=!this.state.statusSorted;
        this.setState({tasksArr: tempArr})
    }
    sortPrioritet(){
        tempArr=this.state.tasksArr.slice().sort((a, b)=>{
            if (this.state.prioritetSorted==true)
                return a['prioritet']-b['prioritet']
                else return b['prioritet']-a['prioritet'];
        });
        this.state.prioritetSorted=!this.state.prioritetSorted;
        this.setState({tasksArr: tempArr})
    }
    
    saveChanges(){
        let detailId=+document.getElementById("detailId").innerText;
        let tempTask={};
        let selectStatus=+document.getElementById("selectStatus").value;
        this.state.tasksArr.map((task)=>{
            if (task.id==detailId) {
                tempTask=task;
                tempTask.status=selectStatus;
                this.setState({task: tempTask});}
        });
    }
    showHiddenBtn(){
        this.setState({hiddenBtn: false});
    }
    
    componentWillMount() {
        this.setState({hiddenBtn: true});
        if (!auth){
            this.props.history.push('/');
        }
    
        if (timer==undefined){
            timer=setInterval(()=>{
            ReactDOM.unmountComponentAtNode(document.getElementById("app"));
            ReactDOM.render(
                <MainApp tasks={tasks} />,
                document.getElementById("app")
            )
        }, TIMER_INTERVAL_MINUTES*60000);
    }   
    }
    
        render(){
            return (
                <div id="main">
                   <h1>Здравствуйте, {this.state.surename} {this.state.name}!</h1>
                    <table id="table">
                        <caption>Список задач</caption>
                        <thead>
                        <tr data-status=''>
                            <th onClick={this.sortId}>ID</th>
                            <th>Задание</th>
                            <th>Дата</th>
                            <th onClick={this.sortStatus}>Статус</th>
                            <th onClick={this.sortPrioritet}>Приоритет</th>
                        </tr> 
                        </thead>                       
                            {
                                this.state.tasksArr.map((task)=>{return <MainTr data={task} showHiddenBtn={this.showHiddenBtn} />})
                            }
                    </table>
                    <p>Показать задачи со статусом: 
                    <select onChange={this.changeSelect}>
                        <option key="0" value="0">Все</option>
                        <option key="1" value="1">Открытые</option>
                        <option key="2" value="2">В работе</option>
                        <option key="3" value="3">Отложенные</option>
                        <option key="4" value="4">Закрытые</option>
                    </select>
                    </p>
                    <div id="details"></div>
                    <button onClick={this.saveChanges} className={this.state.hiddenBtn ? "hiddenBtn" : ""}>Сохранить изменения</button>
                </div>
            ) 
       
        }
    }
    export default MainApp;