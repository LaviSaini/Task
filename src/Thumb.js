import React, { useEffect, useState } from 'react';
import { View, FlatList,TouchableOpacity} from 'react-native';
import { Card } from 'react-native-paper';
import axios from 'axios';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';

const Thumb = () => {
        const [DATA,setData] = useState([]);
        const [pressed,setPressed] = useState([false]);
        const getData = async () => {

            try {
                const {data} = await axios.get(`https://vercel-express-liart.vercel.app/api/posts?start=0&limit=4`);
                const object = {...data}
                //console.log(data);
                setData(data);

            } catch (error) {
                console.log(error);

            }
        }


        useEffect(
            () => {
                getData()
            },
            []
        );
     console.log(DATA)
      const renderItem = (item) => {

        //console.log("item",item);

        //let img = item.thumbnailUrl;
        //console.log(img)
        return (
            <TouchableOpacity onPress={()=>renderItems(item.item.url)}>
            <Card style={{margin:10,marginHorizontal:20}}>
                <Card.Cover
                    style={{height:150,width:150}}
                    source={{ uri:item.item.thumbnailUrl}} />
                {/* <Card.Title title={item.id} /> */}
                {/* <Card.Content>
                    <Paragraph>{item.desc}</Paragraph>
                    <Paragraph>{item.year}</Paragraph>
                </Card.Content>

                <Card.Actions>
                    <Button>{item.price}</Button>
                    <Button onPress={() => openDial()}>call seller</Button>
                </Card.Actions> */}
            </Card>
            </TouchableOpacity>
            )
    }
    const renderItems = (item) => {

        console.log("item",item);

        //let img = item.thumbnailUrl;
        //console.log(img)
        return (
           
            <Card style={{margin:10,marginHorizontal:20}}>
                <Card.Cover
                    style={{height:"100%",width:"100%"}}
                    source={{ uri:item}} />
                <Card.Title title={item} />
            </Card>
        )
    }
    return (
        <View style = {{margin:5}}>
            <FlatList
                data={DATA}
                numColumns = {2}
                keyExtractor={(data, index) => data.id}
                renderItem={renderItem}
                inverted={false}
            />
        </View>

    )
}
export default Thumb;
