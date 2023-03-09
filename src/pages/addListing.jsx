
import Form from "../components/multi-steps-from/form";
import PageTitleSection from "../components/pageTitleSection";

export default function AddListing() {

    return (
        <>
            <PageTitleSection hrefText="Add Listing" />
            <section>
                <div className="container">
                    <div id="main-wrapper">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card card-white card-steps padding-40px-all ">
                                    <Form />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
