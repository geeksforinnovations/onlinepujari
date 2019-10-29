import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import { Button } from '../core';

class DrawerContent extends PureComponent {

    render() {

        return (
            <>
                <View style={{ height: 100, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Guest user</Text>
                    <Button style={{ width: 100 }}>Login</Button>
                </View>
                <View>

                    <DrawerItems {...this.props} />
                </View>
            </>
        );
    }
}

export default DrawerContent;