export const validateFile = file => {
  const supportedTypes = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/gif',
    'image/x-icon',
  ]
  return supportedTypes.includes(file.type)
}
