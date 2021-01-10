import React from 'react';
import { Button } from 'react-native';

export default function ({ navigation }) {
    return (
      <Button
        title="This is the new selection page"
        onPress={() =>
          navigation.navigate('RoleSelection', { name: 'Role Selection' })
        }
      />
    );
  };