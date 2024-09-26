import React from 'react';
import { AiFillThunderbolt } from "react-icons/ai";
import { MdOutlineSoupKitchen } from "react-icons/md";
import {Link} from 'react-router-dom';

const List = ({data}) => {
   return (
      <div className='list'>
         {
            data.map(({RCP_SEQ, RCP_NM,RCP_WAY2,ATT_FILE_NO_MAIN, INFO_ENG}) => (
               <div key={RCP_SEQ} className="item">
                  <Link to={`/recipe/${RCP_SEQ}`} >
                     <div className='item_img'>
                        <img src={ATT_FILE_NO_MAIN} alt={RCP_NM} />
                        </div>
                        <div className="list-text-wrap">
                           <div className="list-txt-title">{RCP_NM}</div>
                           <div className='list-sub-text-wrap'>
                              <div className="list-txt-kal"><span className="icon"><AiFillThunderbolt /></span>{INFO_ENG}Kal</div>
                              <div className="list-txt-way"><span className="icon"><MdOutlineSoupKitchen /></span>{RCP_WAY2}</div>
                           </div>
                        </div>
                     
                  </Link>
      </div>
            ))
         }
      </div>
   );
};

export default List;