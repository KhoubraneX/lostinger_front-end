export default function ButtonSteps({handelStepsInc , handelStepsDec , stepsPass , activeStep , steps}) {
    return (
        <>
        <div className="d-flex justify-content-between col">
            <button disabled={activeStep === 0 && true} onClick={handelStepsDec} className="me-md-2 butn" type="button">Previous</button>
            <button className="butn" type="button" onClick={handelStepsInc}>
                {steps[activeStep].stepName === "publish" ? "Publish" : "Continue"}
                </button>
        </div>
        </>
    )
}