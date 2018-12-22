import React from 'react';
import ReactDOM from 'react-dom';
import Pagination from './Pagination';

describe('<Pagination />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        const loadMore = () => {};

        ReactDOM.render(<Pagination hasLoadedAll={false} loadMore={loadMore} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
