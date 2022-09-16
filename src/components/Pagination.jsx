import React from 'react';
import { Link } from 'react-router-dom';
import { useQueryUrl } from '../hooks/useQueryUrl';

export default function Pagination({ totalPage }) {
    const search = useQueryUrl()

    const currentPage = parseInt(search.get('page') || '1')


    const renderPage = () => {
        if (totalPage <= 1) return null

        let startPos = currentPage - 2,
            endPos = currentPage + 2

        if (startPos < 1) {
            startPos = 1
            endPos = 5
        }

        if (endPos > totalPage) {
            endPos = totalPage
            startPos = endPos - 4

            if (startPos < 1) startPos = 1
        }

        let listPage = []


        for (let i = startPos; i <= endPos; i++) {

            search.set('page', i)
            const pathSearch = search.toString()
            listPage.push(
                <li key={ i } className={ `page-item ${i === currentPage ? 'active' : ''} ` } >
                    <Link className="page-link" to={ `?${pathSearch}` } >{ i }</Link>
                </li >
            )

        }


        return listPage


    }

    search.set('page', currentPage - 1)
    let prevPath = '?' + search.toString()



    search.set('page', currentPage + 1)
    let nextPath = '?' + search.toString()



    return (
        <nav className="d-flex justify-content-center justify-content-md-end">
            <ul className="pagination pagination-sm text-gray-400">
                {
                    currentPage > 1 && (
                        <li className="page-item">
                            <Link className="page-link page-link-arrow" to={ prevPath }>
                                <i className="fa fa-caret-left" />
                            </Link>
                        </li>
                    )
                }
                {
                    renderPage()
                }
                {
                    currentPage < totalPage && (
                        <li className="page-item" >
                            <Link className="page-link page-link-arrow" to={ nextPath }>
                                <i className="fa fa-caret-right" />
                            </Link>
                        </li>
                    )
                }

            </ul>
        </nav>
    )
}
