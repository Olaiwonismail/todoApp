import React ,{ useState }from 'react';
import { View,StyleSheet, FlatList,Text, TouchableOpacity,TouchableWithoutFeedback, TextInput, Keyboard ,StatusBar} from 'react-native';
import{MaterialIcons} from '@expo/vector-icons'
export default function App() {
    const [todos,setTodos] = useState(
        [
            {task : 'buy fuel',id : '1'},
            {task : 'Eat',id : '2'},
            {task : 'Wash plates',id : '3'},
            {task : 'play games',id : '4'}
        ]
    )

    const [text,updateText] = useState('')

    function addNewText() {
        setTodos(
            [
                {task: text ,id : Math.random()*40},     
                ...todos
            ]
        )
        updateText('')
    }

    function deleteThis(todo) {
        setTodos((items)=>{
            return items.filter((item)=> item.id != todo.id )
        }
        )
    }

    return(
       
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
    
      

            <View style = {styles.container}>

                <Text style={styles.header} > TODO APP</Text>
                <View style={{flex:1}}>
                    <View style = {styles.addNew}>
                        <TextInput
                        style = {styles.addText}
                        placeholder='Add a new task'
                        value = {text}
                        onChangeText={(item)=>
                            updateText(item)
                        }
                        />
                        <TouchableOpacity style={styles.addButton} onPress={addNewText}>
                            <Text style={{fontSize:17,paddingLeft:8,}}>Add</Text>
                        </TouchableOpacity>
                    </View>
                    <View  style = {{flex:1}}>
                    <FlatList
                        data={todos}
                        
                        renderItem={({item})=>(
                            <View style={styles.listBox}>
                                <TouchableOpacity>
                                    <Text style={styles.listItems}>
                                        {item.task}
                                    </Text>
                                </TouchableOpacity>
                                <MaterialIcons name='delete' size={25} color={'#f08080'} 
                                                style = {{right:20,position:'absolute',alignSelf:'center'}}
                                                onPress={()=>deleteThis(item)}
                                    />
                            </View>    
                            )
                        }
                    />
                    </View>
                </View>
            </View>
       </TouchableWithoutFeedback>
       
        
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:50,
        paddingHorizontal:30,
        paddingBottom:10,
        flex:1

    },
    header:{
        padding:15,
        borderColor:'white',
        // borderRadius:30,
        backgroundColor:'#FF8c00',
        alignSelf:'center',
        textAlign:'center',
        fontSize: 20,
        fontWeight:'600',
        width:500,
        marginBottom:30,
       
    },
    listBox:{
        flexDirection:'row',
        marginTop:20,
        borderStyle:'solid',
        borderWidth:1,
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:10,
        flex:1
    },
    listItems:{
        fontSize:15,
    },
    addNew:{
        flexDirection:'row',
        marginBottom:40
    },
    addText:{
        borderWidth:1,
        padding:10,
        paddingLeft:20,
        fontSize:17,
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        width:240,
        marginRight:10
    },
    addButton:{
        width:50,
        backgroundColor:'#FF8c00',
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
        justifyContent:'center'
    }
})