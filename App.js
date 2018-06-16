import { LocaleProvider } from "antd-mobile-rn";
import enUS from 'antd-mobile-rn/lib/locale-provider/en_US';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List, TextareaItem, DatePicker, Button } from 'antd-mobile-rn';
import End_display  from './End_display';
import fetch from 'cross-fetch';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      location: '',
      budget: '',
      interests: '',
      tastes: '',
      startTime:'',
      endTime:'',
      display:'start',
      startLocation: '',
      loading: false
    };
  }

  changeLocation = (val) => { this.setState({ location:val }); };
  changeStartLocation = (val) => { this.setState({ startLocation:val }); };
  changeBudget = (val) => { this.setState({ budget: parseInt(val) }); };
  changeInterest = (val) => { this.setState({ interests:val }); };
  changeTaste = (val) => { this.setState({ tastes:val }); };
  changeStart_date = (val) => { this.setState({ startTime:val }); };
  changeEnd_date = (val) => { this.setState({ endTime:val }); };

  render() {
    if (this.state.display === 'start')
    return (
      <LocaleProvider locale={enUS}>
      <View style={styles.container}>
        <Text>BonVoyApp!</Text>
        <TextareaItem value={this.state.startLocation} placeholder = "Your Location" onChange={this.changeStartLocation} style={styles.box} />
        <TextareaItem value={this.state.location} placeholder = "Destination Location" onChange={this.changeLocation} style={styles.box} />
        <TextareaItem value={this.state.budget.toString()} placeholder = "Budget" onChange={this.changeBudget} style={styles.box} />
        <TextareaItem value={this.state.interests} placeholder = "Interests" onChange={this.changeInterest} style={styles.box} />
        <TextareaItem value={this.state.tastes} placeholder = "Tastes Preference" onChange={this.changeTaste} style={styles.box} />
        <List style= {styles.list}>
          <DatePicker
            value={this.state.startTime}
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
            value={this.state.endTime}
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
          <Button type="primary" onClick={async () => {
            this.setState({loading: true});
            const toSend = JSON.stringify({
              tastes: this.state.tastes,
              location: this.state.location,
              interests: this.state.interests,
              startTime: this.state.startTime,
              endTime: this.state.endTime,
              budget: this.state.budget,
              startLocation: this.state.startLocation
            })
            console.log(toSend);
            const data = await fetch('http://13.58.8.137/api/getVacation', {
              method: 'POST',
              headers: {
                "Content-Type": "application/json"
              },
              body: toSend
            });
            const json = await data.json();

            this.setState({ display: 'end', data: json })
          }} style={styles.button}>{this.state.loading ? "Finding..." : "FIND MY VACATION"}</Button>
      </View>
      </LocaleProvider>
    );
    else if (this.state.display === 'end')
      return <End_display data={this.state.data} />;
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
  },
  button: {
    width: '100%'
  }
});
