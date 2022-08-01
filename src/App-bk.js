import React from 'react';
import './App.css';

//function method start 

  // function func(user){
  //   return user.fName + ' ' + user.lName;
  // }

  // const user= {fName:'Marie' , lName:'Jenifer'};

  // const hello = <h1>Hello {func(user)} </h1>;

  // function App() {
  //   return (   
  //    <div>
  //      {hello}
  //      {hello}
  //    </div>
  //   );
  // }

  // function Header(){
  //   return <h1>Header</h1>
  // }

  // function Sidebar(){
  //   return <h2>Sidebar</h2>
  // }

  // function Footer(){
  //   return <h1>Footer</h1>
  // }

  // function App(){
  //   return  <div>
  //     <Header/>
  //     <Sidebar/>
  //     <Footer/>
  //   </div>  
  // }

// function method end 

// class method start 

  // class App extends React.Component{
  //   render(){
  //     return <h1>Eg: Class Component</h1>
  //   }
  // }

// class method end 

// state method start 

  // class App extends React.Component{
  //   constructor(){
  //     super();
  //     this.state={
  //       value:'Welcome',
  //     }
  //   }
  //   render(){
  //     return <div>
  //       <h1>{this.state.value} state method</h1>
  //     </div>
  //   }
  // }

// state method end 

// lifecyle method start 
  // class App extends React.Component{
  //   constructor(){
  //     super();
  //     this.state = {
  //       fName:'Marie',
  //     }
  //   }
  //   componentWillMount(){
  //     alert('componentWillMount -- first show');
  //   }
  //   render(){
  //     return <div>
  //       <h1>{this.state.fName}</h1>
  //       <br/>
  //       <button type="button" onClick={this.changevalue}>change value</button>
  //       <button type="button" onClick={this.deleteheader}>delete header</button>
  //     </div>
  //   }
  //   componentDidMount(){
  //     setTimeout(() => {
  //       this.setState({fName:'jenifer'})
  //     },5000)
  //   }
  //   changevalue = () =>{
  //     this.setState({fName:'Learn ReactJs'})
  //   }
  //   componentWillUpdate(){
  //     alert('do you want change value?')
  //   }
  //   // componentDidUpdate(){
  //   //   document.getElementById('root').innerHTML = "value change ack"+this.state.value;
  //   // }
  //   // shouldComponentUpdate(){
  //   //   return false;
  //   // }
  //   deleteheader = () =>{
  //     this.setState({fName:false})
  //   }
  //   componentWillUnmount(){
  //     alert('header delete');
  //   }
  // }
// lifecyle method end 


// class App extends React.Component{
  // constructor(){
  //   super()
  //   this.state = {
  //     msg:'welcome'
  //   }
  // }
  // clickEvent = () =>{
  //   this.setState({
  //     msg:'Thank you'
  //   })
  // }
  // render(){
  //   return( <div>
  //     <h1>{this.state.msg}</h1>
  //     <button type="button" onClick={this.clickEvent}>click event</button>
  //   </div>
  //   )
  // }
// }

class App extends React.Component{
  render(){
    return(
      <>
      </>
    )
  }
}

export default App;