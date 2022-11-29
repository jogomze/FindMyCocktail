
import {
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import {ref, update} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js"

signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...

    // save log in details into real time database
    var lgDate = new Date();
    update(ref(database, 'users/' + user.uid), {
        last_login: lgDate,
    })
        .then(() => {
            // Data saved successfully!
            alert('user logged in successfully');

        })
        .catch((error) => {
            // The write failed...
            alert(error);
        });
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
});