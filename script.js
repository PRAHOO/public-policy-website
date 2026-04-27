let currentQuestion = 0;

const dilemmas = [
    {
        question: "Save two strangers or one stranger?",
        context: "",
        optionA: "👥👥 Save two strangers",
        optionB: "👤 Save one stranger",
        feedbackA: "A utilitarian would likely choose this because it saves the greater number of people.",
        feedbackB: "This choice saves fewer people, which is usually not the utilitarian answer."
    },
    {
        question: "The drowning child",
        context: "You pass a small child drowning in a shallow pool. You can save him, but it will ruin your suit. Do you save him?",
        optionA: "🧒 Save the child",
        optionB: "👔 Protect the suit",
        feedbackA: "Peter Singer would argue that saving the child is clearly required because the cost to you is small compared to a human life.",
        feedbackB: "Singer would likely criticize this choice because protecting clothing is far less important than saving a life."
    },
    {
        question: "The trolley problem",
        context: "A train is heading toward five people. You can pull a lever to divert the train, but doing so will kill one person instead. What do you do?",
        optionA: "🚂 Pull the lever",
        optionB: "✋ Do nothing",
        feedbackA: "Utilitarianism usually supports pulling the lever because it reduces the total number of deaths.",
        feedbackB: "Doing nothing may feel easier, but it allows more people to die."
    },
    {
        question: "Strangers or your mother?",
        context: "You can save either five strangers or your mother. You only have time to save one option.",
        optionA: "👥 Save five strangers",
        optionB: "❤️ Save your mother",
        feedbackA: "A strict utilitarian would likely choose the five strangers because more lives are saved.",
        feedbackB: "This choice shows how personal relationships can conflict with utilitarian reasoning."
    },
    {
        question: "The bridge problem",
        context: "A train is heading toward five people. You can stop it only by pushing one person off a bridge onto the tracks. That person will die, but the five others will live.",
        optionA: "🌉 Push the person",
        optionB: "🚫 Do not push",
        feedbackA: "A strict utilitarian might support this because five lives are saved, but many people find this deeply morally uncomfortable.",
        feedbackB: "This shows a major challenge for utilitarianism: sometimes maximizing outcomes feels wrong."
    },
    {
        question: "The miners",
        context: "There are miners trapped underground. One group has five miners, and another group has three miners. You have an 80% chance to save the group of five, or a 100% chance to save the group of three. You can only choose one group.",
        optionA: "⛏️ Try to save five",
        optionB: "⛏️ Save three for sure",
        feedbackA: "This choice uses expected value reasoning: an 80% chance of saving five equals four expected lives.",
        feedbackB: "This choice guarantees three lives, but may save fewer people on average."
    },
    {
        question: "Risk or certainty?",
        context: "You can save one person guaranteed, or take a risk that has a 20% chance of saving ten people.",
        optionA: "🎲 Risk saving ten",
        optionB: "✔️ Save one guaranteed",
        feedbackA: "The utilitarian expected value is higher here: 20% of ten lives equals two expected lives.",
        feedbackB: "This feels safer, but utilitarian reasoning may prefer the risk because it has a higher expected benefit."
    },
    {
        question: "Luxury or charity?",
        context: "You can spend $1000 on yourself, such as on brand new shoes or a bag, or use that money to save two lives through charity.",
        optionA: "💰 Save two lives",
        optionB: "🛍️ Spend it on yourself",
        feedbackA: "Singer argues that we should give up luxuries when doing so can prevent serious suffering or death.",
        feedbackB: "This choice reflects normal consumer behavior, but Singer challenges whether that behavior is morally defensible."
    },
    {
        question: "The healthy patient",
        context: "You are a surgeon with six patients. One patient is expected to make a full recovery, while the other five will die without different organ donations. You could kill the healthy patient and use his organs to save the other five.",
        optionA: "🏥 Sacrifice one to save five",
        optionB: "❌ Do not sacrifice him",
        feedbackA: "A very strict utilitarian calculation may support this, but it raises serious concerns about rights, trust, and treating people as tools.",
        feedbackB: "Most people reject killing an innocent patient, even if it would save more lives."
    },
    {
        question: "The brain-dead patient",
        context: "You are a surgeon with six patients. One patient is completely brain-dead, but his organs still function normally. The other five patients will die without different organ donations. You can use the brain-dead patient’s organs to save them.",
        optionA: "🧠 Use the organs",
        optionB: "❌ Do nothing",
        feedbackA: "This is easier for utilitarianism to support because it saves five lives without killing a conscious person.",
        feedbackB: "Refusing may allow preventable deaths, which utilitarianism would likely criticize."
    },
    {
        question: "Eating meat",
        context: "If you stop eating meat, you can prevent the slaughter of about 9,000 animals throughout your lifetime. You can still meet your nutrient goals, but with some minor inconvenience.",
        optionA: "🥦 Go vegetarian",
        optionB: "🍔 Keep eating meat",
        feedbackA: "Singer argues that animal suffering matters and should be included in our moral calculations.",
        feedbackB: "This choice shows how convenience and habit can conflict with reducing suffering."
    },
    {
        question: "Dream house or housing others?",
        context: "You can live in your dream house, or live in a perfectly comfortable but more modest home and use the rest of the money to pay rent for 100 unhoused people for 50 years.",
        optionA: "🏠 House 100 people",
        optionB: "🏡 Choose the dream house",
        feedbackA: "This reflects Singer’s demanding view that we should use excess resources to greatly improve others’ lives.",
        feedbackB: "This choice is understandable personally, but it shows how difficult utilitarian ethics can be in practice."
    }
];

function chooseOption(choice) {
    const dilemma = dilemmas[currentQuestion];
    const feedback = document.getElementById("feedback");
    const nextButton = document.getElementById("next-button");

    if (choice === "A") {
        feedback.innerText = dilemma.feedbackA;
    } else {
        feedback.innerText = dilemma.feedbackB;
    }

    nextButton.style.display = "inline-block";
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion >= dilemmas.length) {
        showArticles();
        return;
    }

    const dilemma = dilemmas[currentQuestion];

    document.getElementById("dilemma-number").innerText =
        `Dilemma ${currentQuestion + 1} of 12`;

    document.getElementById("question").innerText = dilemma.question;
    document.getElementById("context").innerText = dilemma.context;

    document.getElementById("option-a").innerText = dilemma.optionA;
    document.getElementById("option-b").innerText = dilemma.optionB;

    document.getElementById("feedback").innerText = "";
    document.getElementById("next-button").style.display = "none";
}

function showArticles() {
    window.location.href = "/info";
}

document.getElementById("context").innerText = dilemmas[0].context;