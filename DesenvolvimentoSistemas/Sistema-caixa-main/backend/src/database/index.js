const { initializeApp } = require("firebase/app");
const { getDatabase, ref, onValue, set } = require('firebase/database');


class Database {
    constructor() {
        this.app = initializeApp({
            apiKey: "AIzaSyC9yNb_l5wzO_wzrOxx6nNjfVNUZbvxdj0",
            authDomain: "sistema-caixa-a2780.firebaseapp.com",
            databaseURL: "https://sistema-caixa-a2780-default-rtdb.firebaseio.com",
            projectId: "sistema-caixa-a2780",
            storageBucket: "sistema-caixa-a2780.appspot.com",
            messagingSenderId: "536114449217",
            appId: "1:536114449217:web:be4d620a3659daab31afc0"
        });

        this.data = [];

        onValue(ref(getDatabase(), "/movimento"), async snap => {
            let val = snap.val();

            if (!Array.isArray(val))
                throw new Error("O dados da database não foram identificados como array!");

            this.data = val;
        });
    }

    getData() {
        return this.data;
    }

    addData(data) {
        this.data.push(data);

        new Promise(resolve => {
            resolve(set(ref(getDatabase(), "/movimento"), this.data));
        });
    }
}


module.exports = Database;