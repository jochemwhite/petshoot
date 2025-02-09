// pages/algemene-voorwaarden.js
import React from 'react';

const AlgemeneVoorwaarden = () => {
    const fotograafNaam = "PetShoot Fotografie";
    const fotograafAdres = "Goudhaver 75, 3892BJ Zeewolde";
    const valuta = "Euro";
    const betalingsvoorwaarden = "Een aanbetaling van 50% is vereist bij boeking. Het resterende bedrag is verschuldigd na de fotoshoot en levering van de foto's. Betaling kan worden gedaan via [betaalmethoden, bijv. iDeal, bankoverschrijving]. Bij niet-tijdige betaling worden herinneringskosten in rekening gebracht.";
    const annuleringsvoorwaarden = "Annuleringen door de Klant tot 48 uur voor de fotoshoot worden kosteloos geannuleerd. Bij latere annulering wordt de aanbetaling ingehouden. Annuleringen door de Fotograaf wegens overmacht (bijv. ziekte, slecht weer) zullen leiden tot een kosteloze verplaatsing van de fotoshoot.";
    const fotoshootProcedure = "De fotoshoot vindt plaats op de afgesproken locatie en tijd. De Klant is verantwoordelijk voor het aanwezig zijn van het huisdier en eventuele begeleiders. De Fotograaf zorgt voor de professionele uitvoering van de fotoshoot, waarbij het welzijn van het dier voorop staat.";
    const gebruiksrechtOmschrijving = "Niet-exclusief, persoonlijk en niet-commercieel. De Klant mag de Foto's gebruiken voor privédoeleinden, zoals het delen op sociale media (mits de naam van de Fotograaf wordt vermeld) en het afdrukken voor eigen gebruik. De Klant is *niet* bevoegd de Foto's te verkopen, te bewerken (anders dan bijsnijden of kleurcorrectie), commercieel te gebruiken of aan derden te verstrekken zonder schriftelijke toestemming van de Fotograaf.";
    const opslagFotoDuur = "De Fotograaf bewaart de Foto's gedurende [bijvoorbeeld: 1 jaar] na de fotoshoot. Na deze periode kunnen de Foto's worden verwijderd, tenzij anders schriftelijk overeengekomen.";
    const klachtTermijn = "14";
    const datum = new Date().toLocaleDateString('nl-NL');

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-6 md:px-12 lg:px-24">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
                <h1 className="text-3xl font-bold mb-4">Algemene Voorwaarden</h1>
                <p className="text-gray-600 mb-6">Laatst bijgewerkt: {datum}</p>

                <section className="mt-6">
                    <h2 className="text-2xl font-semibold">1. Definities</h2>
                    <p>In deze Algemene Voorwaarden wordt verstaan onder:</p>
                    <ul className="list-disc list-inside">
                        <li><strong>Fotograaf:</strong> {fotograafNaam}, gevestigd te {fotograafAdres}.</li>
                        <li><strong>Klant:</strong> De natuurlijke of rechtspersoon die een overeenkomst sluit met de Fotograaf.</li>
                        <li><strong>Overeenkomst:</strong> De overeenkomst tussen de Fotograaf en de Klant met betrekking tot de fotoshoot.</li>
                        <li><strong>Foto's:</strong> De door de Fotograaf gemaakte foto's.</li>
                    </ul>
                </section>

                <section className="mt-6">
                    <h2 className="text-2xl font-semibold">2. Toepasselijkheid</h2>
                    <p>Deze Algemene Voorwaarden zijn van toepassing op alle offertes, overeenkomsten en leveringen van de Fotograaf. Afwijkingen van deze voorwaarden zijn slechts geldig indien zij schriftelijk zijn overeengekomen.</p>
                </section>

                <section className="mt-6">
                    <h2 className="text-2xl font-semibold">3. Offertes en Overeenkomsten</h2>
                    <p>Alle offertes van de Fotograaf zijn vrijblijvend, tenzij anders schriftelijk is overeengekomen. Een overeenkomst komt tot stand door schriftelijke aanvaarding van de offerte door de Klant, of door uitvoering van de fotoshoot door de Fotograaf.</p>
                </section>

                <section className="mt-6">
                    <h2 className="text-2xl font-semibold">4. Prijzen</h2>
                    <p>Alle prijzen zijn vermeld in {valuta} en zijn exclusief BTW, tenzij anders vermeld. De Fotograaf behoudt zich het recht voor om de prijzen te wijzigen.</p>
                </section>

                <section className="mt-6">
                    <h2 className="text-2xl font-semibold">5. Betaling</h2>
                    <p>{betalingsvoorwaarden}</p>
                </section>

                <section className="mt-6">
                    <h2 className="text-2xl font-semibold">6. Annulering</h2>
                    <p>{annuleringsvoorwaarden}</p>
                </section>

                <section className="mt-6">
                    <h2 className="text-2xl font-semibold">7. Fotoshoot</h2>
                    <p>{fotoshootProcedure}</p>
                </section>

                <section className="mt-6">
                    <h2 className="text-2xl font-semibold">8. Auteursrecht en Gebruiksrecht</h2>
                    <p>Het auteursrecht op de Foto's berust bij de Fotograaf, {fotograafNaam}. De Klant verkrijgt een {gebruiksrechtOmschrijving}.</p>
                </section>

                <section className="mt-6">
                    <h2 className="text-2xl font-semibold">9. Portretrecht (Indien van toepassing)</h2>
                    <p>Indien er personen herkenbaar op de foto's staan, is een schriftelijke toestemming (model release) vereist van de betreffende personen voor het gebruik van de foto's. Deze toestemming dient voorafgaand aan de fotoshoot te worden verleend.</p>
                </section>

                <section className="mt-6">
                    <h2 className="text-2xl font-semibold">10. Aansprakelijkheid</h2>
                    <p>De Fotograaf is niet aansprakelijk voor schade, tenzij er sprake is van opzet of grove schuld. De aansprakelijkheid van de Fotograaf is beperkt tot het bedrag van de overeenkomst. [Beperk je aansprakelijkheid waar mogelijk, binnen de grenzen van de wet.]</p>
                </section>

                <section className="mt-6">
                    <h2 className="text-2xl font-semibold">11. Opslag van Foto's</h2>
                    <p>{opslagFotoDuur}</p>
                </section>

                <section className="mt-6">
                    <h2 className="text-2xl font-semibold">12. Klachten</h2>
                    <p>Klachten over de geleverde diensten dienen binnen {klachtTermijn} dagen na ontvangst van de Foto's schriftelijk te worden ingediend.</p>
                </section>

                <section className="mt-6">
                    <h2 className="text-2xl font-semibold">13. Toepasselijk Recht</h2>
                    <p>Op deze Algemene Voorwaarden is Nederlands recht van toepassing.</p>
                </section>

                <section className="mt-6">
                    <h2 className="text-2xl font-semibold">14. Wijzigingen</h2>
                    <p>De Fotograaf behoudt zich het recht voor om deze Algemene Voorwaarden te wijzigen. De meest actuele versie is te vinden op de website van de Fotograaf.</p>
                </section>

                <p className="mt-8 text-sm text-gray-500">Deze Algemene Voorwaarden zijn voor het laatst bijgewerkt op {datum}. Raadpleeg deze pagina regelmatig voor eventuele wijzigingen.</p>
            </div>
        </div>
    );
};

export default AlgemeneVoorwaarden;