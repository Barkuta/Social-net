import React, { Suspense } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./Components/News/News";
import Settings from "./Components/Settings /Settings";
import Music from "./Components/Music/Music";
// import DialogsContainer from "./Components/Dialogs/DialogsContainer";
// import UsersContainer from "./Components/Users/UsersContainer";
// import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";
import { Component } from "react";
import { connect } from "react-redux";
import { initializeApp } from "./Redux/app-reducer";
import Preloader from "./Components/Common/Preloader/preloader";
import ProfileStatus from "./Components/Profile/ProfileInfo/ProfileStatus";
import store from "./Redux/redux-store";
import { Provider } from "react-redux";

const ProfileContainer = React.lazy(() =>
  import("./Components/Profile/ProfileContainer")
);

const UsersContainer = React.lazy(() =>
  import("./Components/Users/UsersContainer")
);

const DialogsContainer = React.lazy(() =>
  import("./Components/Dialogs/DialogsContainer")
);

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    if (this.props.isAuth !== true) {
      return (
        <BrowserRouter>
          <div>
            <div>
              <Routes>
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      );
    }
    return (
      <BrowserRouter>
        <HeaderContainer />
        <div className="app-wrapper">
          <Navbar />
          <div className="app-wrapper-content">
            <Routes>
              <Route
                path="/profile/:userId?"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <ProfileContainer />
                  </Suspense>
                }
              />
              <Route
                path="/dialogs/*"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <DialogsContainer />
                  </Suspense>
                }
              />
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/users"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <UsersContainer />
                  </Suspense>
                }
              />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
    isAuth: state.auth.isAuth,
  };
};

let AppContainer = connect(mapStateToProps, {
  initializeApp,
})(App);

const MainApp = (props) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        {/* learn react */}
        <AppContainer />
      </Provider>
    </React.StrictMode>
  );
};

export default MainApp;
