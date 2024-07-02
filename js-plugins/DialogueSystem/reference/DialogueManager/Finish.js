// Long duration box animation
diaManager.animation.box.onEnable = new DialogueAnimation({
    animation : "box",
    duration : 2
});

async function Main ()
{
    await diaManager.SetActive(true);
    
    // Type very long text
    await diaManager.Type("I have no idea what to put here so have some very long text without proper punctuation I hope that this is long enough to fill this box.", 1);
}

// Call the "Finish" method
// on window click
window.addEventListener("click", () => {
    diaManager.Finish();
});