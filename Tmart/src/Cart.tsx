import React from "react";
import { Button, SafeAreaView, Text, View } from "react-native";

function Cart({ navigation }: any) {
    return (
        <SafeAreaView>
            <Text>In Cart Page!!!</Text>
            <View>
                <Button title='Go to products' onPress={() => navigation.navigate('ListItems')} />
            </View>
        </SafeAreaView>

    );
}

export default Cart;