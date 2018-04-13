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
 TouchableOpacity,
 Modal
} from 'react-native'



const {width, height} = Dimensions.get('window')

import { Actions } from 'react-native-router-flux';
import ImagePicker from "react-native-image-picker"





class Detail extends Component {
 constructor(props){
 super(props)
 this.state = {
    editVisible:false,
    key:this.props.item.key,
    name:this.props.item.name,
    description:this.props.item.description,
//    image:this.props.item.image,
    imageHeight:"",
    imageWidth:"",
    imagePath:"",
    imageuri:""

 }
 }


 setEditVisible(){
  this.setState({editVisible:true})
 }

  goBack(){
     var data = {
        key:this.props.item.key,
        name:this.state.name,
        description: this.state.description ,
        image:this.state.imagePath ? this.state.imagePath :this.props.item.image

     }
     this.props.getBackData(data);
     Actions.pop()
 }

 editImage(){
    var options = {
        title: 'Pick Image',
        // customButtons: [
        //   {name: 'fb', title: 'Choose Photo from Facebook'},
        // ],
        storageOptions: {
          skipBackup: true,
          path: 'images'
        }
      };

    ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
      
        if (response.didCancel) {
          console.log('User cancelled image picker');
        }
        else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        }
        else {
         
      
          // You can also display the image using data:
          // let source = { uri: 'data:image/jpeg;base64,' + response.data };
      
          this.setState({
            imagePath: response.uri
          });
        }
      });

 }





showDetail(){
    if(this.state.editVisible==false){
        return(
            <View style={{backgroundColor:"grey",justifyContent:"center",alignItems:"center"}}>
            <Image style={{width:"100%", height:height/1.5}} source={{uri: this.props.item.image}}/>
            <Text style={{fontSize:20,fontWeight:"bold",padding:20}}>{this.props.item.name}</Text>
            <Text style={{fontSize:12,fontWeight:"bold",padding:8}}>{this.props.item.description} </Text>

            <TouchableOpacity
             onPress = {
                  () => this.setEditVisible()
               }>
               <Text style={{fontSize:15,fontWeight:"bold",padding:20,backgroundColor:"#9a73ef"}}> Edit </Text>
            </TouchableOpacity>
            </View> 
        )
    }

    else if(this.state.editVisible==true){
        return(
            <View style = {styles.container}>
          {this.state.imagePath ? <Image style={{width:width/1.2, height:300,margin:20 }} source={{uri: this.state.imagePath}}/> :<Image style={{width:"80%", height:300 }} source={{uri: this.props.item.image}}/>}
            <TouchableHighlight onPress={this.editImage.bind(this)} style={{backgroundColor:"#9a73ef",margin:10}}>
                <Text style={{padding:10,margin:10}}>Edit Photo</Text>
            </TouchableHighlight>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               value={this.state.name}
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {(value)=>{this.setState({name:value})}}/>
            
            <TextInput style = {styles.input}
            
               underlineColorAndroid = "transparent"
               value={this.state.description}
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {(value)=>this.setState({description:value})}/>
               
              <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.goBack()
               }>
               <Text style = {styles.submitButtonText}> Update </Text>
            </TouchableOpacity>
         </View>
        )
    }
}
 
 
 render(){
 return (
 <View style={{flex:1}}>

{this.showDetail()}

 </View>
 )
 }
}

const styles = StyleSheet.create({
 container: {
 flex:1,
 backgroundColor: "grey",
 justifyContent: 'center',
 alignItems:"center"
 },
 input: {
     padding:10,
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
    width:width/1.3
 },
 submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
 },
 submitButtonText:{
    color: 'white',
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center"
 }
})


export default Detail;