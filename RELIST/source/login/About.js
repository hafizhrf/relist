import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, BackHandler, StatusBar, Animated, Easing } from 'react-native';
import { Container, Tab, Tabs, Content, Card, CardItem, Body, Button, Icon, Fab, Drawer, Item, Header, Left, Input, Footer, FooterTab, H3 } from 'native-base';
import { Actions } from 'react-native-router-flux';
import SideBar from '../RootPage';


export default class Index extends Component{
    static navigationOptions = {
        header: null,
        gesturesEnabled: false
    }
    

    // constructor (props) {
    //     super(props)
    //   }
    
    //   componentDidMount () {
    //     BackHandler.addEventListener('hardwareBackPress', () => this.backAndroid()) // Listen for the hardware back button on Android to be pressed
    //   }
    
    //   componentWillUnmount () {
    //     BackHandler.removeEventListener('hardwareBackPress', () => this.backAndroid()) // Remove listener
    //   }
    
    //   backAndroid () {

    //     if (Actions.state.index === 0) {
    //         return false;
    //     }

    //     Actions.pop() // Return to previous screen
    //     return true // Needed so BackHandler knows that you are overriding the default action and that it should not close the app
    //   }
    

    add(){
        Actions.add()
    }

    closeDrawer() {
        this._drawer._root.close()
    }
    
    openDrawer() {
        this._drawer._root.open()
    }
    

    state = {
        simon: true,
        randy: true,
        hapis: true,
        animated:new Animated.Value(1),
        animatedd:new Animated.Value(1),
        animateddd:new Animated.Value(1)
        
    }

    _onPress() {
        const newState = !this.state.simon;
        this.animatedButton(newState)
        this.setState({ simon: newState })
        this.props.onStateChange && this.props.onStateChange(newState)
    }

    animatedButton(newState){
        this.state.animated.setValue(newState?0:1)
        Animated.timing(this.state.animated,{
            toValue:newState?1:0,
            duration:500,
        }).start();
    }

    _onPresse() {
        const newState = !this.state.randy;
        this.animatedButtonn(newState)
        this.setState({ randy: newState })
        this.props.onStateChange && this.props.onStateChange(newState)
    }

    animatedButtonn(newState){
        this.state.animatedd.setValue(newState?0:1)
        Animated.timing(this.state.animatedd,{
            toValue:newState?1:0,
            duration:500,
        }).start();
    }

    _onPressee() {
            const newState = !this.state.hapis;
            this.animatedButtone(newState)
            this.setState({ hapis: newState })
            this.props.onStateChange && this.props.onStateChange(newState)
        }

        animatedButtone(newState){
            this.state.animateddd.setValue(newState?0:1)
            Animated.timing(this.state.animateddd,{
                toValue:newState?1:0,
                duration:500,
            }).start();
        }



    render(){
        const { simon, randy, hapis, animated, animatedd , animateddd} = this.state; 
        const textValu = hapis ? "Hafizh Rifqi" : "Backend";
        const textValue = simon ? "Simon Aditia" : "Frontend";
        const textValuee = randy ? "Randy Wardana" : "Frontend";
        // const buttonBge = togglee ? "dodgerblue" : 'green';
        const textColor = simon ? "white" : 'rgb(224, 247, 250)';

        return(
            <Drawer ref={(ref) => { this._drawer = ref; }} content={<SideBar navigator={this._navigator} />} onClose={() => this.closeDrawer()} >
                <View style={{ flex: 1, backgroundColor: "rgb(46,56,58)", justifyContent: "center", alignItems:'center'}}>
                <View style={{ marginTop: 20 }} />
                    <View style={{ flex:1, marginTop: 8 , marginBottom:10 }}>
                        <Image style={{  width:240, height:130}} source={require('../image/iconnn.png')} />
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            onPress={() => this._onPressee()}
                            style={{
                                backgroundColor: "rgb(0, 150, 136)",
                                margin: 3 , flex: 1, height: 50,
                                justifyContent: 'center',
                                borderRadius: 10,
                                borderColor: 'black', borderWidth: 1
                            }}
                            >
                            <Animated.View style={{ position:'absolute', left:0, top:0, right:0, bottom:0, flex:1, backgroundColor: 'rgb(0, 131, 136)', borderRadius: 8, justifyContent: 'center',
                                transform:[
                                    {
                                        scale: animateddd.interpolate({
                                            inputRange:[0,1],
                                            outputRange:[0,1]
                                        })
                                    }
                                ]
                            }}>
                                
                            </Animated.View>
                            <Text style={{
                                    backgroundColor: 'transparent',
                                    color: textColor, textAlign: 'center', fontSize: 16
                                }}>{textValu}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            onPress={() => this._onPresse()}
                            style={{
                                backgroundColor: "rgb(0, 150, 136)",
                                margin: 3 , flex: 1, height: 50,
                                justifyContent: 'center',
                                borderRadius: 10,
                                borderColor: 'black', borderWidth: 1
                            }}
                            >
                            <Animated.View style={{ position:'absolute', left:0, top:0, right:0, bottom:0, flex:1, backgroundColor: 'rgb(0, 131, 136)', borderRadius: 8, justifyContent: 'center',
                                transform:[
                                    {
                                        scale: animatedd.interpolate({
                                            inputRange:[0,1],
                                            outputRange:[0,1]
                                        })
                                    }
                                ]
                            }}>
                                
                            </Animated.View>
                            <Text style={{
                                    backgroundColor: 'transparent',
                                    color: textColor, textAlign: 'center', fontSize: 16
                                }}>{textValuee}</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            onPress={() => this._onPress()}
                            style={{
                                backgroundColor: "rgb(0, 150, 136)",
                                margin: 3 , flex: 1, height: 50,
                                justifyContent: 'center',
                                borderRadius: 10,
                                borderColor: 'black', borderWidth: 1
                            }}
                            >
                            <Animated.View style={{ position:'absolute', left:0, top:0, right:0, bottom:0, flex:1, backgroundColor: 'rgb(0, 131, 136)', borderRadius: 8, justifyContent: 'center',
                                transform:[
                                    {
                                        scale: animated.interpolate({
                                            inputRange:[0,1],
                                            outputRange:[0,1]
                                        })
                                    }
                                ]
                            }}>
                                
                            </Animated.View>
                            <Text style={{
                                    backgroundColor: 'transparent',
                                    color: textColor, textAlign: 'center', fontSize: 16
                                }}>{textValue}</Text>
                        </TouchableOpacity>
                    </View>



                    <View style={{ height:30 }}/>
                    <View style={{ marginTop:20 }}>
                        <H3 style={{ color:'white', justifyContent: "center" }}>Create your todo</H3>
                    </View>
                    <View style={{ marginTop: 13 }}>
                        <Button style={{ backgroundColor: "rgb(0, 131, 136)", alignSelf: "center"}}
                            onPress={()=> this.openDrawer()} >
                            <Text style={{ color: "white", bottom: 6, marginTop: 5, justifyContent: "center", alignSelf: "center" }}>  Lets Go!  </Text>
                        </Button>
                    </View>


                    <H3 style={{ marginTop: 50, color: '#ffffff', alignItems: 'center'}}>Powered BY</H3>
                    <View style={{ marginTop: 15 }} />
                </View>
                <Footer>
					<FooterTab>
                        <Button full active transparent style={{backgroundColor: 'rgb(46,56,58)'}}>
                            <Image style={{ height:28, width:30}} source={require('../image/stack.png')} />
                                <Text style={{ color: 'white'}}>StackOverflow</Text>
                        </Button>
                        <Button full active transparent style={{backgroundColor: 'rgb(46,56,58)'}}>
                            <Image style={{ height:28, width:25}} source={require('../image/nativebase.png')} />
                                <Text style={{ color: 'white'}}>NativeBase</Text>
                        </Button>
                        <Button full active transparent style={{backgroundColor: 'rgb(46,56,58)'}}>
                            <Image style={{ height:28, width:25}} source={require('../image/react.png')} />
                                <Text style={{ color: 'white'}}>React Native</Text>
                        </Button>
                        <Button full active transparent style={{backgroundColor: 'rgb(46,56,58)'}}>
                            <Image style={{ height:28, width:25}} source={require('../image/GitHub.png')} />
                                <Text style={{ color: 'white'}}>GitHub</Text>
                        </Button>
                    </FooterTab>
				    </Footer>
            </Drawer>
        );  
    }
}

