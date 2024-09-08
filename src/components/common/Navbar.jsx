import React from 'react'
// import logo from '../../assets/Logo'
import { Link } from 'react-router-dom'
import HighLightText from '../core/HomePage/HighlightText'
import { NavbarLinks } from '../../data/navbar-links'
import { matchPath } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import ProfileDropdown from '../core/Auth/ProfileDropdown';
import { useState, useEffect } from 'react'
import { categories } from '../../services/apis'
import { apiConnector } from '../../services/apiconnector'
import { IoIosArrowDown } from "react-icons/io";
import { ACCOUNT_TYPE } from "../../utills/constants"

const Navbar = () => {


  const {token} = useSelector((state) => state.auth);
  const {user} = useSelector((state) => state.profile);
  const {totalItems} = useSelector((state) => state.cart);

  const location = useLocation();
  const [subLinks, setSubLinks] = useState([]);

  // const fetchSubLinks = async() => {
  //   try {
  //     const result = apiConnector("GET", categories.CATEGORIES_API);
  //     console.log("printing sublinks results",result)
  //     setsubLinks(result.data)
  //   } catch (error) {
  //       console.log("Could not fetch the categpries list");
  //   }
  //  }
   useEffect(() => {
    ;(async () => {
      // setLoading(true)
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API)
        setSubLinks(res.data.data)
        console.log("SubLinks Results", res.data.data)
      } catch (error) {
        console.log("Could not fetch Categories.", error)
      }
      // setLoading(false)
    })()
  }, [])

// useEffect(() => {
//    fetchSubLinks()
 
//   }, [])
  
  const matchRoute = (route) => {

    return matchPath({path:route}, location.pathname);

  }

  return (
    <div className='flex h-14 items-center justify-center border-b-[1px] border-b-richblack-100'>
      
      <div className='flex w-11/12 max-w-maxContent items-center justify-between'>

      <Link to="/">
      <HighLightText className=' w-44' text={"STUDY-TECH"}/>
      </Link>

      {/* navlinks */}
      <nav>
        <ul className='flex gap-x-6 text-richblack-800'>
          {
            NavbarLinks.map((link,index) => (
              <li key={index}>
                {
                  link.title === "Catalog" ? ( 
                    <div className='flex items-center gap-2 relative group '>
                      <p>{link.title} </p>
                      <IoIosArrowDown />

                      <div className='invisible absolute translate-x-[-50%] translate-y-[30%] left-[50%] top-[50%] flex flex-col rounded-md bg-richblack-700 text-white  opacity-0
                                     transition-all duration-300 group-hover:visible group-hover:opacity-100 lg:w-[300px]'            >
                                        <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-700"></div>
                            {
                              subLinks.length ? (
                                subLinks.map((subLinks, index) => (
                                  <Link to={`${subLinks.link}`} key={index}  className="  rounded-lg bg-transparent py-4 pl-6 hover:bg-richblack-600">
                                    <p>{ subLinks.name } </p>
                                  
                                  </Link>
                                  
                                ))
                              ) : ( <div><p className="text-center">No Courses Found</p> </div> )
                            }
                                      
                       
                      </div>
                    </div>
                  ) : (
                    <Link to={link?.path}>
                      
                       <p className ={`${matchRoute(link?.path) ? "text-yellow-25" : " text-richblack-800"}`} >
                        {link.title}
                        </p> 
                        
                    </Link>
                  )
                }
              </li>
            ))
          }
        </ul>
      </nav>

      {/* login/signUp/Dashboard */}

      <div className='flex gap-x-4 items-centre'>

      {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
              {totalItems > 0 && (
                <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                  {totalItems}
                </span>
              )}
            </Link>
          )}

          {
            token === null && (
              <Link to="/login">
                <button className=' hover:bg-richblack-25 border  border-richblack-200 px-[12px] py-[8px] rounded-xl'>Login</button>
              </Link>
            )
              
            
          }
          {
            token === null && (
              <Link to="signup">
                <button className=' hover:bg-richblack-25 border  border-richblack-200 px-[12px] py-[8px] rounded-xl'>Sign Up</button>
              </Link>
            )
          }
 
      </div>
      {token !== null && <ProfileDropdown />}
      <Link className="mr-4 md:hidden">
         
              <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
             
            </Link>
      </div>
    </div>
  )
}

export default Navbar