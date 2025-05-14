
function BtnComponent({name, color}){ // destructuring props
    return (
        <button  className="btn" style={{backgroundColor:color}}>
            {name}
        </button>
    )
}

export default BtnComponent;