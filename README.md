# Prepare to generate proyect

node -v
npm install -g cordova ionic

# Start proyect

ionic serve (open on browser)

ionic cordova build android (build apk android)
ionic cordova build ios (build apk ios)

ionic cordova run android --prod --release
or
ionic cordova build android --prod --release

#note: use android studio to emulate movil and generate key with keytool (open project an run on device). Also use Chrome Dev Tools (ionic cordova run android —-device)

# Sign apk

1-. build apk with command for android "ionic cordova build android --prod --release"
2-. generate key with command "keytool -genkey -v -keystore geo-movil-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias geo-movil-alias"
3-. copy app-release-unsigned.apk (from /geo-movil/platforms/android/app/build/outputs/apk/release) and paste on path where is key
4-. run command "jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore geo-movil-release-key.jks app-release-unsigned.apk geo-movil-alias"
5-. zipalign -v 4 app-release-unsigned.apk geo-movil.apk

# Geo-movil line command (generate proyect)

ionic start geo-movil 

cd geo-movil
ionic cordova platform add android
ionic cordova platform add ios

# Geo-movil add angual material

ng add @angular/material
ng generate module app-material --flat

# Geo-movil add login

ng generate page login

# Geo-movil add leaflet and geocoder

npm install leaflet --save
npm install @types/leaflet

ionic cordova plugin add cordova-plugin-nativegeocoder
npm install @ionic-native/native-geocoder

ng generate page view-map

# Geo-movil add storage

ionic cordova plugin add cordova-sqlite-storage
npm install --save @ionic/storage

# Geo-movil add android permission

ionic cordova plugin add cordova-plugin-android-permissions
npm install @ionic-native/android-permissions

Note: it's necessary to review AndroidManifest.xml because on some occasions duplicate user permissions(geo-movil\platforms\android\app\src\main\AndroidManifest.xml) after build apk
