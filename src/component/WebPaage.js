import React from 'react'
import Draggable from 'react-draggable'
import { FaGooglePlay } from 'react-icons/fa'
import { FaApple,FaRegStar } from 'react-icons/fa'
import { GrConnect } from 'react-icons/gr'
import { DiAndroid } from 'react-icons/di'
import { FcVideoCall,FcHome } from 'react-icons/fc'
import { BiGroup } from 'react-icons/bi'
import { BsTable,BsLayoutSidebarInsetReverse,BsThreeDots,BsFillEyeSlashFill,BsFilter,BsChat,BsSearch,BsQuestionCircle ,BsFillCalendarFill,BsFillPersonPlusFill} from 'react-icons/bs'
import { RiAccountCircleLine } from 'react-icons/ri'
import { MdAccountCircle } from 'react-icons/md'
import { CgAdidas,CgBell,CgSoftwareDownload } from 'react-icons/cg'

class WebPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
         addRow:false,
         addColoumn:false,
         todo:'',
         owner:'',
         status:'',
         due:'',
         priority:'',
         addRowCompletedTasks:false,
         addColoumnCompletedTasks:false,
         todoDone:'',
         ownerDone:'',
         statusDone:'',
         dueDone:'',
         priorityDone:'',
         cardName:'',
         newcard:false
        }
    }
    handleRow=()=>{
     this.setState({
         addRow:true
     })
    }
    handleChange=(e)=>{
      this.setState({
          [e.target.name]:e.target.value
      })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const data={
         todo:this.state.todo,
         owner:this.state.owner,
         status:this.state.status,
         due:this.state.due,
         priority:this.state.priority
     
        }
        console.log(data)
        
    }
    handleColumn=()=>{
        this.setState({
            addColoumn:true
        })
    }
    handleRowCompleted=()=>{
        this.setState({
            addRowCompletedTasks:true
        })
    }
    handleColumnCompletedTasks=()=>{
        this.setState({
            addColoumnCompletedTasks:true
        })
    }
    handleChangeDoneTasks=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        }) 
    }
    handleNewCard=()=>{
        this.setState({newcard:true})
    }
    handleCardChange=(e)=>{
       this.setState({
           [e.target.name]: e.target.value
       })
    }

    render(){
        return(
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-1" style={{border:"1px solid black",backgroundColor:"grey"}}>
                    <CgAdidas style={{width:"40px",height:"40px",color:"orange"}}/>
                    <CgBell style={{width:"40px",height:"25px",color:"white"}}/>
                    <CgSoftwareDownload style={{width:"40px",height:"25px",color:"white"}}/>
                    <button style={{WebkitTransform:"rotate(-90deg)",marginTop:"30px",borderRadius:"25px",marginLeft:"0px",backgroundColor:"lightGreen"}}>Upgrade</button>
                 <div style={{marginTop:"270px"}}>
                    <BsFillCalendarFill style={{width:"40px",height:"25px",color:"white"}}/>
                    <BsFillPersonPlusFill style={{width:"40px",height:"25px",color:"white"}}/>
                    <BsSearch style={{width:"40px",height:"25px",color:"white"}}/>
                    <BsQuestionCircle style={{width:"40px",height:"25px",color:"white"}}/>
                    <MdAccountCircle style={{width:"50px",height:"45px",color:"white"}}/>
                 </div>
                 </div>
                    <div class="col-md-2">
                    <h4>Workspaces</h4>
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <p><FcHome/>Main {this.state.newcard==false ? (<button style={{borderRadius:"25px",marginLeft:"90px"}} onClick={()=>{this.handleNewCard()}}>+</button>)
                    :(<div class="card" style={{backgroundColor:"lightblue"}}>
                    <input type="text" name="cardName" onChange={this.handleCardChange}/>
                </div>)}</p>
                    <div class="card" style={{backgroundColor:"lightblue"}}>
                        <p>Web design</p>
                    </div>
                   <div class="card" style={{marginTop:"300px"}}>
                        <h3>Dashboard</h3>
                    </div> 
                    <button type="button" class="btn btn-light">Get Mobile App<FaGooglePlay/><FaApple/></button>
                    </div>
                    <div class="col-md-9" style={{border:"1px solid black"}}>
                    <nav class="navbar">
                     <h2>Web design<FaRegStar/></h2>
                     <div>
                          <MdAccountCircle style={{width:"40px",height:"45px",color:"black"}}/><BsLayoutSidebarInsetReverse style={{width:"30px",height:"35px",color:"black"}}/>
                         <button type="button" className="btn btn-light" style={{borderColor:"black",borderRadius:"25px"}}><GrConnect/> /0</button>
                         <button type="button" className="btn btn-light" style={{borderColor:"black",borderRadius:"25px"}}><DiAndroid/> /0</button>
                    </div>
                    
                     
                     <button type="button" className="btn btn-light" style={{borderColor:"black",borderRadius:"25px"}}><FcVideoCall/>start zoom call</button>
                     <button type="button" className="btn btn-light" style={{borderColor:"black"}}><BiGroup/> /1 | Activities/0</button><BsThreeDots/>
                     </nav>
                     <nav class="navbar">
                     <p> <BsTable/> Main Table ^</p>
                     <div style={{marginLeft:"410px"}}>
                     <button type="button" className="btn btn-light" style={{borderColor:"black",borderRadius:"25px",backgroundColor:"lightBlue"}}> New Item|v</button>      
                     <button type="button" className="btn btn-light" style={{borderColor:"black",borderRadius:"25px"}}>Search/FilterBoard</button>
                     </div>
                     <div style={{marginRight:"50px"}}><RiAccountCircleLine/><BsFillEyeSlashFill/><BsFilter/></div>
                     </nav>
                        <div class="container" style={{border:"1px solid black",marginTop:"60px"}}>

<table class="table table-bordered">
  <thead class="table-active">
  
    <tr>
     <Draggable><th scope="col">Things To Do</th></Draggable> 
     <Draggable><th scope="col">Owner</th></Draggable> 
     <Draggable><th scope="col">Status</th></Draggable>
     <Draggable><th scope="col">Due date</th></Draggable>
     <Draggable><th scope="col">Priority</th></Draggable>
      {this.state.addColoumn==false ?(<button style={{backgroundColor:"transparent",borderRadius:"24px"}}onClick={()=>{this.handleColumn()}}>+</button>)
      :(<Draggable><th scope="col">Add Coloumn</th></Draggable>)}
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Things To Do <BsChat/></th>
      <MdAccountCircle style={{height:"40px",width:"30px"}}/>
      <td class="bg-warning">Working On It</td>
      <td>Apr 10</td>
      <td>Urgent</td>
      </tr>
      <tr>
      <td>{this.state.todo}</td>
      <td>{this.state.owner}</td>
      <td>{this.state.status}</td>
      <td>{this.state.due}</td>
      <td>{this.state.priority}</td>
      </tr>
      {this.state.addRow==false ?(<tr>
      <td scope="row">Add <button style={{borderRadius:"25px"}}onClick={()=>{this.handleRow()}}>+</button> </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      </tr>):(
      <div>
          <form onSubmit={this.handleSubmit} style={{display:"flex",flexFlow:"wrap",alignItems:"center"}}>
              <input type="text" name="todo" onChange={this.handleChange} placeholder="tasks to do"/>
              <input type="text" name="owner" onChange={this.handleChange} placeholder="owner"/>
              <input type="text" name="status" onChange={this.handleChange} placeholder="status"/>
              <input type="text" name="due" onChange={this.handleChange} placeholder="due"/>
              <input type="text" name="priority" onChange={this.handleChange} placeholder="priority"/><br/>
              <input type="submit" value="update Todo"/>
          </form>
      </div>
      )}
    
  </tbody>
</table>
<table class="table table-bordered" style={{marginTop:"80px"}}>
<thead class="table-active">
    <tr>
     <Draggable><th scope="col">Done</th></Draggable> 
     <Draggable><th scope="col">Owner</th></Draggable> 
     <Draggable><th scope="col">Status</th></Draggable> 
     <Draggable><th scope="col">Due date</th></Draggable> 
     <Draggable><th scope="col">Priority</th></Draggable> 
      {this.state.addColoumnCompletedTasks==false ?(<button style={{backgroundColor:"transparent",borderRadius:"24px"}} onClick={()=>{this.handleColumnCompletedTasks()}}>+</button>)
      :(<th scope="col">Add Coloumn</th>)} 
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Task 1 <BsChat/></th>
      <MdAccountCircle style={{height:"40px",width:"30px"}}/>
      <td class="bg-warning">Working On It</td>
      <td>Apr 10</td>
      <td>Urgent</td>
      </tr>
      <tr>
      <td>{this.state.todoDone}</td>
      <td>{this.state.ownerDone}</td>
      <td>{this.state.statusDone}</td>
      <td>{this.state.dueDone}</td>
      <td>{this.state.priorityDone}</td>
      </tr>
      {this.state.addRowCompletedTasks==false ?(<tr>
      <td scope="row">Add <button style={{borderRadius:"25px"}}onClick={()=>{this.handleRowCompleted()}}>+</button> </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      </tr>):(
      <div>
          <form onSubmit={this.handleSubmit} style={{display:"flex",flexFlow:"wrap",alignItems:"center"}}>
              <input type="text" name="todoDone" onChange={this.handleChangeDoneTasks} placeholder="tasks to do"/>
              <input type="text" name="ownerDone" onChange={this.handleChangeDoneTasks} placeholder="owner"/>
              <input type="text" name="statusDone" onChange={this.handleChangeDoneTasks} placeholder="status"/>
              <input type="text" name="dueDone" onChange={this.handleChangeDoneTasks} placeholder="due"/>
              <input type="text" name="priorityDone" onChange={this.handleChangeDoneTasks} placeholder="priority"/><br/>
              <input type="submit" value="update Todo"/>
          </form>
      </div>
      )}
    
      </tbody>
</table>
</div>
</div>
</div>
            </div>
        )
    }
}
export default WebPage
