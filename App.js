import {createStackNavigator} from 'react-navigation';

import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';

import {capitalizeFirstLetter} from './src/util';

export default createStackNavigator (
  {
    // Ele renderiza seguindo a ordem de declaração abaixo:
    'Main': 
    {
      screen: PeoplePage
    },
    'PeopleDetail': 
    {
      screen: PeopleDetailPage,
      navigationOptions: ({navigation}) => {

        const peopleName = navigation.state.params.people.name.first;

        return({
          title: capitalizeFirstLetter(peopleName),
          headerTitleStyle: 
          {
            color: '#fff',
            fontSize: 30,
          }
        })
      }
    }
  },{
    navigationOptions: 
    {
      title: 'Pessoas!',
      headerStyle:
      {
        backgroundColor: '#6ca2f7',
        borderBottomWidth: 1,
        borderBottomColor: '#c5c5c5'
      },
      headerTintColor: '#fff',
      headerTitleStyle: 
      {
        color: '#fff',
        fontSize: 30,
        textAlign: 'center',
        flexGrow: 1
      }
    }
  }
)

// export default PeoplePage;