import React from "react";
import { Route, Switch } from "react-router-dom";
import {
    DashboardLayout,
    DashboardHome,
    PYQPage,
    SoftwarePage,
    ForumPage,
    LessonsPage
} from "../components/Dashboard";

const DashboardRoutes = () => {
    return (
        <Route path="/dashboard">
            <DashboardLayout>
                <Switch>
                    {/* Dashboard Home */}
                    <Route exact path="/dashboard" component={DashboardHome} />

                    {/* PYQ Routes */}
                    <Route exact path="/dashboard/pyq" component={PYQPage} />
                    <Route exact path="/dashboard/pyq/:examType" component={PYQPage} />

                    {/* Software Tutorials Routes */}
                    <Route exact path="/dashboard/software" component={SoftwarePage} />
                    <Route exact path="/dashboard/software/:software" component={SoftwarePage} />

                    {/* Forum Routes */}
                    <Route exact path="/dashboard/forum" component={ForumPage} />
                    <Route exact path="/dashboard/forum/:questionId" component={ForumPage} />

                    {/* Lessons Routes */}
                    <Route exact path="/dashboard/lessons" component={LessonsPage} />
                    <Route exact path="/dashboard/lessons/:subject" component={LessonsPage} />

                    {/* Events Routes - To be implemented */}
                    <Route path="/dashboard/events" component={() => (
                        <div style={{ padding: '40px', textAlign: 'center' }}>
                            <h2>Events</h2>
                            <p style={{ color: '#a0a0b0' }}>Coming Soon...</p>
                        </div>
                    )} />

                    {/* Jobs Routes - To be implemented */}
                    <Route path="/dashboard/jobs" component={() => (
                        <div style={{ padding: '40px', textAlign: 'center' }}>
                            <h2>Jobs & Internships</h2>
                            <p style={{ color: '#a0a0b0' }}>Coming Soon...</p>
                        </div>
                    )} />

                    {/* Profile Routes - To be implemented */}
                    <Route path="/dashboard/profile" component={() => (
                        <div style={{ padding: '40px', textAlign: 'center' }}>
                            <h2>My Profile</h2>
                            <p style={{ color: '#a0a0b0' }}>Coming Soon...</p>
                        </div>
                    )} />
                </Switch>
            </DashboardLayout>
        </Route>
    );
};

export default DashboardRoutes;
