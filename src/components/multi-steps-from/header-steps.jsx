export default function Headersteps({steps , stepsCompleted , activeStep , handelStepsClick}) {
    return (
      <>
        <div className="row">
            <div className="col-12 col-lg-8 ml-auto mr-auto mb-4">
              <div className="multisteps-form__progress">
              {steps.map((step) => <button key={step.label} onClick={() => handelStepsClick(step.index)} className={`multisteps-form__progress-btn ${stepsCompleted.includes(step.stepName) || step.index === activeStep ? "js-active" : ""}`} type="button" title={step.label} >{step.label}</button>)}
              </div>
            </div>
      </div>
      </>
    );
  }