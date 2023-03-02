
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
        //                    snapshot.forEach((doc)=>{    //Lendo documentos
          //                  console.log(doc.data())
            //                })
    //})

  //let docRef = db.collection("turmaA").doc("PhmbtzyLjJBenF7WMClt")
  //docRef.get().then((doc)=>{
    //console.log(doc.data())
  //})

  //db.collection("turmaA").where("nome", "==", "Max Rosa").get()
  //.then(snapshot=>{
    //snapshot.forEach((doc)=>{                              //Selecionando melhor os documentos
      //let aluno = doc.data()
      //console.log(aluno.nome)
    //})
  //})

 // const TURMA = "turmaA"

  /*db.collection(TURMA).add({
      nome:"Marcos",
      notas: {nota1:9.6, nota2:7.5},
      sobrenome: "Santos"                               //adicionando
  }).then((doc)=>{
    console.log("Documento inserido com sucesso:", doc)
  }).catch(error=>{
    console.log(error)
  })*/


/*db.collection(TURMA).doc("AlunoNovo").set(
  {
    nome: "Mariana",
    sobrenome: "Santos",
    notas:{nota1:7,nota2:5},                           //adicionando e modificando
  }
).then((doc)=>{
  console.log("Documento inserido com sucesso:", doc)
}).catch(error=>{
  console.log(error)
})*/

/*db.collection("turmaA").onSnapshot((snapshot) => {
  snapshot.forEach((doc) => {                            //on Snapshot(atualização em tempo real)
    let aluno = doc.data()   
    console.log(aluno)
  })
})*/
//let auth = firebase.auth()                            
/*function criarUsuario(){    
let newUserEmail = "novoteste@teste.com"
let newUserPassword = "123abc"

auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword)   //Criando usuários no Firebase
.then(user=>{
  console.log(user)
}).catch(error => {
  console.log(error)
})
}*/

/*function login(){
  let UserEmail = "novoteste@teste.com"
  let UserPassword = "123abc"

  auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)       //Sessão do usuário(Persistencia{LOCAL, SESSION, NONE})
  .then(()=>{

    auth.signInWithEmailAndPassword(UserEmail, UserPassword)
      .then(loggedUser => {
        console.log(auth.currentUser)
      }).catch(error => {
        console.log(error)
      })
  }).catch(error=>{
    console.log(error)
  })
}*/
//login()
/*let user = auth.currentUser
  auth.onAuthStateChanged(user=>{
    if(user){
      console.log(user)
    }else{
      console.log("Ninguém logado!")
    }
  })*/

  /*function logout(){
    auth.signOut().then(()=>{
      console.log("Usuário foi deslogado!")
    })                                             
    .catch(error=>{
      console.log(error)})
  }
  setTimeout(login, 2000)*/

  function ler(){
    db.collection("lista").get()
    .then(snapshot=>{
      snapshot.forEach(item=>{
        console.log(item.data())
      })
    }).catch(error=>{
      console.log(error)
    })
  }

  function escrever(){
    db.collection("lista")
    .add({title:"novo objeto", numero: Math.random()})
    .then(doc=>{
      console.log(doc)
    }).catch(error=>{
      console.log(error)
    })
  }

  escrever()
  ler()
