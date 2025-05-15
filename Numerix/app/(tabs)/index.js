import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Star, Award, Zap } from 'lucide-react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

export default function HomeTab() {
  const lessons = [
    {
      id: '1',
      title: 'Números del 1-10',
      description: '¡Aprende a contar!',
      icon: Star,
      color: '#58CC02',
      level: 'Principiante',
      progress: 80,
    },
    {
      id: '2',
      title: 'Sumas Básicas',
      description: '¡Suma números pequeños!',
      icon: Award,
      color: '#FF9600',
      level: 'Principiante',
      progress: 40,
    },
    {
      id: '3',
      title: 'Restas Simples',
      description: '¡Aprende a restar!',
      icon: Zap,
      color: '#FF4B4B',
      level: 'Principiante',
      progress: 0,
      locked: true,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Animated.View entering={FadeInDown.delay(200)} style={styles.header}>
        <View style={styles.streakContainer}>
          <Zap size={24} color="#FF9600" />
          <Text style={styles.streakText}>¡5 días seguidos!</Text>
        </View>
        <Text style={styles.welcomeText}>¡Hola Juan! 👋</Text>
        <Text style={styles.subtitle}>¿Listo para aprender matemáticas?</Text>
      </Animated.View>

      <View style={styles.content}>
        {lessons.map((lesson, index) => {
          const Icon = lesson.icon;
          return (
            <Animated.View
              key={lesson.id}
              entering={FadeInUp.delay(200 * (index + 1))}
              style={styles.lessonCard}>
              <TouchableOpacity
                style={[
                  styles.lessonContent,
                  lesson.locked && styles.lockedLesson,
                ]}>
                <View style={[styles.iconContainer, { backgroundColor: lesson.color }]}>
                  <Icon color="#FFFFFF" size={24} />
                </View>
                <View style={styles.lessonInfo}>
                  <Text style={styles.lessonTitle}>{lesson.title}</Text>
                  <Text style={styles.lessonDescription}>{lesson.description}</Text>
                  <View style={styles.progressContainer}>
                    <View style={styles.progressBar}>
                      <View
                        style={[
                          styles.progressFill,
                          { width: `${lesson.progress}%`, backgroundColor: lesson.color },
                        ]}
                      />
                    </View>
                    <Text style={[styles.progressText, { color: lesson.color }]}>
                      {lesson.progress}%
                    </Text>
                  </View>
                </View>
                {lesson.locked && (
                  <View style={styles.lockOverlay}>
                    <Text style={styles.lockText}>🔒</Text>
                  </View>
                )}
              </TouchableOpacity>
            </Animated.View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  streakContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF5E5',
    padding: 10,
    borderRadius: 12,
    marginBottom: 16,
    alignSelf: 'flex-start',
  },
  streakText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 14,
    color: '#FF9600',
    marginLeft: 8,
  },
  welcomeText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 28,
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Nunito-Regular',
    fontSize: 18,
    color: '#666',
  },
  content: {
    padding: 20,
  },
  lessonCard: {
    marginBottom: 16,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  lessonContent: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  lessonInfo: {
    flex: 1,
  },
  lessonTitle: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    color: '#333',
    marginBottom: 4,
  },
  lessonDescription: {
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#F0F0F0',
    borderRadius: 4,
    marginRight: 8,
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  progressText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 14,
  },
  lockedLesson: {
    opacity: 0.7,
  },
  lockOverlay: {
    position: 'absolute',
    right: 16,
    top: '50%',
    transform: [{ translateY: -12 }],
  },
  lockText: {
    fontSize: 24,
  },
});