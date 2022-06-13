let nazwa1 = "Uwielbiam JavaScript";

let nazwa2 = "Jestem świetnym programistą";

function funkcja(zmienna1, zmienna2) {
    zmienna1 = nazwa1;
    zmienna2 = nazwa2;
    
    zmienna1.length = dlugosc1;
    zmienna2.length = dlugosc2;

    if (dlugosc1 < dlugosc2) {
        return dlugosc1;
    }
    else {
        return dlugosc2;
    }
}

console.log(funkcja(nazwa1, nazwa2));