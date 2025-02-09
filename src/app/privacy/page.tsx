// pages/privacy-policy.js
import React from "react";

const PrivacyPolicy = () => {
  const bedrijfNaam = "PetShoot Fotografie"; // VUL IN
  const adres = "Goudhaver 75, 3892BJ Zeewolde"; // VUL IN
  const email = "info@petshoot.nl"; // VUL IN
  const datum = new Date().toLocaleDateString("nl-NL"); // Dynamically gets the current date

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-4">Privacybeleid</h1>
        <p className="text-gray-600 mb-6">Laatst bijgewerkt: {datum}</p>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold">1. Introductie</h2>
          <p>Welkom bij {bedrijfNaam}! We nemen uw privacy serieus en zijn toegewijd aan de bescherming van uw persoonlijke gegevens.</p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold">2. Wie We Zijn</h2>
          <p>
            <strong>Bedrijfsnaam:</strong> {bedrijfNaam}
          </p>
          <p>
            <strong>Adres:</strong> {adres}
          </p>
          <p>
            <strong>E-mail:</strong> {email}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold">3. Welke Gegevens We Verzamelen</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Persoonlijke Informatie:</strong> Naam, e-mailadres, telefoonnummer (indien verstrekt).
            </li>
            <li>
              <strong>Gebruiksgegevens:</strong> Informatie over hoe u onze website gebruikt, verzameld via PostHog-analytics. Dit kan omvatten:
              bezochte pagina's, kliks, scrollgedrag en zoekopdrachten.
            </li>
            <li>
              <strong>Technische Gegevens:</strong> IP-adres, browsertype, apparaatinformatie (besturingssysteem, schermresolutie), en verwijzende
              website.
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold">4. Hoe We Uw Gegevens Gebruiken</h2>
          <p>We gebruiken uw gegevens voor de volgende doeleinden:</p>
          <ul className="list-disc list-inside">
            <li>
              Om onze diensten te leveren en te verbeteren, bijvoorbeeld door het personaliseren van de website-ervaring en het oplossen van
              technische problemen.
            </li>
            <li>
              Om de websiteprestaties te analyseren met behulp van PostHog, zodat we inzicht krijgen in hoe de website wordt gebruikt en waar
              verbeteringen mogelijk zijn.
            </li>
            <li>Om met u te communiceren, bijvoorbeeld via e-mail als u contact met ons opneemt.</li>
            <li>Om te voldoen aan wettelijke verplichtingen, zoals het bewaren van gegevens voor fiscale doeleinden.</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold">5. Rechtsgrondslag voor Verwerking</h2>
          <p>We verwerken persoonsgegevens op basis van:</p>
          <ul className="list-disc list-inside">
            <li>
              <strong>Toestemming:</strong> Wanneer u actief toestemming geeft voor het verwerken van bepaalde gegevens, bijvoorbeeld voor het
              ontvangen van een nieuwsbrief. U heeft het recht om uw toestemming te allen tijde in te trekken.
            </li>
            <li>
              <strong>Gerechtvaardigd Belang:</strong> Om onze website en diensten te verbeteren, mits uw privacybelangen hierbij niet worden
              geschaad. Denk hierbij aan het analyseren van websitegebruik om de gebruikerservaring te optimaliseren.
            </li>
            <li>
              <strong>Wettelijke Verplichting:</strong> Wanneer dit wettelijk verplicht is, bijvoorbeeld in het kader van belastingwetgeving.
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold">6. Tracking & Analytics</h2>
          <p>
            We gebruiken PostHog voor analyses. PostHog respecteert de privacy van bezoekers en gebruikt technieken die privacyvriendelijk zijn. PostHog verzamelt geanonimiseerde gegevens over websitebezoek. We
            gebruiken deze gegevens om inzicht te krijgen in het gebruik van onze website en deze te verbeteren. We hebben een verwerkersovereenkomst
            met PostHog afgesloten waarin afspraken zijn gemaakt over de bescherming van uw gegevens.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold">7. Hoe We Uw Gegevens Delen</h2>
          <p>We verkopen uw gegevens niet aan derden. We kunnen gegevens delen met:</p>
          <ul className="list-disc list-inside">
            <li>
              <strong>Dienstverleners:</strong> Zoals PostHog voor analyses. Met deze partijen hebben wij contractuele afspraken gemaakt over de
              bescherming van uw gegevens.
            </li>
            <li>
              <strong>Wettelijke autoriteiten:</strong> Indien wettelijk vereist, bijvoorbeeld in het kader van een gerechtelijke procedure.
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold">8. Opslag & Beveiliging van Gegevens</h2>
          <p>
            We slaan gegevens veilig op binnen de EU en passen passende technische en organisatorische beveiligingsmaatregelen toe om uw gegevens te
            beschermen tegen verlies, misbruik en ongeautoriseerde toegang. Denk hierbij aan encryptie van data, beveiligde verbindingen (SSL) en
            toegangscontroles.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold">9. Uw Rechten</h2>
          <p>Onder de AVG heeft u de volgende rechten met betrekking tot uw persoonsgegevens:</p>
          <ul className="list-disc list-inside">
            <li>
              <strong>Recht op inzage:</strong> U heeft het recht om inzage te vragen in de persoonsgegevens die wij van u verwerken.
            </li>
            <li>
              <strong>Recht op rectificatie:</strong> U heeft het recht om onjuiste persoonsgegevens te laten corrigeren of aan te vullen.
            </li>
            <li>
              <strong>Recht op verwijdering ("recht op vergetelheid"):</strong> In bepaalde gevallen heeft u het recht om uw persoonsgegevens te laten
              verwijderen.
            </li>
            <li>
              <strong>Recht op beperking van de verwerking:</strong> U heeft het recht om de verwerking van uw persoonsgegevens te laten beperken.
            </li>
            <li>
              <strong>Recht op bezwaar:</strong> U heeft het recht om bezwaar te maken tegen de verwerking van uw persoonsgegevens.
            </li>
            <li>
              <strong>Recht op overdraagbaarheid van gegevens:</strong> U heeft het recht om uw persoonsgegevens in een gestructureerde, gangbare en
              machineleesbare vorm te ontvangen en aan een andere partij over te dragen.
            </li>
            <li>
              <strong>Recht om een klacht in te dienen:</strong> U heeft het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens over
              de verwerking van uw persoonsgegevens.
            </li>
          </ul>
          <p>Voor het uitoefenen van deze rechten kunt u contact met ons opnemen via de contactgegevens onderaan dit beleid.</p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold">10. Contacteer Ons</h2>
          <p>Als u vragen of opmerkingen heeft over dit privacybeleid, neem dan contact met ons op via:</p>
          <p>
            <strong>E-mail:</strong> {email}
          </p>
          <p>
            <strong>Adres:</strong> {adres}
          </p>
        </section>

        <p className="mt-6 text-sm text-gray-500">Dit beleid kan periodiek worden bijgewerkt. Bekijk het regelmatig op wijzigingen.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
