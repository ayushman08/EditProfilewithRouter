import React, {Component} from 'react'

import {
 View,
 Text,
 StyleSheet,
 TouchableHighlight,
 TextInput,
 Dimensions,
 FlatList,
 ScrollView,
 Image,
 Alert,
 ImageBackground,
 TouchableWithoutFeedback,
 Modal
} from 'react-native'



const {width, height} = Dimensions.get('window')

import { Actions } from 'react-native-router-flux';




class HomeListItem extends Component {

 passItem(item){
  this.props.getItem(item)
  }

render() {   
return (
<TouchableWithoutFeedback onPress={()=>this.passItem(this.props.item)}>
<View style={{backgroundColor:"white",justifyContent:"center",alignItems:"center",marginTop:15,marginLeft:15,marginRight:15 ,height:270,width:width/1.1}}>
<Image style={{width: width/1.3, height:200,margin:10 }} source={{uri: this.props.item.image}}/>
<Text style={{fontSize:20,fontWeight:"bold"}}>{this.props.item.name}</Text>
<Text style={{fontSize:12,fontWeight:"bold"}}>{this.props.item.description} </Text>
</View>
</TouchableWithoutFeedback>
);
}
}



var flatlistdata = [
    {
    key: 0,
    name:'Suits',
    image: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/2432.jpg',
    description:"Hello1",
    price:"140"
    },
    {
    key: 1,
    name:'Modern Family',
    image: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/628.jpg',
    description:"Hello2",
    price:"100"
    },
    {
    key: 2,
    name:'The Flash',
    image: 'https://static.tvmaze.com/uploads/images/medium_portrait/83/209955.jpg',
    description:"Hello3",
    price:"50"
    },
    {
     key: 3,
        name:'Dyanamic',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/2432.jpg',
        description:"Hello4",
        price:"140"
        },
        {
        key: 4,
        name:'Healthy',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/628.jpg',
        description:"Hello5",
        price:"100"
        },
        {
        key: 5,
        name:'The Flash',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/2432.jpg',
        description:"Hello7",
        price:"50"
        }
    ]


class Home extends Component {
 constructor(props){
 super(props)
 this.state = {
 item:"",
 getObjectBack:""
 }
 }



 

getBackData(data){
  this.setState({getObjectBack:data})

}


 navigateDetail(item){
 Actions.detail({item , getBackData : this.getBackData.bind(this) }) 
 }


 
 
 render(){

    if(!this.state.getObjectBack== "")
        {
         flatlistdata[this.state.getObjectBack.key]= this.state.getObjectBack
    }
    
           
     
 return (
 <View style={styles.container}>

 <ScrollView>
 <FlatList 
 vertical
 style={{marginHorizontal: 5}}
 data={flatlistdata}
 renderItem={({item, index})=>{
 return (
 <HomeListItem item={item} index={index}   getItem={(value)=>{this.navigateDetail(value)}}>
 </HomeListItem>);
 //this.setState({getObjectBack:value})
 //getBackData={(value)=>{}}
 }}
 />
 </ScrollView>

 </View>
 )
 }
}

const styles = StyleSheet.create({
 container: {
 flex:1,
 backgroundColor: "grey"
 }
})


export default Home;