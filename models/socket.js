const Band = require('./band-list');

class Sockets{

    constructor(io) {
        this.io = io;
        this.bandList = new Band();
        this.socketsEvents();
        this.total = 0;
    }

    socketsEvents(){
        this.io.on('connection', (socket) => { 

            console.log('client conect', socket.handshake.auth);
            console.log(++this.total)

            socket.emit('list-bands', this.bandList.getBands);

            socket.on('increment-vote',(id)=>{
                this.bandList.incrementVotes(id);
                this.io.emit('list-bands',this.bandList.getBands)
            });

            socket.on('delete-band',(id)=>{
                this.bandList.removeBand(id);
                this.io.emit('list-bands',this.bandList.getBands)
            });

            socket.on('update-name-band',(data)=>{
                this.bandList.updateBandName(data.id,data.name);
                this.io.emit('list-bands',this.bandList.getBands)
            });

            socket.on('add-band',(name)=>{
                this.bandList.addBand(name);
                this.io.emit('list-bands',this.bandList.getBands)
            });



            

        });
    }

}

module.exports = Sockets;