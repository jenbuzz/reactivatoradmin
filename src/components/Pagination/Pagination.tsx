import React, { Component } from 'react';

interface IPaginationProps {
    hasLoadedAll: boolean;
    loadMore: () => void;
}

class Pagination extends Component<IPaginationProps, {}> {
    render() {
        const { hasLoadedAll, loadMore } = this.props;

        if (hasLoadedAll) {
            return null;
        }

        return (
            <nav className="pagination is-centered is-rounded" role="navigation" aria-label="pagination">
                <button className="button pagination-previous" onClick={loadMore}>Load More</button>
            </nav>
        );
    }
}

export default Pagination;
