//const Band = require('./band');
const { v4 } = require('uuid');

class BandList{
    constructor(){

        // this.band = [
        //     new Band('Guns n roses'),
        //     new Band('Bon Jovi'),
        //     new Band('Scorpions'),
        //     new Band('Savage Garden')
        // ];

        this.bands = [];
        this.addBand('Guns n roses');
        this.addBand('Bon Jovi');
        this.addBand('Scorpions');
        this.addBand('Savage Garden');

    }

    band(name){
        return{
            id : v4(),
            name,
            votes : 0
        }
    }

    addBand(name){
        const newBand = this.band(name);
        this.bands.push(newBand);
        //return this.bands;
    }

    // addBand(name){
    //     const newBand = new Band(name);
    //     this.band.push(newBand);
    //     return this.band;
    // }

    removeBand(id){
        this.bands = this.bands.filter( band => band.id !== id );
    }

    get getBands(){
        return this.bands;
    }

    incrementVotes(id){
        this.bands =this.bands.map( band => band.id === id ? { ...band, votes: band.votes + 1} : band);
    }

    updateBandName(id,name){
        this.bands = this.bands.map(band => band.id === id ?  { ...band, name} : band);
    }


}

module.exports = BandList;