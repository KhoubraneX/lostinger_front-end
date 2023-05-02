import Footer from './layout/footer';
import Header from './layout/header';
import Home from './pages/home';
import PageNotFound from './pages/notFound';
import HowItWorks from './pages/howItWorks';
import TopButton from './layout/topbutton';
import { Route, Routes } from 'react-router-dom';
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

function App() {

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
              <Route path='/dashboard' element={<Dashboard />} />
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
          </Routes>
      </UserProvider>
      <TopButton />
      <Footer />
    </>
  );
}

export default App;
