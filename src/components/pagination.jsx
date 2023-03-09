export default function Pagination() {
  return (
    <>
      <div className="pagination text-small text-uppercase text-extra-dark-gray">
        <ul>
          <li>
            <a href="">
              <i className="fas fa-long-arrow-alt-left margin-5px-right xs-display-none" />{" "}
              Prev
            </a>
          </li>
          <li className="active">
            <a href="">1</a>
          </li>
          <li>
            <a href="">2</a>
          </li>
          <li>
            <a href="">3</a>
          </li>
          <li>
            <a href="">
              Next
              <i className="fas fa-long-arrow-alt-right margin-5px-left xs-display-none" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
