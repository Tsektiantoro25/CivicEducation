/* eslint-disable no-undef */
import React from 'react';
import {View, Text} from 'native-base';
import styles from './styles';
import YouTube from 'react-native-youtube';
import {ScrollView} from 'react-native-gesture-handler';

export default class Component extends React.Component {
  videoPlayer;
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      duration: 0,
      isFullScreen: false,
      isLoading: true,
      paused: false,
      video: true,
      title: '',
      desc: '',
      imageLink: '',
      videoLink: '',
      subMateri: [],
      isReady: false,
      status: '',
      quality: '',
      index: '',
    };
  }
  componentWillMount() {
    this._getparams();
  }
  _getparams = async () => {
    const replacelink = result.data.videoLink.slice(32, 43);
    // console.log(replacelink);
    this.setState({
      videoLink: replacelink,
    });
  };
  _onPress = () => {};
  onSeek = seek => {
    this.videoPlayer.seek(seek);
  };

  onPaused = playerState => {
    this.setState({
      paused: !this.state.paused,
      playerState,
    });
  };
  onLoad = data => this.setState({duration: data.duration, isLoading: false});

  onLoadStart = () => this.setState({isLoading: true});

  exitFullScreen = () => {};

  enterFullScreen = () => {};

  onFullScreen = () => this.setState({isFullScreen: true});

  onSeeking = currentTime => this.setState({currentTime});
  render() {
    return (
      <View>
        <ScrollView>
          <Text style={styles.bab1}>BAB 1</Text>
          <Text style={styles.bab}>Apa itu Demokrasi? </Text>
          <View style={styles.video}>
            <YouTube
              apiKey="AIzaSyBS0lGkVTXGptGyTKbpPaajvkRyxt3wQEI"
              videoId="klXYKItE8vk" // The YouTube video ID
              // fullscreen // control whether the video should play in fullscreen or inline
              loop // control whether the video should loop when ended
              onReady={() => this.setState({isReady: true})}
              onChangeState={e => this.setState({status: e.state})}
              onChangeQuality={e => this.setState({quality: e.quality})}
              onError={e => this.setState({error: e.error})}
              style={styles.yt}
            />
          </View>
          <Text style={styles.bab}>
            Pengertian Demokrasi Menurut Para Ahli{' '}
          </Text>
          <Text style={styles.title}>Abraham Lincoln</Text>
          <Text style={styles.Text}>
            Abraham Lincoln menyatakan bahwa demokrasi merupakan suatu sistem
            pemerintahan yang diselenggarakan dari rakyat, oleh rakyat, dan
            untuk rakyat. Dari pengertian tersebut bisa disimpulkan bahwa rakyat
            merupakan pemegang kekuasaan tertinggi dalam suatu pemerintahan,
            dimana masing-masing dari mereka memiliki hak dalam memperoleh
            kesempatan serta hak dalam bersuara yang sama dalam upaya mengatur
            kebijakan pemerintahan. Dalam sistem ini, keputusan diambil
            berdasarkan hasil suara terbanyak.
          </Text>
          <Text style={styles.title}>Menurut H. Harris Soche </Text>
          <Text style={styles.Text}>
            Demokrasi merupakan suatu bentuk pemerintahan rakyat. Artinya rakyat
            atau orang banyak merupakan pemegang kekuasaan dalam pemerintahan.
            Mereka memiliki hak untuk mengatur, mempertahankan, serta melindungi
            diri mereka dari adanya paksaan dari wakil-wakil mereka, yaitu
            orang-orang atau badan yang diserahi wewenang untuk memerintah.
          </Text>
          <Text style={styles.title}>Menurut Hannry B. Mayo</Text>
          <Text style={styles.Text}>
            Dalam demokrasi suatu kebijaksanaan umum ditentukan atas dasar
            mayoritas oleh wakil-wakil yang secara efektif diawasi oleh rakyat
            melalui berbagai macam pemilihan yang dilakukan berdasarkan pada
            prinsip kesamaan politik serta diselenggarakan dalam suasana dimana
            kebebasan politik terjadi.
          </Text>
          <Text style={styles.title}>Makna Demokrasi</Text>
          <Text style={styles.Textlast}>
            Demokrasi pertama kali diperkenalkan sejak abad ke-5 sebelum masehi
            di Athena, Yunani. Demokrasi berasal dari kata Demos yang memiliki
            arti rakyat, dan kratos atau cratein yang memiliki arti
            pemerintahan. Dengan begitu dapat diartikan bahwa demokrasi
            merupakan pemerintahan rakyat, atau juga dapat disebut sebagai
            pemerintahan dari rakyat, oleh rakyat, dan untuk rakyat.
          </Text>
        </ScrollView>
      </View>
    );
  }
}
