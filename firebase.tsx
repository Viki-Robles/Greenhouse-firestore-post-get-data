export default class FirebaseData {
db: any
initialise(){
const app = {
all your config data such as
apiKey:
authDomain:
x….
x…
x…
x…}
admin.initializeApp(app);
this.db = admin.firestore();

async post(data: any) {
const docRef = this.db.collection(‘yourCollection’).doc(‘yourcollectionID’);
await docRef.set(data);
}}
