import React,{useEffect,useState} from 'react';
import {View,Text,FlatList} from 'react-native';
import axios from 'axios';

const Thumb = ()=>{
    const [DATA,setData] = useState([]);
    const getBinaryTreeData = async () => {

        try {
            const {data} = await axios.get(`https://vercel-express-liart.vercel.app/api/posts?start=0&limit=4`);
           const data1 = JSON.stringify(data)
            console.log(data1);
           // setData(data);
            // if (data.success) {
            //     //dispatch({ type: GETTREEDATA, payload: data.tree })
            //     console.log(data)
            //     // if (data.tree[0] !== null) {
            //     //     setTreedata(data.tree)
            //     // }
            // }

        } catch (error) {
            console.log(error);

        }
    }


    useEffect(
        () => {
            getBinaryTreeData()
        },
        []
    );
  //console.log({DATA})
//   const renderItem = ({DATA}) => (
//     <DATA title={DATA[0].title} />
//   );
  return(

    <View>
      {/* <FlatList
        data = {DATA}
        renderItem={renderItem}
        //keyExtractor={DATA = DATA.id}
      /> */}
    </View>

  )
}
export default Thumb;
