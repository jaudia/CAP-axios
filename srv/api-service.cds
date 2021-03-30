using {nsAxios as my} from '../db/schema';

service api {
    @readonly
    entity Tools           as projection on my.Tools {
        Id, ShortDesc
    };

    @readonly
    entity ServiceDetailss as projection on my.ServiceDetailss {
        Id, ShortName
    };
}
