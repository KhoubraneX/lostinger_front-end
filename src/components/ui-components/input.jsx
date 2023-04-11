export default function Input({state , onHandelChange , label  , name , type = "text" , placeholder = "" , className}) {
    return (
    <>
        {label && <label className="bolder">{label}</label>}
        <input name={name} type={type} onChange={onHandelChange} placeholder={placeholder} value={state.value} className={`${className} ${state.errorMsg && 'border-danger'}`}/>
        {state.errorMsg  && <label className="error" >{state.errorMsg}</label>}
    </>
    )

}