import {View, Button, SectionList, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const App = () => {
  return (
    <View style={{marginTop: 30}}>
        <Button title="Add Pokemon" color="green" />
        <SectionList sections={datasource} renderItem={renderItem}
                     renderSectionHeader={renderSection}/>
    </View>
  );
}

export default App;

const datasource = [
    {data: [{key: 'Pikachu',
            image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_25-2x.png'},
            {key: 'Magnemite',
            image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_81-2x.png'}],
            title:" Electric ", bgcolor:"yellow", icon:"battery-full", color: 'brown'},
    {data: [{key: 'Squirtle',
            image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_7-2x.png'},
            {key: 'Psyduck',
            image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_54-2x.png'}],
            title: " Water ", bgcolor:"lightblue", icon:"droplet", color: 'blue'},
    {data: [{key: 'Charmander',
            image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_4-2x.png'},
            {key: 'Growlithe',
            image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_58-2x.png'}],
            title: " Fire ", bgcolor:"orange", icon:"fire", color: 'red'},
    ];

const renderItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.opacityStyle}>
        <Text style = {styles.textStyle}>{item.key}</Text>
        <Image source={{uri: item.image}}
               style={styles.imageStyle}/>
    </TouchableOpacity>
  );
}

const renderSection = ({section}) => {
  return (
      <View style={{backgroundColor: 'skyblue'}}>
          <Text style={[styles.headerText, {backgroundColor: section.bgcolor},
              {color: section.color}]}>
              <Icon name={section.icon} size={20} color={section.color}/>
              {section.title}
          </Text>
      </View>

  );
}

const styles = StyleSheet.create({
    opacityStyle: {
        flex: 1,
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: 'grey',
        backgroundColor: 'skyblue'
    },
    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left'
    },
    imageStyle: {
        width: '90%',
        height: 500,
        alignSelf: 'flex-end',
        margin: 10
    },
    headerText: {
        fontSize: 20,
        margin: 10,
        borerWidth: 1,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontStyle: 'bold'
    }
});
