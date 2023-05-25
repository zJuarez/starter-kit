# Visualización de datos con realidad aumentada

### Cliente: Blue People

### Equipo de desarrollo: Tech People

| Name                    | Email                                                               | Github                                                       | Role      |
| ----------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------ | --------- |
| Mauricio Juarez | [mji2000.741@gmail.com](mailto:mji2000.741@gmail.com)                       | [@zJuarez](https://github.com/<Juarez)                         | Developer |
| Einar Lopez   | [A01656259@tec.mx](mailto:A01656259@tec.mx)         | [@EinarLop](https://github.com/EinarLop)       |  Developer |
| Miguel Castro  | [A01283439@tec.mx](mailto:A01283439@tec.mx)         | [Mike-Castro@](https://github.com/Mike-Castro)                   | Developer |
| Antonio Diaz  | [andiram2010@gmail.com](mailto:andiram2010@gmail.com@gmail.com)         | [@StrictName](https://github.com/StrictName)                   | PM |
| Citlalli Alonzo  | [A01275834@tec.mx](mailto:A01275834@tec.mx)         | [@Citlalli27](https://github.com/Citlalli27)                   | Scrum Master |

### Descripción breve del proyecto:

Aplicación móvil AR para visualizar información asociada a pokemones en forma de elementos de realidad aumentada. Usamos react native con firebase para la base de datos y autentificacion y la libreria de AR viro react.

<img src="https://github.com/zJuarez/starter-kit/assets/44931871/14915a8a-629f-4b1e-84cf-a94018357576" width = "200"/>
<img src="https://github.com/zJuarez/starter-kit/assets/44931871/0d34a4cf-f39c-4ce9-b945-d16ba8c86d5f" width = "200"/>
<img src="https://github.com/zJuarez/starter-kit/assets/44931871/218db3bd-c0b0-45d4-8edf-28974e74a783" width ="200" />

<img src="https://github.com/zJuarez/starter-kit/assets/44931871/2bb099b3-c36b-4306-b0f0-d2960aefed74" width = "200"/>


## Instrucciones para correr:

0. Requisitos previos
- Tener el setup de react native y un dispositvo fisico al cual poder cargar codigo --> https://reactnative.dev/docs/environment-setup
- Tener una cuenta en Firebase, crear un proyecto y dentro crear una instancia de base de datos en Firestore --> https://firebase.google.com/docs/firestore/quickstart
- Agregar Auth al proyecto creado https://firebase.google.com/docs/auth/web/password-auth

1. Clonar este repo

```
 git clone https://github.com/zJurez/starter-kit.git
```

2. Matar los procesos en el puerto (opcional)

```
kill -9 $(lsof -ti:8081)
```

3. Instalar dependencias del proyecto

```
npm i --legacy-peer-deps
```

4. Firebase Setup (Android) https://rnfirebase.io/#2-android-setup

- En la consola de firebase, añadir una nueva aplicacion de Android y escribe los detalles del proyecto. El "Android package name" debe ser el mismo de 
`/android/app/src/main/AndroidManifest.xml` de este proyecto.

- Descargar el `google-services.json` file y ponerlo en `/android/app/google-services.json`

4. Firebase Setup (IOS)

- Descargar `GoogleService-Info.plist` y meterlo en `/ios`


5. Añadir credenciales de firebase en config file

En `firebaseconfig.js` llenar el objeto `const firebaseConfig` de esta forma:

```
 const firebaseConfig = {
    apiKey: XXXXXX,
    type: XXXXXX,
    projectId: XXXX,
    private_key_id: XXXXXX,
    private_key: XXXXX,
    client_email: XXXXX,
    client_id: XXXXX,
    auth_uri: XXXXX,
    token_uri: XXXXX,
    auth_provider_x509_cert_url: XXXXXX,
    client_x509_cert_url: XXXXXX,
  };
```
6. Instalar las dependencias de pod

```
npx pod install
```

7. Correr aplicacion (Android)

```
npx react-native run-android
```

7. Correr aplicacion (IOS)

```
npx react-native run-ios
```
