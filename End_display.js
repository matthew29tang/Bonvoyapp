import { LocaleProvider } from "antd-mobile-rn";
import enUS from 'antd-mobile-rn/lib/locale-provider/en_US';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { List, TextareaItem, DatePicker, Card, WhiteSpace, WingBlank } from 'antd-mobile-rn';
console.disableYellowBox = true;

let data = [{
  date: "6-16-2018",
  breakfast:{ id: 'UTbi-JP1n-ZYkwYQRrXANA',
  alias: 'philz-coffee-santa-monica',
  name: 'Philz Coffee',
  image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/CXT-GPLLcK-KCbp1lO3rNA/o.jpg',
  is_closed: false,
  url: 'https://www.yelp.com/biz/philz-coffee-santa-monica?adjust_creative=9nStoNo1xDXXIoiVGrIUZQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=9nStoNo1xDXXIoiVGrIUZQ',
  review_count: 1497,
  categories: [],
  rating: 4.5,
  coordinates: { latitude: 34.017699, longitude: -118.493718 },
  transactions: [],
  price: '$',
  location:
   { address1: '525 Santa Monica Blvd',
     address2: 'Ste 100',
     address3: '',
     city: 'Santa Monica',
     zip_code: '90401',
     country: 'US',
     state: 'CA',
     display_address:'' },
  phone: '+13104519500',
  display_phone: '(310) 451-9500',
  distance: 16612.496600199425 },

  lunch:{ id: 'rnjZCES3g4ujzduxuqQN3g',
    alias: 'house-roots-coffee-granada-hills-2',
    name: 'House Roots Coffee',
    image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/ABPGpgc56f6alO1D0VVAog/o.jpg',
    is_closed: false,
    url: 'https://www.yelp.com/biz/house-roots-coffee-granada-hills-2?adjust_creative=9nStoNo1xDXXIoiVGrIUZQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=9nStoNo1xDXXIoiVGrIUZQ',
    review_count: 225,
    categories: [],
    rating: 5,
    coordinates: { latitude: 34.2720549, longitude: -118.4843871 },
    transactions: [],
    price: '$',
    location:
     { address1: '16155 San Fernando Mission Blvd',
       address2: '',
       address3: null,
       city: 'Granada Hills',
       zip_code: '91344',
       country: 'US',
       state: 'CA',
       display_address: '' },
    phone: '',
    display_phone: '',
    distance: 27802.159955844036 },

    dinner: { id: 'Orw0H7VdkuRv_LG4M-eIfw',
    alias: 'the-coffee-gallery-altadena',
    name: 'The Coffee Gallery',
    image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/uqkd426yIZMR2g29iQeWSQ/o.jpg',
    is_closed: false,
    url: 'https://www.yelp.com/biz/the-coffee-gallery-altadena?adjust_creative=9nStoNo1xDXXIoiVGrIUZQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=9nStoNo1xDXXIoiVGrIUZQ',
    review_count: 335,
    categories: [ [Object], [Object], [Object] ],
    rating: 4,
    coordinates: { latitude: 34.1807327409801, longitude: -118.131874188773 },
    transactions: [],
    price: '$',
    location:
     { address1: '2029 Lake Ave',
       address2: '',
       address3: '',
       city: 'Altadena',
       zip_code: '91001',
       country: 'US',
       state: 'CA',
       display_address: [Array] },
    phone: '+16263987917',
    display_phone: '(626) 398-7917',
    distance: 21904.95496629093 },

    transportation:{
      name: 'Delta Airlines',
      price: "$1000",
      address: '62 Glen Arbor',

    },

    hotel:{
      name: 'Double Tree Inn',
      price: '$200',
      image_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/WelshCorgi.jpeg/220px-WelshCorgi.jpeg",
      location:{ address1: '3688 Bryan Ave'},
      rating: 5

    },
    attractions: [
      {
        name: "Attraction 1",
        image_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/WelshCorgi.jpeg/220px-WelshCorgi.jpeg",
        location:{ address1: 'Your house'},
        price: '$',
        rating: 5
      },

      {
        name: "Attraction 2",
        image_url:"http://www.ocscience.org/images/boardpics/michellexu.jpg",
        location:{ address1: 'Your room'},
        price: '$$',
        rating: 4.5
      }
    ]
},



{
  date: "6-17-2018",
  breakfast:{ id: 'UTbi-JP1n-ZYkwYQRrXANA',
  alias: 'philz-coffee-santa-monica',
  name: 'Philz Coffee',
  image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/CXT-GPLLcK-KCbp1lO3rNA/o.jpg',
  is_closed: false,
  url: 'https://www.yelp.com/biz/philz-coffee-santa-monica?adjust_creative=9nStoNo1xDXXIoiVGrIUZQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=9nStoNo1xDXXIoiVGrIUZQ',
  review_count: 1497,
  categories: [],
  rating: 4.5,
  coordinates: { latitude: 34.017699, longitude: -118.493718 },
  transactions: [],
  price: '$',
  location:
   { address1: '525 Santa Monica Blvd',
     address2: 'Ste 100',
     address3: '',
     city: 'Santa Monica',
     zip_code: '90401',
     country: 'US',
     state: 'CA',
     display_address:'' },
  phone: '+13104519500',
  display_phone: '(310) 451-9500',
  distance: 16612.496600199425 },

  lunch:{ id: 'rnjZCES3g4ujzduxuqQN3g',
    alias: 'house-roots-coffee-granada-hills-2',
    name: 'House Roots Coffee',
    image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/ABPGpgc56f6alO1D0VVAog/o.jpg',
    is_closed: false,
    url: 'https://www.yelp.com/biz/house-roots-coffee-granada-hills-2?adjust_creative=9nStoNo1xDXXIoiVGrIUZQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=9nStoNo1xDXXIoiVGrIUZQ',
    review_count: 225,
    categories: [],
    rating: 5,
    coordinates: { latitude: 34.2720549, longitude: -118.4843871 },
    transactions: [],
    price: '$',
    location:
     { address1: '16155 San Fernando Mission Blvd',
       address2: '',
       address3: null,
       city: 'Granada Hills',
       zip_code: '91344',
       country: 'US',
       state: 'CA',
       display_address: '' },
    phone: '',
    display_phone: '',
    distance: 27802.159955844036 },

    dinner: { id: 'Orw0H7VdkuRv_LG4M-eIfw',
    alias: 'the-coffee-gallery-altadena',
    name: 'The Coffee Gallery',
    image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/uqkd426yIZMR2g29iQeWSQ/o.jpg',
    is_closed: false,
    url: 'https://www.yelp.com/biz/the-coffee-gallery-altadena?adjust_creative=9nStoNo1xDXXIoiVGrIUZQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=9nStoNo1xDXXIoiVGrIUZQ',
    review_count: 335,
    categories: [ [Object], [Object], [Object] ],
    rating: 4,
    coordinates: { latitude: 34.1807327409801, longitude: -118.131874188773 },
    transactions: [],
    price: '$',
    location:
     { address1: '2029 Lake Ave',
       address2: '',
       address3: '',
       city: 'Altadena',
       zip_code: '91001',
       country: 'US',
       state: 'CA',
       display_address: [Array] },
    phone: '+16263987917',
    display_phone: '(626) 398-7917',
    distance: 21904.95496629093 },

    transportation:{
      name: 'Delta Airlines',
      price: "$1000",
      address: '62 Glen Arbor',

    },

    hotel:{
      name: 'Double Tree Inn',
      price: '$200',
      image_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/WelshCorgi.jpeg/220px-WelshCorgi.jpeg",
      location:{ address1: '3688 Bryan Ave'},
      rating: 5

    },
    attractions: [
      {
        name: "Attraction 1",
        image_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/WelshCorgi.jpeg/220px-WelshCorgi.jpeg",
        location:{ address1: 'Your house'},
        price: '$',
        rating: 5
      },

      {
        name: "Attraction 2",
        image_url:"http://www.ocscience.org/images/boardpics/michellexu.jpg",
        location:{ address1: 'Your room'},
        price: '$$',
        rating: 4.5
      }
    ]
}];


export default class End_display extends React.Component {

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
  };
  changeLocation = (val) => { this.setState({ location:val }); };
  changeBudget = (val) => { this.setState({ budget:val }); };
  changeInterest = (val) => { this.setState({ interest:val }); };
  changeTaste = (val) => { this.setState({ taste:val }); };
  changeStart_date = (val) => { this.setState({ start_date:val }); };
  changeEnd_date = (val) => { this.setState({ end_date:val }); };

  render() {
    
    //console.log(this.props.data);
    const data_list = this.props.data.itinerary.map(thing => 
      (<View>
      <Text style = {{fontSize:20, fontWeight: 'bold', marginTop:10, marginBottom:10, marginLeft:10}}>{thing.date}</Text>
      <Card full>
      <Card.Header
        title={thing.hotel.name}
        thumbStyle={{ width: 30, height: 30 }}
        thumb={thing.hotel.image_url}
        extra="Hotel"
      />
      <Card.Body>
        <View style={{ height: 15 }}>
          <Text style={{ marginLeft: 16 }}>{"Address: " + thing.hotel.location.address1}</Text>
        </View>
      </Card.Body>
      <Card.Footer content={"Price: " + thing.hotel.price} extra={"Rating: " + thing.hotel.rating} />
      </Card>
    
      <Card full>
      <Card.Header
        title={thing.breakfast.name}
        thumbStyle={{ width: 30, height: 30 }}
        thumb={thing.breakfast.image_url}
        extra="Breakfast"
      />
      <Card.Body>
        <View style={{ height: 15 }}>
          <Text style={{ marginLeft: 16 }}>{"Address: " + thing.breakfast.location.address1}</Text>
        </View>
      </Card.Body>
      <Card.Footer content={"Price: " + thing.breakfast.price} extra={"Rating: " + thing.breakfast.rating} />
      </Card>
    
      <Card full>
        <Card.Header
          title={thing.lunch.name}
          thumbStyle={{ width: 30, height: 30 }}
          thumb={thing.lunch.image_url}
          extra="Lunch"
        />
        <Card.Body>
          <View style={{ height: 15 }}>
            <Text style={{ marginLeft: 16 }}>{"Address: " + thing.lunch.location.address1}</Text>
          </View>
        </Card.Body>
        <Card.Footer content={"Price: " + thing.lunch.price} extra={"Rating: " + thing.lunch.rating} />
      </Card>
    
      <Card full>
        <Card.Header
          title={thing.dinner.name}
          thumbStyle={{ width: 30, height: 30 }}
          thumb={thing.dinner.image_url}
          extra="Dinner"
        />
        <Card.Body>
          <View style={{ height: 15 }}>
            <Text style={{ marginLeft: 16 }}>{"Address: " + thing.dinner.location.address1}</Text>
          </View>
        </Card.Body>
        <Card.Footer content={"Price: " + thing.dinner.price} extra={"Rating: " + thing.dinner.rating} />
      </Card>
      
    
    {thing.attractions.map(att =>
        <Card full>
        <Card.Header
          title={att.name}
          thumbStyle={{ width: 30, height: 30 }}
          thumb={att.image_url}
          extra="Attraction"
        />
        <Card.Body>
          <View style={{ height: 15 }}>
            <Text style={{ marginLeft: 16 }}>{"Address: " + att.location.address1}</Text>
          </View>
        </Card.Body>
        <Card.Footer content={"Price: " + att.price} extra={"Rating: " + att.rating} />
      </Card>
      )
    }
    </View>)
    
    );
    

    return (
      <ScrollView>
      <LocaleProvider locale={enUS}>
      <View style={{ paddingTop: 30 }}>
      <Text style= {{ textAlign: 'center', fontWeight: 'bold'}}>Total amount spent: $1432</Text>
        <WhiteSpace size="lg" />
        <View>
  <Card full>
  <Card.Header
    title={this.props.data.transportation.startAirport.name + " - " + this.props.data.transportation.endAirport.name + " roundtrip"}
    thumbStyle={{ width: 30, height: 30 }}
    thumb="http://www.readersdigest.ca/wp-content/uploads/2017/03/surprising-airplane-facts-plane-crashes.jpg"
    extra="Transportation"
  />
  <Card.Body>
    <View style={{ height: 15 }}>
      <Text style={{ marginLeft: 16 }}>{"Starting Address: " + this.props.data.transportation.startAirport.formatted_address}</Text>
      <Text style={{ marginLeft: 16 }}>{"Destination Address: " + this.props.data.transportation.endAirport.formatted_address}</Text>
    </View>
  </Card.Body>
  <Card.Footer content={"Price: " + this.props.data.transportation.price}  />
  </Card>

  </View>
        { data_list };
      </View>
      </LocaleProvider>
      </ScrollView> 
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
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});