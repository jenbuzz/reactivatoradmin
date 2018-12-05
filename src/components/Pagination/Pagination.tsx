import React, { Component } from 'react';

class Pagination extends Component {
    render() {
        return (
            <nav className="pagination is-centered is-rounded" role="navigation" aria-label="pagination">
                <button className="button pagination-previous">Previous</button>
                <button className="button pagination-next">Next page</button>
                <ul className="pagination-list">
                    <li>
                        <button className="button pagination-link" aria-label="Goto page 1">1</button>
                    </li>
                    <li>
                        <span className="pagination-ellipsis">&hellip;</span>
                    </li>
                    <li>
                        <button className="button pagination-link" aria-label="Goto page 45">45</button>
                    </li>
                    <li>
                        <button
                            className="button pagination-link is-current"
                            aria-label="Page 46"
                            aria-current="page"
                        >
                            <span>46</span>
                        </button>
                    </li>
                    <li>
                        <button className="button pagination-link" aria-label="Goto page 47">47</button>
                    </li>
                    <li>
                        <span className="pagination-ellipsis">&hellip;</span>
                    </li>
                    <li>
                        <button className="button pagination-link" aria-label="Goto page 86">86</button>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Pagination;
