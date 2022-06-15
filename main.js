let nazwa1 = "Uwielbiam JavaScript";

let nazwa2 = "Jestem świetnym programistą";

function funkcja(zmienna1, zmienna2) {
    
  let dlugosc1 = zmienna1.length
  let dlugosc2 = zmienna2.length

    if (dlugosc1 < dlugosc2) {
        return zmienna1;
    }
    else {
        return zmienna2;
    }
}

console.log(funkcja(nazwa1, nazwa2));
