using {nsAxios as my} from '../db/schema';

service api {
    entity Filtro1 as projection on my.Filtro1 {
        Id, ShortDesc
    };

    entity Filtro2 as projection on my.Filtro2 {
        Id, ShortName
    };
}
