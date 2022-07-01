

// function Greet(){
//     return <h1>Hi sfq</h1>
// }



// const Greet = (props) => {
//     console.log(props)
//     return (
//         <div>
//             <h4>Hi {props.name}, Hi {props.nikename}</h4>
//             {props.children}
//         </div>
//     )
// }
// Destructing props using carelly brackets
// const Greet = ({name,nikename,children}) => {
//     console.log(name)
//     return (
//         <div>
//             <h4>Hi {name}, Hi {nikename}</h4>
//             {children}
//         </div>
//     )
// }

const Greet = (props) => {
    const {name,nikename,children}=props
    return (
        <div>
            <h4>Hi {name}, Hi {nikename}</h4>
            {children}
        </div>
    )
}
export default Greet