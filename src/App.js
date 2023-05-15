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
import { ProtectedRoute, CheckAuthRoute } from './utils/protectedRoute'
import React, { useEffect, useState } from 'react';
import { PreLoaderMain } from './components/preLoaderPage';
import { ItemDtProvider } from './utils/contexts/ItemDetailsContext';
import { Messages } from './pages/admin/messages';
import { Message } from './pages/admin/message';
import { MyListings } from './pages/admin/myListings';
import Profile from './pages/admin/profile';
import EditListing from './pages/admin/editListing';
import { ToastContainer } from 'react-toastify';
// chat config 
import { CometChat } from "@cometchat-pro/chat";


const appID = process.env.REACT_APP_COMETCHAT_APP_ID;
const region = process.env.REACT_APP_COMETCHAT_APP_REGION;
const appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();
CometChat.init(appID, appSetting)

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
            <Route path='/addListing' element={<ItemDtProvider>
              <AddListing />
            </ItemDtProvider>} />
          </Route>
          <Route path='/listing' element={<ItemDtProvider>
            <Listing />
          </ItemDtProvider>} ></Route>
          <Route path='/listing/listingDetails/:id' element={<ListingDetails />} />
          <Route path='/blogDetails/:id' element={<BlogDetails />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<PageNotFound />} />
          <Route path='notFound' element={<PageNotFound />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/dashboard' element={<ItemDtProvider><Dashboard /></ItemDtProvider>} >
              <Route path='' element={<Navigate to="my-listing" />} />
              <Route path='/dashboard/message' element={<Messages />} />
              <Route path='/dashboard/message/:id' element={<Message />} />
              <Route path='/dashboard/my-listing' element={<MyListings />} />
              <Route path='/dashboard/my-listing/:id' element={<EditListing />} />
              <Route path='/dashboard/my-profile' element={<Profile />} />
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
