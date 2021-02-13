import { Auth } from 'aws-amplify';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Dashboard.css";
import PageLayoutComponent from './PageLayoutComponent';

export const Dashboard: React.FC = () => {
    return (
    <>
    <button className="sign-out-button" onClick={() => {Auth.signOut()}}><Link to={"/home"}>Sign Out</Link></button>
    <PageLayoutComponent />
    </>)
}