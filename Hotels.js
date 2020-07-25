class Hotel{
    constructor(nom, n_habitacions, n_plantes, superficie_total_hotel){
        this._nom = nom;
        this._n_habitacions = n_habitacions;
        this._n_plantes = n_plantes;
        this._superficie_total_hotel = superficie_total_hotel;
    }

    set nom(nom){
        this._nom;
    }
    get nom(){
        return this._nom;
    }
    set n_habitacions(n_habitacions){
        this._n_habitacions;
    }
    get n_habitacions(){
        return this._n_habitacions;
    }
    set n_plantes(n_plantes){
        this._n_plantes;
    }
    get n_plantes(){
        return this._n_plantes;
    }
    set superficie_total_hotel(superficie_total_hotel){
        this._superficie_total_hotel;
    }
    get superficie_total_hotel(){
        return this._superficie_total_hotel;
    }

    calcularManteniment(){
        var personal_servei = math.ceil((_n_habitacions/20));
        var cost = personal_servei*1500;
        return personal_servei, cost;
    }

}