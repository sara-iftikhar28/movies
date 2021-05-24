import React  from 'react';
import _ from 'lodash';

const Pagination = (props) => {
        const { itemCount, pageSize, currentPage, onPageChange} = props
        const pageCount = Math.ceil(itemCount / pageSize)

        if(pageCount === 1)
        return null
        const pages =_.range(1, pageCount + 1)

        return ( 
          
        <nav>
        <ul className="pagination">
            {pages.map(x =>  <li className={currentPage == x ? 'active page-item' : 'page-item'} key={x}><a onClick={() => onPageChange(x)} className="page-link">{x}</a></li>)}
           
        </ul>
        </nav>
         );
    
}
 
export default Pagination;
