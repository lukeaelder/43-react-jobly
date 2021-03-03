import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./user/UserContext";
import Routes from "./Routes";
import Navigation from "./Navigation";
import JoblyApi from "./api";
import jwt from "jsonwebtoken";
import useLocalStorage from "./useLocalStorage";
export const token_storage = "jobly-token";

function App() {
  const [token, setToken] = useLocalStorage(token_storage);
  const [curUser, setCurUser] = useState(null);
  const [appliedJobs, setAppliedJobs] = useState(new Set([]));
  const [userLoaded, setUserLoaded] = useState(false);

  useEffect(function loadUser(){
    async function getCurUser(){
      if (token) {
        try {
          let {username} = jwt.decode(token);
          JoblyApi.token = token;
          let resUser = await JoblyApi.getUser(username);
          setCurUser(resUser);
          setAppliedJobs(new Set(resUser.applications));
        } catch(err) {
          setCurUser(null)
        }
      }
      setUserLoaded(true);
    }
    setUserLoaded(false);
    getCurUser();
  }, [token])

  const login = async (inputData) => {
    try {
      let token = await JoblyApi.login(inputData);
      setToken(token);
      return { success: true};
    } catch (err) {
      return { success: false };
    }
  }

  const signup = async (inputData) => {
    try {
      let token = await JoblyApi.signup(inputData);
      setToken(token);
      return { success: true};
    } catch (err) {
      return { success: false };
    }
  }

  const logout = () => {
    setCurUser(null);
    setToken(null);
  }

  const hasAppliedToJob = (id) => {
    return appliedJobs.has(id);
  }

  const applyToJob = (id) => {
    if(hasAppliedToJob(id)) return;
    JoblyApi.applyToJob(curUser.username, id);
    setAppliedJobs(new Set([...appliedJobs, id]));
  }

  if (!userLoaded) return <p className="centerp">Loading...</p>

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ curUser, hasAppliedToJob, applyToJob, setCurUser, appliedJobs }}>
          <Navigation logout={logout}/>
          <Routes login={login} signup={signup}/>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
