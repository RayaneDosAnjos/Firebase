
const firebaseConfig = {
  apiKey: "AIzaSyDeWhajIpxlOdCUNJk9tcclfjBuMKwbH8w",
  authDomain: "colegio-216f7.firebaseapp.com",
  databaseURL: "https://colegio-216f7-default-rtdb.firebaseio.com",
  projectId: "colegio-216f7",
  storageBucket: "colegio-216f7.appspot.com",
  messagingSenderId: "481460650531",
  appId: "1:481460650531:web:a3c70b9b1853f2d2f7e796",
  measurementId: "G-7WBVDT7TD1"
};
firebase.initializeApp(firebaseConfig)

    let db = firebase.firestore()
    //db.collection("turmaA").get()
      //                      .then((snapshot)=>{
        //                    snapshot.forEach((doc)=>{
          //                  console.log(doc.data())
            //                })
    //})

  //let docRef = db.collection("turmaA").doc("PhmbtzyLjJBenF7WMClt")
  //docRef.get().then((doc)=>{
    //console.log(doc.data())
  //})

  db.collection("turmaA").where("nome", "==", "Max Rosa").get()
  .then(snapshot=>{
    snapshot.forEach((doc)=>{
      let aluno = doc.data()
      console.log(aluno.nome)
    })
    
  })
