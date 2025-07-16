import {Pressable, PressableProps, Text, View} from "react-native";

interface Props extends PressableProps{
    text?: string;
}

const FechButton = ({text,...props}:Props) => {
    return (
        <View>
            <Pressable className='bg-blue-600 p-3 rounded-md text-white'>
                <Text>{text}</Text>
            </Pressable>
        </View>

    )
}

export default FechButton;