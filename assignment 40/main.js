"use strict";
function makeAlbum(artist, title) {
    const dictionary = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionary;
}
let album = makeAlbum("atif", "doorie");
console.log(album);
album = makeAlbum("sajjad", "mein doob raha hu");
console.log(album);
album = makeAlbum("arijit", "tere hawale");
console.log(album);
