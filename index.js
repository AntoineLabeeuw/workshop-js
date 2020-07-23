//https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch
//https://www.youtube.com/watch?v=B2Jt9bNMxyw
const getUsers = async function () {
  try {

    let response = await fetch('https://loisirs-web-backend.cleverapps.io/users')
    if (response.ok) {
      let data = await response.json();
      // https://www.w3schools.com/jsref/dom_obj_table.asp
      var table = document.getElementById('users');
      data.forEach(user => {
        let nTr = document.createElement('tr');

        for (const property in user) {
          let nTd = document.createElement('td');
          nTd.appendChild(document.createTextNode(user[property]));
          nTr.appendChild(nTd);
        }
        table.appendChild(nTr);
      });
    } else {
      console.log("erreur : " + response.error);
    }
  } catch (e) {
    console.error("erreur : " + e)
  }
}