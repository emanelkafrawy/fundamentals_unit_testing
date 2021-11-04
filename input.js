function filtername(name) {
    if(name === undefined){
        name = "Unknown";
    }
    if(name.startsWith(" ") || name.endsWith(" ")){
        name = name.trim();
    }
    return name;
}

module.exports = filtername;