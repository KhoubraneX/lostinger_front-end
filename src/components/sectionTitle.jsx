export default function SectionTitle({title , subTitle , boxClass = "text-center margin-40px-bottom" , titleClass = "margin-10px-bottom" , subClass = "no-margin-bottom"}) {
    return (
        <>
            <div className={boxClass}>
                <h3 className={titleClass}>{title}</h3>
                <p className={subClass}>{subTitle}</p>
            </div>
        </>
    )
}