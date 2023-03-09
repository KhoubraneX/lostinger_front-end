import { useEffect, useState } from "react";
import "../../assets/css/multi-steps.scss";
import ButtonSteps from "./button-steps";
import Gallery from "./Gallery";
import Headersteps from "./header-steps";
import LocationSteps from "./locationForm";
import Overview from "./overviewFrom";
import Publish from "./publishForm";

export default function Form() {
    const [steps , setSteps] = useState([
        {label : "Overview" , stepName : "overview" , index : 0 , completd : false},
        {label : "Location" , stepName : "locationTime" , index : 1 , completd : false},
        {label : "Gallery" , stepName : "gallery" , index : 2 , completd : false},
        {label : "Publish" , stepName : "publish" , index : 3 , completd : false}
    ]) 

    let [overviewData ,  setOverviewData] = useState({
        itemName : { value : "" , valid : false} ,
        itemType : { value : "" , valid : false} ,
        itemCategory : { value : "" , valid : false} ,
        itemDate : { value : "" , valid : false} ,
        itemDesc : { value : "" , valid : false} ,
        ItemBrand : { value : "" , valid : false}
    })

    const [activeStep , setActiveStep] = useState(0)
    const [stepsPass , setStepsPass] = useState([steps[0].stepName])
    const [stepsCompleted , setStepsCompleted] = useState([])
    const [loadStatus , setLoadStatus] = useState(false)

    let handelStepsInc  = () => {

        // check if step is completed
        if (steps[activeStep].completd !== true) return;

        // load animation
        setLoadStatus(true)

        // loading
        setTimeout(() => {
        if (steps[activeStep].stepName !== "publish") {
            setLoadStatus(false)
            let currentStep = activeStep
            
            // StepsPass
            currentStep += 1
            let currentStepsPass;
            
            if (!stepsPass.includes(steps[currentStep].stepName)) {
                currentStepsPass = [...stepsPass , steps[currentStep].stepName]
                setStepsPass(currentStepsPass)

                // StepsCompleted
                let currenStepsCompleted = [...stepsPass , steps[currentStep].stepName]
                setStepsCompleted(currenStepsCompleted)
            }
            

            setActiveStep(currentStep)
            setLoadStatus(false)
            }
        } , 1000)

    }

    useEffect(() => {
        console.log(activeStep);
        console.log(stepsPass);
        console.log(stepsCompleted);
    })
    
    let handelStepsDec = () => {
        if (activeStep !== 0) {
            let currentStep = activeStep
            currentStep -= 1
            stepsPass.pop()
            
            setStepsPass(stepsPass)
            setActiveStep(currentStep)
        }
    }

    let handelStepsClick = (index) => {
        if (!stepsCompleted.includes(steps[index].stepName)) return;
        setActiveStep(index)
    }


    return (
        <>
        { loadStatus === true &&
            <div className="spiner-steps">
                    <div className="spinner-border text-info" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
            </div>
            }
            <Headersteps {...{steps , stepsCompleted , activeStep , handelStepsClick}} />
            <div className="col-md-12 pt-4">
                    {steps[activeStep].stepName === "overview" && <Overview {...{overviewData , setOverviewData }}/>}
                    {steps[activeStep].stepName === "locationTime" && <LocationSteps />}
                    {steps[activeStep].stepName === "gallery" && <Gallery />}
                    {steps[activeStep].stepName === "publish" && <Publish />}
                </div>
                <ButtonSteps {...{handelStepsInc , handelStepsDec , stepsPass , activeStep , steps}} />
        </>
    );
}
