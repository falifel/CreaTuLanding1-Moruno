function Button({label, bg, handelClick}){
    return (
    <button 
    style={{backgroundColor: bg}}
    onClick={handelClick}
    >{label}</button>
)
}

export default Button