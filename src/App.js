
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import SignIn from "./SingIn";
import EmployeeList from "./EmployeeList";
import AddEmployee from './AddEmployee'
import EmployeeDetails from './EmployeeDetails'


const App = () => {
  const [employees, setEmployees] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAddEmployee = (employee) => {
    setEmployees([...employees, { id: employees.length + 1, ...employee }]);
  };

  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  const handleSignIn = (status) => setIsAuthenticated(status);

  return (
    <Router>
      <div>
        {isAuthenticated ? (
          <>
            <nav>
              <Link to="/">Employee List</Link> | <Link to="/add">Add Employee</Link>
            </nav>
            <Routes>
              <Route path="/" element={<EmployeeList employees={employees} onDelete={handleDeleteEmployee} />} />
              <Route path="/add" element={<AddEmployee onAdd={handleAddEmployee} />} />
              <Route path="/details/:id" element={<EmployeeDetails employees={employees} />} />
            </Routes>
          </>
        ) : (
          <SignIn onSignIn={handleSignIn} />
        )}
      </div>
    </Router>
  );
};

export default App;








// import User from './User'

// function App() {
//   return (
//     <>
//     <h2>This is App component</h2>
//     <hr/>
//     <User name="akash" age="20"/>
//     <hr/>
//     <User name="prakash" age="21"/>
//     <hr/>
//     <User name="raj" age="24"/>
//     <hr/>
//     <User name="yash" age="10"/>
//     <hr/>
//     <User name="om" age="24"/>
       
//     </>
//   )
// }
// export default App


// import React from 'react'

// function App() {
//   return (
//    <>
//   <div className="card w-25" >
//   <img src="image/m1.jpg" className="card-img-top" alt="..."/>
//   <div className="card-body">
//     <h5 className="card-title">Card title</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <button className='btn btn-danger'>Add data</button>
//   </div>
// </div>

//    </>
//   )
// }

// export default App

/*
import React from 'react'
import pic from "./w1.jpg"
function App() {
  return (
    <>
    <img src='image/m1.jpg' height='100px' width='60px' alt="......"/>
    <img src={pic} alt="...."/>
    
    </>
  )
}

export default App



/*

import React,{useState} from 'react'
import Header from './user'
function App() {
let [val,setval]=useState(true)
  let show=()=>{
    setval(val?false:true)
  }
  return (
   <>
   <button onClick={show}>click</button>
   <Header hval={val}/>
   
   
   </>
  )
}

export default App
*/



/*
import React from 'react'
import "./app.css"
function App() {
  return (
    <div className={true?'data1':'data2'}>App</div>
  )
}

export default App


/*
import React from 'react'
import "./app.css"
function App() {
  return (
    <div className='mydiv mydata'>App</div>
  )
}

export default App
*/




/*
import React, { useState } from 'react'
function App() {
  let [val, setval] = useState(true)
  let data = {
    background: "orange",
    fontSize: "40px",
    color: "blue"
  }
  let txt = {
    background: "blue",
    fontSize: "60px",
    color: "white"
  }
  let show = () => {
    //setval(false)
    setval(val ? false : true)
  }
  return (
    <>
      <h2 style={val ? data : txt}>This is App Function Component</h2>
        <p >  d s s fsd f sdf sd fsd f sdf sd fsd fsdf</p> 
      <button onClick={show}>click</button>
    </>
  )
}

export default App
*/
/*
import React from 'react'
function App() {
  let data={
    background:"orange",
    fontSize:"40px"
  }
  let txt={
    color:"red",
    textAlign:"center",
    padding:"15px 0px"
  }
  let txt1={
    color:"blue",
    fontSize:"bold",
    textAlign:"center"
  }
  return (
   <>
   <h2 style={{...data,...txt,textTransform:"uppercase"}}>This is App Function Component</h2>
   <p style={txt}>hyper text markup language</p>
   <h1 style={txt1}>cascarding style sheet</h1>
   </>
  )
}

export default App
*/


/*
import React,{Component} from "react";
class App extends Component{
    render(){
        return(
            <h1>This is class component</h1>
        )
    }
}
export default App
*/

/*
function User(){
    return(
      <h1>This is user</h1>
    )
  }

  export default User
  */






// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
