diaManager.config.sprites.items.push(new DialogueSprite("sus", "img/amogus.png"));

async function Main ()
{
    await diaManager.SetActive(true);
    await diaManager.Type("When the impostor is sus.", 1);
    await DialogueLoop.Delay(1);
    await diaManager.SetActive(false);
}

// Everytime the system disables,
// execute the callback
diaManager.On(DialogueEvent.Disable, async () => {
    if (!confirm("ඞ")) return;
    
    // Click "Ok" to run these
    // Click "Cancel" to exit loop
    await diaManager.SetActive(true);
    await diaManager.Type("AMOGUS", 1, new DialogueData({ portrait : "sus" }));
    await DialogueLoop.Delay(1);
    await diaManager.SetActive(false);
});