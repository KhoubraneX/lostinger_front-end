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
import AddListing from './pages/addListing';
import Learn from './pages/learn';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/how-it-works' element={<HowItWorks />} />
      <Route path='/howitworks' element={<HowItWorks />} />
      <Route path='/login' element={<Login />} />
      <Route path='/registration' element={<Register />} />
      <Route path='/signup' element={<Register />} />
      <Route path='/listing' element={<Listing />} />
      <Route path='/listingDetails/:id' element={<ListingDetails />} />
      <Route path='/blogDetails/:id' element={<BlogDetails />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/addListing' element={<AddListing />} />
      <Route path='*' element={<PageNotFound />} />
      <Route path='Learn' element={<Learn />} />
    </Routes>
    <TopButton />
    <Footer />
    </>
  );
}

export default App;
