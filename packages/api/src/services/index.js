export const credentialsDecoderByBasicAuth = basicAuth => {
  const [, encodedCredentials] = basicAuth.split(' ');

  const decodedCredential = Buffer.from(
    encodedCredentials,
    'base64'
  ).toString();

  const [email, password] = decodedCredential.split(':');

  return { email, password };
};
