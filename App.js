import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView } from 'react-native';
import {Ionicons} from '@expo/vector-icons'

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Text style={{
            fontSize: 25,
            fontWeight: "bold",
            marginTop: 20
          }}>Edit Profile</Text>
          <Image style={{
            height: 200,
            width: 200,
            borderRadius: 999,
            marginTop: 20
          }} source={{ uri: "https://images.unsplash.com/photo-1558227108-83a15ddbbb15?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" }} />
        </View>
        <View style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}> 
          <Ionicons style={{
            marginTop: -40,
            marginLeft: 100,
            backgroundColor: "red",
            padding: 5,
            borderRadius: 999
          }} name="camera" size={30} color="#FFF" />
        </View>
        <View style={{
          marginTop: 30,
          marginHorizontal: 20,
          borderBottomWidth: 1.5,
          paddingBottom: 20,
          borderBottomColor: "gray"
        }}>
          <View style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row"
          }}>
            <Text style={{
              color: "gray"
            }}>Username</Text>
            <Text>Duncan Kipkemoi</Text>
          </View>
        </View>
        <View style={{
          marginTop: 30,
          marginHorizontal: 20,
          borderBottomWidth: 1.5,
          paddingBottom: 20,
          borderBottomColor: "gray"
        }}>
          <View style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row"
          }}>
            <Text style={{
              color: "gray"
            }}>Email</Text>
            <Text>duncanii414@gmail.com</Text>
          </View>
        </View>
        <View style={{
          marginTop: 30,
          marginHorizontal: 20,
          borderBottomWidth: 1.5,
          paddingBottom: 20,
          borderBottomColor: "gray"
        }}>
          <View style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row"
          }}>
            <Text style={{
              color: "gray"
            }}>Phone</Text>
            <Text>+254769084353</Text>
          </View>
        </View>
        <View style={{
          marginTop: 30,
          marginHorizontal: 20,
          borderBottomWidth: 1.5,
          paddingBottom: 20,
          borderBottomColor: "gray"
        }}>
          <View style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row"
          }}>
            <Text style={{
              color: "gray"
            }}>Date of birth</Text>
            <Text>04/12/2001</Text>
          </View>
        </View>
        <View style={{
          marginTop: 30,
          marginHorizontal: 20,
          borderBottomWidth: 1.5,
          paddingBottom: 20,
          borderBottomColor: "gray"
        }}>
          <View style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row"
          }}>
            <Text style={{
              color: "gray"
            }}>Address</Text>
            <Text>123 Royal Street, New York</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
