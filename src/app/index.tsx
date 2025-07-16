import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { useEffect, useState } from "react";
import FechButton from "@/src/Components/FechButton";
import { IUser } from "@/src/interface/user.interface";

export default function Index() {
    const [users, setUsers] = useState<IUser[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const ReadUsers = async () => {
            try {
                const response = await fetch(
                    "https://api.jsonbin.io/v3/b/6876c18e2a92ba0befe7a72d",
                    {
                        headers: {
                            "X-Master-Key":
                                "$2a$10$fi1G/pWAoWakEB5uw3HLI.9IYWfsd7si3QkDyvtv2kag9HxuXfqJC",
                            "Content-Type": "application/json",
                        },
                    }
                );

                if (!response.ok) {
                    console.log("Error en la respuesta:", response.statusText);
                }

                const data = await response.json();
                setUsers([data.record]);
                setLoading(false);
            } catch (error) {
                console.log("ErrorDatos", error);
                setLoading(false);
            }
        };

        ReadUsers();
    }, []);


    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            {isLoading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <>
                    <FechButton text="Mostrar Datos"/>

                    <FlatList
                        data={users}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={{ marginBottom: 10 }}>
                                <Text>{item.email}</Text>
                                <Text>{item.id}</Text>
                                <Text></Text>
                            </View>
                        )}
                    />
                </>
            )}
        </View>
    );
}
