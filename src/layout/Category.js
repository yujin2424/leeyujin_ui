import {useContext} from 'react';
import {useParams} from 'react-router-dom';
import { DataContext } from '../App';
import Title from '../components/Title';
import List from '../components/List';


const Category = () => {
   const {data, loading} = useContext(DataContext);
   const {category} = useParams();

   if(loading){
      return <h1 className='loading'>데이터 로드 중입니다.</h1>
   }

   const filteredData= data.filter((item)=> item.RCP_PAT2===category)
   return (
      <div>
         <Title title={category}/>
         <List data={filteredData}/>
      </div>
   );
};

export default Category;