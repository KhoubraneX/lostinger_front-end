export default function Button({text  , name , type = "button" , className , clickable , handelClick}) {
    return (
    <>
        <button onClick={handelClick} disabled={clickable} type={type} name={name} className={className}>{text}</button>
    </>
    )

}