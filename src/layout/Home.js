import React,{useContext, Fragment} from 'react';
import {DataContext} from '../App';
import Title from '../components/Title';
import List from '../components/List';

const Home = () => {
   const {data, loading} = useContext(DataContext);

   if(loading){
      return <h1 className='loading'>데이터 로드 중입니다.</h1>
   }

   const categories=[...new Set(data.map((data) => data.RCP_PAT2))];
   return (
      <div className='inner'>
         {
            categories.map((category)=>(
               <Fragment key={category}>
                  <Title title={category}/>
                  <List data={data.filter((item)=> item.RCP_PAT2 ===category)}/>
               </Fragment>
            ))
         }
      </div>
   );
};

export default Home;