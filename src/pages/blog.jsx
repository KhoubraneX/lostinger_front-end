import { Link } from "react-router-dom";
import PageTitleSection from "../components/pageTitleSection";
import Pagination from "../components/pagination";
import { useLayoutEffect, useState } from "react";
import axios from "../api/axios";
import BlogCard from "../components/blogCard";
import CardPreLoader from "../components/cardPreLoader";

export default function Blog() {
  const [blogs, setBlogs] = useState(null)


  useLayoutEffect(() => {
    let isMounted = true
    let controller = new AbortController()

    let fetchItems = async () => {
      try {
        let { data } = await axios.get("/api/blogs");
        if (isMounted) {
          setBlogs(data)
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchItems()
    return () => {
      isMounted = false
      controller.abort()
    }
  }, [])

  return (
    <>
      <PageTitleSection hrefText="Blog" />
      <section>
        <div className="container">
          <div className="row">
            {/* start blog */}
            {!blogs && <CardPreLoader Length={6} mode="grid" className="col-lg-4 col-md-6 col-sm-12 margin-30px-bottom" />}
            {blogs && blogs.length !== 0 ? blogs.map(({ _idBlog, img, title, description, likeCounte }) => (
              <BlogCard key={_idBlog} _idBlog={_idBlog} img={img} title={title} description={description} likeCounte={likeCounte} />
            )) : <div className="w-100 text-center">
              <h4>No results found</h4>
            </div>}
            {/* end blog */}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            {/* start pager  */}
            <div className="text-center margin-60px-top sm-margin-40px-top">
              {/* <Pagination /> */}
            </div>
            {/* end pager */}
          </div>
        </div>
      </section>
    </>
  );
}
