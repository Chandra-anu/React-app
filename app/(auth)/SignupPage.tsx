// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';

// interface SignupPageProps {
//   onNavigateToLogin: () => void;
// }

// interface FormData {
//   email: string;
//   password: string;
//   confirmPassword: string;
// }

// interface Errors {
//   email?: string;
//   password?: string;
//   confirmPassword?: string;
// }

// const SignupPage: React.FC<SignupPageProps> = ({ onNavigateToLogin }) => {
//   const [formData, setFormData] = useState<FormData>({
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const [errors, setErrors] = useState<Errors>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);

//   const validateEmail = (email: string): boolean => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const validatePassword = (password: string): boolean => {
//     return password.length >= 8;
//   };

//   const handleInputChange = (name: keyof FormData, value: string) => {
//     setFormData({
//       ...formData,
//       [name]: value
//     });

//     if (errors[name]) {
//       setErrors({
//         ...errors,
//         [name]: undefined
//       });
//     }
//   };

//   const handleSubmit = () => {
//     const newErrors: Errors = {};

//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     } else if (!validateEmail(formData.email)) {
//       newErrors.email = 'Please enter a valid email address';
//     }

//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     } else if (!validatePassword(formData.password)) {
//       newErrors.password = 'Password must be at least 8 characters long';
//     }

//     if (!formData.confirmPassword) {
//       newErrors.confirmPassword = 'Please confirm your password';
//     } else if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       setIsSubmitting(true);
//       setTimeout(() => {
//         Alert.alert('Signup successful!');
//         setIsSubmitting(false);
//         setFormData({ email: '', password: '', confirmPassword: '' });
//       }, 1000);
//     }
//   };

//   return (
//     <View style={styles.signupContainer}>
//       <View style={styles.logoSection}>
//         <View style={styles.logoContainer}>
//           <Image source={require('./image/logo.png')} style={styles.logoImage} />
//         </View>
//       </View>

//       <View style={styles.formSection}>
//         <View style={styles.signupHeader}>
//           <Text style={styles.headerTitle}>Welcome Sign Up System</Text>
//           <Text style={styles.headerSubtitle}>Your gateway to seamless transactions and easy payments.</Text>
//         </View>

//         <View style={styles.signupForm}>
//           <View style={styles.formGroup}>
//             <Text style={styles.label}>Email Address</Text>
//             <TextInput
//               style={[styles.input, errors.email && styles.errorInput]}
//               value={formData.email}
//               onChangeText={(value) => handleInputChange('email', value)}
//               placeholder="Enter your email"
//               placeholderTextColor="#FFFFFF"
//               keyboardType="email-address"
//               autoCapitalize="none"
//             />
//             {errors.email && <Text style={styles.errorMessage}>{errors.email}</Text>}
//           </View>

//           <View style={styles.formGroup}>
//             <Text style={styles.label}>Password</Text>
//             <TextInput
//               style={[styles.input, errors.password && styles.errorInput]}
//               value={formData.password}
//               onChangeText={(value) => handleInputChange('password', value)}
//               placeholder="Create a password (min. 8 characters)"
//               placeholderTextColor="#FFFFFF"
//               secureTextEntry
//             />
//             {errors.password && <Text style={styles.errorMessage}>{errors.password}</Text>}
//           </View>

//           <View style={styles.formGroup}>
//             <Text style={styles.label}>Confirm Password</Text>
//             <TextInput
//               style={[styles.input, errors.confirmPassword && styles.errorInput]}
//               value={formData.confirmPassword}
//               onChangeText={(value) => handleInputChange('confirmPassword', value)}
//               placeholder="Confirm your password"
//               placeholderTextColor="#FFFFFF"
//               secureTextEntry
//             />
//             {errors.confirmPassword && <Text style={styles.errorMessage}>{errors.confirmPassword}</Text>}
//           </View>

//           <View style={styles.formFooter}>
//             <View style={styles.rememberSigninRow}>
//               <TouchableOpacity style={styles.rememberMe} onPress={() => setRememberMe(!rememberMe)}>
//                 <View style={[styles.checkbox, rememberMe && styles.checkedCheckbox]} />
//                 <Text style={styles.rememberMeText}>Remember me</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={onNavigateToLogin}>
//                 <Text style={styles.signinLink}>Sign In</Text>
//               </TouchableOpacity>
//             </View>
//           </View>

//           <TouchableOpacity
//             style={[styles.signupButton, isSubmitting && styles.disabledButton]}
//             onPress={handleSubmit}
//             disabled={isSubmitting}
//           >
//             <Text style={styles.buttonText}>{isSubmitting ? 'Creating Account...' : 'Sign Up'}</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   signupContainer: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     backgroundColor: '#1E3BA3',
//     paddingHorizontal: 40,
//     paddingVertical: 60,
//   },
//   logoSection: {
//     alignItems: 'center',
//     paddingTop: 20,
//   },
//   logoContainer: {
//     alignItems: 'center',
//   },
//   logoImage: {
//     width: 120,
//     height: 120,
//     resizeMode: 'contain',
//   },
//   formSection: {
//     width: '100%',
//     maxWidth: 420,
//     marginTop: 120,
//   },
//   signupHeader: {
//     marginBottom: 40,
//   },
//   headerTitle: {
//     color: '#FFFFFF',
//     fontSize: 32,
//     fontWeight: '700',
//     marginBottom: 12,
//     letterSpacing: -0.5,
//   },
//   headerSubtitle: {
//     color: '#FFFFFF',
//     fontSize: 20,
//     opacity: 0.9,
//   },
//   signupForm: {
//     width: '100%',
//   },
//   formGroup: {
//     marginBottom: 24,
//   },
//   label: {
//     color: '#FFFFFF',
//     fontWeight: '600',
//     fontSize: 16,
//     letterSpacing: 0.5,
//     marginBottom: 12,
//   },
//   input: {
//     padding: 18,
//     borderWidth: 2,
//     borderColor: 'rgba(30, 59, 163, 0.2)',
//     borderRadius: 6,
//     fontSize: 16,
//     backgroundColor: '#E6E1FAA3',
//     color: '#333',
//   },
//   errorInput: {
//     borderColor: '#dc3545',
//   },
//   errorMessage: {
//     color: '#dc3545',
//     fontSize: 13,
//     fontWeight: '600',
//     marginTop: 4,
//   },
//   formFooter: {
//     marginTop: 0,
//   },
//   rememberSigninRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   rememberMe: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   checkbox: {
//     width: 16,
//     height: 16,
//     borderWidth: 1,
//     borderColor: '#FFFFFF',
//     marginRight: 8,
//   },
//   checkedCheckbox: {
//     backgroundColor: '#FFFFFF',
//   },
//   rememberMeText: {
//     color: '#FFFFFF',
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   signinLink: {
//     color: '#FFFFFF',
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   signupButton: {
//     backgroundColor: '#FFFFFF',
//     padding: 18,
//     borderRadius: 6,
//     alignItems: 'center',
//     marginTop: 16,
//   },
//   disabledButton: {
//     opacity: 0.7,
//   },
//   buttonText: {
//     color: '#000000',
//     fontSize: 18,
//     fontWeight: '600',
//   },
// });

// export default SignupPage;
