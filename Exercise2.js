import {View, Text, Button, SectionList, StyleSheet, TouchableOpacity} from 'react-native';

const App = () => {
    return (
        <View style={{margin: 30}}>
            <Button title="Add Pokemon" color="green" />
            <SectionList sections={datasource} renderItem={renderItem}
                         renderSectionHeader={renderSection}/>
        </View>
    );
}

export default App;

const datasource = [
    {data: [{key: 'a'}, {key: 'e'}, {key: 'i'}, {key: 'o'}],
        title:"Vowels", bgcolor:"skyblue"},
    {data: [{key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'f'}, {key: 'g'}, {key: 'h'},
            {key: 'j'}, {key: 'k'}, {key: 'l'}, {key: 'm'}, {key: 'n'}, {key: 'p'},
            {key: 'q'}, {key: 'r'}, {key: 's'}],
        title: "Consonants", bgcolor:"khaki"},
];

const renderItem = ({item}) => {
    return (
        <TouchableOpacity style={styles.opacityStyle}>
            <Text style = {styles.textStyle}>{item.key}</Text>
        </TouchableOpacity>
    );
}

const renderSection = ({section}) => {
    return (
        <Text style={[styles.headerText, {backgroundColor: section.bgcolor}]}>{section.title}</Text>
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
    },
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontStyle: 'bold'
    }
});
