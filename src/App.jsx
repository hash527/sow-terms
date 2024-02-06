import './App.css'
import Header from './components/Header'
import LandingPage from './components/landing-page'

function App() {

  return (
    <main className="wrapper">
      <div className="fixed-bg">
        <Header />
        <LandingPage />
      </div>
    </main>
  )
}

export default App


{/* <>
<main>
  <section>
    <nav
      className="navigation-out"
    >
      <header className="header">
        <section className="nav-items">
          <div className="logoa">
            <a href="/">
              <img
                alt=""
                className="logo"
                height={56}
                width={32}
                src="https://storage.123fakturere.no/public/icons/diamond.png"
              />
            </a>
          </div>
          <div className="open-menu-dds">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="text-white text-4xl cursor-pointer"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
            </svg>
          </div>
          <div className="nav-links">
            <div
              className="menu bg-[#fff] absolute mt-12 shadow-lg"
              style={{ height: 0 }}
            >
              <div
                className="sdasd"
                style={{ position: "relative", zIndex: 30, height: 0 }}
              >
                <a
                  className="text-[15px] linkCollection block md:block lg:inline-block xl:ml-4 xl:hover:text-[#ccc] px-3 m-0"
                  href="https://123fakturere.no/index.html"
                >
                  <span className="collectionSpan">
                    <p>Home</p>
                  </span>
                </a>
                <a
                  className="text-[15px] linkCollection block md:block lg:inline-block xl:ml-4 xl:hover:text-[#ccc] px-3 m-0"
                  href="https://123fakturere.no/bestilloglastned.html"
                >
                  <span className="collectionSpan">
                    <p>Order</p>
                  </span>
                </a>
                <a
                  className="text-[15px] linkCollection block md:block lg:inline-block xl:ml-4 xl:hover:text-[#ccc] px-3 m-0"
                  href="https://123fakturere.no/kunder.html"
                >
                  <span className="collectionSpan">
                    <p>Our Customers</p>
                  </span>
                </a>
                <a
                  className="text-[15px] linkCollection block md:block lg:inline-block xl:ml-4 xl:hover:text-[#ccc] px-3 m-0"
                  href="https://123fakturere.no/omoss.html"
                >
                  <span className="collectionSpan">
                    <p>About us</p>
                  </span>
                </a>
                <a
                  className="text-[15px] linkCollection block md:block lg:inline-block xl:ml-4 xl:hover:text-[#ccc] px-3 m-0"
                  href="https://123fakturere.no/kontaktoss.html"
                >
                  <span className="collectionSpan">
                    <p>Contact Us</p>
                  </span>
                </a>
              </div>
            </div>
            <div className="pc-menu">
              <a
                className="text-[15px] linkCollection block md:block lg:inline-block xl:ml-4 xl:hover:text-[#ccc] px-3 m-0"
                href="https://123fakturere.no/index.html"
              >
                <span className="collectionSpan">
                  <p>Home</p>
                </span>
              </a>
              <a
                className="text-[15px] linkCollection block md:block lg:inline-block xl:ml-4 xl:hover:text-[#ccc] px-3 m-0"
                href="https://123fakturere.no/bestilloglastned.html"
              >
                <span className="collectionSpan">
                  <p>Order</p>
                </span>
              </a>
              <a
                className="text-[15px] linkCollection block md:block lg:inline-block xl:ml-4 xl:hover:text-[#ccc] px-3 m-0"
                href="https://123fakturere.no/kunder.html"
              >
                <span className="collectionSpan">
                  <p>Our Customers</p>
                </span>
              </a>
              <a
                className="text-[15px] linkCollection block md:block lg:inline-block xl:ml-4 xl:hover:text-[#ccc] px-3 m-0"
                href="https://123fakturere.no/omoss.html"
              >
                <span className="collectionSpan">
                  <p>About us</p>
                </span>
              </a>
              <a
                className="text-[15px] linkCollection block md:block lg:inline-block xl:ml-4 xl:hover:text-[#ccc] px-3 m-0"
                href="https://123fakturere.no/kontaktoss.html"
              >
                <span className="collectionSpan">
                  <p>Contact Us</p>
                </span>
              </a>
            </div>
            <div className="md:mt-0 lang-drop ">
              <div style={{ fontWeight: 550, fontSize: 15 }}>
                <div
                  id="dropdownContainer"
                  className="flex justify-between cursor-pointer gap-flag-con gap-4"
                >
                  <p className=" flag-name">English</p>
                  <img
                    src="https://storage.123fakturere.no/public/flags/GB.png"
                    className="h-4 mt-[0.5px] w-[26px] h-[18px] rounded-[4px] icon-flag-nav"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center center"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="md:mt-0 lang-dropk mt-1">
            <div style={{ fontWeight: 550, fontSize: 15 }}>
              <div
                id="dropdownContainer"
                className="flex justify-between cursor-pointer gap-flag-con gap-4"
              >
                <p className=" flag-name">English</p>
                <img
                  src="https://storage.123fakturere.no/public/flags/GB.png"
                  className="h-4 mt-[0.5px] w-[26px] h-[18px] rounded-[4px] icon-flag-nav"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center center"
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </header>
    </nav>
    {/* <div style={{ position: "fixed", height: "100vh" }}>
      <img
        id="background-img"
        src="https://storage.123fakturere.no/public/wallpapers/geiranger.jpg"
        alt="Image"
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          objectFit: "cover",
          objectPosition: "center center"
        }}
      />
    </div> */}
{/* <section style={{ position: "relative" }}>
  <div className="text-center mt-20">
    <h1 className="text-white font-[700] text-2xl">Terms</h1>
    <div className="mt-5">
      <button className="px-10 text-white bg-[#089e1e] py-3 rounded-full text-lg font-[600]">
        Close and Go Back
      </button>
    </div>
  </div>
  <div className="back-terms px-10 py-10 text-center text-[14px] leading-7 font-[300] text-[#282b31]">
    <p>
      <b>VED Å</b> klikke på Fakturere Nå så velger dere å laste ned ifølge
      den informasjon som dere har lagt inn og teksten på last ned siden og
      vilkårene her, og aksepterer samtidig vilkårene her.
    </p>
    <p className="">Dere kan bruke programmet GRATIS i 14 dager.</p>
    <p className="">
      LettFaktura er så lett og selvforklarende at sjansen for at du vil
      komme til å trenge support er minimal, men hvis du skulle trenge
      support, så er vi her for deg, med vårt kontor bemannet større delen
      av døgnet. Etter prøveperioden så fortsetter abonnementet og koster 99
      kroner eks. mva per måned, som faktureres årlig. Hvis du ikke ønsker å
      beholde programmet, så er det bare til å avbryte prøveperioden ved å
      gi beskjed innen 14 dager fra nedlasting.
    </p>
    <p className="mt-6">
      Dere har selvfølgelig rett til å avslutte bruken av programmet uten
      kostnad, ved å gi oss beskjed per email innen 14 dager fra nedlasting,
      om at dere ikke ønsker å fortsette med programmet, og betaler da
      selvfølgelig ikke heller noe.
    </p>
    <p className="mb-6">
      Hvis vi ikke innen 14 dager fra nedlasting mottar slik beskjed fra
      dere, så kan ordren av naturlige grunner ikke endres. Med nedlasting
      menes den dato og klokkeslett når dere har valgt å trykke på knappen
      Fakturere Nå.
    </p>
    <p className="">Fakturering skjer for ett år av gangen.</p>
    <p className="">
      Prisen for LettFaktura (tilbudspris kr 99,- per måned / ord. pris kr
      129,- per måned) er for årsavgift Start for ett års bruk av
      programmet.
    </p>
    <p className="">
      (Ved bruk av tilbudsprisen kr 99,- så regnes ett års perioden fra
      nedlastning.)
    </p>
    <p className="">Alle priser er eks. mva.</p>
    <p className="">
      Timeregistrering. Kalkulering, Medlemsfakturering, Tilbud, Kunde
      Oppfølging, Lager Telling, Lagerstyring og Engelsk fakturatekst er
      tilleggsmoduler som kan bestilles etter installasjon av programmet.
    </p>
    <p className="">
      Årsavgiften er løpende men hvis dere ikke ønsker å fortsette å bruke
      programmet, så er det bare å gi beskjed tretti dager før starten av
      den nestfølgende ett års perioden.
    </p>
    <p className="">
      Introduksjonstilbudet (kr 99,- per måned) er for årsavgift Start for
      det første året. Etter det første året faktureres ord. pris hvilket
      for tiden er, for årsavgift Start, ett hundre og tjueni kroner per
      måned, for årsavgift Fjernstyring, to hundre og sekstifem kroner per
      måned og for årsavgift Pro, tre hundre og trettitre kroner per måned.
      Etter ett år faktureres årsavgift Fjernstyring som standard men dere
      kan velge Start eller Pro ved å gi beskjed når som helst før forfall.
    </p>
    <p className="">
      Hvis dere velger å beholde programmet ved å ikke gi oss beskjed per
      email innen 14 dager fra nedlasting, om at dere ikke ønsker å
      fortsette med programmet, så aksepterer dere at dere kommer å betale
      fakturaen for deres bestilling. Kode til programmet vil sendes
      automatisk etter at fakturaen er betalt. Å ikke betale fakturaen eller
      sen betaling gir ikke rett til å annullere bestillingen. Vi hjelper
      gjerne å fikse logo for dere til selvkostpris.
    </p>
    <p className="">
      Lisens for bruk av LettFaktura selges selvfølgelig i følge gjeldende
      lover.
    </p>
    <p className="">
      For å lettere kunne hjelpe dere og gi dere support samt for å følge
      lovene må vi av naturlige grunner lagre deres informasjon.
    </p>
    <p className="">
      I forbindelse med lagring av informasjon så krever loven at vi gir
      dere følgende informasjon:
    </p>
    <p className="">
      Hvis dere bestiller som privatperson så har dere den angrerett som
      loven tilsier. Deres informasjon lagres slik at vi kan hjelpe dere
      m.m. Vi kommer til å bruke den for å kunne hjelpe dere hvis dere
      trenger hjelp, følge lovene vedr. bokføring m.m. Når det kommer
      oppgraderinger og lignende, kan vi komme til å sende dere tilbud og
      lignende om våre produkter og tjenester per email eller lignende. Dere
      kan komme til å bli kontaktet per email, post og telefon. Hvis dere
      ikke ønsker å bli kontaktet, bare send oss en email vedr. det.
    </p>
    <p className="">
      Dere kan når som helst be om å ikke få tilsendt informasjon om
      oppgraderinger per email, faks, brev eller lignende og vi kommer da
      selvfølgelig ikke å gjøre det. Slik begjæring sender dere til oss per
      email, faks, brev eller lignende.
    </p>
    <p className="">
      Av naturlige grunner må vi lagre, databehandle og flytte deres data.
      Deres informasjon lagres inntil videre. Dere gir oss tillatelse til å
      lagre, databehandle og flytte deres data, samt å sende dere tilbud og
      lignende per email, faks, brev og lignende. Grunnet måten det fungerer
      på med programvare trenger tillatelsen også å gis til andre parter.
      Tillatelsen gis derfor til oss, samt til de bedrifter og/eller
      person/personer som eier programvaren, kildekoden, hjemmesiden og
      lignende. Det gis også til nåværende og fremtidige bedrifter eiet
      og/eller kontrollert av en eller flere av de som i dag eier og/eller
      kontrollerer oss. Det gis også til nåværende og fremtidige bedrifter
      eiet og/eller kontrollert av en eller flere av de som i dag eier
      og/eller kontrollerer de bedrifter, (om noen), som eier eller kommer
      til å eie programvaren, kildekoden, hjemmesiden og lignende. Det gis
      også til nåværende og fremtidige personer (om noen) som eier eller
      kommer til å eie programvaren, kildekoden, hjemmesiden og lignende.
      Dette både for nåværende og fremtidige produkter og tjenester. Det gis
      også til annen bedrift, som vi kan bruke for å sende/selge produkter,
      oppgraderinger og lignende, enten ved underlisensiering eller på annen
      måte.
    </p>
    <p>
      Dere har selvfølgelig rett å begjære å få del av, endre og slette
      informasjonen vi holder om dere. Dere har også rett å begjære
      begrensing av databehandlingen, og å protestere mot databehandlingen
      og retten til dataportabilitet. Dere har rett å klage til
      tilsynsmyndighet. Mer juridisk info om oss finner dere{" "}
      <span className="cursor-pointer main-error" rel="noopener noreferrer">
        <span style={{ color: "rgb(0, 68, 226)" }}>her</span>
      </span>
      . Det er lovene i Irland som er gjeldende lover. Det er selvfølgelig
      helt frivillig å legge ordre. Vi bruker selvsagt ikke noen
      automatisert profileringer eller beslutninger.
    </p>
    <p>
      Hvis dere ønsker å kontakte oss, vennligst bruk da informasjonen på
      denne eller noen av våre andre hjemmesider.
    </p>
    <p>
      Klikk på Fakturere Nå for å laste ned i følge den informasjon som dere
      har lagt inn og vilkårene her. (Dato og tidspunkt for innleggelsen
      legges inn automatisk i våre register.)
    </p>
    <p>
      Vår erfaring er at våre kunder er meget fornøyde med måten vi jobber
      på og håper og tror at det også kommer til å bli deres opplevelse.
    </p>
    <p>Ha en flott dag!</p>
  </div>
  <div className="he-between text-center py-6">
    <button className="px-10 text-white bg-[#089e1e] py-3 rounded-full text-lg font-[600]">
      Close and Go Back
    </button>
  </div>
</section>
  </section >
</main > */}

