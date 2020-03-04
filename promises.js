
console.log('salam youcode')


getUser(23)
   .then((user) => {
       console.log(user)
       return getRepos(user.id)
    })
   .then((repos) => {
       console.log(repos)
       return getCommits()
    })
   .then((commits) => console.log(commits))
   .catch((err) => console.error(err))



console.log('end instruction')

function getUser(id) {

    const p = new Promise((resolve, reject) => {
        
        let check = true;
        setTimeout(() => {
            
            if(check) {

                return resolve({ id: id, name: 'Mohamed IDBRAHIM' })
            }
            else {
                return reject('user is not found ')
            }
        }, 2000)

    })
    return p;
}

function getRepos(id) {

    const p = new Promise((resolve, reject) => {
        
        let check = true;
        setTimeout(() => {
            
            if(check) {

                return resolve(['repo1', 'repos2'])
            }
            else {
                return reject('repos is not found ')
            }
        }, 2000)

    })

    return p;

}



function getCommits() {

    const p = new Promise((resolve, reject) => {
        
        let check = true;
        setTimeout(() => {
            
            if(check) {

                return resolve(['commit1', 'rcommit2'])
            }
            else {
                return reject('commits is not found ')
            }
        }, 2000)

    })

    return p;

}


