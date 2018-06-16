import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List, TextareaItem } from 'antd-mobile-rn';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      location: '',
      budget: '',
      interest: '',
      taste: '',
      start_date:'',
      end_date:''
    };
  }

  changeLocation = (val) => { this.setState({ location:val }); };
  changeBudget = (val) => { this.setState({ budget:val }); };
  changeInterest = (val) => { this.setState({ interest:val }); };
  changeTaste = (val) => { this.setState({ taste:val }); };

  render() {
    return (
      <View style={styles.container}>
        <Text>BonVoyApp!</Text>
        <TextareaItem value={this.state.location} placeholder = "Location" onChange={this.changeLocation} style={styles.box} />
        <TextareaItem value={this.state.budget} placeholder = "Budget" onChange={this.changeBudget} style={styles.box} />
        <TextareaItem value={this.state.interest} placeholder = "Interest" onChange={this.changeInterest} style={styles.box} />
        <TextareaItem value={this.state.taste} placeholder = "Taste Preference" onChange={this.changeTaste} style={styles.box} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50
  },
  box: {
    width: 250
  }
});
