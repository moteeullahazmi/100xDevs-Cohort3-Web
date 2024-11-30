function azmi(azmii:any) {
    console.log("before")
    setTimeout(azmii, 10000);
    console.log("after")
}
// sxmisofjkdf
function azmii() {
    console.log("azmi print after 1 second");
}

azmi(azmii);  // Pass the function azmii as the argument
