import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#196dae',
  },
  input: {
    backgroundColor: '#f3f3f3',
    padding: 15,
    marginHorizontal: 40,
    marginVertical: 5,
    borderColor: '#aaa',
    borderRadius: 4,
    borderWidth: 1,
  },
  btn: {
    backgroundColor: '#cd5182',
    padding: 15,
    marginHorizontal: 40,
    marginVertical: 30,
    borderRadius: 4,
  },
  btnText: {
    textAlign: "center",
    color: '#fff',
    textTransform: "uppercase",
    fontWeight: "bold"
  },
  error: {
    color: '#fbbf4c',
    textAlign: "center",
    marginBottom: 15
  },
  logo: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: '#fff',
    marginBottom: 20
  }
})

export default styles;
