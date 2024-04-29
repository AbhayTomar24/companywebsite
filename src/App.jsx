import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Contact from "./components/Contact";
import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
/*
Applying Styles: The styles defined in your CSS files (App.scss, header.scss, home.scss) will be applied to the respective components.
For example, styles defined in header.scss will apply to the Header component.
Similarly, styles defined in home.scss will apply to the Home component.
Global Application Styles: The App.scss file likely contains global styles that apply to the entire application. These styles may define things like layout, typography, and other global visual properties.
The App.scss styles will apply globally across your application, affecting all components unless overridden by more specific styles.
CSS Specificity: If there are conflicting styles (e.g., styles defined in both App.scss and header.scss that target the same element), the CSS specificity rules will determine which styles take precedence.
Generally, more specific selectors override less specific ones. Inline styles have the highest specificity, followed by IDs, classes, and elements.
*/


function App() {
  return (
    <Router>
      <Header />
      {/* When you use <header /> in JSX, it's essentially creating a <header> element in the React component's render output. This is equivalent to writing <header></header> in regular HTML. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
      <Footer />

    </Router>

  );
}

export default App;

