import { Link } from "react-router-dom";

export default function PageTitleSection({ hrefText }) {
  return (
    <>
      <section
        className="page-title-section bg-img cover-background"
        data-overlay-dark={7}
      >
        <div className="container">
          <h1>{ hrefText }</h1>
          <ul className="text-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <span className="active">{ hrefText }</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
