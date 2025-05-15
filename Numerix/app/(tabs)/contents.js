import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Trophy, Star, Target, Zap } from 'lucide-react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

const achievements = [
  {
    id: '1',
    title: '¡Primera Lección!',
    description: 'Completaste tu primera lección',
    icon: Star,
    color: '#FFD700',
    earned: true,
  },
  {
    id: '2',
    title: 'Racha de 5 días',
    description: '¡5 días seguidos aprendiendo!',
    icon: Zap,
    color: '#FF9600',
    earned: true,
  },
  {
    id: '3',
    title: 'Maestro de Sumas',
    description: 'Completa todas las lecciones de suma',
    icon: Trophy,
    color: '#58CC02',
    earned: false,
    progress: 40,
  },
  {
    id: '4',
    title: 'Experto en Números',
    description: 'Aprende todos los números del 1 al 100',
    icon: Target,
    color: '#FF4B4B',
    earned: false,
    progress: 20,
  },
];

export default function AchievementsTab() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Trophy size={24} color="#FFD700" />
            <Text style={styles.statNumber}>2</Text>
            <Text style={styles.statLabel}>Logros</Text>
          </View>
          <View style={styles.statItem}>
            <Zap size={24} color="#FF9600" />
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Días</Text>
          </View>
          <View style={styles.statItem}>
            <Star size={24} color="#58CC02" />
            <Text style={styles.statNumber}>240</Text>
            <Text style={styles.statLabel}>Puntos</Text>
          </View>
        </View>
      </View>

      <View style={styles.content}>
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <Animated.View
              key={achievement.id}
              entering={FadeInDown.delay(200 * index)}
              style={[styles.achievementCard, !achievement.earned && styles.unearned]}>
              <View style={[styles.iconContainer, { backgroundColor: achievement.color }]}>
                <Icon color="#FFFFFF" size={24} />
              </View>
              <View style={styles.achievementInfo}>
                <Text style={styles.achievementTitle}>{achievement.title}</Text>
                <Text style={styles.achievementDescription}>{achievement.description}</Text>
                {!achievement.earned && achievement.progress && (
                  <View style={styles.progressContainer}>
                    <View style={styles.progressBar}>
                      <View
                        style={[
                          styles.progressFill,
                          { width: `${achievement.progress}%`, backgroundColor: achievement.color },
                        ]}
                      />
                    </View>
                    <Text style={[styles.progressText, { color: achievement.color }]}>
                      {achievement.progress}%
                    </Text>
                  </View>
                )}
              </View>
              {achievement.earned && (
                <View style={styles.earnedBadge}>
                  <Text style={styles.earnedText}>✨</Text>
                </View>
              )}
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
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontFamily: 'Nunito-Bold',
    fontSize: 24,
    color: '#333',
    marginVertical: 8,
  },
  statLabel: {
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: '#666',
  },
  content: {
    padding: 20,
  },
  achievementCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  unearned: {
    opacity: 0.7,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  achievementInfo: {
    flex: 1,
  },
  achievementTitle: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    color: '#333',
    marginBottom: 4,
  },
  achievementDescription: {
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
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
  earnedBadge: {
    marginLeft: 16,
  },
  earnedText: {
    fontSize: 24,
  },
});