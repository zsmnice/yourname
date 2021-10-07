import React,{Component} from 'react'
import './App.css';
import Item from './Item'
import Items from './Items'
class App extends React.Component{
	constructor(props) {
    super(props);
    this.state = { STARTING_TODOS :[]};
	this.newTODOSS=[]
    this.number=0
    this.handleClick = this.handleClick.bind(this);//手动绑定
	}
	updataTodos=(id,done)=>{
		this.newTODOSS.map((todo)=>{
			if(todo.id === id){
				const TODO=this.newTODOSS.splice(id,1)
				this.state.STARTING_TODOS=this.state.STARTING_TODOS.concat(TODO)
				
				this.newTODOSS.map((todo,index)=>{
					console.log(index)
					console.log(todo.id=index)
					todo.id=index
					todo.completed=true
				})
				this.state.STARTING_TODOS.map((todo,index)=>{
					todo.completed=false
					todo.id=index
				})
				console.log(this.state.STARTING_TODOS)
				console.log(this.newTODOSS)
				this.setState({newTODOSS:this.state.STARTING_TODOS})
				
			}
		})
	}
	updataTodo=(id,done)=>{
		console.log(id,done)
		
			if(done===true){
				this.state.STARTING_TODOS.map((todo)=>{
					if(todo.id === id){
						const TODO=this.state.STARTING_TODOS.splice(id,1)
						this.newTODOSS=this.newTODOSS.concat(TODO)
						this.state.STARTING_TODOS.map((todo,index)=>{
							console.log(index)
							todo.id=index
							todo.completed=false
						})
						
						this.newTODOSS.map((todo,index)=>{
							todo.completed=true
							todo.id=index
						})
						console.log(this.state.STARTING_TODOS)
						console.log(this.newTODOSS)
						
						this.setState({TODO})
					}
				})
			}
			
		
		
	}
	handleClick=()=>{
		if(this.number<=4){
			const STARTING = [
			  { id: 0, description: 'Eat Breakfast', completed: false },
			  { id: 1, description: 'Deploy to Heroku', completed: false },
			  { id: 2, description: 'Check Email', completed: false },
			  { id: 3, description: 'Eat Lunch', completed: false }
			]
			console.log(this.state.STARTING_TODOS)
			this.state.STARTING_TODOS.push(STARTING[this.number])
			this.number=this.number+1
			console.log(this.state.STARTING_TODOS)
			this.setState({TODOS:this.state.STARTING_TODOS})
			if(this.number===3){
				this.number=0
			}
		}
	}
	render(){
	
	
		const {STARTING_TODOS } =this.state
		return(
		  <div className="App">
		         <h1>If you can dream it,you can TODO it!</h1>
				 <h2>There are no tasks remaining! You shuold add one</h2>
				 <ul id="todos">
				     {
						 STARTING_TODOS.map((to,index)=>{
						 		return <Item key={to.id} {...to} updata={this.updataTodo}/>
						 })
					 }
				 </ul>
			<a href="#"  onClick={this.handleClick}>Add task</a>
			<h1>You TODONE this</h1>
			<ul id="todos">
			    {
					this.newTODOSS.map((to,index)=>{
						return <Items key={index} {...to} updatas={this.updataTodos}/>
					})
				}
			</ul>
			</div>
		)
	}
}
export default App
