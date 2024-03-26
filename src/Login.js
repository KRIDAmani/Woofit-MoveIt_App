import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';

const Login = () => {
  const [id, setId] = useState('');
 const [password, setPassword] = useState('');

 const handleLogin = () => {
    // Here you would typically validate the email and password
    // and then call your authentication service.
    console.log('ID:', id);
    console.log('Password:', password);
 };

 return (
    <View style={styles.container}>
      <Input
        placeholder="ID"
        leftIcon={{ type: 'font-awesome', name: 'user' }}
        onChangeText={setId}
        value={id}
        keyboardType="default"
        autoCapitalize="none"
      />
      <Input
        placeholder="Password"
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
 );
};

const styles = StyleSheet.create({
  container: {
     flex: 1,
     justifyContent: 'center',
     padding: 20,
     backgroundColor : '#9fffcb',
  }
 });
 
export default Login;