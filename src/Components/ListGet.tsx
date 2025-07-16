import {FlatList, FlatListProps, SectionListRenderItem} from "react-native";
import {JSXElement} from "@babel/types";

interface Props  extends FlatListProps{
    date: JSXElement;
    renderItem: ()=> void;
}

const ListGet = ()=> {
    return (
        <FlatList
            data={}
            renderItem={}
            />
    )
}