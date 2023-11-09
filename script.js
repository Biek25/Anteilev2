// script.js

function calculateShares() {
    // Eingabefelder abrufen
    let Menge = document.getElementById('inputMenge').value;
    let Preis = document.getElementById('inputPreis').value;
    let AnzahlPersonen = document.getElementById('inputAnzahl').value;

    // Ausgaben auf der Seite aktualisieren
    document.getElementById('outputMenge').innerText = `Menge: ${Menge}`;
    document.getElementById('outputPreis').innerText = `Preis: ${Preis}`;
    document.getElementById('outputAnzahl').innerText = `Anzahl Personen: ${AnzahlPersonen}`;

    // Berechnungen
    let PreisProEinheit = Preis / Menge;

    // Arrays für Personen
    let Personen = [];
    let PreisProPerson = [];

    // Schleife für Benutzereingaben zu Personen und Preisen
    for (let i = 0; i < AnzahlPersonen; i++) {
        let name = prompt("Geben Sie den Namen ein: ");
        Personen.push(name);

        let preis = parseInt(prompt(`Geben Sie den Preis für ${name} ein: `));
        PreisProPerson.push(preis);
    }

    // Ergebnisse ausgeben
    document.getElementById('outputErgebnis').innerHTML = `<br><strong>Ergebnis:</strong><br>Insgesamte Menge: ${Menge} Einheiten<br>`;

    for (let i = 0; i < AnzahlPersonen; i++) {
        document.getElementById('outputErgebnis').innerHTML += `<br>${Personen[i]} zahlt ${PreisProPerson[i]} Euro.<br>`;
        document.getElementById('outputErgebnis').innerHTML += `${Personen[i]} bekommt ${Math.round(PreisProPerson[i] / PreisProEinheit, 3)} Einheiten.<br>`;
        document.getElementById('outputErgebnis').innerHTML += `${Personen[i]} bekommt ${Math.round((PreisProPerson[i] / Preis) * 100, 3)}%.<br>`;
    }
}
