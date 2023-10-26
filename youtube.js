const facts = [
    "Kapibary są bardzo towarzyskie i często żyją w grupach, które mogą liczyć nawet 100 osobników.",
    "Kapibary są znane z tego, że są bardzo przyjazne wobec innych zwierząt, włącznie z ptakami, żółwiami i kaczorami.",
    "Kapibary potrafią nurkować i utrzymywać oddech pod wodą przez kilka minut.",
    "Kapibary żywią się głównie roślinami, takimi jak trawa i liście, ale czasem jedzą także owoce i kora drzew.",
    "Kapibary nie mają nic przeciwko temu, by być same, ale żyją też w grupach do 40 osobników.",
    "Mogą żyć 8-10 lat na wolności, a około 12 lat w niewoli.",
    "Jest mniej więcej takiej wielkości jak Labrador Retriever.",
    "Kapibary można znaleźć w pobliżu zbiorników wodnych ze względu na ich półwodny styl życia. Życie nad wodą jest nadal idealnym miejscem na założenie gniazda – co pozwala im szybko się wycofać i uciec od drapieżników takich jak anakondy, dzikie koty, a nawet orły.",
];

const factText = document.getElementById("fact-text");
const newFactButton = document.getElementById("new-fact-button");

newFactButton.addEventListener("click", function () {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    factText.textContent = randomFact;
});