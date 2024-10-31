import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  SafeAreaView,
} from "react-native";

export default function App() {
  const imagenes = [
    {
      id: 1,
      url: "https://i.pinimg.com/564x/e3/ee/d4/e3eed4c2aa1bac40a274fb633388d836.jpg",
      descripcion:
        "The Bends is the second studio album by the English rock band Radiohead, released on 13 March 1995 by Parlophone.",
    },
    {
      id: 2,
      url: "https://i.pinimg.com/564x/9a/e0/89/9ae0893f5bb9f73d6b1dc7ba74a5dfda.jpg",
      descripcion:
        "Grace is the only studio album by the American singer-songwriter Jeff Buckley, released on August 15, 1994 in Europe and on August 23, 1994 in the United States by Columbia Records.",
    },
    {
      id: 3,
      url: "https://i.pinimg.com/564x/83/d6/df/83d6dfca53a99b7b403308cf86f22ae2.jpg",
      descripcion:
        "Californication is the seventh studio album by U.S. rock band Red Hot Chili Peppers, released on June 8, 1999, on Warner Bros. Records.",
    },

    {
      id: 4,
      url: "https://i.pinimg.com/564x/8e/83/8e/8e838e34b5f872351d43fb79b9281cae.jpg",
      descripcion:
        "The New Abnormal is the sixth studio album by American rock band the Strokes, released on April 10, 2020, through Cult and RCA Records.",
    },
    {
      id: 5,
      url: "https://i.pinimg.com/564x/48/20/84/482084c232410fe1cd6ccecfe6bc16ed.jpg",
      descripcion:
        "Definitely Maybe is the debut studio album by the English rock band Oasis, released on 29 August 1994 by Creation Records. ",
    },
    {
      id: 6,
      url: "https://i.pinimg.com/564x/0d/3e/3d/0d3e3de0341b88a459dd78f4a877acc7.jpg",
      descripcion:
        "Plastic Beach is the third studio album by British virtual band Gorillaz. It was released on 3 March 2010 by Parlophone internationally and by Virgin Records in the United States.",
    },
    {
      id: 7,
      url: "https://i.pinimg.com/564x/5a/af/9e/5aaf9e9ba64663dadb37493b617ba3e0.jpg",
      descripcion:
        "Melophobia is the third studio album by American rock band Cage the Elephant.",
    },
    {
      id: 8,
      url: "https://www.billboard.com/wp-content/uploads/2022/03/25.-David-Bowie-%E2%80%98Aladdin-Sane-1973-album-art-billboard-1240.jpg?w=1024",
      descripcion:
        "Aladdin Sane is the sixth studio album by the English musician David Bowie, released in the United Kingdom on 19 April 1973 through RCA Records. ",
    },
    {
      id: 9,
      url: "https://www.billboard.com/wp-content/uploads/2022/03/7.-Nirvana-%E2%80%98Nevermind-1991-album-art-billboard-1240.jpg?w=1024",
      descripcion:
        "Nevermind is the second studio album by the American rock band Nirvana, released on September 24, 1991, by DGC Records.",
    },
    {
      id: 10,
      url: "https://www.billboard.com/wp-content/uploads/2022/03/2.-The-Beatles-%E2%80%98Abbey-Road-1969-album-art-billboard-1240.jpg?w=1024",
      descripcion:
        "Abbey Road is the eleventh studio album by the English rock band the Beatles, released on 26 September 1969, by Apple Records. ",
    },
  ];

  const foto = ({ item }) => {
    return (
      <View style={styles.fotoContainer}>
        <Image style={styles.imagen} source={{ uri: item.url }} />
        <Text style={styles.descripcion}> {item.descripcion}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> Albums </Text>
      <FlatList
        data={imagenes}
        renderItem={foto}
        keyExtractor={(foto) => foto.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imagen: {
    width: 200,
    height: 200,
    margin: 30,
    marginTop: 60,
  },
  fotoContainer: {
    borderRadius: 20,
    backgroundColor: "black",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    margin: 15,
  },
  descripcion: {
    textAlign: "justify",
    color: "white",
    paddingTop: 0,
    padding: 30,
  },
  title: {
    fontSize: 80,
    fontWeight: "bold",
    textAlign: "left",
    alignSelf: "left",
    margin: 10,
    marginTop: 30,
  },
});
