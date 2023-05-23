import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
firebaseConfig.db = db;

export const auth = getAuth(app);
export default firebaseConfig;
