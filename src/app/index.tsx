import { Text, View } from "react-native";
import {useEffect, useState} from "react";

export default function Index() {

    const [dateUsers, setDateUsers] = useState()

    useEffect(() => {
        const ApiDate = async () => {
          const response =  await fetch('https://api.jsonbin.io/v3/b/6876b5312a92ba0befe79fe5', {
              method: 'GET',
              headers:{
                  'X-Master-Key': '$2a$10$fi1G/pWAoWakEB5uw3HLI.9IYWfsd7si3QkDyvtv2kag9HxuXfqJC',
                  'content-type': 'application/json'
              }
          })
            const date = await response.json()
            setDateUsers(date)
        }
        ApiDate();
    }, []);



  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className=''>{JSON.stringify(dateUsers,null,2)}</Text>
    </View>
  );
}
