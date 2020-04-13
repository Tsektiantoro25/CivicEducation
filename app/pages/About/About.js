import React from 'react';
import {View, Text, Image, Linking, TouchableOpacity} from 'react-native';
import {
  Container,
  Body,
  Right,
  Left,
  Button,
  Icon,
  Header,
  Content,
} from 'native-base';
import styles from './styles';
import FONT from '../../style/style';
import IMAGES from '../../configs/images';

const About = props => {
  const goBack = () => {
    props.navigation.goBack();
  };
  return (
    <Container>
      <Header style={styles.header}>
        <Left>
          <Button transparent onPress={() => goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body />
        <Right />
      </Header>
      <Content style={styles.container}>
        <Text style={[styles.title, FONT.FONT_REGULAR]}>Our Amazing Team</Text>
        <View style={styles.card}>
          <Image source={IMAGES.V} style={styles.picture} />
          <View style={styles.content}>
            <Text style={[FONT.FONT_CONTENT, styles.role]}>
              Tim Leader & Designer
            </Text>
            <Text style={[FONT.FONT_REGULAR, styles.name]}>
              Vangga Fibo Eprila
            </Text>
            <View style={styles.sosmedContainerdua}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL('http://twitter.com/nirwanatimur')
                }>
                <Image style={styles.sosmed} source={IMAGES.TWT} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL('http://m.facebook.com/vangga.fiboeprila')
                }>
                <Image style={styles.sosmeddua} source={IMAGES.FB} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <Image source={IMAGES.A} style={styles.picture} />
          <View style={styles.content}>
            <Text style={[FONT.FONT_CONTENT, styles.role]}>
              Mobile Developer
            </Text>
            <Text style={[FONT.FONT_REGULAR, styles.name]}>
              Tri Aji Sektiantoro
            </Text>
            <View style={styles.sosmedContainerdua}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL('http://instagram.com/seijurosama')
                }>
                <Image style={styles.sosmed} source={IMAGES.IG} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL('http://m.facebook.com/tsektiantoro25')
                }>
                <Image style={styles.sosmeddua} source={IMAGES.FB} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    'http://linkedin.com/in/tri-aji-sektiantoro-60b1b4178/',
                  )
                }>
                <Image style={styles.sosmeddua} source={IMAGES.LD} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <Image source={IMAGES.WD} style={styles.picture} />
          <View style={styles.content}>
            <Text style={[FONT.FONT_CONTENT, styles.role]}>UI/UX Designer</Text>
            <Text style={[FONT.FONT_REGULAR, styles.name]}>
              Widya Oktaviani
            </Text>
            <View style={styles.sosmedContainersatu}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL('http://instagram.com/oktavianiwdy')
                }>
                <Image style={styles.sosmed} source={IMAGES.IG} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    'https://www.linkedin.com/in/widya-oktaviani-46ab35190',
                  )
                }>
                <Image style={styles.sosmeddua} source={IMAGES.LD} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <Image source={IMAGES.R} style={styles.picture} />
          <View style={styles.content}>
            <Text style={[FONT.FONT_CONTENT, styles.role]}>System Analist</Text>
            <Text style={[FONT.FONT_REGULAR, styles.name]}>Restu Pakerti</Text>
            <View style={styles.sosmedContainersatu}>
              <TouchableOpacity
                onPress={() => Linking.openURL('http://twitter.com/hzrzn')}>
                <Image style={styles.sosmed} source={IMAGES.TWT} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL('http://instagram.com/pakertirestu')
                }>
                <Image style={styles.sosmeddua} source={IMAGES.IG} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    'https://www.linkedin.com/in/restu-pakerti-468b35190',
                  )
                }>
                <Image style={styles.sosmeddua} source={IMAGES.LD} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <Image source={IMAGES.WJ} style={styles.picture} />
          <View style={styles.content}>
            <Text style={[FONT.FONT_CONTENT, styles.role]}>
              Back End Developer
            </Text>
            <Text style={[FONT.FONT_REGULAR, styles.name]}>
              Wijil Puspitajati
            </Text>
            <View style={styles.sosmedContainersatu}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL('http://instagram.com/puspitajati23_')
                }>
                <Image style={styles.sosmed} source={IMAGES.IG} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    'https://www.linkedin.com/in/wijil-puspitajati-b335081a4',
                  )
                }>
                <Image style={styles.sosmeddua} source={IMAGES.LD} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default About;
