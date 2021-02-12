import { Auth } from 'aws-amplify';
import React from 'react';
import { Link } from 'react-router-dom';

export const Dashboard: React.FC = () => {
    return (
    <>
    <div>This is the placeholder for collector dashboard</div>
    <button onClick={() => {Auth.signOut()}}><Link to={"/home"}>Sign Out</Link></button>
    </>)
}