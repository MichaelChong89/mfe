import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { mount } from 'marketing/MarketingApp';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

export default () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <MarketingApp />
            </div>
        </BrowserRouter>
    )
};