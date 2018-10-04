class Genre {
    id: number;
    name: string;
}

class Company {
    name: string;
    id: number;
    logo_path: string;
    origin_country: string;
}

export class Film {
    adult: boolean;
    backdrop_path: string;
    belong_to_collection: Object;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: string;
    imdb_id: string; // minLength: 9 maxLength: 9 pattern: ^tt[0-9]{7}
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: Company[];


    release_date: string;
    title: string;
    vote_count: number;
    video: boolean;
    vote_average: number;
}


export class Acteur {
    birthday: string;
    known_for_department: string;
    deathday: string;
    id: number;
    name: string;
    also_known_as: string;
    gender: number; //
}