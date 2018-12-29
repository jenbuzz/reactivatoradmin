import React from 'react';
import { shallow, mount } from 'enzyme';
import Pagination from './Pagination';

describe('<Pagination />', () => {
    it('renders without crashing', () => {
        const loadMore = () => {};

        shallow(<Pagination hasLoadedAll={false} loadMore={loadMore} />);
    });

    it('should return null if items have been loaded', () => {
        const loadMore = () => {};

        const component = mount(<Pagination hasLoadedAll={true} loadMore={loadMore} />);

        expect(component.html()).toBeNull();
    });
});
