 Tłumaczenia interfejsu
const tlumaczenia = {
  pl: { tytul: "Herbarz", podtytul: "Herby i genealogia", szukaj: "Szukaj herbu lub nazwiska...", nazwiska: "Nazwiska", brak: "Nie znaleziono herbu ani nazwiska.", dir: "ltr", zapisz: "Zapisz to", udostepnij: "Przekaż dalej", zapisano: "Zapisano", juzZapisane: "Już zapisane", linkSkopiowany: "Link skopiowany" },
  en: { tytul: "Armorial", podtytul: "Coats of Arms and Genealogy", szukaj: "Search coat of arms or surname...", nazwiska: "Surnames", brak: "No coat of arms or surname found.", dir: "ltr", zapisz: "Save this", udostepnij: "Share", zapisano: "Saved", juzZapisane: "Already saved", linkSkopiowany: "Link copied" },
  de: { tytul: "Wappenbuch", podtytul: "Wappen und Genealogie", szukaj: "Wappen oder Nachnamen suchen...", nazwiska: "Nachnamen", brak: "Kein Wappen oder Nachname gefunden.", dir: "ltr", zapisz: "Speichern", udostepnij: "Weiterleiten", zapisano: "Gespeichert", juzZapisane: "Bereits gespeichert", linkSkopiowany: "Link kopiert" },
  fr: { tytul: "Armorial", podtytul: "Armoiries et généalogie", szukaj: "Rechercher armoiries ou nom de famille...", nazwiska: "Noms de famille", brak: "Aucune armoirie ou nom de famille trouvé.", dir: "ltr", zapisz: "Enregistrer", udostepnij: "Partager", zapisano: "Enregistré", juzZapisane: "Déjà enregistré", linkSkopiowany: "Lien copié" },
  es: { tytul: "Heráldica", podtytul: "Escudos y genealogía", szukaj: "Buscar escudo o apellido...", nazwiska: "Apellidos", brak: "No se encontró escudo ni apellido.", dir: "ltr", zapisz: "Guardar", udostepnij: "Compartir", zapisano: "Guardado", juzZapisane: "Ya guardado", linkSkopiowany: "Enlace copiado" },
  pt: { tytul: "Brasões", podtytul: "Brasões e genealogia", szukaj: "Pesquisar brasão ou sobrenome...", nazwiska: "Sobrenomes", brak: "Nenhum brasão ou sobrenome encontrado.", dir: "ltr", zapisz: "Salvar", udostepnij: "Compartilhar", zapisano: "Salvo", juzZapisane: "Já salvo", linkSkopiowany: "Link copiado" },
  it: { tytul: "Araldica", podtytul: "Stemmi e genealogia", szukaj: "Cerca stemma o cognome...", nazwiska: "Cognomi", brak: "Nessuno stemma o cognome trovato.", dir: "ltr", zapisz: "Salva", udostepnij: "Condividi", zapisano: "Salvato", juzZapisane: "Già salvato", linkSkopiowany: "Link copiato" },
  se: { tytul: "Vapenbok", podtytul: "Vapen och genealogi", szukaj: "Sök vapen eller efternamn...", nazwiska: "Efternamn", brak: "Inget vapen eller efternamn hittades.", dir: "ltr", zapisz: "Spara detta", udostepnij: "Dela vidare", zapisano: "Sparad", juzZapisane: "Redan sparad", linkSkopiowany: "Länk kopierad" },
  no: { tytul: "Våpenbok", podtytul: "Våpen og slektsforskning", szukaj: "Søk våpen eller etternavn...", nazwiska: "Etternavn", brak: "Ingen våpen eller etternavn funnet.", dir: "ltr", zapisz: "Lagre dette", udostepnij: "Del videre", zapisano: "Lagret", juzZapisane: "Allerede lagret", linkSkopiowany: "Lenke kopiert" },
  he: { tytul: "ספר השלטים", podtytul: "שלטי אצולה וגנאלוגיה", szukaj: "חפש שלט אצולה או שם משפחה...", nazwiska: "שמות משפחה", brak: "לא נמצא שלט אצולה או שם משפחה.", dir: "rtl", zapisz: "שמור את זה", udostepnij: "העבר הלאה", zapisano: "נשמר", juzZapisane: "כבר נשמר", linkSkopiowany: "הקישור הועתק" },
  ar: { tytul: "كتاب شعارات النبالة", podtytul: "شعارات النبالة وعلم الأنساب", szukaj: "ابحث عن شعار نبالة أو لقب...", nazwiska: "الألقاب", brak: "لم يتم العثور على شعار نبالة أو لقب.", dir: "rtl", zapisz: "احفظ هذا", udostepnij: "شارك", zapisano: "تم الحفظ", juzZapisane: "محفوظ بالفعل", linkSkopiowany: "تم نسخ الرابط" }
};

// Dane herbów - tu dodajesz swoje
const herby = [
  {
    id: "nalecz",
    nazwa: {
      pl: "Nałęcz", en: "Nałęcz", de: "Nałęcz", fr: "Nałęcz", es: "Nałęcz",
      pt: "Nałęcz", it: "Nałęcz", se: "Nałęcz", no: "Nałęcz", he: "נאלנץ'", ar: "ناوينتش"
    },
    nazwiska: ["Czartoryski", "Małachowski", "Ostroróg", "Szczawiński"],
    opis: {
      pl: "Jeden z najstarszych herbów polskich. W polu czerwonym chusta srebrna związana w koło. Tu wpiszesz opis do 500 znaków o historii, legendach i rodach.",
      en: "One of the oldest Polish coats of arms. On a red field, a silver headband tied in a circle. Here you will enter a 500-character description of history, legends and families.",
      de: "Eines der ältesten polnischen Wappen. Im roten Feld ein silbernes, zu einem Kreis gebundenes Tuch. Hier geben Sie eine 500-Zeichen-Beschreibung zu Geschichte, Legenden und Familien ein.",
      fr: "L'un des plus anciens blasons polonais. De gueules à un bandeau d'argent noué en cercle. Ici, vous saisirez une description de 500 caractères sur l'histoire, les légendes et les familles.",
      es: "Uno de los escudos de armas polacos más antiguos. En campo de gules, una venda de plata atada en círculo. Aquí ingresará una descripción de 500 caracteres sobre historia, leyendas y familias.",
      pt: "Um dos mais antigos brasões polacos. Em campo vermelho, uma faixa de prata atada em círculo. Aqui você irá inserir uma descrição de 500 caracteres sobre história, lendas e famílias.",
      it: "Uno degli stemmi polacchi più antichi. Di rosso, alla benda d'argento annodata in cerchio. Qui inserirai una descrizione di 500 caratteri su storia, leggende e famiglie.",
      se: "Ett av de äldsta polska vapnen. I rött fält ett silverfärgat huvudbindel knutet i en cirkel. Här anger du en 500-teckens beskrivning om historia, legender och familjer.",
      no: "Et av de eldste polske våpnene. I rødt felt et sølvfarget hodebånd knyttet i en sirkel. Her skriver du inn en 500-tegns beskrivelse om historie, legender og familier.",
      he: "אחד משלטי האצולה הפולניים העתיקים ביותר. בשדה אדום, מטפחת כסף קשורה במעגל. כאן תזין תיאור בן 500 תווים על היסטוריה, אגדות ומשפחות.",
      ar: "أحد أقدم شعارات النبالة البولندية. في حقل أحمر، وشاح فضي مربوط على شكل دائرة. هنا ستدخل وصفًا من 500 حرف عن التاريخ والأساطير والعائلات."
    }
  },
  {
    id: "jastrzebiec",
    nazwa: {
      pl: "Jastrzębiec", en: "Jastrzębiec", de: "Jastrzębiec", fr: "Jastrzębiec", es: "Jastrzębiec",
      pt: "Jastrzębiec", it: "Jastrzębiec", se: "Jastrzębiec", no: "Jastrzębiec", he: "יאסצ'מבייץ", ar: "ياسترشيمبيتس"
    },
    nazwiska: ["Zborowski", "Koniecpolski", "Myszkowski", "Tarnowski"],
    opis: {
      pl: "W polu błękitnym podkowa złota barkiem do góry, w środku niej krzyż kawalerski. Tu wpiszesz własny opis do 500 znaków o historii herbu i rodach.",
      en: "On a blue field, a golden horseshoe with ends pointing up, with a cavalier's cross inside. Here you will write your own 500-character description of the coat of arms history and families.",
      de: "Im blauen Feld ein goldenes Hufeisen mit den Enden nach oben, darin ein Kavalierkreuz. Hier schreiben Sie Ihre eigene 500-Zeichen-Beschreibung zur Wappengeschichte und den Familien.",
      fr: "D'azur au fer à cheval d'or, les extrémités vers le chef, chargé d'une croisette de cavalier. Ici, vous écrirez votre propre description de 500 caractères sur l'histoire du blason et les familles.",
      es: "En campo de azur, una herradura de oro con los extremos hacia arriba, cargada de una cruz de caballero. Aquí escribirá su propia descripción de 500 caracteres sobre la historia del escudo y las familias.",
      pt: "Em campo azul, uma ferradura de ouro com as pontas para cima, carregada de uma cruz de cavaleiro. Aqui você escreverá sua própria descrição de 500 caracteres sobre a história do brasão e as famílias.",
      it: "D'azzurro, al ferro di cavallo d'oro, con le estremità verso il capo, caricato di una croce da cavaliere. Qui scriverai la tua descrizione di 500 caratteri sulla storia dello stemma e delle famiglie.",
      se: "I blått fält en gyllene hästsko med ändarna uppåt, belagd med ett kavaljerskors. Här skriver du din egen 500-teckens beskrivning om vapnets historia och familjer.",
      no: "I blått felt en gyllen hestesko med endene opp, belagt med et kavalerikors. Her skriver du din egen 500-tegns beskrivelse om våpenets historie og familier.",
      he: "בשדה כחול, פרסת זהב כשקצותיה כלפי מעלה, ובתוכה צלב אבירים. כאן תכתוב תיאור משלך בן 500 תווים על תולדות השלט והמשפחות.",
      ar: "في حقل أزرق، حدوة حصان ذهبية وأطرافها إلى الأعلى، بداخلها صليب فارس. هنا ستكتب وصفك الخاص المكون من 500 حرف عن تاريخ الشعار والعائلات."
    }
  }
];

let aktualnyJezyk = 'pl';

function zmienJezyk(jezyk) {
  aktualnyJezyk = jezyk;
  document.documentElement.lang = jezyk;
  document.documentElement.dir = tlumaczenia[jezyk].dir;

  document.getElementById('tytul').textContent = tlumaczenia[jezyk].tytul;
  document.getElementById('podtytul').textContent = tlumaczenia[jezyk].podtytul;
  document.getElementById('search').placeholder = tlumaczenia[jezyk].szukaj;

  const szukane = document.getElementById('search').value;
  filtruj(szukane);
}

function zapiszHerb(id) {
  let zapisane = JSON.parse(localStorage.getItem('zapisaneHerby') || '[]');
  if (!zapisane.includes(id)) {
    zapisane.push(id);
    localStorage.setItem('zapisaneHerby', JSON.stringify(zapisane));
    alert(tlumaczenia[aktualnyJezyk].zapisano);
  } else {
    alert(tlumaczenia[aktualnyJezyk].juzZapisane);
  }
}

async function udostepnijHerb(herb) {
  const url = `${window.location.href.split('#')[0]}#${herb.id}`;
  const tekst = `Herb ${herb.nazwa[aktualnyJezyk]} - ${herb.nazwiska.join(', ')}`;

  if (navigator.share) {
    try {
      await navigator.share({ title: tlumaczenia[aktualnyJezyk].tytul, text: tekst, url: url });
    } catch (err) {
      console.log('Udostępnianie anulowane');
    }
  } else {
    navigator.clipboard.writeText(url);
    alert(tlumaczenia[aktualnyJezyk].linkSkopiowany);
  }
}

function wyswietlHerby(listaHerbow) {
  const kontener = document.getElementById('items-list');
  kontener.innerHTML = '';
  if (listaHerbow.length === 0) {
    kontener.innerHTML = `<p>${tlumaczenia[aktualnyJezyk].brak}</p>`;
    return;
  }
  listaHerbow.forEach(herb => {
    const div = document.createElement('div');
    div.className = 'herb-item';
    div.id = herb.id;
    div.innerHTML = `
      <h3>Herb ${herb.nazwa[aktualnyJezyk]}</h3>
      <p><strong>${tlumaczenia[aktualnyJezyk].nazwiska}:</strong> ${herb.nazwiska.join(', ')}</p>
      <p>${herb.opis[aktualnyJezyk]}</p>
      <div class="herb-actions">
        <button onclick="zapiszHerb('${herb.id}')">${tlumaczenia[aktualnyJezyk].zapisz}</button>
        <button onclick='udostepnijHerb(${JSON.stringify(herb)})'>${tlumaczenia[aktualnyJezyk].udostepnij}</button>
      </div>
    `;
    kontener.appendChild(div);
  });
}

function filtruj(szukane) {
  const fraza = szukane.toLowerCase();
  const przefiltrowane = herby.filter(herb => {
    const nazwaHerbu = herb.nazwa[aktualnyJezyk].toLowerCase().includes(fraza);
    const nazwisko = herb.nazwiska.some(n => n.toLowerCase().includes(fraza));
    const opis = herb.opis[aktualnyJezyk].toLowerCase().includes(fraza);
    return nazwaHerbu || nazwisko || opis;
  });
  wyswietlHerby(przefiltrowane);
}

document.getElementById('search').addEventListener('input', (e) => {
  filtruj(e.target.value);
});

window.addEventListener('load', () => {
  zmienJezyk('pl');
  if (window.location.hash) {
    const id = window.location.hash.substring(1);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }
});
