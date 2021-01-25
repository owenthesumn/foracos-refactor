import React, { useState, useEffect, useContext } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import SideBarCategories from './components/SideBarCategories';
import DetailsCard from './components/DetailsCard';
import OrgbyCategory from './components/OrgbyCategory';
import Home from './pages/Home';
import About from './pages/About';
import Learn from './pages/Learn';
import Random from './pages/Random';
import Contact from './pages/Contact';

export const CategoryCardContext = React.createContext();
export const OrgCardContext = React.createContext();

  function App() {
    useEffect(() => {
      if (window.innerWidth > 800) {
        setMobile(false);
      } else {
        setMobile(true);
    }
  }, [])

  const [toggleCategories, setToggleCategories] = useState(false);
  const [toggleDetails, setToggleDetails] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [showOrgbyCategory ,setShowOrgbyCategory] = useState(false)
  const [category, setCategory] = useState("");
  const [mobile, setMobile] = useState();
  const [size, setSize] = useState(0);

  function chooseCategory(category) {
    setShowOrgbyCategory(true);
    setToggled(true);
    setCategory(category);
  }

  function showDetails(toggleShow) {
    setToggleDetails(toggleShow);
  }

  const checkSize = () => {
    setSize(window.innerWidth);
    if (size > 800) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    if (window.innerWidth <= 800) {
      if (toggleCategories) {
          {document.body.style.overflow = "hidden"};
      } else {
          {document.body.style.overflowX = "hidden"}
          {document.body.style.overflowY = "auto"}
      }
    }
    if (showOrgbyCategory) {
      {document.body.style.overflow = "hidden"};
    } else {
      {document.body.style.overflowY = "auto"}
    }
    if (toggleDetails) {
      setToggleCategories(false);
    }
    if (toggled) {
      setToggleCategories(false);
      setToggled(false);
    }
    return () => {
      window.removeEventListener('resize', checkSize);
    }
  })

  console.log(mobile);

  return (
    <CategoryCardContext.Provider value={chooseCategory}>
      <OrgCardContext.Provider value={showDetails}>
        <Router>
          <SideBarCategories setToggleCategories={setToggleCategories} toggleCategories={toggleCategories}/>
          {toggleDetails && <DetailsCard setToggleDetails={setToggleDetails} toggleDetails={toggleDetails} mobile={mobile}/>}
          {showOrgbyCategory ? <OrgbyCategory category={category} setToggleCategories={setToggleCategories} toggleCategories={toggleCategories} setShowOrgbyCategory={setShowOrgbyCategory} mobile={mobile}/> : <Navigation setToggleCategories={setToggleCategories} toggleCategories={toggleCategories} mobile={mobile}/>}  
          <Switch>
            <Route exact path="/">
              <Home setToggleDetails={setToggleDetails} toggleDetails={toggleDetails}/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/learn">
              <Learn/>
            </Route>
            <Route path="/random">
              <Random/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
          </Switch>
        </Router>
      </OrgCardContext.Provider>
    </CategoryCardContext.Provider>
  );
}

export default App;