export default function Input(props) {
    let {labelname , InputData , onhandelChange , nameInput , typeInput = "text" , placeholder = "" ,  className} = props

    return (
    <>
        {labelname && <label className="bolder">{labelname}</label>}
        <input disabled={className === "disabled"} name={nameInput} type={typeInput} placeholder={placeholder} onChange={onhandelChange} value={InputData.value} className={`form-control no-margin-bottom padding-10px-tb valid ${className} ${InputData.errorMsg && 'border-danger'}`} aria-required="true" aria-invalid="false"/>
        {InputData.errorMsg  && <label className="error" >{InputData.errorMsg}</label>}
    </>
    )

}