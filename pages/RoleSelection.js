import React from 'react';
import { Button } from 'react-native';

export default function ({ navigation }) {
    return (
      <Button
        title="This is the role selecfsdfsdftion page"
        onPress={() =>
          navigation.navigate('RoleSelection', { name: 'Role Selection' })
        }
      />
    );
  };