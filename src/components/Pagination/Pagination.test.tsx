import React from 'react';
import { shallow } from 'enzyme';
import Pagination from './Pagination';

describe('<Pagination />', () => {
    it('renders without crashing', () => {
        const loadMore = () => {};

        shallow(<Pagination hasLoadedAll={false} loadMore={loadMore} />);
    });
});
