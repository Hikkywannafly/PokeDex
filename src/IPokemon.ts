export interface IPokemon {
    id: number;
    name: string;
    type: string[];
}
export interface IPokemonDetail {

}
export interface IPokemonBase {
    name: string;
    url: string;
}
export interface IPokemonState {
    payload: IPokemon[];
    
}