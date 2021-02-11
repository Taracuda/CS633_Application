import { Auth } from 'aws-amplify';
import React from 'react';

export const Dashboard: React.FC = () => {
    return (
    <>
    <div>This is the dashboard</div>
    <button onClick={() => {Auth.signOut()}}>Sign Out</button>
    </>)
}