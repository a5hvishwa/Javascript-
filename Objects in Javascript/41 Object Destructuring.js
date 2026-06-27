const band = {
    bandName : "Led Zepplin",
    famoussong:"stairway to heaven",
    year : 1968,
    anotherfamoussong : "Kashmir",
};

let {bandName,famoussong,...restprops} = band ;
console.loclearg(bandName);
console.log(restprops);