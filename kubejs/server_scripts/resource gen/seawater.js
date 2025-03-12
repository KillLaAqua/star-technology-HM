ServerEvents.recipes(event => {

    event.recipes.gtceu.centrifuge('sea_water')
        .inputFluids('exnihilosequentia:sea_water 1250')
        .outputFluids('gtceu:salt_water 1000')
        .itemOutputs('gtceu:crushed_saltpeter_ore', 'gtceu:crushed_rock_salt_ore')
        .duration(50)
        .EUt(GTValues.VHA[GTValues.LV]);

    //large barrel
    event.recipes.gtceu.large_barrel('sea_water')
        .notConsumable('minecraft:sand')
        .inputFluids('minecraft:water 1000')
        .outputFluids('exnihilosequentia:sea_water 1000')
        .duration(80);

    event.recipes.gtceu.centrifuge('brackish_water')
        .inputFluids('minecraft:brackish_water 4000')
        .outputFluids('exnihilosequentia:sea_water 2500')
        .outputFluids('minecraft:water 1500')
        .duration(120)
        .EUt(GTValues.VHA[GTValues.MV]);

});