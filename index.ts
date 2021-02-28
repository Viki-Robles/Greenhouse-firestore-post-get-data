import FirebaseData from “./xxx”;
import GreenhouseData from ‘./xxx’;
async function main() {
const dfFirebase = new FirebaseData();
const dfGreenhouse = new GreenhouseData();
dfFirebase.initialize();
const datafromGH = await dfGreenhouse.getdata();
const participantsDataId= participantsDataId.data
for(let key in participantsDataId) {
//this again depends on the type of your data — array/ object
const participantDataId = participantsDataId[key].id;
//this is the function that you use to post on the firestore
dfFirebase.post({
myCollection: participantDataId
})
}
}
main();
