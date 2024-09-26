import React, { useContext } from 'react';
import {DataContext} from '../App';
import { useParams } from 'react-router-dom';


const Recipe = () => {
   const {data, loading}= useContext(DataContext);
   const {id} = useParams();
   const recipe = data ? data.find((item) => item.RCP_SEQ===id):null;

   if(loading){
      return <h1>데이터 로드 중입니다.</h1>
   }
   if(!recipe){
      return <h1>찾는 레시피가 없습니다.</h1>
   }

   const {RCP_NM,ATT_FILE_NO_MK,RCP_PARTS_DTLS,INFO_ENG,INFO_CAR,INFO_PRO,INFO_FAT,INFO_NA,RCP_NA_TIP} = recipe;

   const manuals=Array.from({ length: 20 }, (_, i) => ({
      desc: recipe[`MANUAL${String(i + 1).padStart(2, '0')}`],
      img: recipe[`MANUAL_IMG${String(i + 1).padStart(2, '0')}`],
   })).filter((manual) => manual.desc);

   const source = RCP_PARTS_DTLS
   ? RCP_PARTS_DTLS.split("●").map((el)=>el.split(":").map((el)=>el.trim()).filter(Boolean)).filter((el)=>el.length)
   : [];

   return (
      <div className='detail'>
        <img src={ATT_FILE_NO_MK} alt={RCP_NM} className="detail_maining" />
        <div className="detail-title">{RCP_NM}</div>
            <div className="detail_info">
                <div className="info_title">
                    재료
                </div>
                {source.map((el, idx)=>(
                    <div key={idx} className='txt'>
                        <span className="source-tit">{el[0]}</span>
                        <span className="source-con">{el[1]}</span>
                    </div>
                ))}
            </div>
            <div className="detail_info1 detail_info">
                <div className="detail_info1_title info_title">
                    조리방법
                </div>
                {
                    manuals.map((manual, index) => manual.desc? (
                        <div key={index} className='desc_list'>
                            <span className="desc_txt">{manual.desc.slice(0,-1)}</span>
                            <img src={manual.img} alt={RCP_NM} />
                        </div>
                    ):null)
                }
            </div>
            <div className="detail_info2 detail_info">
                <div className="detail_info2_title info_title">
                    영양정보
                </div>
               <div className="table">
                    <div className="row">
                        <span className="col">열 량:</span><span className="col">{INFO_ENG}kal</span>
                    </div>
                    <div className="row">
                        <span className="col">탄 수 화 물:</span><span className="col">{INFO_CAR}g</span>
                    </div>
                    <div className="row">
                        <span className="col">단 백 질:</span><span className="col">{INFO_PRO}g</span>
                    </div>
                    <div className="row">
                        <span className="col">지 방:</span><span className="col">{INFO_FAT}g</span>
                    </div>
                    <div className="row">
                        <span className="col">나 트 륨:</span><span className="col">{INFO_NA}g</span>
                    </div>
                    <div className="tip">
                        <span className="col">조리법 TIP : </span>
                        <span className="col">{RCP_NA_TIP}</span>
                    </div>
               </div>
            </div>
      </div>
   );
};

export default Recipe;