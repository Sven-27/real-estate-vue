<template>
<div class="flex items-center m-3 md:m-6 dark:text-white justify-center">
  <v-icon 
    :name="icons.information" 
     class="w-10 h-10 mr-2 md:mr-5 md:w-20 md:h-20" 
  />
  <span class="text-xl md:text-4xl font-semibold">Information about project</span>
</div>
<article class="flex flex-col items-center text-center mx-5">
  <header>
    <h1 class="text-4xl font-bold mb-3">Real Estate Vue</h1>
    <p>Hier vind u het&nbsp;<span class="uppercase font-semibold text-[#00AAA2]">read.me</span>&nbsp;bestand voor dit project</p>
    <p>Eindopdracht Front-end frameworks<br><span class="text-[#00AAA2] ">Door Sven Notermans</span></p>
  </header>
  <section>
    <h2 class="text-2xl font-bold mt-5 mb-3">Installatie / Gebruik (Local)</h2>
    <p class="mb-3">Om dit project lokaal te gebruiken moet je eerst de volgende stappen uitvoeren:</p>
    <ol class="w-full list-decimal list-inside text-left mx-auto">
      <li>Clone de repository van 
        <a class="text-[#00AAA2]" href="https://github.com/Sven-27/real-estate-vue">https://github.com/Sven-27/real-estate-vue</a>
      </li>
      <li>Open de folder in je text-editor and installeer de dependencies met <span class="text-[#00AAA2]">&apos;npm install&apos;</span></li>
      <li>Start het project met <span class="text-[#00AAA2]">&apos;npm run serve&apos;</span></li>
    </ol>
    <h2 class="text-2xl font-bold mt-5 mb-3">Live versie:</h2>
    <p class="mb-3">U kunt de live versie vinden via onderstaande link:</p>
    <a class="text-[#00AAA2]" href="https://real-estate-vue.firebaseapp.com/">https://real-estate-vue.firebaseapp.com/</a>
  </section>
  <section>
    <h2 class="text-2xl font-bold mt-5 mb-3">Ontwikkeling van de app</h2>
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
  <section>
    <h2 class="text-2xl font-bold mt-5 mb-3">Inloggen / Authenticatie</h2>
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
  <section>
    <h2 class="text-2xl font-bold mt-5 mb-3">Layout App</h2>
    <p>De layout bestaat uit 3 lagen.
    De eerste laag is de header. Hier vind je de status balk van de telefoon en de header 
    met de logo links en rechs button (logout, darkmode en settings).
    De tweede laag is de main content waar alle pagina's in geladen worden. 
    De derde laag is de footer. Hier zijn buttons om naar activity, search en information te gaan. 
    </p>
  </section>
  <section>
    <h2 class="text-2xl font-bold mt-5 mb-3">De belangrijkste pagina's opgesomt.</h2>
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
    Zoals account verwijderen.</p>
  </section>
  <section>
    <h2 class="text-2xl font-bold mt-5 mb-3">Verantwoording</h2>
    <h3 class="text-xl font-bold mt-5 mb-3">Security</h3>
    <p>Voor de authenticatie heb ik firebase gebruikt. Ik gebruik de validatie die bij firebase authenticatie zit. 
    Dit heb ik niet gecustomized omdat het me anders teveel tijd kost, geldt ook voor de two-factor, dit komt wellicht in een later stadium. 
    Daarnaast heb ik de routes afgeschermd waarvoor je ingelogd moet zijn. Ben je dat niet dan word je automatisch 
    naar de inlog pagina gestuurd.</p>
    <h3 class="text-xl font-bold mt-5 mb-3">Usability</h3>
    <ol class="w-full list-decimal list-inside text-left mx-auto">
      <li>Ervan uitgaand dat het om een Nederlands bedrijf is, is deze app 
      ook in het Nederlands ontwikkeld.</li>
      <li>Complete</li>
      <li>Knowlegde base</li>
      <li>Settings</li>
    </ol>
  </section>
</article>
<BackButton />
</template>
<script>
import icons from '@/data/icons.js'
import BackButton from '@/components/BackButton.vue'

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