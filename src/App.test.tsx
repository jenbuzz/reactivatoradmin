import React from 'react';
import { shallow } from 'enzyme';

describe('<App />', () => {
    let App: any;

    beforeEach(() => {
        jest.resetModules();

        process.env.REACT_APP_FIREBASE_PROJECT_ID = 'test';
        process.env.REACT_APP_FIREBASE_API_KEY = 'test';
        process.env.REACT_APP_FIREBASE_AUTH_DOMAIN = 'test';
        process.env.REACT_APP_FIREBASE_DATABASE_URL = 'test';
        process.env.REACT_APP_FIREBASE_STORAGE_BUCKET = 'test';
        process.env.REACT_APP_FIREBASE_COLLECTION = 'test';

        App = require('./App').default;
    });

    it('renders without crashing', () => {
        shallow(<App />);
    });
});
