
run();

async function run() {

    try {
        
        let user = await getUser(23);
        console.log(user);
        let repos = await getRepos(user.id);
        console.log(repos);
        let commits = await getCommits();
    
    console.log(commits);

    } catch (error) {
        console.log(error)
    }

}

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
        
        let check = false;
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


