/* THEME: Higher Order Functions */

/* LEVEL 3 */

/* ================= Task 1 ================= */

// 1. Sort by name
const countriesSortedByName = countries.slice().sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  
  // console.log(countriesSortedByName);
  
  // 2. Sort by capital
  const countriesSortedByCapital = countries.slice().sort((a, b) => {
    return a.capital.localeCompare(b.capital);
  });
  
  // console.log(countriesSortedByCapital);
  
  // 3. Sort by population
  const countriesSortedByPopulation = countries.slice().sort((a, b) => {
    return a.population - b.population;
  });
  
  // console.log(countriesSortedByPopulation);
  
  /* ================= Task 2 ================= */
  function mostSpokenLanguages(countries, count) {
    const languageCounts = {};
  
    countries.forEach((country) => {
      country.languages.forEach((language) => {
        if (languageCounts[language]) {
          languageCounts[language]++;
        } else {
          languageCounts[language] = 1;
        }
      });
    });
  
    const languageCountsArray = Object.entries(languageCounts).map(
      ([language, count]) => ({
        language,
        count,
      })
    );
  
    languageCountsArray.sort((a, b) => b.count - a.count);
  
    return languageCountsArray.slice(0, count);
  }
  
  console.log(mostSpokenLanguages(countries, 10));
  