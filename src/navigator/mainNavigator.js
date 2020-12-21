import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen116044Navigator from '../features/BlankScreen116044/navigator';
import BlankScreen016016Navigator from '../features/BlankScreen016016/navigator';
import BlankScreen116015Navigator from '../features/BlankScreen116015/navigator';
import BlankScreen016010Navigator from '../features/BlankScreen016010/navigator';
import BlankScreen116009Navigator from '../features/BlankScreen116009/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen116044: { screen: BlankScreen116044Navigator },
BlankScreen016016: { screen: BlankScreen016016Navigator },
BlankScreen116015: { screen: BlankScreen116015Navigator },
BlankScreen016010: { screen: BlankScreen016010Navigator },
BlankScreen116009: { screen: BlankScreen116009Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
