import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Jobs from "./job/Jobs";
import LoginForm from "./user/LoginForm";
import SignupForm from "./user/SignupForm";
import ProfileForm from "./user/ProfileForm";
import HomePage from "./HomePage";
import CompanyList from "./company/CompanyList";
import CompanyDetail from "./company/CompanyDetail";
import ProtectedRoute from "./ProtectedRoute";

const Routes = ({signup, login}) => {
    return (
        <div>
            <main>
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <ProtectedRoute exact path="/companies">
                        <CompanyList/>
                    </ProtectedRoute>        
                    <ProtectedRoute exact path="/companies/:handle">
                        <CompanyDetail/>
                    </ProtectedRoute>
                    <ProtectedRoute exact path="/jobs">
                        <Jobs/>
                    </ProtectedRoute>
                    <Route exact path="/login">
                        <LoginForm login={login}/>
                    </Route>
                    <Route exact path="/signup">
                        <SignupForm signup={signup} />
                    </Route>
                    <ProtectedRoute exact path="/profile">
                        <ProfileForm/>
                    </ProtectedRoute>
                    <Redirect to="/" />
                </Switch>
            </main>
        </div>
    )
}

export default Routes;