import React,{Component} from 'react'

export default class Item extends Component{
	
	handleCheck=(id)=>{
		return (event) =>{
			this.props.updata(id,event.target.checked)
		}
	}
	render(){
		const {id,description,completed} = this.props
		return(
			<li>
			   <label>
			     <input type="checkbox" defaultChecked={completed} onChange={this.handleCheck(id)}/>
				 <span>{description}</span>
			   </label>
			</li>
		)
	}
	
}