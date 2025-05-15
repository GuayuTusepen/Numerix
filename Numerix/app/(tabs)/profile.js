import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Settings, Star, Zap, Trophy, Target } from 'lucide-react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function ProfileTab() {
  const stats = [
    { id: '1', title: 'Ejercicios', value: '127', icon: Target, color: '#58CC02' },
    { id: '2', title: 'Racha', value: '5 días', icon: Zap, color: '#FF9600' },
    { id: '3', title: 'Puntos', value: '240', icon: Star, color: '#FFD700' },
  ];

  const achievements = [
    { id: '1', title: 'Suma Básica', progress: 80, color: '#58CC02' },
    { id: '2', title: 'Números 1-10', progress: 100, color: '#FF9600' },
    { id: '3', title: 'Restas', progress: 20, color: '#FF4B4B' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Animated.View entering={FadeInDown.delay(200)} style={styles.header}>
        <View style={styles.headerTop}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/3755511/pexels-photo-3755511.jpeg?auto=compress&cs=tinysrgb&w=200',
            }}
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.settingsButton}>
            <Settings size={24} color="#666" />
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>Juan Pérez</Text>
        <Text style={styles.info}>4to Grado • 9 años</Text>
        <View style={styles.badgeContainer}>
          <View style={styles.badge}>
            <Trophy size={16} color="#FFD700" />
            <Text style={styles.badgeText}>Principiante</Text>
          </View>
        </View>
      </Animated.View>

      <View style={styles.statsGrid}>
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Animated.View
              key={stat.id}
              entering={FadeInDown.delay(300 + index * 100)}
              style={styles.statCard}>
              <Icon size={24} color={stat.color} />
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statTitle}>{stat.title}</Text>
            </Animated.View>
          );
        })}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Progreso por Tema</Text>
        {achievements.map((achievement, index) => (
          <Animated.View
            key={achievement.id}
            entering={FadeInDown.delay(400 + index * 100)}
            style={styles.progressCard}>
            <View style={styles.progressHeader}>
              <Text style={styles.progressTitle}>{achievement.title}</Text>
              <Text style={[styles.progressPercent, { color: achievement.color }]}>
                {achievement.progress}%
              </Text>
            </View>
            <View style={styles.progressBar}>
              <View
                style={[
                  styles.progressFill,
                  { width: `${achievement.progress}%`, backgroundColor: achievement.color },
                ]}
              />
            </View>
          </Animated.View>
        ))}
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
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTop: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#58CC02',
  },
  settingsButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 8,
  },
  name: {
    fontFamily: 'Nunito-Bold',
    fontSize: 24,
    color: '#333',
    marginBottom: 4,
  },
  info: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    color: '#666',
    marginBottom: 12,
  },
  badgeContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF8E7',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginHorizontal: 4,
  },
  badgeText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 14,
    color: '#FFB800',
    marginLeft: 6,
  },
  statsGrid: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
  },
  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    margin: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statValue: {
    fontFamily: 'Nunito-Bold',
    fontSize: 20,
    color: '#333',
    marginVertical: 8,
  },
  statTitle: {
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: '#666',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontFamily: 'Nunito-Bold',
    fontSize: 20,
    color: '#333',
    marginBottom: 16,
  },
  progressCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  progressTitle: {
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    color: '#333',
  },
  progressPercent: {
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#F0F0F0',
    borderRadius: 4,
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
});