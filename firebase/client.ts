import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyD6TiRVUDddXqb8t89z5a1C6FD0ylPRZCw',
    authDomain: 'prepwise-d98df.firebaseapp.com',
    projectId: 'prepwise-d98df',
    storageBucket: 'prepwise-d98df.firebasestorage.app',
    messagingSenderId: '437627381943',
    appId: '1:437627381943:web:6ddba2e6840a12b1944532',
    measurementId: 'G-WSVY91XL4Q',
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
