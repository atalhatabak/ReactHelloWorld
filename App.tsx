import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [submittedData, setSubmittedData] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputChange = (text: string) => {
    setName(text);
    setErrorMessage(null); 
  };

  const handleSubmit = () => {
    if (name.trim() === '') {
      setErrorMessage('İsim boş olamaz.');
    } else {
      setSubmittedData(name);
      setName('');
    }
  };

  return (
    <View style={styles.container}>
      <Text></Text>
      <TextInput
        style={styles.input}
        placeholder="İsminiz"
        value={name}
        
        onChangeText={handleInputChange}
      />
      <Button title="Gönder" onPress={handleSubmit} />

      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
      {submittedData && <Text>Merhaba {submittedData}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,

  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    width: '100%',
    borderRadius:10,
    textAlign:'center',

  },
  error: {
    color: 'red',
  },
});

export default App;
