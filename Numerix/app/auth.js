import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { router } from 'expo-router';

export default function AuthScreen() {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    grade: '',
    school: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'El nombre es requerido';
    }
    if (!formData.age.trim()) {
      newErrors.age = 'La edad es requerida';
    } else if (isNaN(formData.age) || parseInt(formData.age) < 6 || parseInt(formData.age) > 18) {
      newErrors.age = 'La edad debe estar entre 6 y 18 años';
    }
    if (!formData.grade.trim()) {
      newErrors.grade = 'El grado es requerido';
    }
    if (!formData.school.trim()) {
      newErrors.school = 'El colegio es requerido';
    }
    return newErrors;
  };

  const handleRegister = () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    router.replace('/(tabs)');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.title}>Crear Cuenta</Text>
          <Text style={styles.subtitle}>Ingresa tus datos para comenzar</Text>

          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Nombre Completo</Text>
              <TextInput
                style={[styles.input, errors.fullName && styles.inputError]}
                value={formData.fullName}
                onChangeText={(text) => {
                  setFormData({ ...formData, fullName: text });
                  setErrors({ ...errors, fullName: null });
                }}
                placeholder="Ingresa tu nombre completo"
              />
              {errors.fullName && <Text style={styles.errorText}>{errors.fullName}</Text>}
              }
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Edad</Text>
              <TextInput
                style={[styles.input, errors.age && styles.inputError]}
                value={formData.age}
                onChangeText={(text) => {
                  setFormData({ ...formData, age: text });
                  setErrors({ ...errors, age: null });
                }}
                placeholder="Ingresa tu edad"
                keyboardType="numeric"
                maxLength={2}
              />
              {errors.age && <Text style={styles.errorText}>{errors.age}</Text>}
              }
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Grado</Text>
              <TextInput
                style={[styles.input, errors.grade && styles.inputError]}
                value={formData.grade}
                onChangeText={(text) => {
                  setFormData({ ...formData, grade: text });
                  setErrors({ ...errors, grade: null });
                }}
                placeholder="Ingresa tu grado"
              />
              {errors.grade && <Text style={styles.errorText}>{errors.grade}</Text>}
              }
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Colegio</Text>
              <TextInput
                style={[styles.input, errors.school && styles.inputError]}
                value={formData.school}
                onChangeText={(text) => {
                  setFormData({ ...formData, school: text });
                  setErrors({ ...errors, school: null });
                }}
                placeholder="Ingresa el nombre de tu colegio"
              />
              {errors.school && <Text style={styles.errorText}>{errors.school}</Text>}
              }
            </View>

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={styles.buttonText}>Crear Cuenta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontFamily: 'Nunito-Bold',
    fontSize: 32,
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  form: {
    gap: 20,
  },
  inputContainer: {
    gap: 8,
  },
  label: {
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    color: '#333',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  inputError: {
    borderColor: '#FF3B30',
  },
  errorText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: '#FF3B30',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#6C63FF',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontFamily: 'Nunito-Bold',
    color: '#FFFFFF',
    fontSize: 18,
  },
});