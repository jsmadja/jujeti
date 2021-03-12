import axios from 'axios';

async function getDepartment(): Promise<any> {
  try {
    const departments = await axios.get('https://geo.api.gouv.fr/departements');
    return departments.data.filter((d: { code: any }) => d.code % 2 !== 0);
  } catch (error) {
    return error;
  }
}

test('should filter odd department', async () => {
  expect(
    await getDepartment().then((d) => d.map((dep: { code: any; nom: any }) => `${dep.code} : ${dep.nom}`).join('\n')),
  ).toBe(`01 : Ain
03 : Allier
05 : Hautes-Alpes
07 : Ardèche
09 : Ariège
11 : Aude
13 : Bouches-du-Rhône
15 : Cantal
17 : Charente-Maritime
19 : Corrèze
21 : Côte-d'Or
23 : Creuse
25 : Doubs
27 : Eure
29 : Finistère
2A : Corse-du-Sud
2B : Haute-Corse
31 : Haute-Garonne
33 : Gironde
35 : Ille-et-Vilaine
37 : Indre-et-Loire
39 : Jura
41 : Loir-et-Cher
43 : Haute-Loire
45 : Loiret
47 : Lot-et-Garonne
49 : Maine-et-Loire
51 : Marne
53 : Mayenne
55 : Meuse
57 : Moselle
59 : Nord
61 : Orne
63 : Puy-de-Dôme
65 : Hautes-Pyrénées
67 : Bas-Rhin
69 : Rhône
71 : Saône-et-Loire
73 : Savoie
75 : Paris
77 : Seine-et-Marne
79 : Deux-Sèvres
81 : Tarn
83 : Var
85 : Vendée
87 : Haute-Vienne
89 : Yonne
91 : Essonne
93 : Seine-Saint-Denis
95 : Val-d'Oise
971 : Guadeloupe
973 : Guyane`);
});

// https://geo.api.gouv.fr/departements
