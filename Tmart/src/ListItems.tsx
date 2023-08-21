import axios from "axios";
import React, { useState } from "react";
import { Alert, Button, FlatList, Image, Modal, SafeAreaView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";


type Items = {
    Name: string,
    Price: number,
    Image:string,
    Description: string
}

type Cartitems = {
    Name: string,
    Price: number
}

const Itemslist: Items[] = [
    {
        Name: 'Smart Tv',
        Price: 60000,
        Image:'https://images.samsung.com/is/image/samsung/in-full-hd-tv-t5770-ua43t5770aubxl-ua--r----auxxl-227140883?$1300_1038_PNG$',
        Description:'43-Inch Full HD Tv'
    },
    {
        Name: 'Washing Machine',
        Price: 50000,
        Image:'https://cdn1.smartprix.com/rx-iJmZfKZKh-w1200-h1200/JmZfKZKh.jpg',
        Description:'9 Kg Full Automatic washing machine'
    },
    {
        Name: 'Refrigerator',
        Price: 18000,
        Image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBYCCy6CTE4zVbIc64rHMVomrNyxyXTdWBag&usqp=CAU',
        Description:'Five-Star with 183L capacity'
    },
    {
        Name: 'AC',
        Price: 40000,
        Image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-_1KPuy7xNGisdkQgRVagY9Gltkp8z1FBLw&usqp=CAU',
        Description:'1.5-Ton Five-Star split AC'
    }
]

function ListItems({ navigation }: any) {

    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const [modalItem,SetmodalItem] = useState<Items>();

    const url = "https://649bc4e1048075719236e51b.mockapi.io/api/RN-practice";

    const [cartListItems,SetcartListItems] = useState<Cartitems[]>();

    function addToCart(name?:string,price?:number){
        axios
        .post(url, {
          Name: name,
          Price : price
        })
        .then((response) => {
          SetcartListItems(response.data);
          navigation.navigate('Cart')
        }).catch(console.log);
    }

    

    return (
        <SafeAreaView>
            <Modal animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {setModalVisible(!modalVisible);}}
                >
                <SafeAreaView  style={{flex:1,flexDirection:"column",justifyContent:'center',alignSelf:'center'}}>
                    <View>
                        
                        <Image source={{uri:modalItem?.Image}} style={{height:'100%',width:'100%',alignSelf:'center',flex:2,resizeMode:'contain'}} />
                    
                        <View style={{flex:1}}>
                            <Text>Name : {modalItem?.Name}</Text>
                            
                            <Text>Price : {modalItem?.Price}</Text>
                            
                            <Text>Product Detail : {modalItem?.Description}</Text>
                        </View>

                        <View style={{flex:1,flexDirection:'row',alignSelf:'center',justifyContent:"space-between"}}>
                            <Button title="Add to Cart" onPress={()=>addToCart(modalItem?.Name,modalItem?.Price)}/>
                            <Button title="Remove"/>
                        </View>
                        
                        <Button title='OK' onPress={()=>setModalVisible(false)}  />
                    </View>
                </SafeAreaView>
            </Modal>

            <Text> In Listitems Page!!!</Text>
            <FlatList data={Itemslist} renderItem={({ item }) =>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', borderWidth: 1 }}>
                    <View style={{ flex: 1 }}>
                        <Text>{item.Name}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text>{item.Price}</Text>
                    </View>
                    <View style={{flex:1}}>
                        <TouchableOpacity onPress={()=>{
                                        setModalVisible(true)
                                        SetmodalItem(item)}} >
                            <Text>➡️</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            } />
            <View>
                <Button title='Go to cart' onPress={() => navigation.navigate('Cart')} />
            </View>
            
        </SafeAreaView>


    )
}

export default ListItems;