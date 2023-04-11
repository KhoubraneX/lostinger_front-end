export default function Input(props) {
    let {labelname , InputData , onhandelChange , nameInput , typeInput = "text" , placeholder = ""} = props

    return (
    <>
        {labelname && <label className="bolder">{labelname}</label>}
        <input name={nameInput} type={typeInput} placeholder={placeholder} onChange={onhandelChange} value={InputData.value} className={`form-control no-margin-bottom padding-10px-tb valid ${InputData.errorMsg && 'border-danger'}`} aria-required="true" aria-invalid="false"/>
        {InputData.errorMsg  && <label className="error" >{InputData.errorMsg}</label>}
    </>
    )

}