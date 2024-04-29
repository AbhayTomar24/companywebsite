import {HashLink} from "react-router-hash-link"
/*
Using HashLink from react-router-hash-link instead of Link from react-router-dom is beneficial when you want to navigate to a specific section within a page (also known as anchor links) in a React application.

Here are some scenarios where HashLink is preferred:

Scrolling to Sections: If you have a long page with multiple sections and want to navigate to a specific section by clicking a link, HashLink is the appropriate choice. It allows you to create anchor links that scroll smoothly to the target section when clicked.
Preventing Page Reloads: Similar to Link from react-router-dom, HashLink prevents the entire page from reloading when clicked. It maintains the single-page application behavior of React and ensures that navigation occurs within the application without causing a full page reload.
Support for Hash Fragment URLs: HashLink supports hash fragment URLs (e.g., #section1) out of the box. When you use HashLink to navigate to a specific section, it updates the URL with the hash fragment, allowing users to bookmark or share the URL with others, and still land on the correct section.
Smooth Scroll Behavior: react-router-hash-link provides smooth scroll behavior by default. When you click a HashLink, it scrolls smoothly to the target section instead of jumping directly to it, providing a better user experience.
*/

const Header = () => {
  return <nav>
   <h1>techontop</h1>
   <main>
    <HashLink to={"/#home"}>Home</HashLink>
    <HashLink to={"/contacts"}>Contacts</HashLink>
    <HashLink to={"/#about"}>About</HashLink>
    <HashLink to={"/#brands"}>Brands</HashLink>
    <HashLink to={"/services"}>Services</HashLink>
   </main>
  </nav>
}

export default Header

