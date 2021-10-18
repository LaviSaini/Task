import React, { useEffect, useState } from 'react';
import { View, FlatList,TouchableOpacity} from 'react-native';
import { Card } from 'react-native-paper';
import axios from 'axios';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';

const Thumb = () => {
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
