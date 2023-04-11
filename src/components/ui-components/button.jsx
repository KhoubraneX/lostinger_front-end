export default function Button({text  , name , type = "button" , className}) {
    return (
    <>
        <button type={type} name={name} className={className}>{text}</button>
    </>
    )

}