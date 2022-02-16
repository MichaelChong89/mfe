import React from 'react';
import { BrowerRouter } from 'react-router-dom';
// import { mount } from 'marketing/MarketingApp';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

export default () => {
    return (
        <BrowerRouter>
            <div>
                <Header />
                <MarketingApp />
            </div>
        </BrowerRouter>
    )
};