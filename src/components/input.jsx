export default function Input(props) {
    let {labelname , errorMess , valueIn , onChange} = props

    return (
    <>
        {labelname && <label htmlFor="">{labelname}</label>}
        <input {...props} value={valueIn} onChange={onChange} className="form-control no-margin-bottom padding-10px-tb valid" aria-required="true" aria-invalid="false"/>
        {errorMess && <label class="error">{errorMess}</label>}
    </>
    )

}