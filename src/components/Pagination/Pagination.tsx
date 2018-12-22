import React, { Component } from 'react';
import './Pagination.scss';

interface PaginationProps {
    hasLoadedAll: boolean;
    loadMore: () => void;
}

class Pagination extends Component<PaginationProps, {}> {
    render() {
        const { hasLoadedAll, loadMore } = this.props;

        if (hasLoadedAll) {
            return null;
        }

        return (
            <nav className="pagination" role="navigation" aria-label="pagination">
                <button className="button is-rounded" onClick={loadMore}>Load More</button>
            </nav>
        );
    }
}

export default Pagination;
