import React from 'react';
import './PageTemplate.scss';

const PageTemplate = ({children}) =>{
    return (
            <div className="page-template">
                <h1>일정관리</h1>         
            <div className="page-template content">{children}</div>
            </div>
    );
};
export default PageTemplate;