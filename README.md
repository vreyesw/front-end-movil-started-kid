# Prepare to generate proyect

node -v
npm install -g cordova ionic

# Start proyect

ionic serve (open on browser)

ionic cordova build android (build apk android)
ionic cordova build ios (build apk ios)

documentation say: 
ionic cordova run android --prod --release
# or
ionic cordova build android --prod --release

but use:
ionic cordova run android device (build and run on device)

#note: use android studio to emulate movil and generate key with keytool


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

