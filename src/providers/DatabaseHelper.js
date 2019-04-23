import * as firebase from 'firebase/app';
import 'firebase/firestore';

export default class DatabaseHelper {

  /**
   * Create the database helper instance that only talks really to firebase
   * @constructor
   */
  constructor() {
    if (firebase.apps.length === 0) {
      firebase.initializeApp({
        apiKey: "AIzaSyDzKnDx9w4K0yHcTC8q4lEdBUgRNNLjIyw",
        authDomain: "pigilwin-vue-training.firebaseapp.com",
        databaseURL: "https://pigilwin-vue-training.firebaseio.com",
        projectId: "pigilwin-vue-training",
        storageBucket: "pigilwin-vue-training.appspot.com",
        messagingSenderId: "929379097749"
      });
    }
    this._db = firebase.firestore();
  }

  /**
   * Add a person to the store
   *
   * @param {string} firstname
   * @param {string} lastname
   * @param {int} age
   * @param {int} location
   * @return {Promise<firebase.firestore.DocumentReference>}
   */
  addPerson (firstname, lastname, age, location) {
    const id = this._db.collection('people').doc().id;
    return this._db.collection('people').doc(id).set({
      firstname,
      lastname,
      age,
      location
    });
  }

  /**
   * Update the person on the db
   * @param {string} id
   * @param {string} firstname
   * @param {string} lastname
   * @param {int} age
   * @param {int} location
   * @return {Promise<void>}
   */
  updatePerson (id, firstname, lastname, age, location) {
    return this._db.collection('people').doc(id).set({
      firstname,
      lastname,
      age,
      location
    });
  }

  /**
   * Get the data back from firebase
   * @return {Promise<firebase.firestore.DocumentData[]>}
   */
  async getData () {
    const snapshot = await this._db.collection('people').get();
    return snapshot.docs.map((doc) => {
      let document = doc.data();
      document.id = doc.id;
      return document;
    });
  }
}

