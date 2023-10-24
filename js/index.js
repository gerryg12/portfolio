fetch('js/portfolio.json')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        // let content = ''
        const content = data.projects[0].name
        let content2 = data.projects[0].img
        const content4 = data.projects[0].desc
        // const content2 = data.projects[1].name
        // const content3 = data.projects[2].name
        // content += data.projects[1].name
        // data.projects.forEach((project) => {
            // content += '<ul>'
            // content += '<li>Name: ' + project.name + '</li>'
            // content += '<li>Name: ' + project.name + '</li>'
            // content += '<li>Description: ' + biscuit.desc + '</li>'
            // content += '<li><a href="' + biscuit.wikipedia + '">Wiki</li>'
            // content += '<li><img src="' + biscuit.img + '"></li>'
            // content += '<li>RDT: ' + biscuit.RDT + '</li>'
            // content += '</ul>'
        // })

        document.querySelector('h4').innerHTML = content
        // document.querySelector('h5').innerHTML = content2
        // document.querySelector('h6').innerHTML = content3
        document.getElementById("image1").src = content2
        document.getElementById('desc1').innerHTML = content4
        
    })













    // console.log(data.projects.name)
    // location.reload();
    
// // Fetch request
// fetch('js/data.json')
//     .then((response) => {
//         return response.json()
//     }).then((data) => {
//         const displayTarget = document.querySelector('.portfolio')

//         displayTarget.innerHTML = "Name: " + data.desc + "<br />"


//         let friendsOutput = "<ul>"

//         data.friends.forEach((friend) => {
//             friendsOutput += "<li>" + friend + "</li>"
//         })

//         friendsOutput += "</ul>"

//         displayTarget.innerHTML += friendsOutput
//     })


// console.log('The rest of our code')

// fetch('js/data.json')
//     .then((response) => {
//         return response.json()
//     }).then((data) => {
//         const displayTarget = document.querySelector('.portfolio')

//         displayTarget.innerHTML = "Name: " + data.name + "<br />"

//         let nameOutput = "<ul>"

//         data.name.forEach((name) => {
//             nameOutput += "<li>" + name + "<li>"
            
//         });

//         nameOutput += "<ul>"

//         displayTarget.innerHTML += nameOutput
            
        
//     })


// displayname.forEach(displayname)


//     .then((response) => {
//         return response.json()
//     }).then((data) => {
//         const displayTarget = document.querySelector('.project')

//         displayTarget.innerHTML = "Name: " + data.name + "<br />"


//         let friendsOutput = "<ul>"

//         data.name.forEach((name) => {
//             friendsOutput += "<li>" + friend + "</li>"
//         })

//         friendsOutput += "</ul>"

//         displayTarget.innerHTML += friendsOutput
//     })


// console.log('The rest of our code')