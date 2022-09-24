import React, { useState } from "react";
import { Link } from "react-router-dom";
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// class Home extends Component {
//   constructor() {
//     super();
//     this.state = {
//       firstName: 'Marie',
//       LastName: 'Jenifer',
//       age: 25,
//       userName: "",
//       ages: null,
//       errmsg: "",
//       num1: null,
//       num2: null,
//       total: null
//     }
//   }
//   agevalue = () => {
//     this.setState({
//       age: 29
//     })
//   }
//   changeValue = (event) => {
//     let n = event.target.name;
//     let v = event.target.value;
//     this.setState({ [n]: v });
//     let err = "";
//     if (n === 'ages') {
//       if (v !== '' && !Number(v)) {
//         err = <strong style={{ color: 'red' }}>invalid number</strong>
//       }
//     }
//     this.setState({ errmsg: err });
//   }
//   formSubmit = (event) => {
//     event.preventDefault();
//     alert('your name' + this.state.userName);
//   }
//   handlnum1 = (event) => {
//     this.setState({
//       num1: event.target.value,
//     })
//   }
//   handlnum2 = (event) => {
//     this.setState({
//       num2: event.target.value,
//     })
//   }
//   handlvalue = (e) => {
//     this.setState({      
//       total: parseInt(this.state.num1)+ parseInt(this.state.num2)      
//     });
//     e.prevent.default();
//   }


//   render() {
//     return <>
//       <p>FirstName: {this.state.firstName}</p>
//       <p>LastName: {this.state.LastName}</p>
//       <p>Age: {this.state.age}</p>

//       <button type="button" onClick={this.agevalue}>Age value change</button>

//       <div className="pt-5">
//         <form onSubmit={this.formSubmit}>
//           <h1>Hello {this.state.userName}</h1>
//           Enter your name: <input type="text" name="userName" onChange={this.changeValue} />
//           <h1 className="pt-4">Age {this.state.ages}</h1>
//           Enter your age: <input type="text" name="ages" onChange={this.changeValue} />
//           <p>{this.state.errmsg}</p>
//           <input type="submit" className="mt-4" />
//         </form>
//       </div>

//       <h2>Lists:</h2>
//       <div id="list"></div>

//       {/* <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
//         {itemData.map((item) => (
//           <ImageListItem key={item.img}>
//             <img src={`${item.img}`}
//               alt={item.title}
//             />
//           </ImageListItem>
//         ))}
//       </ImageList> */}

//       <h1>Additional</h1>
//       <form onSubmit={()=>this.handlvalue()}>
//         <div>First Number: <input type="text" value={this.state.num1} onChange={this.handlnum1} /></div>
//         <div>Second Number: <input type="text" value={this.state.num2} onChange={this.handlnum2} /></div>
//         <div><button type="submit">Add value</button></div>
//         <div>Total value show:{this.state.total}</div>
//       </form>
//     </>
//   }
// }
// const itemData = [
//   {
//     img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//     title: 'Breakfast',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//     title: 'Burger',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//     title: 'Camera',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//     title: 'Coffee',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//     title: 'Hats',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//     title: 'Honey',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//     title: 'Basketball',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Fern',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//     title: 'Mushrooms',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//     title: 'Tomato basil',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//     title: 'Sea star',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//     title: 'Bike',
//   },
// ];

function Home() {
  // const [number1,Numbers1] = useState(0);
  // const [number2,setNumber2] = useState(0);
  // const [total,setTotal] = useState(number1 + number2);
  // function additional(){
  //   setTotal(number1+number2);
  // };
  return (
    <>
      {/* <h1>Additional</h1>
      <div>
        <input type="text" placeholder="enter the number" value={number1} onChange={(e)=>Numbers1(+e.target.value)}/>
      </div>
      <div>
        <input type="text" placeholder="enter the number" value={number2} onChange={(e)=>setNumber2(+e.target.value)}/>
      </div>
      <div><button type="submit" onClick={additional}>Add Value</button></div>
      <div>Value Show:{total}</div> */}
      {/* <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <h1>Home</h1>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' , width:"100%"}}>
          <Link style={{ marginRight: '2rem',}} to="/registration">Registration</Link>
          <Link to="/login">Login</Link>
        </div>
      </div> */}
      <h1>card view</h1>
    </>
  );
}

export default Home;