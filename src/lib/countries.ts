/**
 * Country metadata keyed to world-atlas TopoJSON ids (ISO 3166-1 numeric)
 * or `name:<Natural Earth name>` when the geometry has no id.
 * Stats are rounded 2023–2024 public figures for choropleth comparison.
 */
export type ContinentId =
  | "europa"
  | "asien"
  | "afrika"
  | "nordamerika"
  | "suedamerika"
  | "ozeanien"
  | "antarktika";

export type PlaceKind = "c" | "t" | "x";

export type Country = {
  iso2: string;
  iso3: string;
  /** TopoJSON match key: zero-padded numeric id or name:… */
  key: string;
  name: string;
  nameEn: string;
  capital: string;
  continent: ContinentId;
  population: number;
  gdpBillionUsd: number;
  areaKm2: number;
  hdi: number;
  lifeExpectancy: number;
  kind: PlaceKind;
};

export const CONTINENTS: Record<
  ContinentId,
  { id: ContinentId; label: string; labelEn: string }
> = {
  europa: { id: "europa", label: "Europa", labelEn: "Europe" },
  asien: { id: "asien", label: "Asien", labelEn: "Asia" },
  afrika: { id: "afrika", label: "Afrika", labelEn: "Africa" },
  nordamerika: { id: "nordamerika", label: "Nordamerika", labelEn: "North America" },
  suedamerika: { id: "suedamerika", label: "Südamerika", labelEn: "South America" },
  ozeanien: { id: "ozeanien", label: "Ozeanien", labelEn: "Oceania" },
  antarktika: { id: "antarktika", label: "Antarktika", labelEn: "Antarctica" },
};

export const COUNTRIES: Country[] = [
  { iso2: "AF", iso3: "AFG", key: "004", name: 'Afghanistan', nameEn: 'Afghanistan', capital: 'Kabul', continent: "asien", population: 42200000, gdpBillionUsd: 14.5, areaKm2: 652230.0, hdi: 0.462, lifeExpectancy: 62.9, kind: "c" },
  { iso2: "AL", iso3: "ALB", key: "008", name: 'Albanien', nameEn: 'Albania', capital: 'Tirana', continent: "europa", population: 2832000, gdpBillionUsd: 23.0, areaKm2: 28748.0, hdi: 0.789, lifeExpectancy: 76.8, kind: "c" },
  { iso2: "DZ", iso3: "DZA", key: "012", name: 'Algerien', nameEn: 'Algeria', capital: 'Algier', continent: "afrika", population: 45600000, gdpBillionUsd: 247.0, areaKm2: 2381741.0, hdi: 0.745, lifeExpectancy: 76.3, kind: "c" },
  { iso2: "AS", iso3: "ASM", key: "016", name: 'Amerikanisch-Samoa', nameEn: 'American Samoa', capital: 'Pago Pago', continent: "ozeanien", population: 44000, gdpBillionUsd: 0.87, areaKm2: 199.0, hdi: 0.0, lifeExpectancy: 73.9, kind: "t" },
  { iso2: "AD", iso3: "AND", key: "020", name: 'Andorra', nameEn: 'Andorra', capital: 'Andorra la Vella', continent: "europa", population: 80000, gdpBillionUsd: 3.7, areaKm2: 468.0, hdi: 0.884, lifeExpectancy: 83.0, kind: "c" },
  { iso2: "AO", iso3: "AGO", key: "024", name: 'Angola', nameEn: 'Angola', capital: 'Luanda', continent: "afrika", population: 36700000, gdpBillionUsd: 84.0, areaKm2: 1246700.0, hdi: 0.591, lifeExpectancy: 61.6, kind: "c" },
  { iso2: "AI", iso3: "AIA", key: "660", name: 'Anguilla', nameEn: 'Anguilla', capital: 'The Valley', continent: "nordamerika", population: 16000, gdpBillionUsd: 0.3, areaKm2: 91.0, hdi: 0.0, lifeExpectancy: 81.6, kind: "t" },
  { iso2: "AQ", iso3: "ATA", key: "010", name: 'Antarktika', nameEn: 'Antarctica', capital: '', continent: "antarktika", population: 0, gdpBillionUsd: 0.0, areaKm2: 14000000.0, hdi: 0.0, lifeExpectancy: 0.0, kind: "x" },
  { iso2: "AG", iso3: "ATG", key: "028", name: 'Antigua und Barbuda', nameEn: 'Antigua and Barbuda', capital: "St. John's", continent: "nordamerika", population: 94000, gdpBillionUsd: 2.0, areaKm2: 442.0, hdi: 0.826, lifeExpectancy: 79.2, kind: "c" },
  { iso2: "AR", iso3: "ARG", key: "032", name: 'Argentinien', nameEn: 'Argentina', capital: 'Buenos Aires', continent: "suedamerika", population: 46050000, gdpBillionUsd: 640.0, areaKm2: 2780400.0, hdi: 0.849, lifeExpectancy: 75.4, kind: "c" },
  { iso2: "AM", iso3: "ARM", key: "051", name: 'Armenien', nameEn: 'Armenia', capital: 'Jerewan', continent: "asien", population: 2778000, gdpBillionUsd: 24.0, areaKm2: 29743.0, hdi: 0.786, lifeExpectancy: 72.0, kind: "c" },
  { iso2: "AW", iso3: "ABW", key: "533", name: 'Aruba', nameEn: 'Aruba', capital: 'Oranjestad', continent: "nordamerika", population: 106000, gdpBillionUsd: 3.5, areaKm2: 180.0, hdi: 0.0, lifeExpectancy: 76.2, kind: "t" },
  { iso2: "AU", iso3: "AUS", key: "036", name: 'Australien', nameEn: 'Australia', capital: 'Canberra', continent: "ozeanien", population: 26640000, gdpBillionUsd: 1775.0, areaKm2: 7692024.0, hdi: 0.946, lifeExpectancy: 83.0, kind: "c" },
  { iso2: "AT", iso3: "AUT", key: "040", name: 'Österreich', nameEn: 'Austria', capital: 'Wien', continent: "europa", population: 9130000, gdpBillionUsd: 516.0, areaKm2: 83871.0, hdi: 0.926, lifeExpectancy: 81.6, kind: "c" },
  { iso2: "AZ", iso3: "AZE", key: "031", name: 'Aserbaidschan', nameEn: 'Azerbaijan', capital: 'Baku', continent: "asien", population: 10410000, gdpBillionUsd: 72.0, areaKm2: 86600.0, hdi: 0.76, lifeExpectancy: 73.1, kind: "c" },
  { iso2: "BS", iso3: "BHS", key: "044", name: 'Bahamas', nameEn: 'Bahamas', capital: 'Nassau', continent: "nordamerika", population: 410000, gdpBillionUsd: 14.0, areaKm2: 13880.0, hdi: 0.82, lifeExpectancy: 74.4, kind: "c" },
  { iso2: "BH", iso3: "BHR", key: "048", name: 'Bahrain', nameEn: 'Bahrain', capital: 'Manama', continent: "asien", population: 1570000, gdpBillionUsd: 44.0, areaKm2: 765.0, hdi: 0.888, lifeExpectancy: 78.8, kind: "c" },
  { iso2: "BD", iso3: "BGD", key: "050", name: 'Bangladesch', nameEn: 'Bangladesh', capital: 'Dhaka', continent: "asien", population: 173000000, gdpBillionUsd: 437.0, areaKm2: 147570.0, hdi: 0.67, lifeExpectancy: 72.4, kind: "c" },
  { iso2: "BB", iso3: "BRB", key: "052", name: 'Barbados', nameEn: 'Barbados', capital: 'Bridgetown', continent: "nordamerika", population: 282000, gdpBillionUsd: 6.4, areaKm2: 430.0, hdi: 0.809, lifeExpectancy: 77.6, kind: "c" },
  { iso2: "BY", iso3: "BLR", key: "112", name: 'Belarus', nameEn: 'Belarus', capital: 'Minsk', continent: "europa", population: 9200000, gdpBillionUsd: 72.0, areaKm2: 207600.0, hdi: 0.801, lifeExpectancy: 73.1, kind: "c" },
  { iso2: "BE", iso3: "BEL", key: "056", name: 'Belgien', nameEn: 'Belgium', capital: 'Brüssel', continent: "europa", population: 11740000, gdpBillionUsd: 632.0, areaKm2: 30528.0, hdi: 0.942, lifeExpectancy: 81.9, kind: "c" },
  { iso2: "BZ", iso3: "BLZ", key: "084", name: 'Belize', nameEn: 'Belize', capital: 'Belmopan', continent: "nordamerika", population: 410000, gdpBillionUsd: 3.3, areaKm2: 22966.0, hdi: 0.7, lifeExpectancy: 70.5, kind: "c" },
  { iso2: "BJ", iso3: "BEN", key: "204", name: 'Benin', nameEn: 'Benin', capital: 'Porto-Novo', continent: "afrika", population: 13710000, gdpBillionUsd: 19.0, areaKm2: 114763.0, hdi: 0.504, lifeExpectancy: 60.0, kind: "c" },
  { iso2: "BM", iso3: "BMU", key: "060", name: 'Bermuda', nameEn: 'Bermuda', capital: 'Hamilton', continent: "nordamerika", population: 64000, gdpBillionUsd: 8.0, areaKm2: 54.0, hdi: 0.0, lifeExpectancy: 81.0, kind: "t" },
  { iso2: "BT", iso3: "BTN", key: "064", name: 'Bhutan', nameEn: 'Bhutan', capital: 'Thimphu', continent: "asien", population: 780000, gdpBillionUsd: 3.0, areaKm2: 38394.0, hdi: 0.681, lifeExpectancy: 71.8, kind: "c" },
  { iso2: "BO", iso3: "BOL", key: "068", name: 'Bolivien', nameEn: 'Bolivia', capital: 'Sucre', continent: "suedamerika", population: 12390000, gdpBillionUsd: 47.0, areaKm2: 1098581.0, hdi: 0.698, lifeExpectancy: 64.9, kind: "c" },
  { iso2: "BA", iso3: "BIH", key: "070", name: 'Bosnien und Herzegowina', nameEn: 'Bosnia and Herzegovina', capital: 'Sarajevo', continent: "europa", population: 3210000, gdpBillionUsd: 27.0, areaKm2: 51209.0, hdi: 0.779, lifeExpectancy: 75.3, kind: "c" },
  { iso2: "BW", iso3: "BWA", key: "072", name: 'Botswana', nameEn: 'Botswana', capital: 'Gaborone', continent: "afrika", population: 2670000, gdpBillionUsd: 19.0, areaKm2: 582000.0, hdi: 0.708, lifeExpectancy: 61.1, kind: "c" },
  { iso2: "BR", iso3: "BRA", key: "076", name: 'Brasilien', nameEn: 'Brazil', capital: 'Brasília', continent: "suedamerika", population: 216400000, gdpBillionUsd: 2174.0, areaKm2: 8515767.0, hdi: 0.76, lifeExpectancy: 73.4, kind: "c" },
  { iso2: "BN", iso3: "BRN", key: "096", name: 'Brunei', nameEn: 'Brunei', capital: 'Bandar Seri Begawan', continent: "asien", population: 450000, gdpBillionUsd: 15.0, areaKm2: 5765.0, hdi: 0.823, lifeExpectancy: 74.6, kind: "c" },
  { iso2: "BG", iso3: "BGR", key: "100", name: 'Bulgarien', nameEn: 'Bulgaria', capital: 'Sofia', continent: "europa", population: 6450000, gdpBillionUsd: 102.0, areaKm2: 110879.0, hdi: 0.799, lifeExpectancy: 71.5, kind: "c" },
  { iso2: "BF", iso3: "BFA", key: "854", name: 'Burkina Faso', nameEn: 'Burkina Faso', capital: 'Ouagadougou', continent: "afrika", population: 23250000, gdpBillionUsd: 20.0, areaKm2: 272967.0, hdi: 0.438, lifeExpectancy: 59.8, kind: "c" },
  { iso2: "BI", iso3: "BDI", key: "108", name: 'Burundi', nameEn: 'Burundi', capital: 'Gitega', continent: "afrika", population: 13240000, gdpBillionUsd: 3.1, areaKm2: 27834.0, hdi: 0.426, lifeExpectancy: 61.7, kind: "c" },
  { iso2: "CV", iso3: "CPV", key: "132", name: 'Cabo Verde', nameEn: 'Cabo Verde', capital: 'Praia', continent: "afrika", population: 600000, gdpBillionUsd: 2.6, areaKm2: 4033.0, hdi: 0.661, lifeExpectancy: 74.7, kind: "c" },
  { iso2: "KH", iso3: "KHM", key: "116", name: 'Kambodscha', nameEn: 'Cambodia', capital: 'Phnom Penh', continent: "asien", population: 16940000, gdpBillionUsd: 32.0, areaKm2: 181035.0, hdi: 0.6, lifeExpectancy: 69.6, kind: "c" },
  { iso2: "CM", iso3: "CMR", key: "120", name: 'Kamerun', nameEn: 'Cameroon', capital: 'Yaoundé', continent: "afrika", population: 28600000, gdpBillionUsd: 49.0, areaKm2: 475442.0, hdi: 0.587, lifeExpectancy: 60.3, kind: "c" },
  { iso2: "CA", iso3: "CAN", key: "124", name: 'Kanada', nameEn: 'Canada', capital: 'Ottawa', continent: "nordamerika", population: 40100000, gdpBillionUsd: 2138.0, areaKm2: 9984670.0, hdi: 0.935, lifeExpectancy: 82.7, kind: "c" },
  { iso2: "KY", iso3: "CYM", key: "136", name: 'Kaimaninseln', nameEn: 'Cayman Islands', capital: 'George Town', continent: "nordamerika", population: 81000, gdpBillionUsd: 6.8, areaKm2: 264.0, hdi: 0.0, lifeExpectancy: 82.2, kind: "t" },
  { iso2: "CF", iso3: "CAF", key: "140", name: 'Zentralafrikanische Republik', nameEn: 'Central African Republic', capital: 'Bangui', continent: "afrika", population: 5700000, gdpBillionUsd: 2.8, areaKm2: 622984.0, hdi: 0.387, lifeExpectancy: 54.5, kind: "c" },
  { iso2: "TD", iso3: "TCD", key: "148", name: 'Tschad', nameEn: 'Chad', capital: "N'Djamena", continent: "afrika", population: 18280000, gdpBillionUsd: 13.0, areaKm2: 1284000.0, hdi: 0.394, lifeExpectancy: 52.5, kind: "c" },
  { iso2: "CL", iso3: "CHL", key: "152", name: 'Chile', nameEn: 'Chile', capital: 'Santiago', continent: "suedamerika", population: 19630000, gdpBillionUsd: 336.0, areaKm2: 756102.0, hdi: 0.86, lifeExpectancy: 78.9, kind: "c" },
  { iso2: "CN", iso3: "CHN", key: "156", name: 'China', nameEn: 'China', capital: 'Peking', continent: "asien", population: 1412000000, gdpBillionUsd: 17790.0, areaKm2: 9596961.0, hdi: 0.788, lifeExpectancy: 78.2, kind: "c" },
  { iso2: "CO", iso3: "COL", key: "170", name: 'Kolumbien', nameEn: 'Colombia', capital: 'Bogotá', continent: "suedamerika", population: 52320000, gdpBillionUsd: 364.0, areaKm2: 1141748.0, hdi: 0.758, lifeExpectancy: 73.7, kind: "c" },
  { iso2: "KM", iso3: "COM", key: "174", name: 'Komoren', nameEn: 'Comoros', capital: 'Moroni', continent: "afrika", population: 850000, gdpBillionUsd: 1.4, areaKm2: 1862.0, hdi: 0.586, lifeExpectancy: 63.7, kind: "c" },
  { iso2: "CG", iso3: "COG", key: "178", name: 'Kongo', nameEn: 'Congo', capital: 'Brazzaville', continent: "afrika", population: 6100000, gdpBillionUsd: 15.0, areaKm2: 342000.0, hdi: 0.593, lifeExpectancy: 63.9, kind: "c" },
  { iso2: "CK", iso3: "COK", key: "184", name: 'Cookinseln', nameEn: 'Cook Islands', capital: 'Avarua', continent: "ozeanien", population: 17000, gdpBillionUsd: 0.3, areaKm2: 236.0, hdi: 0.0, lifeExpectancy: 76.0, kind: "t" },
  { iso2: "CR", iso3: "CRI", key: "188", name: 'Costa Rica', nameEn: 'Costa Rica', capital: 'San José', continent: "nordamerika", population: 5210000, gdpBillionUsd: 86.0, areaKm2: 51100.0, hdi: 0.806, lifeExpectancy: 77.3, kind: "c" },
  { iso2: "HR", iso3: "HRV", key: "191", name: 'Kroatien', nameEn: 'Croatia', capital: 'Zagreb', continent: "europa", population: 3850000, gdpBillionUsd: 84.0, areaKm2: 56594.0, hdi: 0.878, lifeExpectancy: 77.6, kind: "c" },
  { iso2: "CU", iso3: "CUB", key: "192", name: 'Kuba', nameEn: 'Cuba', capital: 'Havanna', continent: "nordamerika", population: 11190000, gdpBillionUsd: 107.0, areaKm2: 109884.0, hdi: 0.764, lifeExpectancy: 73.7, kind: "c" },
  { iso2: "CW", iso3: "CUW", key: "531", name: 'Curaçao', nameEn: 'Curaçao', capital: 'Willemstad', continent: "nordamerika", population: 148000, gdpBillionUsd: 3.1, areaKm2: 444.0, hdi: 0.0, lifeExpectancy: 78.0, kind: "t" },
  { iso2: "CY", iso3: "CYP", key: "196", name: 'Zypern', nameEn: 'Cyprus', capital: 'Nikosia', continent: "europa", population: 1260000, gdpBillionUsd: 32.0, areaKm2: 9251.0, hdi: 0.907, lifeExpectancy: 81.2, kind: "c" },
  { iso2: "CZ", iso3: "CZE", key: "203", name: 'Tschechien', nameEn: 'Czechia', capital: 'Prag', continent: "europa", population: 10880000, gdpBillionUsd: 331.0, areaKm2: 78867.0, hdi: 0.895, lifeExpectancy: 77.7, kind: "c" },
  { iso2: "CI", iso3: "CIV", key: "384", name: "Côte d'Ivoire", nameEn: "Côte d'Ivoire", capital: 'Yamoussoukro', continent: "afrika", population: 28870000, gdpBillionUsd: 79.0, areaKm2: 322463.0, hdi: 0.534, lifeExpectancy: 58.6, kind: "c" },
  { iso2: "CD", iso3: "COD", key: "180", name: 'Demokratische Republik Kongo', nameEn: 'DR Congo', capital: 'Kinshasa', continent: "afrika", population: 102300000, gdpBillionUsd: 69.0, areaKm2: 2344858.0, hdi: 0.481, lifeExpectancy: 59.2, kind: "c" },
  { iso2: "DK", iso3: "DNK", key: "208", name: 'Dänemark', nameEn: 'Denmark', capital: 'Kopenhagen', continent: "europa", population: 5940000, gdpBillionUsd: 407.0, areaKm2: 43094.0, hdi: 0.952, lifeExpectancy: 81.4, kind: "c" },
  { iso2: "DJ", iso3: "DJI", key: "262", name: 'Dschibuti', nameEn: 'Djibouti', capital: 'Dschibuti', continent: "afrika", population: 1130000, gdpBillionUsd: 3.9, areaKm2: 23200.0, hdi: 0.509, lifeExpectancy: 62.3, kind: "c" },
  { iso2: "DM", iso3: "DMA", key: "212", name: 'Dominica', nameEn: 'Dominica', capital: 'Roseau', continent: "nordamerika", population: 73000, gdpBillionUsd: 0.7, areaKm2: 751.0, hdi: 0.74, lifeExpectancy: 73.0, kind: "c" },
  { iso2: "DO", iso3: "DOM", key: "214", name: 'Dominikanische Republik', nameEn: 'Dominican Republic', capital: 'Santo Domingo', continent: "nordamerika", population: 11330000, gdpBillionUsd: 121.0, areaKm2: 48671.0, hdi: 0.766, lifeExpectancy: 72.6, kind: "c" },
  { iso2: "EC", iso3: "ECU", key: "218", name: 'Ecuador', nameEn: 'Ecuador', capital: 'Quito', continent: "suedamerika", population: 18190000, gdpBillionUsd: 119.0, areaKm2: 276841.0, hdi: 0.765, lifeExpectancy: 73.7, kind: "c" },
  { iso2: "EG", iso3: "EGY", key: "818", name: 'Ägypten', nameEn: 'Egypt', capital: 'Kairo', continent: "afrika", population: 112700000, gdpBillionUsd: 396.0, areaKm2: 1002450.0, hdi: 0.728, lifeExpectancy: 70.2, kind: "c" },
  { iso2: "SV", iso3: "SLV", key: "222", name: 'El Salvador', nameEn: 'El Salvador', capital: 'San Salvador', continent: "nordamerika", population: 6360000, gdpBillionUsd: 34.0, areaKm2: 21041.0, hdi: 0.674, lifeExpectancy: 71.5, kind: "c" },
  { iso2: "GQ", iso3: "GNQ", key: "226", name: 'Äquatorialguinea', nameEn: 'Equatorial Guinea', capital: 'Malabo', continent: "afrika", population: 1700000, gdpBillionUsd: 12.0, areaKm2: 28051.0, hdi: 0.65, lifeExpectancy: 60.6, kind: "c" },
  { iso2: "ER", iso3: "ERI", key: "232", name: 'Eritrea', nameEn: 'Eritrea', capital: 'Asmara', continent: "afrika", population: 3700000, gdpBillionUsd: 2.4, areaKm2: 117600.0, hdi: 0.493, lifeExpectancy: 66.6, kind: "c" },
  { iso2: "EE", iso3: "EST", key: "233", name: 'Estland', nameEn: 'Estonia', capital: 'Tallinn', continent: "europa", population: 1370000, gdpBillionUsd: 41.0, areaKm2: 45227.0, hdi: 0.899, lifeExpectancy: 77.2, kind: "c" },
  { iso2: "SZ", iso3: "SWZ", key: "748", name: 'Eswatini', nameEn: 'Eswatini', capital: 'Mbabane', continent: "afrika", population: 1200000, gdpBillionUsd: 4.6, areaKm2: 17364.0, hdi: 0.61, lifeExpectancy: 57.7, kind: "c" },
  { iso2: "ET", iso3: "ETH", key: "231", name: 'Äthiopien', nameEn: 'Ethiopia', capital: 'Addis Abeba', continent: "afrika", population: 126500000, gdpBillionUsd: 164.0, areaKm2: 1104300.0, hdi: 0.492, lifeExpectancy: 65.0, kind: "c" },
  { iso2: "FK", iso3: "FLK", key: "238", name: 'Falklandinseln', nameEn: 'Falkland Islands', capital: 'Stanley', continent: "suedamerika", population: 4000, gdpBillionUsd: 0.2, areaKm2: 12173.0, hdi: 0.0, lifeExpectancy: 77.9, kind: "t" },
  { iso2: "FO", iso3: "FRO", key: "234", name: 'Färöer', nameEn: 'Faroe Islands', capital: 'Tórshavn', continent: "europa", population: 54000, gdpBillionUsd: 3.6, areaKm2: 1393.0, hdi: 0.0, lifeExpectancy: 80.4, kind: "t" },
  { iso2: "FJ", iso3: "FJI", key: "242", name: 'Fidschi', nameEn: 'Fiji', capital: 'Suva', continent: "ozeanien", population: 930000, gdpBillionUsd: 5.5, areaKm2: 18272.0, hdi: 0.729, lifeExpectancy: 67.3, kind: "c" },
  { iso2: "FI", iso3: "FIN", key: "246", name: 'Finnland', nameEn: 'Finland', capital: 'Helsinki', continent: "europa", population: 5580000, gdpBillionUsd: 300.0, areaKm2: 338145.0, hdi: 0.942, lifeExpectancy: 81.7, kind: "c" },
  { iso2: "FR", iso3: "FRA", key: "250", name: 'Frankreich', nameEn: 'France', capital: 'Paris', continent: "europa", population: 68170000, gdpBillionUsd: 3030.0, areaKm2: 551695.0, hdi: 0.91, lifeExpectancy: 82.5, kind: "c" },
  { iso2: "GF", iso3: "GUF", key: "254", name: 'Französisch-Guayana', nameEn: 'French Guiana', capital: 'Cayenne', continent: "suedamerika", population: 300000, gdpBillionUsd: 5.2, areaKm2: 83534.0, hdi: 0.0, lifeExpectancy: 79.0, kind: "t" },
  { iso2: "PF", iso3: "PYF", key: "258", name: 'Französisch-Polynesien', nameEn: 'French Polynesia', capital: 'Papeete', continent: "ozeanien", population: 280000, gdpBillionUsd: 6.1, areaKm2: 4167.0, hdi: 0.0, lifeExpectancy: 77.0, kind: "t" },
  { iso2: "TF", iso3: "ATF", key: "260", name: 'Französische Süd- und Antarktisgebiete', nameEn: 'Fr. S. Antarctic Lands', capital: '', continent: "antarktika", population: 0, gdpBillionUsd: 0.0, areaKm2: 439781.0, hdi: 0.0, lifeExpectancy: 0.0, kind: "x" },
  { iso2: "GA", iso3: "GAB", key: "266", name: 'Gabun', nameEn: 'Gabon', capital: 'Libreville', continent: "afrika", population: 2430000, gdpBillionUsd: 20.0, areaKm2: 267668.0, hdi: 0.693, lifeExpectancy: 65.7, kind: "c" },
  { iso2: "GM", iso3: "GMB", key: "270", name: 'Gambia', nameEn: 'Gambia', capital: 'Banjul', continent: "afrika", population: 2700000, gdpBillionUsd: 2.4, areaKm2: 11295.0, hdi: 0.495, lifeExpectancy: 62.1, kind: "c" },
  { iso2: "GE", iso3: "GEO", key: "268", name: 'Georgien', nameEn: 'Georgia', capital: 'Tiflis', continent: "asien", population: 3710000, gdpBillionUsd: 31.0, areaKm2: 69700.0, hdi: 0.814, lifeExpectancy: 71.7, kind: "c" },
  { iso2: "DE", iso3: "DEU", key: "276", name: 'Deutschland', nameEn: 'Germany', capital: 'Berlin', continent: "europa", population: 84480000, gdpBillionUsd: 4456.0, areaKm2: 357022.0, hdi: 0.95, lifeExpectancy: 80.9, kind: "c" },
  { iso2: "GH", iso3: "GHA", key: "288", name: 'Ghana', nameEn: 'Ghana', capital: 'Accra', continent: "afrika", population: 34120000, gdpBillionUsd: 76.0, areaKm2: 238533.0, hdi: 0.602, lifeExpectancy: 63.8, kind: "c" },
  { iso2: "GI", iso3: "GIB", key: "292", name: 'Gibraltar', nameEn: 'Gibraltar', capital: 'Gibraltar', continent: "europa", population: 34000, gdpBillionUsd: 2.1, areaKm2: 6.0, hdi: 0.0, lifeExpectancy: 80.0, kind: "t" },
  { iso2: "GR", iso3: "GRC", key: "300", name: 'Griechenland', nameEn: 'Greece', capital: 'Athen', continent: "europa", population: 10430000, gdpBillionUsd: 238.0, areaKm2: 131957.0, hdi: 0.893, lifeExpectancy: 80.6, kind: "c" },
  { iso2: "GL", iso3: "GRL", key: "304", name: 'Grönland', nameEn: 'Greenland', capital: 'Nuuk', continent: "nordamerika", population: 57000, gdpBillionUsd: 3.2, areaKm2: 2166086.0, hdi: 0.0, lifeExpectancy: 71.1, kind: "t" },
  { iso2: "GD", iso3: "GRD", key: "308", name: 'Grenada', nameEn: 'Grenada', capital: "St. George's", continent: "nordamerika", population: 126000, gdpBillionUsd: 1.3, areaKm2: 344.0, hdi: 0.793, lifeExpectancy: 75.0, kind: "c" },
  { iso2: "GP", iso3: "GLP", key: "312", name: 'Guadeloupe', nameEn: 'Guadeloupe', capital: 'Basse-Terre', continent: "nordamerika", population: 380000, gdpBillionUsd: 11.0, areaKm2: 1628.0, hdi: 0.0, lifeExpectancy: 81.0, kind: "t" },
  { iso2: "GU", iso3: "GUM", key: "316", name: 'Guam', nameEn: 'Guam', capital: 'Hagåtña', continent: "ozeanien", population: 170000, gdpBillionUsd: 6.3, areaKm2: 544.0, hdi: 0.0, lifeExpectancy: 77.0, kind: "t" },
  { iso2: "GT", iso3: "GTM", key: "320", name: 'Guatemala', nameEn: 'Guatemala', capital: 'Guatemala-Stadt', continent: "nordamerika", population: 18120000, gdpBillionUsd: 102.0, areaKm2: 108889.0, hdi: 0.629, lifeExpectancy: 69.2, kind: "c" },
  { iso2: "GG", iso3: "GGY", key: "831", name: 'Guernsey', nameEn: 'Guernsey', capital: 'St. Peter Port', continent: "europa", population: 64000, gdpBillionUsd: 4.5, areaKm2: 78.0, hdi: 0.0, lifeExpectancy: 82.0, kind: "t" },
  { iso2: "GN", iso3: "GIN", key: "324", name: 'Guinea', nameEn: 'Guinea', capital: 'Conakry', continent: "afrika", population: 14190000, gdpBillionUsd: 23.0, areaKm2: 245857.0, hdi: 0.471, lifeExpectancy: 59.0, kind: "c" },
  { iso2: "GW", iso3: "GNB", key: "624", name: 'Guinea-Bissau', nameEn: 'Guinea-Bissau', capital: 'Bissau', continent: "afrika", population: 2150000, gdpBillionUsd: 1.9, areaKm2: 36125.0, hdi: 0.483, lifeExpectancy: 59.7, kind: "c" },
  { iso2: "GY", iso3: "GUY", key: "328", name: 'Guyana', nameEn: 'Guyana', capital: 'Georgetown', continent: "suedamerika", population: 813000, gdpBillionUsd: 16.0, areaKm2: 214969.0, hdi: 0.742, lifeExpectancy: 65.7, kind: "c" },
  { iso2: "HT", iso3: "HTI", key: "332", name: 'Haiti', nameEn: 'Haiti', capital: 'Port-au-Prince', continent: "nordamerika", population: 11720000, gdpBillionUsd: 20.0, areaKm2: 27750.0, hdi: 0.552, lifeExpectancy: 63.2, kind: "c" },
  { iso2: "HN", iso3: "HND", key: "340", name: 'Honduras', nameEn: 'Honduras', capital: 'Tegucigalpa', continent: "nordamerika", population: 10590000, gdpBillionUsd: 34.0, areaKm2: 112492.0, hdi: 0.624, lifeExpectancy: 70.1, kind: "c" },
  { iso2: "HK", iso3: "HKG", key: "344", name: 'Hongkong', nameEn: 'Hong Kong', capital: 'Hongkong', continent: "asien", population: 7500000, gdpBillionUsd: 382.0, areaKm2: 1106.0, hdi: 0.956, lifeExpectancy: 85.5, kind: "t" },
  { iso2: "HU", iso3: "HUN", key: "348", name: 'Ungarn', nameEn: 'Hungary', capital: 'Budapest', continent: "europa", population: 9670000, gdpBillionUsd: 212.0, areaKm2: 93028.0, hdi: 0.851, lifeExpectancy: 74.5, kind: "c" },
  { iso2: "IS", iso3: "ISL", key: "352", name: 'Island', nameEn: 'Iceland', capital: 'Reykjavík', continent: "europa", population: 390000, gdpBillionUsd: 31.0, areaKm2: 103000.0, hdi: 0.959, lifeExpectancy: 82.7, kind: "c" },
  { iso2: "IN", iso3: "IND", key: "356", name: 'Indien', nameEn: 'India', capital: 'New Delhi', continent: "asien", population: 1428000000, gdpBillionUsd: 3570.0, areaKm2: 3287263.0, hdi: 0.644, lifeExpectancy: 67.7, kind: "c" },
  { iso2: "ID", iso3: "IDN", key: "360", name: 'Indonesien', nameEn: 'Indonesia', capital: 'Jakarta', continent: "asien", population: 277500000, gdpBillionUsd: 1371.0, areaKm2: 1904569.0, hdi: 0.713, lifeExpectancy: 68.3, kind: "c" },
  { iso2: "IR", iso3: "IRN", key: "364", name: 'Iran', nameEn: 'Iran', capital: 'Teheran', continent: "asien", population: 89100000, gdpBillionUsd: 401.0, areaKm2: 1648195.0, hdi: 0.78, lifeExpectancy: 74.6, kind: "c" },
  { iso2: "IQ", iso3: "IRQ", key: "368", name: 'Irak', nameEn: 'Iraq', capital: 'Bagdad', continent: "asien", population: 45500000, gdpBillionUsd: 250.0, areaKm2: 438317.0, hdi: 0.673, lifeExpectancy: 71.6, kind: "c" },
  { iso2: "IE", iso3: "IRL", key: "372", name: 'Irland', nameEn: 'Ireland', capital: 'Dublin', continent: "europa", population: 5300000, gdpBillionUsd: 545.0, areaKm2: 70273.0, hdi: 0.95, lifeExpectancy: 82.1, kind: "c" },
  { iso2: "IM", iso3: "IMN", key: "833", name: 'Isle of Man', nameEn: 'Isle of Man', capital: 'Douglas', continent: "europa", population: 85000, gdpBillionUsd: 7.9, areaKm2: 572.0, hdi: 0.0, lifeExpectancy: 81.0, kind: "t" },
  { iso2: "IL", iso3: "ISR", key: "376", name: 'Israel', nameEn: 'Israel', capital: 'Jerusalem', continent: "asien", population: 9800000, gdpBillionUsd: 509.0, areaKm2: 22072.0, hdi: 0.915, lifeExpectancy: 82.3, kind: "c" },
  { iso2: "IT", iso3: "ITA", key: "380", name: 'Italien', nameEn: 'Italy', capital: 'Rom', continent: "europa", population: 58870000, gdpBillionUsd: 2255.0, areaKm2: 301340.0, hdi: 0.906, lifeExpectancy: 82.9, kind: "c" },
  { iso2: "JM", iso3: "JAM", key: "388", name: 'Jamaika', nameEn: 'Jamaica', capital: 'Kingston', continent: "nordamerika", population: 2820000, gdpBillionUsd: 17.0, areaKm2: 10991.0, hdi: 0.706, lifeExpectancy: 70.5, kind: "c" },
  { iso2: "JP", iso3: "JPN", key: "392", name: 'Japan', nameEn: 'Japan', capital: 'Tokio', continent: "asien", population: 124500000, gdpBillionUsd: 4213.0, areaKm2: 377975.0, hdi: 0.92, lifeExpectancy: 84.5, kind: "c" },
  { iso2: "JE", iso3: "JEY", key: "832", name: 'Jersey', nameEn: 'Jersey', capital: 'Saint Helier', continent: "europa", population: 103000, gdpBillionUsd: 5.8, areaKm2: 116.0, hdi: 0.0, lifeExpectancy: 82.0, kind: "t" },
  { iso2: "JO", iso3: "JOR", key: "400", name: 'Jordanien', nameEn: 'Jordan', capital: 'Amman', continent: "asien", population: 11340000, gdpBillionUsd: 51.0, areaKm2: 89342.0, hdi: 0.736, lifeExpectancy: 74.3, kind: "c" },
  { iso2: "KZ", iso3: "KAZ", key: "398", name: 'Kasachstan', nameEn: 'Kazakhstan', capital: 'Astana', continent: "asien", population: 19620000, gdpBillionUsd: 261.0, areaKm2: 2724900.0, hdi: 0.802, lifeExpectancy: 69.4, kind: "c" },
  { iso2: "KE", iso3: "KEN", key: "404", name: 'Kenia', nameEn: 'Kenya', capital: 'Nairobi', continent: "afrika", population: 55100000, gdpBillionUsd: 107.0, areaKm2: 580367.0, hdi: 0.601, lifeExpectancy: 61.4, kind: "c" },
  { iso2: "KI", iso3: "KIR", key: "296", name: 'Kiribati', nameEn: 'Kiribati', capital: 'South Tarawa', continent: "ozeanien", population: 133000, gdpBillionUsd: 0.3, areaKm2: 811.0, hdi: 0.624, lifeExpectancy: 67.4, kind: "c" },
  { iso2: "XK", iso3: "XKX", key: "name:Kosovo", name: 'Kosovo', nameEn: 'Kosovo', capital: 'Pristina', continent: "europa", population: 1800000, gdpBillionUsd: 10.5, areaKm2: 10887.0, hdi: 0.762, lifeExpectancy: 77.0, kind: "c" },
  { iso2: "KW", iso3: "KWT", key: "414", name: 'Kuwait', nameEn: 'Kuwait', capital: 'Kuwait-Stadt', continent: "asien", population: 4310000, gdpBillionUsd: 161.0, areaKm2: 17818.0, hdi: 0.847, lifeExpectancy: 78.3, kind: "c" },
  { iso2: "KG", iso3: "KGZ", key: "417", name: 'Kirgisistan', nameEn: 'Kyrgyzstan', capital: 'Bischkek', continent: "asien", population: 7000000, gdpBillionUsd: 14.0, areaKm2: 199951.0, hdi: 0.701, lifeExpectancy: 70.0, kind: "c" },
  { iso2: "LA", iso3: "LAO", key: "418", name: 'Laos', nameEn: 'Laos', capital: 'Vientiane', continent: "asien", population: 7630000, gdpBillionUsd: 15.0, areaKm2: 236800.0, hdi: 0.62, lifeExpectancy: 68.1, kind: "c" },
  { iso2: "LV", iso3: "LVA", key: "428", name: 'Lettland', nameEn: 'Latvia', capital: 'Riga', continent: "europa", population: 1880000, gdpBillionUsd: 43.0, areaKm2: 64589.0, hdi: 0.879, lifeExpectancy: 73.6, kind: "c" },
  { iso2: "LB", iso3: "LBN", key: "422", name: 'Libanon', nameEn: 'Lebanon', capital: 'Beirut', continent: "asien", population: 5500000, gdpBillionUsd: 18.0, areaKm2: 10452.0, hdi: 0.723, lifeExpectancy: 75.0, kind: "c" },
  { iso2: "LS", iso3: "LSO", key: "426", name: 'Lesotho', nameEn: 'Lesotho', capital: 'Maseru', continent: "afrika", population: 2300000, gdpBillionUsd: 2.4, areaKm2: 30355.0, hdi: 0.521, lifeExpectancy: 53.0, kind: "c" },
  { iso2: "LR", iso3: "LBR", key: "430", name: 'Liberia', nameEn: 'Liberia', capital: 'Monrovia', continent: "afrika", population: 5400000, gdpBillionUsd: 4.3, areaKm2: 111369.0, hdi: 0.487, lifeExpectancy: 61.0, kind: "c" },
  { iso2: "LY", iso3: "LBY", key: "434", name: 'Libyen', nameEn: 'Libya', capital: 'Tripolis', continent: "afrika", population: 6880000, gdpBillionUsd: 45.0, areaKm2: 1759540.0, hdi: 0.746, lifeExpectancy: 72.5, kind: "c" },
  { iso2: "LI", iso3: "LIE", key: "438", name: 'Liechtenstein', nameEn: 'Liechtenstein', capital: 'Vaduz', continent: "europa", population: 39000, gdpBillionUsd: 7.7, areaKm2: 160.0, hdi: 0.942, lifeExpectancy: 83.0, kind: "c" },
  { iso2: "LT", iso3: "LTU", key: "440", name: 'Litauen', nameEn: 'Lithuania', capital: 'Vilnius', continent: "europa", population: 2870000, gdpBillionUsd: 78.0, areaKm2: 65300.0, hdi: 0.879, lifeExpectancy: 74.3, kind: "c" },
  { iso2: "LU", iso3: "LUX", key: "442", name: 'Luxemburg', nameEn: 'Luxembourg', capital: 'Luxemburg', continent: "europa", population: 660000, gdpBillionUsd: 86.0, areaKm2: 2586.0, hdi: 0.927, lifeExpectancy: 81.6, kind: "c" },
  { iso2: "MO", iso3: "MAC", key: "446", name: 'Macau', nameEn: 'Macao', capital: 'Macau', continent: "asien", population: 700000, gdpBillionUsd: 47.0, areaKm2: 33.0, hdi: 0.0, lifeExpectancy: 84.7, kind: "t" },
  { iso2: "MG", iso3: "MDG", key: "450", name: 'Madagaskar', nameEn: 'Madagascar', capital: 'Antananarivo', continent: "afrika", population: 30400000, gdpBillionUsd: 16.0, areaKm2: 587041.0, hdi: 0.501, lifeExpectancy: 64.5, kind: "c" },
  { iso2: "MW", iso3: "MWI", key: "454", name: 'Malawi', nameEn: 'Malawi', capital: 'Lilongwe', continent: "afrika", population: 20930000, gdpBillionUsd: 13.0, areaKm2: 118484.0, hdi: 0.508, lifeExpectancy: 62.9, kind: "c" },
  { iso2: "MY", iso3: "MYS", key: "458", name: 'Malaysia', nameEn: 'Malaysia', capital: 'Kuala Lumpur', continent: "asien", population: 34310000, gdpBillionUsd: 430.0, areaKm2: 330803.0, hdi: 0.807, lifeExpectancy: 75.0, kind: "c" },
  { iso2: "MV", iso3: "MDV", key: "462", name: 'Malediven', nameEn: 'Maldives', capital: 'Malé', continent: "asien", population: 520000, gdpBillionUsd: 6.6, areaKm2: 300.0, hdi: 0.747, lifeExpectancy: 79.9, kind: "c" },
  { iso2: "ML", iso3: "MLI", key: "466", name: 'Mali', nameEn: 'Mali', capital: 'Bamako', continent: "afrika", population: 23290000, gdpBillionUsd: 21.0, areaKm2: 1240192.0, hdi: 0.41, lifeExpectancy: 58.9, kind: "c" },
  { iso2: "MT", iso3: "MLT", key: "470", name: 'Malta', nameEn: 'Malta', capital: 'Valletta', continent: "europa", population: 530000, gdpBillionUsd: 20.0, areaKm2: 316.0, hdi: 0.875, lifeExpectancy: 82.5, kind: "c" },
  { iso2: "MH", iso3: "MHL", key: "584", name: 'Marshallinseln', nameEn: 'Marshall Islands', capital: 'Majuro', continent: "ozeanien", population: 42000, gdpBillionUsd: 0.3, areaKm2: 181.0, hdi: 0.639, lifeExpectancy: 65.2, kind: "c" },
  { iso2: "MQ", iso3: "MTQ", key: "474", name: 'Martinique', nameEn: 'Martinique', capital: 'Fort-de-France', continent: "nordamerika", population: 350000, gdpBillionUsd: 10.0, areaKm2: 1128.0, hdi: 0.0, lifeExpectancy: 81.0, kind: "t" },
  { iso2: "MR", iso3: "MRT", key: "478", name: 'Mauretanien', nameEn: 'Mauritania', capital: 'Nouakchott', continent: "afrika", population: 4900000, gdpBillionUsd: 10.0, areaKm2: 1030700.0, hdi: 0.54, lifeExpectancy: 64.5, kind: "c" },
  { iso2: "MU", iso3: "MUS", key: "480", name: 'Mauritius', nameEn: 'Mauritius', capital: 'Port Louis', continent: "afrika", population: 1260000, gdpBillionUsd: 14.0, areaKm2: 2040.0, hdi: 0.802, lifeExpectancy: 74.0, kind: "c" },
  { iso2: "YT", iso3: "MYT", key: "175", name: 'Mayotte', nameEn: 'Mayotte', capital: 'Mamoudzou', continent: "afrika", population: 320000, gdpBillionUsd: 3.1, areaKm2: 374.0, hdi: 0.0, lifeExpectancy: 76.0, kind: "t" },
  { iso2: "MX", iso3: "MEX", key: "484", name: 'Mexiko', nameEn: 'Mexico', capital: 'Mexiko-Stadt', continent: "nordamerika", population: 128500000, gdpBillionUsd: 1790.0, areaKm2: 1964375.0, hdi: 0.781, lifeExpectancy: 70.2, kind: "c" },
  { iso2: "FM", iso3: "FSM", key: "583", name: 'Mikronesien', nameEn: 'Micronesia', capital: 'Palikir', continent: "ozeanien", population: 115000, gdpBillionUsd: 0.4, areaKm2: 702.0, hdi: 0.628, lifeExpectancy: 67.2, kind: "c" },
  { iso2: "MD", iso3: "MDA", key: "498", name: 'Moldau', nameEn: 'Moldova', capital: 'Chișinău', continent: "europa", population: 2500000, gdpBillionUsd: 16.0, areaKm2: 33846.0, hdi: 0.763, lifeExpectancy: 68.6, kind: "c" },
  { iso2: "MC", iso3: "MCO", key: "492", name: 'Monaco', nameEn: 'Monaco', capital: 'Monaco', continent: "europa", population: 36000, gdpBillionUsd: 8.9, areaKm2: 2.0, hdi: 0.0, lifeExpectancy: 86.4, kind: "c" },
  { iso2: "MN", iso3: "MNG", key: "496", name: 'Mongolei', nameEn: 'Mongolia', capital: 'Ulaanbaatar', continent: "asien", population: 3400000, gdpBillionUsd: 20.0, areaKm2: 1564116.0, hdi: 0.741, lifeExpectancy: 71.0, kind: "c" },
  { iso2: "ME", iso3: "MNE", key: "499", name: 'Montenegro', nameEn: 'Montenegro', capital: 'Podgorica', continent: "europa", population: 620000, gdpBillionUsd: 7.1, areaKm2: 13812.0, hdi: 0.844, lifeExpectancy: 76.3, kind: "c" },
  { iso2: "MS", iso3: "MSR", key: "500", name: 'Montserrat', nameEn: 'Montserrat', capital: 'Plymouth', continent: "nordamerika", population: 5000, gdpBillionUsd: 0.06, areaKm2: 102.0, hdi: 0.0, lifeExpectancy: 74.0, kind: "t" },
  { iso2: "MA", iso3: "MAR", key: "504", name: 'Marokko', nameEn: 'Morocco', capital: 'Rabat', continent: "afrika", population: 37840000, gdpBillionUsd: 141.0, areaKm2: 446550.0, hdi: 0.698, lifeExpectancy: 74.0, kind: "c" },
  { iso2: "MZ", iso3: "MOZ", key: "508", name: 'Mosambik', nameEn: 'Mozambique', capital: 'Maputo', continent: "afrika", population: 33890000, gdpBillionUsd: 21.0, areaKm2: 801590.0, hdi: 0.446, lifeExpectancy: 59.6, kind: "c" },
  { iso2: "MM", iso3: "MMR", key: "104", name: 'Myanmar', nameEn: 'Myanmar', capital: 'Naypyidaw', continent: "asien", population: 54580000, gdpBillionUsd: 65.0, areaKm2: 676578.0, hdi: 0.585, lifeExpectancy: 67.3, kind: "c" },
  { iso2: "NA", iso3: "NAM", key: "516", name: 'Namibia', nameEn: 'Namibia', capital: 'Windhoek', continent: "afrika", population: 2600000, gdpBillionUsd: 12.0, areaKm2: 825615.0, hdi: 0.61, lifeExpectancy: 59.3, kind: "c" },
  { iso2: "NR", iso3: "NRU", key: "520", name: 'Nauru', nameEn: 'Nauru', capital: 'Yaren', continent: "ozeanien", population: 13000, gdpBillionUsd: 0.15, areaKm2: 21.0, hdi: 0.696, lifeExpectancy: 63.2, kind: "c" },
  { iso2: "NP", iso3: "NPL", key: "524", name: 'Nepal', nameEn: 'Nepal', capital: 'Kathmandu', continent: "asien", population: 30890000, gdpBillionUsd: 41.0, areaKm2: 147181.0, hdi: 0.601, lifeExpectancy: 68.4, kind: "c" },
  { iso2: "NL", iso3: "NLD", key: "528", name: 'Niederlande', nameEn: 'Netherlands', capital: 'Amsterdam', continent: "europa", population: 17880000, gdpBillionUsd: 1118.0, areaKm2: 41543.0, hdi: 0.946, lifeExpectancy: 81.7, kind: "c" },
  { iso2: "NC", iso3: "NCL", key: "540", name: 'Neukaledonien', nameEn: 'New Caledonia', capital: 'Nouméa', continent: "ozeanien", population: 270000, gdpBillionUsd: 10.0, areaKm2: 18575.0, hdi: 0.0, lifeExpectancy: 77.7, kind: "t" },
  { iso2: "NZ", iso3: "NZL", key: "554", name: 'Neuseeland', nameEn: 'New Zealand', capital: 'Wellington', continent: "ozeanien", population: 5220000, gdpBillionUsd: 253.0, areaKm2: 270467.0, hdi: 0.939, lifeExpectancy: 82.1, kind: "c" },
  { iso2: "NI", iso3: "NIC", key: "558", name: 'Nicaragua', nameEn: 'Nicaragua', capital: 'Managua', continent: "nordamerika", population: 7040000, gdpBillionUsd: 18.0, areaKm2: 130373.0, hdi: 0.669, lifeExpectancy: 73.9, kind: "c" },
  { iso2: "NE", iso3: "NER", key: "562", name: 'Niger', nameEn: 'Niger', capital: 'Niamey', continent: "afrika", population: 27200000, gdpBillionUsd: 17.0, areaKm2: 1267000.0, hdi: 0.394, lifeExpectancy: 61.6, kind: "c" },
  { iso2: "NG", iso3: "NGA", key: "566", name: 'Nigeria', nameEn: 'Nigeria', capital: 'Abuja', continent: "afrika", population: 223800000, gdpBillionUsd: 363.0, areaKm2: 923768.0, hdi: 0.548, lifeExpectancy: 52.7, kind: "c" },
  { iso2: "NU", iso3: "NIU", key: "570", name: 'Niue', nameEn: 'Niue', capital: 'Alofi', continent: "ozeanien", population: 2000, gdpBillionUsd: 0.01, areaKm2: 261.0, hdi: 0.0, lifeExpectancy: 73.0, kind: "t" },
  { iso2: "KP", iso3: "PRK", key: "408", name: 'Nordkorea', nameEn: 'North Korea', capital: 'Pjöngjang', continent: "asien", population: 26100000, gdpBillionUsd: 18.0, areaKm2: 120538.0, hdi: 0.0, lifeExpectancy: 73.3, kind: "c" },
  { iso2: "MK", iso3: "MKD", key: "807", name: 'Nordmazedonien', nameEn: 'North Macedonia', capital: 'Skopje', continent: "europa", population: 1830000, gdpBillionUsd: 15.0, areaKm2: 25713.0, hdi: 0.765, lifeExpectancy: 74.6, kind: "c" },
  { iso2: "MP", iso3: "MNP", key: "580", name: 'Nördliche Marianen', nameEn: 'Northern Mariana Islands', capital: 'Saipan', continent: "ozeanien", population: 50000, gdpBillionUsd: 1.2, areaKm2: 464.0, hdi: 0.0, lifeExpectancy: 76.0, kind: "t" },
  { iso2: "NO", iso3: "NOR", key: "578", name: 'Norwegen', nameEn: 'Norway', capital: 'Oslo', continent: "europa", population: 5470000, gdpBillionUsd: 485.0, areaKm2: 385207.0, hdi: 0.966, lifeExpectancy: 83.3, kind: "c" },
  { iso2: "OM", iso3: "OMN", key: "512", name: 'Oman', nameEn: 'Oman', capital: 'Maskat', continent: "asien", population: 4600000, gdpBillionUsd: 108.0, areaKm2: 309500.0, hdi: 0.819, lifeExpectancy: 72.8, kind: "c" },
  { iso2: "PK", iso3: "PAK", key: "586", name: 'Pakistan', nameEn: 'Pakistan', capital: 'Islamabad', continent: "asien", population: 240500000, gdpBillionUsd: 338.0, areaKm2: 881913.0, hdi: 0.54, lifeExpectancy: 66.4, kind: "c" },
  { iso2: "PW", iso3: "PLW", key: "585", name: 'Palau', nameEn: 'Palau', capital: 'Ngerulmud', continent: "ozeanien", population: 18000, gdpBillionUsd: 0.3, areaKm2: 459.0, hdi: 0.797, lifeExpectancy: 69.1, kind: "c" },
  { iso2: "PS", iso3: "PSE", key: "275", name: 'Palästina', nameEn: 'Palestine', capital: 'Ramallah', continent: "asien", population: 5400000, gdpBillionUsd: 19.0, areaKm2: 6020.0, hdi: 0.716, lifeExpectancy: 73.4, kind: "c" },
  { iso2: "PA", iso3: "PAN", key: "591", name: 'Panama', nameEn: 'Panama', capital: 'Panama-Stadt', continent: "nordamerika", population: 4460000, gdpBillionUsd: 83.0, areaKm2: 75417.0, hdi: 0.82, lifeExpectancy: 76.4, kind: "c" },
  { iso2: "PG", iso3: "PNG", key: "598", name: 'Papua-Neuguinea', nameEn: 'Papua New Guinea', capital: 'Port Moresby', continent: "ozeanien", population: 10330000, gdpBillionUsd: 31.0, areaKm2: 462840.0, hdi: 0.568, lifeExpectancy: 65.4, kind: "c" },
  { iso2: "PY", iso3: "PRY", key: "600", name: 'Paraguay', nameEn: 'Paraguay', capital: 'Asunción', continent: "suedamerika", population: 6860000, gdpBillionUsd: 43.0, areaKm2: 406752.0, hdi: 0.731, lifeExpectancy: 70.3, kind: "c" },
  { iso2: "PE", iso3: "PER", key: "604", name: 'Peru', nameEn: 'Peru', capital: 'Lima', continent: "suedamerika", population: 34350000, gdpBillionUsd: 268.0, areaKm2: 1285216.0, hdi: 0.762, lifeExpectancy: 72.4, kind: "c" },
  { iso2: "PH", iso3: "PHL", key: "608", name: 'Philippinen', nameEn: 'Philippines', capital: 'Manila', continent: "asien", population: 117300000, gdpBillionUsd: 437.0, areaKm2: 300000.0, hdi: 0.71, lifeExpectancy: 69.3, kind: "c" },
  { iso2: "PN", iso3: "PCN", key: "612", name: 'Pitcairninseln', nameEn: 'Pitcairn Islands', capital: 'Adamstown', continent: "ozeanien", population: 50, gdpBillionUsd: 0.0, areaKm2: 47.0, hdi: 0.0, lifeExpectancy: 0.0, kind: "t" },
  { iso2: "PL", iso3: "POL", key: "616", name: 'Polen', nameEn: 'Poland', capital: 'Warschau', continent: "europa", population: 41030000, gdpBillionUsd: 811.0, areaKm2: 312679.0, hdi: 0.881, lifeExpectancy: 77.1, kind: "c" },
  { iso2: "PT", iso3: "PRT", key: "620", name: 'Portugal', nameEn: 'Portugal', capital: 'Lissabon', continent: "europa", population: 10470000, gdpBillionUsd: 287.0, areaKm2: 92212.0, hdi: 0.874, lifeExpectancy: 81.6, kind: "c" },
  { iso2: "PR", iso3: "PRI", key: "630", name: 'Puerto Rico', nameEn: 'Puerto Rico', capital: 'San Juan', continent: "nordamerika", population: 3200000, gdpBillionUsd: 117.0, areaKm2: 9104.0, hdi: 0.0, lifeExpectancy: 79.7, kind: "t" },
  { iso2: "QA", iso3: "QAT", key: "634", name: 'Katar', nameEn: 'Qatar', capital: 'Doha', continent: "asien", population: 2700000, gdpBillionUsd: 236.0, areaKm2: 11586.0, hdi: 0.875, lifeExpectancy: 79.3, kind: "c" },
  { iso2: "RE", iso3: "REU", key: "638", name: 'Réunion', nameEn: 'Réunion', capital: 'Saint-Denis', continent: "afrika", population: 870000, gdpBillionUsd: 22.0, areaKm2: 2511.0, hdi: 0.0, lifeExpectancy: 81.0, kind: "t" },
  { iso2: "RO", iso3: "ROU", key: "642", name: 'Rumänien', nameEn: 'Romania', capital: 'Bukarest', continent: "europa", population: 19060000, gdpBillionUsd: 351.0, areaKm2: 238397.0, hdi: 0.827, lifeExpectancy: 74.3, kind: "c" },
  { iso2: "RU", iso3: "RUS", key: "643", name: 'Russland', nameEn: 'Russia', capital: 'Moskau', continent: "europa", population: 144200000, gdpBillionUsd: 1870.0, areaKm2: 17098242.0, hdi: 0.821, lifeExpectancy: 72.6, kind: "c" },
  { iso2: "RW", iso3: "RWA", key: "646", name: 'Ruanda', nameEn: 'Rwanda', capital: 'Kigali', continent: "afrika", population: 14090000, gdpBillionUsd: 14.0, areaKm2: 26338.0, hdi: 0.548, lifeExpectancy: 66.1, kind: "c" },
  { iso2: "BL", iso3: "BLM", key: "652", name: 'Saint-Barthélemy', nameEn: 'Saint Barthélemy', capital: 'Gustavia', continent: "nordamerika", population: 10000, gdpBillionUsd: 0.2, areaKm2: 25.0, hdi: 0.0, lifeExpectancy: 80.0, kind: "t" },
  { iso2: "SH", iso3: "SHN", key: "654", name: 'St. Helena', nameEn: 'Saint Helena', capital: 'Jamestown', continent: "afrika", population: 5400, gdpBillionUsd: 0.04, areaKm2: 122.0, hdi: 0.0, lifeExpectancy: 79.0, kind: "t" },
  { iso2: "KN", iso3: "KNA", key: "659", name: 'St. Kitts und Nevis', nameEn: 'Saint Kitts and Nevis', capital: 'Basseterre', continent: "nordamerika", population: 48000, gdpBillionUsd: 1.1, areaKm2: 261.0, hdi: 0.838, lifeExpectancy: 71.8, kind: "c" },
  { iso2: "LC", iso3: "LCA", key: "662", name: 'St. Lucia', nameEn: 'Saint Lucia', capital: 'Castries', continent: "nordamerika", population: 180000, gdpBillionUsd: 2.2, areaKm2: 616.0, hdi: 0.725, lifeExpectancy: 71.3, kind: "c" },
  { iso2: "MF", iso3: "MAF", key: "663", name: 'Saint-Martin', nameEn: 'Saint Martin', capital: 'Marigot', continent: "nordamerika", population: 32000, gdpBillionUsd: 0.6, areaKm2: 54.0, hdi: 0.0, lifeExpectancy: 80.0, kind: "t" },
  { iso2: "PM", iso3: "SPM", key: "666", name: 'Saint-Pierre und Miquelon', nameEn: 'Saint Pierre and Miquelon', capital: 'Saint-Pierre', continent: "nordamerika", population: 6000, gdpBillionUsd: 0.3, areaKm2: 242.0, hdi: 0.0, lifeExpectancy: 80.0, kind: "t" },
  { iso2: "VC", iso3: "VCT", key: "670", name: 'St. Vincent und die Grenadinen', nameEn: 'Saint Vincent and the Grenadines', capital: 'Kingstown', continent: "nordamerika", population: 104000, gdpBillionUsd: 1.0, areaKm2: 389.0, hdi: 0.772, lifeExpectancy: 69.6, kind: "c" },
  { iso2: "WS", iso3: "WSM", key: "882", name: 'Samoa', nameEn: 'Samoa', capital: 'Apia', continent: "ozeanien", population: 220000, gdpBillionUsd: 0.9, areaKm2: 2842.0, hdi: 0.702, lifeExpectancy: 72.8, kind: "c" },
  { iso2: "SM", iso3: "SMR", key: "674", name: 'San Marino', nameEn: 'San Marino', capital: 'San Marino', continent: "europa", population: 34000, gdpBillionUsd: 1.9, areaKm2: 61.0, hdi: 0.853, lifeExpectancy: 85.4, kind: "c" },
  { iso2: "ST", iso3: "STP", key: "678", name: 'São Tomé und Príncipe', nameEn: 'Sao Tome and Principe', capital: 'São Tomé', continent: "afrika", population: 230000, gdpBillionUsd: 0.7, areaKm2: 964.0, hdi: 0.613, lifeExpectancy: 67.6, kind: "c" },
  { iso2: "SA", iso3: "SAU", key: "682", name: 'Saudi-Arabien', nameEn: 'Saudi Arabia', capital: 'Riad', continent: "asien", population: 36950000, gdpBillionUsd: 1068.0, areaKm2: 2149690.0, hdi: 0.875, lifeExpectancy: 77.0, kind: "c" },
  { iso2: "SN", iso3: "SEN", key: "686", name: 'Senegal', nameEn: 'Senegal', capital: 'Dakar', continent: "afrika", population: 17720000, gdpBillionUsd: 31.0, areaKm2: 196722.0, hdi: 0.517, lifeExpectancy: 67.1, kind: "c" },
  { iso2: "RS", iso3: "SRB", key: "688", name: 'Serbien', nameEn: 'Serbia', capital: 'Belgrad', continent: "europa", population: 6660000, gdpBillionUsd: 75.0, areaKm2: 77474.0, hdi: 0.805, lifeExpectancy: 74.2, kind: "c" },
  { iso2: "SC", iso3: "SYC", key: "690", name: 'Seychellen', nameEn: 'Seychelles', capital: 'Victoria', continent: "afrika", population: 100000, gdpBillionUsd: 2.1, areaKm2: 452.0, hdi: 0.802, lifeExpectancy: 73.4, kind: "c" },
  { iso2: "SL", iso3: "SLE", key: "694", name: 'Sierra Leone', nameEn: 'Sierra Leone', capital: 'Freetown', continent: "afrika", population: 8800000, gdpBillionUsd: 4.1, areaKm2: 71740.0, hdi: 0.458, lifeExpectancy: 60.4, kind: "c" },
  { iso2: "SG", iso3: "SGP", key: "702", name: 'Singapur', nameEn: 'Singapore', capital: 'Singapur', continent: "asien", population: 5920000, gdpBillionUsd: 501.0, areaKm2: 728.0, hdi: 0.949, lifeExpectancy: 83.7, kind: "c" },
  { iso2: "SX", iso3: "SXM", key: "534", name: 'Sint Maarten', nameEn: 'Sint Maarten', capital: 'Philipsburg', continent: "nordamerika", population: 44000, gdpBillionUsd: 1.5, areaKm2: 34.0, hdi: 0.0, lifeExpectancy: 78.0, kind: "t" },
  { iso2: "SK", iso3: "SVK", key: "703", name: 'Slowakei', nameEn: 'Slovakia', capital: 'Bratislava', continent: "europa", population: 5430000, gdpBillionUsd: 133.0, areaKm2: 49035.0, hdi: 0.855, lifeExpectancy: 74.9, kind: "c" },
  { iso2: "SI", iso3: "SVN", key: "705", name: 'Slowenien', nameEn: 'Slovenia', capital: 'Ljubljana', continent: "europa", population: 2120000, gdpBillionUsd: 68.0, areaKm2: 20273.0, hdi: 0.926, lifeExpectancy: 81.3, kind: "c" },
  { iso2: "SB", iso3: "SLB", key: "090", name: 'Salomonen', nameEn: 'Solomon Islands', capital: 'Honiara', continent: "ozeanien", population: 740000, gdpBillionUsd: 1.6, areaKm2: 28896.0, hdi: 0.562, lifeExpectancy: 70.3, kind: "c" },
  { iso2: "SO", iso3: "SOM", key: "706", name: 'Somalia', nameEn: 'Somalia', capital: 'Mogadischu', continent: "afrika", population: 18140000, gdpBillionUsd: 12.0, areaKm2: 637657.0, hdi: 0.38, lifeExpectancy: 55.3, kind: "c" },
  { iso2: "ZA", iso3: "ZAF", key: "710", name: 'Südafrika', nameEn: 'South Africa', capital: 'Pretoria', continent: "afrika", population: 60410000, gdpBillionUsd: 378.0, areaKm2: 1221037.0, hdi: 0.717, lifeExpectancy: 62.3, kind: "c" },
  { iso2: "KR", iso3: "KOR", key: "410", name: 'Südkorea', nameEn: 'South Korea', capital: 'Seoul', continent: "asien", population: 51710000, gdpBillionUsd: 1710.0, areaKm2: 100339.0, hdi: 0.929, lifeExpectancy: 83.7, kind: "c" },
  { iso2: "SS", iso3: "SSD", key: "728", name: 'Südsudan', nameEn: 'South Sudan', capital: 'Juba', continent: "afrika", population: 11000000, gdpBillionUsd: 5.0, areaKm2: 644329.0, hdi: 0.381, lifeExpectancy: 55.0, kind: "c" },
  { iso2: "ES", iso3: "ESP", key: "724", name: 'Spanien', nameEn: 'Spain', capital: 'Madrid', continent: "europa", population: 48350000, gdpBillionUsd: 1581.0, areaKm2: 505990.0, hdi: 0.911, lifeExpectancy: 83.3, kind: "c" },
  { iso2: "LK", iso3: "LKA", key: "144", name: 'Sri Lanka', nameEn: 'Sri Lanka', capital: 'Sri Jayawardenepura Kotte', continent: "asien", population: 22000000, gdpBillionUsd: 84.0, areaKm2: 65610.0, hdi: 0.78, lifeExpectancy: 76.6, kind: "c" },
  { iso2: "SD", iso3: "SDN", key: "729", name: 'Sudan', nameEn: 'Sudan', capital: 'Khartum', continent: "afrika", population: 48110000, gdpBillionUsd: 26.0, areaKm2: 1861484.0, hdi: 0.516, lifeExpectancy: 65.3, kind: "c" },
  { iso2: "SR", iso3: "SUR", key: "740", name: 'Suriname', nameEn: 'Suriname', capital: 'Paramaribo', continent: "suedamerika", population: 623000, gdpBillionUsd: 3.5, areaKm2: 163820.0, hdi: 0.69, lifeExpectancy: 70.3, kind: "c" },
  { iso2: "SE", iso3: "SWE", key: "752", name: 'Schweden', nameEn: 'Sweden', capital: 'Stockholm', continent: "europa", population: 10550000, gdpBillionUsd: 585.0, areaKm2: 450295.0, hdi: 0.952, lifeExpectancy: 83.1, kind: "c" },
  { iso2: "CH", iso3: "CHE", key: "756", name: 'Schweiz', nameEn: 'Switzerland', capital: 'Bern', continent: "europa", population: 8900000, gdpBillionUsd: 885.0, areaKm2: 41285.0, hdi: 0.967, lifeExpectancy: 83.9, kind: "c" },
  { iso2: "SY", iso3: "SYR", key: "760", name: 'Syrien', nameEn: 'Syria', capital: 'Damaskus', continent: "asien", population: 23200000, gdpBillionUsd: 9.0, areaKm2: 185180.0, hdi: 0.557, lifeExpectancy: 72.1, kind: "c" },
  { iso2: "TW", iso3: "TWN", key: "158", name: 'Taiwan', nameEn: 'Taiwan', capital: 'Taipeh', continent: "asien", population: 23920000, gdpBillionUsd: 755.0, areaKm2: 36197.0, hdi: 0.926, lifeExpectancy: 80.2, kind: "c" },
  { iso2: "TJ", iso3: "TJK", key: "762", name: 'Tadschikistan', nameEn: 'Tajikistan', capital: 'Duschanbe', continent: "asien", population: 10140000, gdpBillionUsd: 12.0, areaKm2: 143100.0, hdi: 0.679, lifeExpectancy: 71.1, kind: "c" },
  { iso2: "TZ", iso3: "TZA", key: "834", name: 'Tansania', nameEn: 'Tanzania', capital: 'Dodoma', continent: "afrika", population: 67440000, gdpBillionUsd: 79.0, areaKm2: 947303.0, hdi: 0.532, lifeExpectancy: 66.8, kind: "c" },
  { iso2: "TH", iso3: "THA", key: "764", name: 'Thailand', nameEn: 'Thailand', capital: 'Bangkok', continent: "asien", population: 71700000, gdpBillionUsd: 515.0, areaKm2: 513120.0, hdi: 0.803, lifeExpectancy: 76.4, kind: "c" },
  { iso2: "TL", iso3: "TLS", key: "626", name: 'Timor-Leste', nameEn: 'Timor-Leste', capital: 'Dili', continent: "asien", population: 1360000, gdpBillionUsd: 2.0, areaKm2: 14874.0, hdi: 0.566, lifeExpectancy: 67.4, kind: "c" },
  { iso2: "TG", iso3: "TGO", key: "768", name: 'Togo', nameEn: 'Togo', capital: 'Lomé', continent: "afrika", population: 9100000, gdpBillionUsd: 9.0, areaKm2: 56785.0, hdi: 0.547, lifeExpectancy: 61.6, kind: "c" },
  { iso2: "TO", iso3: "TON", key: "776", name: 'Tonga', nameEn: 'Tonga', capital: 'Nukuʻalofa', continent: "ozeanien", population: 105000, gdpBillionUsd: 0.5, areaKm2: 747.0, hdi: 0.739, lifeExpectancy: 71.0, kind: "c" },
  { iso2: "TT", iso3: "TTO", key: "780", name: 'Trinidad und Tobago', nameEn: 'Trinidad and Tobago', capital: 'Port of Spain', continent: "nordamerika", population: 1500000, gdpBillionUsd: 28.0, areaKm2: 5128.0, hdi: 0.814, lifeExpectancy: 73.0, kind: "c" },
  { iso2: "TN", iso3: "TUN", key: "788", name: 'Tunesien', nameEn: 'Tunisia', capital: 'Tunis', continent: "afrika", population: 12460000, gdpBillionUsd: 48.0, areaKm2: 163610.0, hdi: 0.732, lifeExpectancy: 74.0, kind: "c" },
  { iso2: "TR", iso3: "TUR", key: "792", name: 'Türkei', nameEn: 'Turkey', capital: 'Ankara', continent: "asien", population: 85820000, gdpBillionUsd: 1110.0, areaKm2: 783562.0, hdi: 0.855, lifeExpectancy: 76.0, kind: "c" },
  { iso2: "TM", iso3: "TKM", key: "795", name: 'Turkmenistan', nameEn: 'Turkmenistan', capital: 'Aschgabat', continent: "asien", population: 6500000, gdpBillionUsd: 60.0, areaKm2: 488100.0, hdi: 0.744, lifeExpectancy: 69.4, kind: "c" },
  { iso2: "TC", iso3: "TCA", key: "796", name: 'Turks- und Caicosinseln', nameEn: 'Turks and Caicos Islands', capital: 'Cockburn Town', continent: "nordamerika", population: 46000, gdpBillionUsd: 1.2, areaKm2: 948.0, hdi: 0.0, lifeExpectancy: 80.0, kind: "t" },
  { iso2: "TV", iso3: "TUV", key: "798", name: 'Tuvalu', nameEn: 'Tuvalu', capital: 'Funafuti', continent: "ozeanien", population: 11000, gdpBillionUsd: 0.06, areaKm2: 26.0, hdi: 0.653, lifeExpectancy: 64.5, kind: "c" },
  { iso2: "UG", iso3: "UGA", key: "800", name: 'Uganda', nameEn: 'Uganda', capital: 'Kampala', continent: "afrika", population: 48600000, gdpBillionUsd: 50.0, areaKm2: 241038.0, hdi: 0.55, lifeExpectancy: 62.9, kind: "c" },
  { iso2: "UA", iso3: "UKR", key: "804", name: 'Ukraine', nameEn: 'Ukraine', capital: 'Kiew', continent: "europa", population: 37700000, gdpBillionUsd: 179.0, areaKm2: 603550.0, hdi: 0.734, lifeExpectancy: 71.6, kind: "c" },
  { iso2: "AE", iso3: "ARE", key: "784", name: 'Vereinigte Arabische Emirate', nameEn: 'United Arab Emirates', capital: 'Abu Dhabi', continent: "asien", population: 9510000, gdpBillionUsd: 514.0, areaKm2: 83600.0, hdi: 0.937, lifeExpectancy: 78.7, kind: "c" },
  { iso2: "GB", iso3: "GBR", key: "826", name: 'Vereinigtes Königreich', nameEn: 'United Kingdom', capital: 'London', continent: "europa", population: 67740000, gdpBillionUsd: 3340.0, areaKm2: 242495.0, hdi: 0.94, lifeExpectancy: 80.7, kind: "c" },
  { iso2: "US", iso3: "USA", key: "840", name: 'Vereinigte Staaten', nameEn: 'United States', capital: 'Washington, D.C.', continent: "nordamerika", population: 334900000, gdpBillionUsd: 27360.0, areaKm2: 9833517.0, hdi: 0.927, lifeExpectancy: 77.4, kind: "c" },
  { iso2: "UY", iso3: "URY", key: "858", name: 'Uruguay', nameEn: 'Uruguay', capital: 'Montevideo', continent: "suedamerika", population: 3420000, gdpBillionUsd: 77.0, areaKm2: 176215.0, hdi: 0.83, lifeExpectancy: 75.4, kind: "c" },
  { iso2: "UZ", iso3: "UZB", key: "860", name: 'Usbekistan', nameEn: 'Uzbekistan', capital: 'Taschkent', continent: "asien", population: 35650000, gdpBillionUsd: 91.0, areaKm2: 447400.0, hdi: 0.727, lifeExpectancy: 70.9, kind: "c" },
  { iso2: "VU", iso3: "VUT", key: "548", name: 'Vanuatu', nameEn: 'Vanuatu', capital: 'Port Vila', continent: "ozeanien", population: 330000, gdpBillionUsd: 1.1, areaKm2: 12189.0, hdi: 0.614, lifeExpectancy: 70.4, kind: "c" },
  { iso2: "VA", iso3: "VAT", key: "336", name: 'Vatikanstadt', nameEn: 'Vatican', capital: 'Vatikanstadt', continent: "europa", population: 800, gdpBillionUsd: 0.02, areaKm2: 0.44, hdi: 0.0, lifeExpectancy: 81.0, kind: "c" },
  { iso2: "VE", iso3: "VEN", key: "862", name: 'Venezuela', nameEn: 'Venezuela', capital: 'Caracas', continent: "suedamerika", population: 28300000, gdpBillionUsd: 92.0, areaKm2: 912050.0, hdi: 0.699, lifeExpectancy: 70.9, kind: "c" },
  { iso2: "VN", iso3: "VNM", key: "704", name: 'Vietnam', nameEn: 'Vietnam', capital: 'Hanoi', continent: "asien", population: 98860000, gdpBillionUsd: 434.0, areaKm2: 331212.0, hdi: 0.726, lifeExpectancy: 73.6, kind: "c" },
  { iso2: "VG", iso3: "VGB", key: "092", name: 'Britische Jungferninseln', nameEn: 'British Virgin Islands', capital: 'Road Town', continent: "nordamerika", population: 39000, gdpBillionUsd: 1.5, areaKm2: 151.0, hdi: 0.0, lifeExpectancy: 79.0, kind: "t" },
  { iso2: "VI", iso3: "VIR", key: "850", name: 'Amerikanische Jungferninseln', nameEn: 'U.S. Virgin Islands', capital: 'Charlotte Amalie', continent: "nordamerika", population: 87000, gdpBillionUsd: 4.6, areaKm2: 347.0, hdi: 0.0, lifeExpectancy: 79.5, kind: "t" },
  { iso2: "WF", iso3: "WLF", key: "876", name: 'Wallis und Futuna', nameEn: 'Wallis and Futuna', capital: 'Mata-Utu', continent: "ozeanien", population: 11000, gdpBillionUsd: 0.06, areaKm2: 142.0, hdi: 0.0, lifeExpectancy: 78.0, kind: "t" },
  { iso2: "EH", iso3: "ESH", key: "732", name: 'Westsahara', nameEn: 'Western Sahara', capital: 'El Aaiún', continent: "afrika", population: 580000, gdpBillionUsd: 0.9, areaKm2: 266000.0, hdi: 0.0, lifeExpectancy: 70.0, kind: "t" },
  { iso2: "YE", iso3: "YEM", key: "887", name: 'Jemen', nameEn: 'Yemen', capital: 'Sanaa', continent: "asien", population: 34450000, gdpBillionUsd: 21.0, areaKm2: 527968.0, hdi: 0.424, lifeExpectancy: 63.7, kind: "c" },
  { iso2: "ZM", iso3: "ZMB", key: "894", name: 'Sambia', nameEn: 'Zambia', capital: 'Lusaka', continent: "afrika", population: 20570000, gdpBillionUsd: 28.0, areaKm2: 752612.0, hdi: 0.569, lifeExpectancy: 61.2, kind: "c" },
  { iso2: "ZW", iso3: "ZWE", key: "716", name: 'Simbabwe', nameEn: 'Zimbabwe', capital: 'Harare', continent: "afrika", population: 16670000, gdpBillionUsd: 32.0, areaKm2: 390757.0, hdi: 0.55, lifeExpectancy: 59.2, kind: "c" },
  { iso2: "AX", iso3: "ALA", key: "248", name: 'Åland', nameEn: 'Åland', capital: 'Mariehamn', continent: "europa", population: 30000, gdpBillionUsd: 1.6, areaKm2: 1580.0, hdi: 0.0, lifeExpectancy: 82.0, kind: "t" },
  { iso2: "NCX", iso3: "NCX", key: "name:N. Cyprus", name: 'Nordzypern', nameEn: 'Northern Cyprus', capital: 'Nord-Nikosia', continent: "europa", population: 380000, gdpBillionUsd: 4.0, areaKm2: 3355.0, hdi: 0.0, lifeExpectancy: 78.0, kind: "t" },
  { iso2: "SOL", iso3: "SOL", key: "name:Somaliland", name: 'Somaliland', nameEn: 'Somaliland', capital: 'Hargeisa', continent: "afrika", population: 5800000, gdpBillionUsd: 3.5, areaKm2: 176120.0, hdi: 0.0, lifeExpectancy: 64.0, kind: "t" },
  { iso2: "GS", iso3: "SGS", key: "239", name: 'Südgeorgien und die Südlichen Sandwichinseln', nameEn: 'South Georgia', capital: 'King Edward Point', continent: "suedamerika", population: 30, gdpBillionUsd: 0.0, areaKm2: 3903.0, hdi: 0.0, lifeExpectancy: 0.0, kind: "t" },
  { iso2: "IO", iso3: "IOT", key: "086", name: 'Britisches Territorium im Indischen Ozean', nameEn: 'British Indian Ocean Territory', capital: 'Diego Garcia', continent: "asien", population: 3000, gdpBillionUsd: 0.0, areaKm2: 60.0, hdi: 0.0, lifeExpectancy: 0.0, kind: "t" },
  { iso2: "HM", iso3: "HMD", key: "334", name: 'Heard und McDonaldinseln', nameEn: 'Heard Island and McDonald Islands', capital: '', continent: "antarktika", population: 0, gdpBillionUsd: 0.0, areaKm2: 412.0, hdi: 0.0, lifeExpectancy: 0.0, kind: "x" },
  { iso2: "NF", iso3: "NFK", key: "574", name: 'Norfolkinsel', nameEn: 'Norfolk Island', capital: 'Kingston', continent: "ozeanien", population: 2200, gdpBillionUsd: 0.0, areaKm2: 35.0, hdi: 0.0, lifeExpectancy: 0.0, kind: "t" },
  { iso2: "IOT", iso3: "ATF", key: "name:Indian Ocean Ter.", name: 'Französische Inseln im Indischen Ozean', nameEn: 'Indian Ocean Territories', capital: '', continent: "afrika", population: 0, gdpBillionUsd: 0.0, areaKm2: 0.0, hdi: 0.0, lifeExpectancy: 0.0, kind: "x" },
  { iso2: "SXX", iso3: "SXX", key: "name:Siachen Glacier", name: 'Siachen-Gletscher', nameEn: 'Siachen Glacier', capital: '', continent: "asien", population: 0, gdpBillionUsd: 0.0, areaKm2: 0.0, hdi: 0.0, lifeExpectancy: 0.0, kind: "x" },
  { iso2: "ACI", iso3: "ACI", key: "name:Ashmore", name: 'Ashmore- und Cartierinseln', nameEn: 'Ashmore and Cartier Islands', capital: '', continent: "ozeanien", population: 0, gdpBillionUsd: 0.0, areaKm2: 199.0, hdi: 0.0, lifeExpectancy: 0.0, kind: "t" },
];

export const COUNTRY_BY_KEY: Record<string, Country> = Object.fromEntries(
  COUNTRIES.map((c) => [c.key, c]),
);

export const COUNTRY_BY_ISO2: Record<string, Country> = Object.fromEntries(
  COUNTRIES.map((c) => [c.iso2, c]),
);

export const COUNTABLE_COUNTRIES = COUNTRIES.filter((c) => c.kind === "c");

export function gdpPerCapita(c: Country): number {
  if (c.population <= 0) return 0;
  return (c.gdpBillionUsd * 1_000_000_000) / c.population;
}

export function matchFeatureKey(id: string | number | null | undefined, name?: string): string {
  if (name && NAME_FEATURE_KEYS[name]) return NAME_FEATURE_KEYS[name];
  if (id !== null && id !== undefined && String(id).length > 0) {
    const padded = String(id).padStart(3, "0");
    if (COUNTRY_BY_KEY[padded]) return padded;
    if (name) return `name:${name}`;
    return padded;
  }
  if (name) return `name:${name}`;
  return "";
}

const NAME_FEATURE_KEYS: Record<string, string> = {
  Kosovo: "name:Kosovo",
  Somaliland: "name:Somaliland",
  "N. Cyprus": "name:N. Cyprus",
  "Ashmore and Cartier Is.": "name:Ashmore",
  "Siachen Glacier": "name:Siachen Glacier",
  "Indian Ocean Ter.": "name:Indian Ocean Ter.",
};
