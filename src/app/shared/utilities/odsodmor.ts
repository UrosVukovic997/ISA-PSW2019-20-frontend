import {Termin} from './termin';
import {Lekar} from './lekar';
import {Sestra} from './sestra';

export class Odsodmor {
  id: number;
  pocetak: Date;
  kraj: Date;
  godisnji: boolean;
  odsustvo: boolean;
  obrazlozenje: string;
  termin: Termin;
  lekar: Lekar;
  sestra: Sestra;
}
