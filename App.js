import { LocaleProvider } from "antd-mobile-rn";
import enUS from 'antd-mobile-rn/lib/locale-provider/en_US';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List, TextareaItem, DatePicker } from 'antd-mobile-rn';

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
  changeStart_date = (val) => { this.setState({ start_date:val }); };
  changeEnd_date = (val) => { this.setState({ end_date:val }); };

  render() {
    return (
      <LocaleProvider locale={enUS}>
      <View style={styles.container}>
        <Text>BonVoyApp!</Text>
        <TextareaItem value={this.state.location} placeholder = "Location" onChange={this.changeLocation} style={styles.box} />
        <TextareaItem value={this.state.budget} placeholder = "Budget" onChange={this.changeBudget} style={styles.box} />
        <TextareaItem value={this.state.interest} placeholder = "Interest" onChange={this.changeInterest} style={styles.box} />
        <TextareaItem value={this.state.taste} placeholder = "Taste Preference" onChange={this.changeTaste} style={styles.box} />
        <List style= {styles.list}>
          <DatePicker
            value={this.state.start_date}
            mode="date"
            minDate={new Date(2018, 0, 1)}
            maxDate={new Date(2099, 12, 31)}
            onChange={this.changeStart_date}
            format="YYYY-MM-DD"
            style = {styles.box}
          >
            <List.Item arrow="horizontal" style = {styles.date}>Start Date</List.Item>
          </DatePicker>
        </List>
        <List style= {styles.list}>
          <DatePicker
            value={this.state.end_date}
            mode="date"
            minDate={new Date(2018, 0, 1)}
            maxDate={new Date(2099, 12, 31)}
            onChange={this.changeEnd_date}
            format="YYYY-MM-DD"
            style = {styles.box}
          >
            <List.Item arrow="horizontal" style = {styles.date}>End Date</List.Item>
            
          </DatePicker>
          </List>
      </View>
      </LocaleProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50,
    height: "100%"
  },
  box: {
    width: 250
  },
  date:{
    width: 300
  },
  list:{
    height: 50  
  }
});
