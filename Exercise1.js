import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

const App = () => {
    return (
        <View>
            <FlatList data={datasource} renderItem={renderItem} />
        </View>
    );
}

export default App;

const datasource =
    [{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}, {key: 'f'}, {key: 'g'},
    {key: 'h'}, {key: 'i'}, {key: 'j'}, {key: 'k'}, {key: 'l'}, {key: 'm'}, {key: 'n'},
    {key: 'o'}, {key: 'p'}, {key: 'q'}, {key: 'r'}, {key: 's'}, {key: 't'}, {key: 'u'},
    {key: 'v'}, {key: 'w'}, {key: 'x'}, {key: 'y'}, {key: 'z'}]

const renderItem = ({item}) => {
    return (
        <TouchableOpacity style={styles.opacityStyle}>
            <Text style = {styles.textStyle}>{item.key}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    opacityStyle: {
        borderWidth: 1
    },

    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left'
    }
});
