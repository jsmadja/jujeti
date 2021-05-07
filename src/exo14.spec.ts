import axios from 'axios';

interface Department {
  code: number;
  nom: string;
}

async function getDepartment(): Promise<Department[]> {
  try {
    const departments = await axios.get('https://geo.api.gouv.fr/departements');
    return departments.data.filter((d: { code: number }) => d.code % 2 !== 0);
  } catch (error) {
    return error;
  }
}

test('should filter odd department V1 with then()', () => {
  return getDepartment()
    .then((departments) => {
      const depsFiltered = departments.filter((dep) => dep.code % 3 === 0);
      expect(depsFiltered.length).toStrictEqual(16);
    });
});

test('should filter odd department V2 with async await', async () => {
  const deps = await getDepartment();
  const depsFiltered = deps.filter((dep) => dep.code % 3 === 0);
  expect(depsFiltered.length).toStrictEqual(16);
});

// https://geo.api.gouv.fr/departements
