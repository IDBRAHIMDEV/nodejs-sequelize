
console.log('salam youcode')

getUser(23, user => {
    console.log(user)
    getRepos(user.id, repos => {
        console.log(repos)
        getCommits(repos, (commits) => console.log(commits))
    })
})

console.log('end instruction')

function getUser(id, callback) {
    setTimeout(() => {
        console.log('recup user')
        return callback({ id: id, name: 'Mohamed IDBRAHIM' })
    }, 2000)
}

function getRepos(idUser, callback) {
    setTimeout(() => {
        console.log('recup repos')
        return callback(['repo1', 'repo2', 'repo3'])
    }, 2000)
}

function getCommits(idRepos, callback) {
    setTimeout(() => {
        console.log('recup commits')
        return callback(['commit1', 'commit2', 'commit3'])
    }, 2000)
}


