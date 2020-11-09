import Home from './Home'
import Name from './Name'
// import {BrowserRouter as Router, Route,Link} from 'react-router-dom'

function App() {
  
  const Names = ['name 1','name 5','name 2','name 3','name 4','name 1','name 5','name 2','name 3','name 4','name 1','name 5','name 2','name 3','name 4',]

  return (
    // <Router>
    //   <Route exact path = '/' component={Home}></Route>
    //   <Route exact path = '/name' component={Name}></Route>
    //   <Link to='/'>Home</Link>
    //   <Link to='/name'>Name</Link> 
    // </Router> 
    <div>
      {Names.map((name) =>{
        return(
          <Name name = {name}/>
        );
      })}
    </div>
  );
}

export default App