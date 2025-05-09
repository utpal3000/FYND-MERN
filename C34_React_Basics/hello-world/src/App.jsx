import BtnComponent from "./components/BtnComponent.jsx"

let place = 'Mumbai'


function Greet() {
    return (    
    <div>
        <h1>Good Morning, {place}!</h1>
        <BtnComponent name='Apple' color='red'/>
        <BtnComponent name="Banana" color='yellow' />
        <BtnComponent name="Grapes" color="lime" />
    </div>
    )
}

export default Greet;