import { View, Text, Image } from "react-native";

export default function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
       <Image
        source={{ uri: 'https://i0.wp.com/ovicio.com.br/wp-content/uploads/2023/11/20231114-image-1.png?resize=555%2C555&ssl=1' }}
        style={{ width: 200, height: 200  , borderRadius: 100 }}
      />
      <Text>Franklin</Text>
    </View>
  );
}