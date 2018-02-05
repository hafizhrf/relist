import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { Icon, Container, Content } from 'native-base';

var axios = require('axios');

export default class Active extends Component{

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         todo: []
    //     }
    //     this.deleteTodo = this.deleteTodo.bind(this);
    // }

    // componentDidMount(){
    //     this.getTodos();
    // }

    // getTodos(){
    //     var todoID = parseInt(req.params.id);
    //     axios.get('http://localhost:212/todo/:id' + todoID).then(res => {
    //         this.setState({todo: res.data});
    //         console.log(this.setState.todo);
    //     });
    // }

    render(){
        return(
            <Container>
                <Content style={styles.form}>
                    <ScrollView>
                        <Text style={styles.data}>Randy</Text>
                        <Text style={styles.data}>Hafizh</Text>
                        <Text style={styles.data}>Simon</Text>
                        <Text style={styles.data}>Khautal</Text>
                        <Text style={styles.data}>Alvin</Text>
                        <Text style={styles.data}>Adrian</Text>
                        <Text style={styles.data}>Mamang</Text>
                        <Text style={styles.data}>Permen</Text>
                        <Text style={styles.data}>Adrian</Text>
                        <Text style={styles.data}>Mamang</Text>
                        <Text style={styles.data}>Permen</Text>
                    </ScrollView>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    form: {
        flex: 1,
        backgroundColor: 'rgb(46,56,58)',
        paddingVertical: 10
    },

    data: {
        color: '#fff',
        backgroundColor: 'rgb(14,18,21)',
        padding: 20,
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 10,
        flexDirection: 'row'
    }
});