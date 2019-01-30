function player () {
    var name;
    while (name == '' || name == null){
        name = prompt('Веедите свое имя');
    }

    return name;
}