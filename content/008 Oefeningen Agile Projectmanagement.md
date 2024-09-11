---
share: true
title: 008 Oefeningen Agile Projectmanagement
category: content
order: 8
---
> [!INFO] Projectmanagement © Hogeschool PXL  
>   
> **OLOD:** 42TIN1250 Projectmanagement  
> **Opleiding:** Professionele bachelor in de Toegepaste informatica  
> **Departement:** [PXL-Digital](https://www.pxl.be/digital)   
> **Lectoren:** [Lowie Vangaal](https://www.linkedin.com/in/lowievangaal/), [Jan Castermans](https://www.linkedin.com/in/jancastermans/)  
  
![](https://i.imgur.com/j1ZCLjO.png)  
  
<div style="page-break-after: always;"></div>  
  
# Oefening 1: User Stories schrijven als een pro  
  
![](https://i.imgur.com/WAhe8WH.png)  
  
## Context  
Op https://10000stappen.gezondleven.be/ vind je een website van het Vlaams Instituut Gezond Leven.  
  
Het idee achter het project '10.000 stappen' is eenvoudig: volwassenen voor wie de drempel naar sport te groot is, kunnen toch een actieve levensstijl opbouwen en gezondheidsvoordelen bekomen door dagelijks 10.000 stappen te zetten of 8000 stappen voor ouderen (>65 jaar).  
  
## User Stories  
Om met deze oefening te starten dien je het begrip *"User Stories"* goed te begrijpen. Bij twijfel lees je best nog eens de paragraaf over [[./007 Agile Projectmanagement#User Stories (en Epics)|User Stories]] uit de cursus.  
  
## Praktisch  
  
Ga naar de website van 10.000 stappen en schrijf een 20-tal User Stories die je denkt dat men gebruikte om de website te ontwerpen.  
  
Als voorbeeld:  
![](https://i.imgur.com/OLqIj8C.png)  
  
  
"**als** gebruiker **wil ik** me aanmelden via Facebook **zodat ik** op mijn persoonlijke pagina van 10.000 stappen terecht kom"  
  
Zoek nu op de hele website mogelijke stories (niet enkel op de "Aanmelden"-pagina).  
  
# Oefening 2: PlanITPoker voor storypunt inschattingen  
![](https://i.imgur.com/RVkHLuf.png)  
  
## Context  
  
PlanITPoker is een gratis online tool om storypunten in te schatten en die een koppeling met Jira-boards heeft.   
  
## Storypoints  
  
Om met deze oefening te starten dien je het begrip *"Storypunten"* goed te begrijpen. Bij twijfel lees je best nog eens de paragraaf over [[./007 Agile Projectmanagement#Storypunten|storypunten]] uit de cursus.  
## Praktisch  
  
Maak een gratis account aan op https://www.planitpoker.com/  
  
### Start een Room   
  
Start voor je project een "Room" waarin je als team stories inschat.  
  
![](https://i.imgur.com/Q1juuEr.png)  
  
Geef je "Room" een unieke naam en klik op `Create`  
  
![](https://i.imgur.com/4ngh3F1.png)  
  
### Maak een lijst van Stories   
  
Je krijgt nu een pop-up te zien waarin je handmatig alle in te schatten User Stories kan invoeren.  
  
![](https://i.imgur.com/F5aDhyH.png)  
  
Je kan een lijst van stories ingeven met op elke lijn een nieuwe story.  
  
Als je lijst volledig is, kan je op `Save & Close` klikken.  
  
Nu zie je de stories in de `Active Stories`-lijst staan en kan je mensen in je "Room" uitnodigen om Stories in te schatten.  
  
Nodig **alle** teamleden van je Scrum Team uit om mee te stemmen via de link die je kan terugvinden op je scherm.  
  
![](https://i.imgur.com/suz6eMj.png)  
  
Iedereen dient via deze link in te loggen (eerst een account maken) om de pokerplanning te starten.  
  
Als alle teamleden in de "Room" zitten kan het inschatten beginnen.  
  
### Storypoints inschatten  
  
Kies voor elke story je persoonlijke storypunt-waarde. Nadat alle inschattingen gebeurden komt er een overzicht van alle waarden.  
  
#### Voorbeeld 1:  
  
**1 - 3 - 3 - 5 - 8 - 3**  
  
De Scrum Master vraagt de persoon die **"1"** inschatte te verklaren waarom die deze waarde koos.   
De Scrum Master vraagt de persoon die **"8"** inschatte te verklaren waarom die deze waarde koos.   
  
De Scrum Master vraagt het team of men dient te herschatten of dat men tot een compromiswaarde kan komen.  
  
In beide gevallen dient het team een waarde te kiezen. **Merk op dat deze waarde telkens een waarde van een van de kaarten moet zijn, dus geen gemiddelde!**  
  
#### Voorbeeld 2  
  
**3 - 3 - 5 - 3 - 3 - 5**   
  
Indien de waardes voldoende dicht bij elkaar liggen kan het team beslissen dat het een procedure volgt.  
  
Opties:  
  
1. Het team beslist in dit geval de meest voorkomende waarde te kiezen: **"3"**  
2. Het team beslist de hoogste waarde te kiezen: **"5"**  
3. …   
  
#### Voorbeeld 3  
  
**20 - 40 -13 - 20 - 40 -100**  
  
Het team heeft opvallend hoge waardes ingeschat. Dit is een signaal!  
  
Dit geeft een indicatie dat er een of meer van volgende situaties zich voordoet:  
  
1. De story is nog niet duidelijk begrepen door 1 of meerdere teamleden  
2. De story is te groot om aan te pakken en moet in meerdere, kleinere stories opgesplitst worden.  
3. De persoon die een **"13"** inschatte moet de rest overtuigen waarom die inschatting juist is  
  
In alle gevallen wordt er actie ondernomen en kan dit leiden tot het overslaan van de inschatting van de betreffende story.  
  
### Einde inschatting  
  
Indien een story ingeschat is, noteer je de waarde van de storypunt inschatting bij de story en is deze "Ingeschat" en klaar om bij een Sprint Planning in de Sprint Backlog op te nemen.  
  
Herhaling: **Merk op dat deze waarde telkens een waarde van een van de kaarten moet zijn, dus geen gemiddelde!**  
  
  
## Koppelen van Jira met PlanITPoker  
  
Wanneer je Jira gebruikt, is er de `Upload` functionaliteit om stories in te voeren.  
  
### Export stories uit Jira  
Open je Jira board en klik op `Issues` en vervolgens op `View all Issues and Filters`  
  
![](https://i.imgur.com/Igi94UB.png)  
  
Maak een filter die alle `Stories` die nog status `Open` of `Todo` hebben en nog geen StoryPoints hebben toont.   
  
![](https://i.imgur.com/vPYwB6k.png)  
  
Merk op dat je hiervoor naar de Advance modus moet switchen om de `"Story Points" is empty` voorwaarde toe te voegen.  
  
Ja mag deze filter bewaren, die blijft nuttig voor later.  
  
Als alles goed is, heb je nu een lijst van alle openstaande, on-ingeschatte stories en kan je deze als XML exporteren.  
  
![](https://i.imgur.com/uyywolu.png)  
  
Klik hiervoor rechtsboven op `Export` en klik met je rechtermuis op `XML` en kies `Link opslaan als ...`  
  
Geef deze XLM een naam, en sla die op.  
  
### Upload stories naar PlanITPoker  
  
Klik op `upload` en vervolgens `Upload Jira XML` en kies het bestand dat je zonet bewaarde.  
  
![](https://i.imgur.com/urDyVAL.png)  
  
Na upload zie je de stories in de `Active Stories`-lijst staan en kan je mensen in je "Room" uitnodigen om stories in te schatten.  
  
![](https://i.imgur.com/LV5gJKy.png)  
  
# Oefening 3: Sprint Retrospective - Kijk als team terug naar jullie Permanente Evaluaties  
  
## De Zeester  
  
![](https://i.imgur.com/POA49An.png)  
  
Aan het begin van de Sprint Retrospective tekent de Scrum Master op een bord of flipover een ‘zeester’.  
  
De Scrum teamleden noteren op post-its een antwoord op elk van de vragen:  
  
1. Welke zaken moeten we blijven doen?  
2. Welke zaken moeten we meer van doen?  
3. Welke zaken moeten we minder van doen?  
4. Waarmee moeten we beginnen?  
5. Waarmee moeten we stoppen?  
  
Vervolgens plakken zij allemaal de post-it bij de betreffende arm van de zeester.  
Door deze methode worden de antwoorden van elk lid transparant en kan de discussie starten.  
  
Doe een Sprint Retrospective, waar je terugkijkt hoe jullie als team de opdrachten van Permanente Evaluaties hebben aangepakt.  
  
