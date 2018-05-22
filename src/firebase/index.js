import firebase from 'firebase/app';
import 'firebase/database';
import config from '../config';

const app = firebase.initializeApp(config.firebase);

export default app.database();