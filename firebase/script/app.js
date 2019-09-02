const list = document.querySelector('ul')
const form = document.querySelector('form')

const button = document.querySelector('button')

// unsub from database changes
button.addEventListener('click', () =>{
    unSub()
    console.log("Unsubscribed from collection changes")
})
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDJXpwTJKSiNmqtWaSh4doF8WyOlvtvis8",
    authDomain: "prashishjs.firebaseapp.com",
    databaseURL: "https://prashishjs.firebaseio.com",
    projectId: "prashishjs",
    storageBucket: "prashishjs.appspot.com",
    messagingSenderId: "780221586961",
    appId: "1:780221586961:web:770603de7777606d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()

//   db.collection("recipes").get().then((snapshot) =>{
//     //   we get get data from response
//     console.log("Printing the snapshot")
//     snapshot.docs.forEach((doc, ind) =>{
//         // console.log("ind : ", ind)
//         addRecipe(doc.data(), doc.id)
//     })

//   }).catch((err) =>{

    
//   })

  const addRecipe=(recipe, id) =>{
      let time = recipe.created_at.toDate();
      let html = `
        <li data-id="${id}">
            <div>
                ${recipe.title}
            </div>
            <div>
                ${time}
            </div>
            <button class="btn btn-danger btn-sm my-2">Delete</button>
        </li>
      `
      list.innerHTML += html
  }

  form.addEventListener('submit', e =>{
      e.preventDefault()
      const now = new Date()
      const recipe = {
          title: form.recipe.value,
          created_at: firebase.firestore.Timestamp.fromDate(now)

      }
      db.collection("recipes").add(recipe).then(() =>{
        console.log("recipe added")
        }).catch((err) =>{
            console.log(err)
        })
    form.reset()
  })

  const unSub = db.collection('recipes').onSnapshot(snapshot=>{
      console.log(snapshot.docChanges())
      snapshot.docChanges().forEach(change =>{
          const doc = change.doc
          console.log(doc)
          if(change.type ==="added"){
            addRecipe(doc.data(), doc.id)
          }
          else if(change.type ==="removed"){
            deleteRecipe(doc.id)
          }
      })
  })



//   detete recipe
const deleteRecipe = (id) =>{
    const recipes = document.querySelectorAll('li')
    recipes.forEach(recipe =>{
        if(recipe.getAttribute('data-id') === id ){
            recipe.remove()
        }
    })
}

  //   Deleting data
  list.addEventListener('click', e =>{
        if(e.target.tagName === 'BUTTON'){
            const id = e.target.parentElement.getAttribute('data-id')
            db.collection('recipes').doc(id).delete().then(() =>{
                console.log("recipe deleted")
            });
            console.log(id)
        }
    })

  
