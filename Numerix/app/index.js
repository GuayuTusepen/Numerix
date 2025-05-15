import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function WelcomeScreen() {
  return (
    <LinearGradient colors={['#6C63FF', '#3B3B98']} style={styles.container}>
      <View style={styles.content}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1632571401005-458e9d244591?q=80&w=200&h=200&fit=crop',
          }}
          style={styles.logo}
        />
        <Text style={styles.title}>Numerix</Text>
        <Text style={styles.description}>
          Tu compañero de aprendizaje perfecto. Aprende matemáticas de forma divertida y efectiva.
        </Text>
        <Link href="/auth" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Comenzar</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  title: {
    fontFamily: 'Nunito-Bold',
    fontSize: 48,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  description: {
    fontFamily: 'Nunito-Regular',
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 20,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 30,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    color: '#6C63FF',
  },
});