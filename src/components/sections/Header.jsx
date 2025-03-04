import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className='container-fluid p-3u mt-10u rounded-full bg-black text-white'>
        <nav>
          <ul className='font-body-base-light gap-2u flex'>
            <NavLink
              className='px-4u py-3u rounded-full border-2 border-transparent transition-all hover:border-white'
              to='/'>
              <li>Homepage</li>
            </NavLink>
            <NavLink
              className='px-4u py-3u rounded-full border-2 border-transparent transition-all hover:border-white'
              to='/about-us'>
              <li>About Us</li>
            </NavLink>
            <NavLink
              className='px-4u py-3u rounded-full border-2 border-transparent transition-all hover:border-white'
              to='/posts'>
              <li>Posts</li>
            </NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
}
