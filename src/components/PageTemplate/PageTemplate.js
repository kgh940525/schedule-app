import React from 'react';
import './PageTemplate.scss';
import { Card, CardImg, CardText, CardBody,
    CardTitle} from 'reactstrap';

  
// export { default } from "./PageTemplate";

// const style={
//     width: "100%",
//     hight: "100%"
// }
// }
// const style2={
//     left : "50%",
//     right : "50%"
// }
const PageTemplate = ({children}) =>{
    return (
        
            <div className="page-template" >

                      
        <Card>
        <CardImg top width="10%" src="https://tistory4.daumcdn.net/tistory/2778743/attach/19a9a56906264ee28fdd41aaba3b4bea" alt="Card image cap" />
        <CardBody>
          <CardTitle>감자개발자</CardTitle>          
          <CardText></CardText>
        </CardBody>
      </Card>
      
            <div className="page-template content" >{children}</div>
            </div>
    );
};
export default PageTemplate;