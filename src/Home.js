// import React from 'react'

// const Home = (props) =>{
//     const [name, setName] = React.useState()
//     const [age, setAge] = React.useState()
//     console.log(name)
//     console.log(age)

//     const onClick = () =>{
//         setName({name: 'xyz'})
//     }  

//     return(
//         <div>
//         <h1>{props.content}</h1>
//         <button onClick = {onClick}>Change State</button>
//         </div>
//     )
// }

// export default Home

// import React, {Component} from 'react'

// class Home extends Component{

//     state = {
//         name: '',
//         age: 0,
//     }

//     onClick = () =>{
//         this.setState({
//             name: 'xyz',
//             age: 10,
//         })
//     }

//     render(){
//         console.log(this.state)
//         return(
//             <div>
//             <h1>Home Page</h1>
//             <button onClick = {this.onClick}>Change State</button>
//             </div>
//         )
//     }
// }

// export default Home


function Home(){
    return(
        <h1>Home Page</h1>
    )
}

export default Home