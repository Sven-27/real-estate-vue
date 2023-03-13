<template>
<div class="flex items-center m-3 md:m-6 dark:text-white justify-center">
  <v-icon 
    :name="icons.information" 
     class="w-10 h-10 mr-2 md:mr-5 md:w-20 md:h-20" 
  />
  <span class="text-xl md:text-4xl font-semibold">Information about project</span>
</div>
<article class="flex flex-col md:mx-auto md:w-10/12 xl:w-8/12 items-center text-center mx-5">
  <header class="info-article">
    <h1 class="text-4xl md:text-[4rem] font-bold mb-3 md:mb-9">Real Estate Vue</h1>
    <p>Hier vind u het&nbsp;<span class="uppercase font-semibold text-[#00AAA2]">read.me</span>&nbsp;bestand voor dit project</p>
    <p>Eindopdracht Front-end frameworks<br>Door&nbsp;<span class="text-[#00AAA2] ">Sven Notermans.</span></p>
  </header>
  <section class="info-article">
    <h2>Installatie / Gebruik (Local)</h2>
    <p class="mb-3">Om dit project lokaal te gebruiken moet je eerst de volgende stappen uitvoeren:</p>
    <ol class="w-full list-decimal list-inside text-left mx-auto">
      <li>Clone de repository van 
        <a class="text-[#00AAA2]" href="https://github.com/Sven-27/real-estate-vue">https://github.com/Sven-27/real-estate-vue</a>.
      </li>
      <li>Open de folder in je text-editor and installeer de dependencies met <span class="text-[#00AAA2]">&apos;npm install&apos;</span>.</li>
      <li>Start het project met <span class="text-[#00AAA2]">&apos;npm run serve&apos;</span>.</li>
    </ol>
    <h2>Live versie:</h2>
    <p class="mb-3">U kunt de live versie vinden via onderstaande link:</p>
    <a class="text-[#00AAA2]" href="https://real-estate-vue.firebaseapp.com/">https://real-estate-vue.firebaseapp.com/</a>.
  </section>
  <section class="info-article">
    <h2>Ontwikkeling van de app</h2>
    <p>De app is ontwikkeld met Vue.js en tailwind als user interface laag. Richting het einde van het 
      project ben ik tailwind elements nog tegen gekomen en heb ik deze gebruikt voor de accordion.
      En voor sommige elementen binnen de formulier. Voor authenticatie heb ik firebase gebruikt. 
      De text editor die ik gebruikt heb is Visual Studio Code.</p><br>
    <p>De schaalbaarheid en snelheid is zeer hoog en dat heb ik wel als positief bevonden. 
    De manier van ontwikkelen binnen vue is zeer prettig en ga ik zeker nog eens met vue iets ontwikkelen.
    Dit is mijn eerste project met Vue.js en heb ik hier enorm veel van geleerd. 
    Er zijn wat dingetjes die iets strakker kunnen, maar over het algemeen ben ik zeer tevreden over het eindresultaat van deze app.
    Ik heb er zo goed als ik kon rekening gehouden met de gebruikersvriendelijkheid om het in ieder geval zo makkelijk
    mogelijk te maken voor de werknemers.</p>
  </section>
  <section class="info-article">
    <h2>Inloggen / Authenticatie</h2>
    <p>Voor het inlog / registratie gedeelte heb ik firebase Authentication gebruikt.
    Achter de schermen wordt de validatie afgehandeld door firebase. 
    In eerste instantie kom je op het inlogscherm uit. 
    Heb je nog geen account dan kun je een account aanmaken via de registratie pagina.
    Er is ook de mogelijkeheid om je wachtwoord te wijzigen. Als je je email invult krijg je in je email een reset link. 
    Pas op deze kan in de spam terecht komen, dus wees hier alert op. 
    En zit er in de app een logout button om je uit te loggen. Tevens kun je je account ook helemaal verwijderen via die settings pagina.
    Ik heb de validatie even basic gelaten. Deze is wel aan te passen, echter heb ik dit niet toegevoegt omdat het me teveel tijd ging 
    kosten om het allemaal uit te zoeken. Dit geldt ook voor de two-factor. Misschien dat ik dat nog ga toevoegen als de opleiding is afgerond.
    </p>
  </section>
  <section class="info-article">
    <h2>Layout App</h2>
    <p>De layout bestaat uit 3 lagen.
    De eerste laag is de header. Hier vind je de status balk van de telefoon en de header 
    met de logo links en rechs button (logout, darkmode en settings).
    De tweede laag is de main content waar alle pagina's in geladen worden. 
    De derde laag is de footer. Hier zijn buttons om naar activity, search en information te gaan. 
    </p>
  </section>
  <section class="info-article">
    <h2>De belangrijkste pagina's opgesomt.</h2>
    <h3 class="text-xl font-bold mt-5 mb-3">Dashboard</h3>
    <p>
      De Dashboard is de eerste pagina waar je uitkomt als je ingelogd bent.
      Hier vind je 4 mogelijkheden waar je naar toe kunt gaan. 
      <ol class="w-full list-decimal list-inside text-left mx-auto">
        <li>Scheduled</li>
        <li>Complete</li>
        <li>Knowlegde base</li>
        <li>Settings</li>
      </ol>
    </p>
    <h3 class="text-xl font-bold mt-5 mb-3">Scheduled</h3>
    <p>Hier vind je alle inspecties die gepland zijn. Als je op een inspectie klikt,
    dan heb je de mogelijkheid om naar de checklist te gaan en de inspectie te bewerken op de activity pagina.</p>
    <h3 class="text-xl font-bold mt-5 mb-3">Complete</h3>
    <p>Hier vind je alle inspecties die zijn afgerond. Als je op een inspectie klikt,
    dan zie je alles wat je ingevuld heb en mocht het nodig zijn dan kun je alsnog via de button bewerk de 
    inspectie bewerken op de activity pagina.</p>
    <h3 class="text-xl font-bold mt-5 mb-3">Knowlegde base</h3>
    <p>Hier vind je alle documenten die belangrijk zijn aangaande de inspecties. Zoals procedures, keuringen, Handleidingen, enz.</p>
    <h3 class="text-xl font-bold mt-5 mb-3">Settings</h3>
    <p>Dit is de account pagina van de medewerker. Hier staan alle gegevens en mogelijkheden met betrekking tot instellingen.
    Zoals account verwijderen. De naam en de email zijn dynamisch.</p>
  </section>
  <section class="info-article">
    <h2>Verantwoording</h2>
    <h3 class="text-xl font-bold mt-5 mb-3">Security</h3>
    <p>Voor de authenticatie heb ik firebase gebruikt. Ik gebruik de validatie die bij firebase authenticatie zit. 
    Dit heb ik niet gecustomized omdat het me anders teveel tijd kost, geldt ook voor de two-factor, dit komt wellicht in een later stadium. 
    Daarnaast heb ik de routes afgeschermd waarvoor je ingelogd moet zijn. Ben je dat niet dan word je automatisch 
    naar de inlog pagina gestuurd.</p>
    <h3 class="text-xl font-bold mt-5 mb-3">Usability</h3>
    <ol class="w-full list-decimal list-inside text-left mx-auto">
      <li>Ervan uitgaand dat het om een Nederlands bedrijf is, is deze app 
      ook in het Nederlands ontwikkeld.</li>
      <li>De pagina's zijn zo opgezet dat ze overal dezelfde feeling hebben en daarom ook als een geheel aanvoelen.</li>
      <li>Iedere pagina heeft een back button die weer terug navigeert naar de dashboard.</li>
      <li>Er is een darkmodus functie voor de gebruikers die dat fijn vinden en staat in de header zodat je er altijd bij kan.</li>
      <li>Vanuit de scheduled is het mogelijk om naar de checklist te gaan en je werkorder te bewerken. Ook als de order al in 
      completed staat heb je de mogelijkheid om je order nog te bewerken als dat nodig mocht zijn.</li>
      <li>In de knowledgebase kan de medewerker alle infomatie vinden wat hij nodig heeft. Allemaal op een plek.</li>
      <li>Voor elke order is er een accordion gebruikt die uitgeklapt kan worden zodat het overzicktelijk en compact blijft.</li>
      <li>Er is een search pagina waar de medewerker kan zoeken naar betreffende informatie. Plus buttons om direct naar de andere pagina's te gaan.</li>
      <li>Medewerkers moeten eerst alles naar waarheid in gevuld aanvinken alvorens ze het op completed kunnen zetten.</li>
      <li>Er is gebruikt gemaakt van de localstorage om de gegevens op te slaan en het te saven in scheduled of complete.</li>
      <li>Bepaalde velden zijn required om in te vullen. De submit functie om dat de checken zit er nu nog niet in. Wellicht dat ik dat in 
      een later stadium toevoeg.</li>
      <li>Er zit errorhandling en loading status in.</li>
    </ol>
    <h3 class="text-xl font-bold mt-5 mb-3">Accessibility</h3>
    <p>Om aan de richtlijnen van de WCAG 2.1 te voldoen, heb ik bij de invoervelden een focus geplaatst zodat
    het ook duidelijk is dat die invoerveld actief is. Elk veld heeft een label met wat daar ingevuld dient te worden.
    Op elke pagina staat de naam van de pagina en een korte omschrijving van de medewerker daar kan doen.
    Afbeeldingen zijn decoratief.</p>
    <h3 class="text-xl font-bold mt-5 mb-3">Style Guides</h3>
    <p>Ik heb zoveel mogelijk de guidelines aangehouden met betrekking tot het werken met Vue.js.
    Zoals de multi-word components. Ook in hoe de v-for en de v-if te gebruiken. Zoals dat die 2 nooit samen in een elementen
    kunnen staan. Ook met het gebruik van lifecyclehooks en composition api.</p>
  </section>
  <footer class="info-article">
    <h3 class="text-xl font-bold mt-5 mb-3">Afsluiting</h3>
    <p>Tijdens deze eindopracht heb ik mogen werken met een framework die voor mij nog totaal nieuw was en 
    moet ik zeggen dat ik vue wel een mooi framework vind om mee te werken en zal ik zeker nog projecten hiermee
    gaan maken.</p><br>
    <p>Bij deze wil ik jullie bedanken voor de begeleiding tijdens deze module en wens ik jullie veel plezier tijdens het beoordelen 
    van deze eindopdracht.</p><br>
    <p>Met vriendelijke groet,</p><br>
    <p>Sven Notermans</p>
  </footer>
</article>
<BackButton />
</template>
<script>
import icons from '@/data/icons.js'
import BackButton from '@/components/buttons/BackButton.vue'

export default {
  name: 'ProjectInformation',
  data() {
    return {
      icons,
    }
  },
  components: {
    BackButton
  },
}
</script>