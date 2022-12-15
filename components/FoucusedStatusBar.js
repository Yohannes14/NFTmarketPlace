import { useIsFocused } from "@react-navigation/native";
import { StatusBar, Text, View } from "react-native"

const FoucusedStatusBar = ({props}) => {
    const isFoucused = useIsFocused();
    return isFoucused ? <StatusBar  animated ={true} {...props}/> : null;
  return (
    <View>
    <Text>FoucusedStatusBar</Text>
    </View>
  )
}

export default FoucusedStatusBar;