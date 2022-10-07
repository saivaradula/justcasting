import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import './App.scss';
import AppRoutes from './AppRoutes';
import Navbar from './shared/Navbar';
import Sidebar from './shared/Sidebar';
import SettingsPanel from './shared/SettingsPanel';
import { withTranslation } from "react-i18next";

const App = (props) => {

  const [state, setState] = useState(props)

  let navbarComponent = !state.isFullPageLayout ? <Navbar /> : '';
  let sidebarComponent = !state.isFullPageLayout ? <Sidebar /> : '';
  let SettingsPanelComponent = !state.isFullPageLayout ? <SettingsPanel /> : '';


  useEffect(() => {
    onRouteChanged()
    console.log(state)
  }, [props.location])

  const onRouteChanged = () => {
    window.scrollTo(0, 0);
    const fullPageLayoutRoutes = ['/login', '/user-pages/register-1', '/user-pages/lockscreen', '/error-pages/error-404', '/error-pages/error-500', '/general-pages/landing-page'];
    for (let i = 0; i < fullPageLayoutRoutes.length; i++) {
      if (props.location.pathname === fullPageLayoutRoutes[i]) {
        setState({
          isFullPageLayout: true
        })
        document.querySelector('.page-body-wrapper').classList.add('full-page-wrapper');
        break;
      } else {
        setState({
          isFullPageLayout: false
        })
        document.querySelector('.page-body-wrapper').classList.remove('full-page-wrapper');
      }
    }
  }

  return (
    <div className="container-scroller">
      {navbarComponent}
      <div className="container-fluid page-body-wrapper">
        {sidebarComponent}
        <div className="main-panel">
          <div className="content-wrapper">
            <AppRoutes />
            {SettingsPanelComponent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default withTranslation()(withRouter(App));
