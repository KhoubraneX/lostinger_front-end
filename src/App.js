import Footer from './layout/footer';
import Header from './layout/header';
import Home from './pages/home';
import PageNotFound from './pages/notFound';
import HowItWorks from './pages/howItWorks';
import TopButton from './layout/topbutton';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import Listing from './pages/listing';
import ListingDetails from './pages/listingDetails';
import Blog from './pages/blog';
import BlogDetails from './pages/blogDetails';
import Contact from './pages/contact';
import Dashboard from './pages/admin/dashboard';
import AddListing from './pages/addListing';
import { UserProvider } from './utils/contexts/UserContext';
import { ProtectedRoute, CheckAuthRoute, ProtectedRouteAdmin } from './utils/protectedRoute'
import React, { useEffect, useState } from 'react';
import { PreLoaderMain } from './components/preLoaderPage';
import { ItemDtProvider } from './utils/contexts/ItemDetailsContext';
import { Messages } from './pages/admin/messages';
import { MyListings } from './pages/admin/myListings';
import Profile from './pages/admin/profile';
import EditListing from './pages/admin/editListing';
import { ToastContainer } from 'react-toastify';
// chat config 

import { MyBlogs } from './pages/admin/myBlogs';
import AddBlog from './pages/admin/addBlog';
import EditBlog from './pages/admin/editBlog';
import ScrollToTop from './utils/ScrollToTop';
import ForgotPassword from './pages/forgotPassword';





function App() {

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("load", (e) => {
      setIsLoading(false)
    })
  }, [])

  return (
    <>
      <UserProvider value={user}>
        <Header />
        {isLoading && <PreLoaderMain />}
        <Routes>
        <Route element={<ScrollToTop />}>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />

          <Route path='/how-it-works' element={<HowItWorks />} />
          <Route path='/howitworks' element={<HowItWorks />} />
          <Route element={<CheckAuthRoute />}>
            <Route path='/login' element={<Login />} />
            <Route path='/registration' element={<Register />} />
            <Route path='/signup' element={<Register />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route path='/add-listing' element={<ItemDtProvider>
              <AddListing />
            </ItemDtProvider>} />
          </Route>

          <Route path='/listing' element={<ItemDtProvider>
            <Listing />
          </ItemDtProvider>} >
          </Route>

          <Route path='/listing/:id' element={<ListingDetails />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:id' element={<BlogDetails />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<PageNotFound />} />
          <Route path='not-found' element={<PageNotFound />} />
          <Route path='forgot-password' element={<ForgotPassword />} />

          <Route element={<ProtectedRoute />}>
            <Route path='/dashboard' element={<ItemDtProvider><Dashboard /></ItemDtProvider>} >
              <Route path='' element={<Navigate to="my-listing" />} />
              <Route path='/dashboard/message' element={<Messages />} />
              <Route path='/dashboard/my-listing' element={<MyListings />} />
              <Route path='/dashboard/my-blog' element={<ProtectedRouteAdmin />} >
                  <Route path='/dashboard/my-blog' element={<MyBlogs />} />
                  <Route path='/dashboard/my-blog/add' element={<AddBlog />} />
                  <Route path='/dashboard/my-blog/:id' element={<EditBlog />} />
              </Route>
              <Route path='/dashboard/my-listing/:id' element={<EditListing />} />
              <Route path='/dashboard/my-profile' element={<Profile />} />
            </Route>
          </Route>
          
          </Route>
        </Routes>
      </UserProvider>
      <TopButton />
      <ToastContainer position="bottom-left"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
      {!location.pathname.includes("dashboard") && <Footer />}
    </>
  );
}

export default App;
