class Song {
    idm:number;
    namem:string;
    lengthm:string;
    constructor(idm:number, namem:string, lengthm:string) {
        this.idm = idm;
        this.namem = namem; 
        this.lengthm = lengthm; 
    }
    get id() {
        return this.idm;
    }
    get name() {
        return this.namem;
    }
    set name(newName) {
        this.namem = newName;
    }
    get length() {
        return this.lengthm;
    }
    set length(newLength) {
        this.lengthm = newLength;
    }
    describe() {
        console.log(`Song ID: ${this.idm}`);
        console.log(`Song Name: ${this.namem}`);
        console.log(`Song Length: ${this.lengthm}`);
    }
}

const song = new Song(1, "Shape of You", "3:54");
console.log(song.name); 
song.length = "4:20";
song.describe();
