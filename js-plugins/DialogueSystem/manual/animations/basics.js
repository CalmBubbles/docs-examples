// Enable
diaManager.animation.box.onEnable = new DialogueAnimation({
    animation : "fun-box ease-in",
    duration : 0.7
});

// Disable
diaManager.animation.box.onDisable = new DialogueAnimation({
    animation : "reverse box",
    duration : 0.5
});

async function Main ()
{
    await diaManager.SetActive(true);
    await diaManager.Type("Welcome to the basics of dialogue animation!", 1);
    await DialogueLoop.Delay(2);
    await diaManager.ClearText();
    diaManager.style.color = "gold";
    await diaManager.Type("Goodluck!", 1.1);
    diaManager.style.color = "inherit";
    await DialogueLoop.Delay(3);
    await diaManager.SetActive(false);
}