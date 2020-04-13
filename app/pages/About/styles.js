import {StyleSheet} from 'react-native';
import {CONSTANS} from '../../configs';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1C7690',
  },
  title: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  card: {
    padding: 16,
    backgroundColor: '#E8F1F4',
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
  },
  picture: {
    width: 92,
    height: 92,
    borderRadius: 1000,
  },
  container: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  content: {
    marginLeft: 20,
  },
  name: {
    marginTop: 4,
    marginBottom: 9,
    fontSize: 25,
  },
  role: {
    fontSize: 15,
    fontFamily: CONSTANS.FONT_REGULAR,
    color: '#022539',
  },
  quote: {
    marginTop: 3,
    fontWeight: 'bold',
  },
  sosmed: {
    marginTop: 8,
    width: 50,
    height: 50,
  },
  sosmedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  sosmedContainersatu: {
    flexDirection: 'row',
  },
  sosmedContainerdua: {
    flexDirection: 'row',
  },
  sosmeddua: {
    marginTop: 8,
    width: 50,
    height: 50,
    marginLeft: 10,
  },
});

export default styles;
