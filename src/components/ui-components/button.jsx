export default function Button({text  , name , type = "button" , className , clickable}) {
    return (
    <>
        <button disabled={clickable} type={type} name={name} className={className}>{text}</button>
    </>
    )

}