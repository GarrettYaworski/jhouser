getListings = (req,res) => {
    const db = req.app.get('db')
    db.getListings()
    .then((response) => {
        console.log(response);
        res.status(200).json(response)})
    .catch(err => {
        res.status(500).send({errorMessage: 'Hmm what happened'})
        console.log(err);
    })
}

changeListing = (req,res) => {
    const db = req.app.get('db')
    db.changeListing([req.params.id,req.query.name])
    .then((response) => {
        res.status(200).json(response)})
    .catch(err => {
        res.status(500).send({errorMessage: 'Stuff DIDNT update'})
        console.log(err);
    })
}

removeListing = (req,res) => {
    const db = req.app.get('db')
    db.removeListing(req.params.id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).send({errorMessage: 'It didnt delete'})
        console.log(err)
    })
}

addListing = (req,res) => {
    const {name,address,city,state,zip,img,mortgage,rent} = req.body
    const db = req.app.get('db')
    db.addListing([name,address,city,state,zip,img,mortgage,rent])
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).send({errorMessage: 'It didnt add'})
        console.log(err)
    })
}

module.exports = {
    getListings,
    changeListing,
    removeListing,
    addListing
}