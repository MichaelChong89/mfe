import React from 'react';
// import { mount } from 'marketing/MarketingApp';
import { BrowserRouter } from 'react-router-dom';
import {
    StylesProvider,
    createGenerateClassName
} from '@material-ui/core/styles';

import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

export default () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header />
                    <h1>Hi there!!</h1>
                    <MarketingApp />
                </div>
            </StylesProvider>
        </BrowserRouter>
    )
};