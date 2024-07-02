async function Main ()
{
    await diaManager.SetActive(true);
    await diaManager.Type("This is similar to the `On` method.", 1);
    await DialogueLoop.Delay(1);
    await diaManager.SetActive(false);
};

// Once the system disables,
// execute the callback
diaManager.Once(DialogueEvent.Disable, async () => {
    if (!confirm("Except")) return;
    
    // Click "Ok" to run these
    await diaManager.SetActive(true);
    await diaManager.Type("This will only be called once.", 1);
    await DialogueLoop.Delay(2);
    await diaManager.SetActive(false);
});