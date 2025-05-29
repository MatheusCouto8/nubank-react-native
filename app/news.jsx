import { View, Text, Image } from "react-native";

export default function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Notícias</Text>
        <Text> GTA 5 Enhanced está sendo bastante criticado no Steam</Text>
       <Image
        source={{ uri: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2025/03/12/ss_f2e70b5823510daa062293ff0b03821e1dee2d37-1920x1080-sl3fy149rjoi.jpg' }}
        style={{ width: 500, height: 300  , borderRadius: 0 }}
      />
      <Text>Lançado no início de março com novos recursos e melhorias gráficas, GTA 5 Enhanced não está agradando uma parcela significativa dos jogadores no Steam. <br></br>Atualmente o jogo tem apenas 54% de avaliações positivas, levando em conta 19.980 análises feitas pelos usuários.<br></br>

A situação fez com que o game se tornasse o pior GTA na opinião dos usuários no Steam, sendo mais criticado do que GTA 3 - The Definitive Edition, que tem 66% de avaliações positivas.<br></br>

</Text>
    </View>
  );
}