const joinWaitlist = () => {
  signInAnonymously(auth)
    .then((userCredential) => {
      const user = userCredential.user;
      const userName = document.getElementById('user').value;

      // Add the user to the waitlist array in Firebase
      const waitlistRef = ref(database, 'waitlist');
      push(waitlistRef, { name: userName, uid: user.uid });
    })
    .catch((error) => {
      console.error("Error signing in anonymously:", error.message);
    });
};

// Attach the function to the "Join Waitlist" button click event
document.getElementById('joiningButton').addEventListener('click', joinWaitlist);