import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    //App()
    <App />
)



// function MyApp(){
//     return (
//         <div>
//             <h1>Custom App</h1>
//         </div>
//     )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(
//   MyApp() // you can also use this instead of <MyApp />, cause MyApp is a JS function only
// )




// const newReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }
// ReactDOM.createRoot(document.getElementById('root')).render(
//   newReactElement  // this will not work, cause React doesn't understand the type,props,children properties
// )




// const anotherElement = (
//     <a href="https://google.com" target='_blank'>Visit google</a>
// )
// ReactDOM.createRoot(document.getElementById('root')).render(
//   anotherElement  // this will work, cause React will automatically understand the properties used here
// )



// const anotherUser = "  to visit google"
// const reactElement = React.createElement(   
//     'a', // this is the tag name
//     {href: 'https://google.com',target: '_blank' }, // this are the props
//     'click me ', // this is children
//     anotherUser // this is variable
// )
// ReactDOM.createRoot(document.getElementById('root')).render(
//     reactElement // this is how the React understands the above example
// )
 

// Babel is a transcompiler or transpiler
// Babel is necessary if you want your ES6 to work on browsers that don't fully support ES6 (most of them). 
//It transpiles your code to ES5. Babel is necessary if you want to use JSX.
