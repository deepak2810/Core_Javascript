let playlist = ["Song 1", "Song 2", "Song 3", "Song 4", "Song 5"];

function delete_elements(arr, n) {
  arr.splice(n);
}

console.log(`Playlist : ${playlist}`);
console.log("After splice method is called :  ");
delete_elements(playlist, 3);
console.log(`Playlist : ${playlist}`);
