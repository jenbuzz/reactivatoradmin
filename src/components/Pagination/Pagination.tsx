import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
            <nav
                className="pagination"
                role="navigation"
                aria-label="pagination"
            >
                <button
                    id="btnLoadMore"
                    className="button is-rounded"
                    onClick={loadMore}
                >
                    <FontAwesomeIcon icon="caret-down" />
                </button>
            </nav>
        );
    }
}

export default Pagination;
