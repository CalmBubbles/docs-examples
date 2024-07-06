diaManager.config.sprites = new DialogueSpriteArray(
    [
        { name: "null", src: "blank.png" },
        { name: "basil", src: "basil/10.png" },
    ],
    "img/faces"
);

async function Main ()
{
    SetFont(1);
    charName = "BASIL";
    enablePortrait = true;
    await DiaSetActive(true);
    await diaManager.Type("Never gonna give you up...", 1, new DialogueData({
        audio: "default",
        portrait: "basil"
    }));
}