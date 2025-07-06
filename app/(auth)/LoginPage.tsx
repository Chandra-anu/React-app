import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

const LoginPage: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.loginContainer}>
      <View style={styles.logoSection}>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/images/lemonpay 4.png')} style={styles.logoImage} />
        </View>
      </View>

      <View style={styles.formSection}>
        <View style={styles.loginHeader}>
          <Text style={styles.headerTitle}>Welcome Login System</Text>
          <Text style={styles.headerSubtitle}>Your gateway to seamless transactions and easy payments.</Text>
        </View>

        <View style={styles.loginForm}>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="mahadev@lemonpay.tech"
              placeholderTextColor="#FFFFFF"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Min 8 characters"
              placeholderTextColor="#FFFFFF"
              secureTextEntry
            />
          </View>

          <View style={styles.formFooter}>
            <View style={styles.rememberSignupRow}>
              <View style={styles.rememberMe}>
                <View style={styles.checkbox} />
                <Text style={styles.rememberMeText}>Remember me</Text>
              </View>
              <TouchableOpacity onPress={() => router.push('/(auth)/SignupPage' as any)}>
                <Text style={styles.signupLink}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => router.replace('/(tabs)/services')}
          >
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#1E3BA3',
    paddingHorizontal: 40,
    paddingVertical: 60,
  },
  logoSection: {
    alignItems: 'center',
    paddingTop: 20,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  formSection: {
    width: '100%',
    maxWidth: 420,
    marginTop: 120,
  },
  loginHeader: {
    marginBottom: 40,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 12,
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    color: '#FFFFFF',
    fontSize: 20,
    opacity: 0.9,
  },
  loginForm: {
    width: '100%',
  },
  formGroup: {
    marginBottom: 24,
  },
  label: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
    letterSpacing: 0.5,
    marginBottom: 12,
  },
  input: {
    padding: 18,
    borderWidth: 2,
    borderColor: 'rgba(30, 59, 163, 0.2)',
    borderRadius: 6,
    fontSize: 16,
    backgroundColor: '#E6E1FAA3',
    color: '#333',
  },
  errorInput: {
    borderColor: '#dc3545',
  },
  errorMessage: {
    color: '#dc3545',
    fontSize: 13,
    fontWeight: '600',
    marginTop: 4,
  },
  formFooter: {
    marginTop: 0,
  },
  rememberSignupRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    marginRight: 8,
  },
  checkedCheckbox: {
    backgroundColor: '#FFFFFF',
  },
  rememberMeText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  signupLink: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  loginButton: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 16,
  },
  disabledButton: {
    opacity: 0.7,
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default LoginPage;

