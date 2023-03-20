export default function ButtonSteps({handelStepsDec , stepsPass , activeStep , steps , handelSubmitStep}) {
    return (
        <>
        <div className="d-flex justify-content-between col">
            <button disabled={activeStep === 0 && true} onClick={handelStepsDec} className="me-md-2 butn" type="button">Previous</button>
            <button className="butn" type="button" onClick={handelSubmitStep}>
                {steps[activeStep].stepName === "publish" ? "Publish" : "Continue"}
                </button>
        </div>
        </>
    )
}